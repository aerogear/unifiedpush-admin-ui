import React, { Component } from 'react';

import {
  TextInput,
  Modal,
  Form,
  FormGroup,
  Radio,
  List,
  ListItem,
  Button,
  Dropdown,
} from '@patternfly/react-core';
import {
  PushApplication,
  Variant,
  AndroidVariant,
} from '@aerogear/unifiedpush-admin-client';
import { AndroidVariantForm } from './AndroidVariantForm';
import { UpsClientFactory } from '../../utils/UpsClientFactory';

interface State {
  variantName: string;
  androidVariantForm: boolean;
  webpushVariantForm: boolean;
  iosTokenVariantForm: boolean;
  iosCertificateVariantForm: boolean;
  variantType: string;
}

interface Props {
  app?: PushApplication;
  open: boolean;
  close: () => void;
}

export class VariantSelectionForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      variantName: '',
      androidVariantForm: false,
      webpushVariantForm: false,
      iosTokenVariantForm: false,
      iosCertificateVariantForm: false,
      variantType: 'android',
    };
  }

  render(): React.ReactNode {
    return (
      <>
        <Modal
          width={'50%'}
          title="Add Variant"
          isOpen={this.props.open}
          onClose={this.props.close}
        >
          <Form>
            <FormGroup fieldId="variant selection">
              <TextInput
                className="variantForm"
                isRequired
                onChange={value => this.setState({ variantName: value })}
              />
              <List>
                <Radio
                  name={'Android Radio'}
                  id="android"
                  label="android"
                  description="using Firebase Cloud Messaging"
                  isChecked={this.state.variantType === 'android'}
                  onChange={checked => {
                    if (checked) this.setState({ variantType: 'android' });
                  }}
                />

                <Radio
                  name="WebPush Radio"
                  id="Webpush"
                  label="webpush"
                  description="using web browsers"
                  checked={this.state.variantType === 'webpush'}
                  onChange={checked => {
                    if (checked) this.setState({ variantType: 'webpush' });
                  }}
                />

                <Radio
                  name="iOS APNS Radio"
                  id="iOSToken"
                  label="iOS(APNS Token)"
                  description="using Apple Push Network with Tokens"
                  isChecked={this.state.variantType === 'iOSToken'}
                  onChange={checked => {
                    if (checked) this.setState({ variantType: 'iOSToken' });
                  }}
                />

                <Radio
                  name="iOS Certificate Radio"
                  id="iOSCertificate"
                  label="iOS(Certificate)"
                  description="using Apple Push Network with certificates"
                  isChecked={this.state.variantType === 'iosCertificate'}
                  onChange={checked => {
                    if (checked) {
                      this.setState({ variantType: 'iosCertificate' });
                    }
                  }}
                />
              </List>
              <AndroidVariantForm
                open={this.state.variantType === 'android'}
                onSave={variant => {
                  UpsClientFactory.getUpsClient().variants.create(
                    this.props.app!.pushApplicationID!,
                    variant
                  );
                  this.props.close();
                }}
                variantName={this.state.variantName}
              />
            </FormGroup>
          </Form>
        </Modal>
      </>
    );
  }
}

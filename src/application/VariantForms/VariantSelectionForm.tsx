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
import { WebpushVariantForm } from './WebpushVariantForm';
import { IOSTokenVariantForm } from './IOSTokenVariantForm';
import { IOSCertificateVariantForm } from './IOSCertificateForm';

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
            <FormGroup label="Name" fieldId="variant selection">
              <TextInput
                id="variant-name"
                className="variantForm"
                isRequired
                onChange={value => this.setState({ variantName: value })}
              />
              <List className="radioList">
                <Radio
                  className="radioBtn"
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
                  className="radioBtn"
                  name="WebPush Radio"
                  id="web_push"
                  label="webpush"
                  description="using web browsers"
                  checked={this.state.variantType === 'web_push'}
                  onChange={checked => {
                    if (checked) this.setState({ variantType: 'web_push' });
                  }}
                />

                <Radio
                  className="radioBtn"
                  name="iOS APNS Radio"
                  id="ios_token"
                  label="iOS(APNS Token)"
                  description="using Apple Push Network with Tokens"
                  isChecked={this.state.variantType === 'ios_token'}
                  onChange={checked => {
                    if (checked) this.setState({ variantType: 'ios_token' });
                  }}
                />

                <Radio
                  className="radioBtn"
                  name="iOS Certificate Radio"
                  id="ios"
                  label="iOS(Certificate)"
                  description="using Apple Push Network with certificates"
                  isChecked={this.state.variantType === 'ios'}
                  onChange={checked => {
                    if (checked) {
                      this.setState({ variantType: 'ios' });
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
                close={() => {
                  this.setState({ androidVariantForm: false });
                  this.props.close();
                }}
              />
              <WebpushVariantForm
                open={this.state.variantType === 'web_push'}
                onSave={variant => {
                  UpsClientFactory.getUpsClient().variants.create(
                    this.props.app!.pushApplicationID!,
                    variant
                  );
                  this.props.close();
                }}
                variantName={this.state.variantName}
                close={() => {
                  this.setState({ webpushVariantForm: false });
                  this.props.close();
                }}
              />
              <IOSTokenVariantForm
                open={this.state.variantType === 'ios_token'}
                onSave={variant => {
                  UpsClientFactory.getUpsClient().variants.create(
                    this.props.app!.pushApplicationID!,
                    variant
                  );
                  this.props.close();
                }}
                variantName={this.state.variantName}
                close={() => {
                  this.setState({ iosTokenVariantForm: false });
                  this.props.close();
                }}
              />
              <IOSCertificateVariantForm
                open={this.state.variantType === 'ios'}
                onSave={variant => {
                  UpsClientFactory.getUpsClient().variants.create(
                    this.props.app!.pushApplicationID!,
                    variant
                  );
                  this.props.close();
                }}
                variantName={this.state.variantName}
                close={() => {
                  this.setState({ iosCertificateVariantForm: false });
                  this.props.close();
                }}
              />
            </FormGroup>
          </Form>
        </Modal>
      </>
    );
  }
}

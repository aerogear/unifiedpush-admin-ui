import React, { Component } from 'react';
import {
  TextInput,
  Button,
  Form,
  FormGroup,
  Radio,
  FileUpload,
} from '@patternfly/react-core';
import { PushApplication } from '@aerogear/unifiedpush-admin-client';

interface State {}

interface Props {}

export class IOSCertificateVariantForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render(): React.ReactNode {
    return (
      <Form className="iOSCertificateVariantForm">
        <FormGroup
          label={'APNS Certificate'}
          fieldId={'iOS-Certificate-Variant-Form'}
        >
          <FileUpload
            id="Certificate-file"
            // value={value}
            // filename={filename}
            // onChange={this.handleFileChange}
          />
        </FormGroup>
        <FormGroup label={'Type'} fieldId={'iOS-Certifiacte-Variant-Form-Type'}>
          <Radio
            id={'iOSCertificateProduction'}
            name="Production"
            label="Production"
          />
          <Radio
            id={'iOSCertificateDevelopment'}
            name="Development"
            label="Development"
          />
        </FormGroup>
        <FormGroup
          label={'Passphrase'}
          fieldId={'iOS-Certificate-Variant-Form-PassPhrase'}
        >
          <TextInput
            isRequired
            // onChange={value => this.setState({ name: value })}
          />
        </FormGroup>
        <Button>Cancel</Button>
        <Button>Create</Button>
      </Form>
    );
  }
}

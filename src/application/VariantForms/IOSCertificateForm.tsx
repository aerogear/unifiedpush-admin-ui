import React, { Component } from 'react';
import {
  TextInput,
  Button,
  Form,
  FormGroup,
  Radio,
  FileUpload,
} from '@patternfly/react-core';
import { Variant, IOSVariant } from '@aerogear/unifiedpush-admin-client';

interface State {
  iosCertificate?: string | File;
  filename?: string | File;
  passphrase?: string;
  production: boolean;
  productionType: string;
}

interface Props {
  open: boolean;
  variantName: string;
  onSave: (variant: Variant) => void;
  close: () => void;
}

export class IOSCertificateVariantForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      iosCertificate: '',
      filename: '',
      passphrase: '',
      production: false,
      productionType: '',
    };
  }

  handleFileChange = (filename: string, value: string) => {
    this.setState({ iosCertificate: value, filename });
  };

  render(): React.ReactNode {
    const save = () => {
      const variant = {
        name: this.props.variantName,
        type: 'ios',
        certificate: this.state.iosCertificate,
        password: this.state.passphrase,
        production: this.state.production,
      } as IOSVariant;
      this.props.onSave(variant);
    };

    if (!this.props.open) {
      return null;
    }

    return (
      <Form className="iOSCertificateVariantForm">
        <FormGroup
          label={'APNS Certificate'}
          fieldId={'iOS-Certificate-Variant-Form'}
        >
          <FileUpload
            id="certificateFile"
            value={this.state.filename}
            onChange={file =>
              this.setState({ iosCertificate: file, filename: file })
            }
          />
        </FormGroup>
        <FormGroup label={'Type'} fieldId={'iOS-Certificate-Variant-Form-Type'}>
          <Radio
            className="radioBtn"
            id={'iOSCertificateProduction'}
            name="Production"
            label="Production"
            isChecked={this.state.productionType === 'iOSCertificateProduction'}
            onChange={checked => {
              if (checked) {
                this.setState({ productionType: 'iOSCertificateProduction' });
              }
            }}
          />
          <Radio
            className="radioBtn"
            id={'iOSCertificateDevelopment'}
            name="Development"
            label="Development"
            isChecked={
              this.state.productionType === 'iOSCertificateDevelopment'
            }
            onChange={checked => {
              if (checked) {
                this.setState({ productionType: 'iOSCertificateDevelopment' });
              }
            }}
          />
        </FormGroup>
        <FormGroup
          label={'Passphrase'}
          fieldId={'iOS-Certificate-Variant-Form-PassPhrase'}
        >
          <TextInput
            id="iosCertificatePassword1"
            isRequired
            onChange={value => this.setState({ passphrase: value })}
          />
        </FormGroup>
        <div className="variantFormButtons">
          <Button onClick={save} className="dialogBtn">
            Create
          </Button>
          <Button variant="secondary" onClick={() => this.props.close()}>
            Cancel
          </Button>
        </div>
      </Form>
    );
  }
}

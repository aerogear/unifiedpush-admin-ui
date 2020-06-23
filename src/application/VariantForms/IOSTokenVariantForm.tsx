import React, { Component } from 'react';
import {
  TextInput,
  Button,
  Form,
  FormGroup,
  Radio,
} from '@patternfly/react-core';
import { PushApplication } from '@aerogear/unifiedpush-admin-client';

interface State {}

interface Props {}

export class IOSTokenVariantForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render(): React.ReactNode {
    return (
      <Form className="iOSAPNSTokenVariantForm">
        <FormGroup
          label={'Private Key'}
          fieldId={'iOS-Token-Variant-Form-Private-Key'}
        >
          <TextInput
            // onChange={value => this.setState({ name: value })}
            isRequired
          />
        </FormGroup>
        <FormGroup label={'Key Id'} fieldId={'iOS-Token-Variant-Form-Key-Id'}>
          <TextInput
            // onChange={value => this.setState({ name: value })}
            isRequired
          />
        </FormGroup>
        <FormGroup label={'Team Id'} fieldId={'iOS-Token-Variant-Form-Team-Id'}>
          <TextInput
            // onChange={value => this.setState({ name: value })}
            isRequired
          />
        </FormGroup>
        <FormGroup
          label={'Bundle Id'}
          fieldId={'iOS-Token-Variant-Form-Bundle-Id'}
        >
          <TextInput
            // onChange={value => this.setState({ name: value })}
            isRequired
          />
        </FormGroup>
        <FormGroup
          label={'Type'}
          fieldId={'iOS-Token-Variant-Form-Type'}
          // value={value}
          // filename={filename}
        >
          <Radio
            id={'iOSTokenProduction'}
            name="Production"
            label="Production"
          />
          <Radio
            id={'iOSTokenDevelopment'}
            name="Development"
            label="Development"
          />
        </FormGroup>
        <Button>Cancel</Button>
        <Button>Create</Button>
      </Form>
    );
  }
}

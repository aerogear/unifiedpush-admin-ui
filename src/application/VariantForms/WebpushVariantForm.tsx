import React, { Component } from 'react';

import {
  TextInput,
  Button,
  Form,
  FormGroup,
} from '@patternfly/react-core';
import { PushApplication } from '@aerogear/unifiedpush-admin-client';

interface State {

}

interface Props {

}

export class WebpushVariantForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {

    }
  }
  render(): React.ReactNode {
    return (
      <Form
        className="WebPushVariantForm">
        <FormGroup
          label={'Vapid Public Key'}
          fieldId={'Webpush-Variant-Form-Public-Key'}>
          <TextInput
            // onChange={value => this.setState({ name: value })}
            isRequired
          />
        </FormGroup>
        <FormGroup
          label={"Vapid Private Key"}
          fieldId={"Webpush-Variant-Form-Vapid-Private-Key"}
        >
          <TextInput
            // onChange={value => this.setState({ name: value })}
            isRequired
          />
        </FormGroup>
        <FormGroup
          label={"Alias"}
          fieldId={"Webpush-Variant-Form-Alias"}
        >
          <TextInput
            // onChange={value => this.setState({ name: value })}
            isRequired
          />
        </FormGroup>
        <Button>Cancel</Button>
        <Button>Create</Button>
      </Form>
    );
  }

}
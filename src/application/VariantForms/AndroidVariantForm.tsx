import React, { Component } from 'react';

import {
  TextInput,
  Button,
  Form,
  FormGroup,
} from '@patternfly/react-core';
import { PushApplication } from '@aerogear/unifiedpush-admin-client';

interface State {
  serverKey: string;
  senderID: string;
}

interface Props {
  app: PushApplication;

}

export class AndroidVariantForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      serverKey: this.props.app.variants,
      senderID: this.props.app.variants,

    }
  }

  render(): React.ReactNode {
    return (
      <Form
        className="AndroidVariantForm">
        <FormGroup
          label={'Server Key'}
          fieldId={'Android-Variant-Form-Server-key'}>
          <TextInput
            // onChange={value => this.setState({ name: value })}
            isRequired
          />
        </FormGroup>
        <FormGroup
          label={"Sender ID"}
          fieldId={"Android-Variant-Form-Sender-ID"}
        >
          <TextInput
            // onChange={value => this.setState({ name: value })}
            isRequired
          />
        </FormGroup>
        <Button>Cancel</Button>
        <Button>Create</Button>
      </Form>
    )
  }
}
import React, { Component } from 'react';

import {
  TextInput,
  Modal,
  Form,
  FormGroup,
  Radio,
  List,
  ListItem,
} from '@patternfly/react-core';


interface State {

}

interface Props {

}

export class VariantSelectionForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {

    };
  }

  render(): React.ReactNode {
    return (
      <Modal
        width={'50%'}
        title='Add Variant'
      >
        <Form>
          <FormGroup fieldId='variant selection' helperText='Enter a name and choose a variant type'>
            <TextInput
              className='variantForm'
              isRequired
            />
            <List>
              <ListItem>
                <Radio
                  name='Android Radio'
                  id='Android variant choice button'
                  label='Android'
                  description='using Firebase Cloud Messaging'
                  checked={false}
                // onChange={checked: true}
                />
              </ListItem>
              <ListItem>
                <Radio
                  name='WebPush Radio'
                  id='WebPush variant choice button'
                  label='WebPush'
                  description='using web browsers'
                />
              </ListItem>
              <ListItem>
                <Radio
                  name='iOS APNS Radio'
                  id='iOS APNS Token variant choice button'
                  label='iOS(APNS Token)'
                  description='using Apple Push Network with Tokens'
                />
              </ListItem>
              <ListItem>
                <Radio
                  name='iOS Certificate Radio'
                  id='iOS Certificate variant choice button'
                  label='iOS(Certificate)'
                  description='using Apple Push Network with certificates'
                />
              </ListItem>
            </List>
          </FormGroup>
        </Form>
      </Modal>
    )
  }
}
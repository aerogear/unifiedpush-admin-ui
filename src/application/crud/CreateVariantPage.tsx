import React, { Component } from 'react';
import { CodeBranchIcon } from '@patternfly/react-icons';
import { UpsClientFactory } from '../../utils/UpsClientFactory';
import {
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  Title,
  EmptyStateBody,
  Bullseye,
  InputGroup,
  TextInput,
  Button,
  Modal,
  Form,
  FormGroup,
  Radio,
  List,
  ListItem,
  ListComponent,
} from '@patternfly/react-core';
import { PushApplication } from '@aerogear/unifiedpush-admin-client';

interface State {
  variantName: string;
  // appName: string;
}

interface Props {
  // app: PushApplication;
  onFinished: () => void;
}

// private readonly createVariant = async (name: string) => {
//   try {
//     await UpsClientFactory.getUpsClient().variants.create(name);
//     this.props.onFinished();
//   } catch (err) {
//     console.log(err);
//   }
// };

export class CreateVariantPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      variantName: '',
      // appName: this.props.app.name,
    };
  }

  render(): React.ReactNode {
    return (
      <>
        <EmptyState variant={EmptyStateVariant.full}>
          <EmptyStateIcon icon={CodeBranchIcon} />
          <Title headingLevel="h5" size="lg">
            Create a Variant for
          {/* {this.props.app!.name} */}
          </Title>
          <EmptyStateBody>
            The first step to set up your mobile device is to add a variants. That
            will generate the code necessary to register UPS on your device. Learn
          more about variants in the{' '}
            <a
              href={
                'https://docs.aerogear.org/aerogear/latest/getting-started-running.html#running'
              }
            >
              {' '}
            documentation{' '}
            </a>
          </EmptyStateBody>
          <Bullseye>
            <Form style={{ width: 350, paddingTop: 20 }}>
              <InputGroup>
                <TextInput
                  value={this.state.variantName}
                  onChange={value => this.setState({ variantName: value })}
                  isRequired
                  placeholder={'Variant name'}
                  type="text"
                  aria-label="text input example"
                />
                <Button
                  variant="primary"
                  isDisabled={
                    !this.state.variantName ||
                    this.state.variantName.trim().length === 0
                  }
                // onClick={() => this.createVariant(this.state.appName)}
                >
                  Create Variant
              </Button>
              </InputGroup>
            </Form>
          </Bullseye>
        </EmptyState>,
        <Modal
          width={'50%'}
          title='Add Variant'
        >
          <Form >
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
      </>


    );
  }
}

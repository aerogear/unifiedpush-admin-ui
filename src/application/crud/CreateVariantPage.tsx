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
  FileUpload,
} from '@patternfly/react-core';
import { PushApplication } from '@aerogear/unifiedpush-admin-client';
import { AndroidVariantForm } from '../VariantForms/AndroidVariantForm';

interface State {
  variantName: string;
  showAndroidVariantForm: boolean
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
      showAndroidVariantForm: false,
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
            <Button
              variant="primary"
              onClick={() => this.createVariant(this.state.appName)}
            >
              Create Variant
              </Button>
          </Bullseye>
        </EmptyState>,
      </>
    );
  }
}

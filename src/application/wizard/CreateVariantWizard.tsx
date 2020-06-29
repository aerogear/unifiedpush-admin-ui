import React from 'react';
import { Component } from 'react';
import { CreateVariantPage } from '../crud/CreateVariantPage';
import {
  Wizard,
  WizardContextConsumer,
  WizardStep,
} from '@patternfly/react-core';

interface Props {
  open: boolean;
  close: () => void;
}

export class CreateVariantWizard extends Component<Props> {
  render(): React.ReactNode {
    const createVariantPage = (
      <WizardContextConsumer>
        {({
          activeStep,
          goToStepByName,
          goToStepById,
          onNext,
          onBack,
          onClose,
        }) => <CreateVariantPage onFinished={onNext} />}
      </WizardContextConsumer>
    );
    const steps = [
      {
        id: 2,
        name: 'Create Application Variant',
        component: createVariantPage,
        nextButtonText: 'Finish',
      } as WizardStep,
    ];

    if (this.props.open) {
      return (
        <Wizard
          isOpen={this.props.open}
          onClose={this.props.close}
          title="Create Variant"
          steps={steps}
          footer={<></>}
        />
      );
    }
    return null;
  }
}

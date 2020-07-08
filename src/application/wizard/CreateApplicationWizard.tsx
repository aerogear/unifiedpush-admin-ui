import React from 'react';
import { Component } from 'react';
import { CreateApplicationPage } from '../crud/CreateApplicationPage';
import { CreateVariantPage } from '../crud/CreateVariantPage';
import {
  Wizard,
  WizardContextConsumer,
  WizardStep,
} from '@patternfly/react-core';
import {
  PushApplication,
  Variant,
  AndroidVariant,
} from '@aerogear/unifiedpush-admin-client';
import { SetupPage } from './SetupPage';

interface Props {
  open: boolean;

  close: () => void;
}

interface State {
  app?: PushApplication;
  androidVariant: AndroidVariant;
}

export class CreateApplicationWizard extends Component<Props, State> {
  render(): React.ReactNode {
    const createAppPage = (
      <WizardContextConsumer>
        {({
          activeStep,
          goToStepByName,
          goToStepById,
          onNext,
          onBack,
          onClose,
        }) => (
            <CreateApplicationPage
              onFinished={application => {
                this.setState({ app: application });
                onNext();
              }}
            />
          )}
      </WizardContextConsumer>
    );
    const createVariantPage = (
      <WizardContextConsumer>
        {({
          activeStep,
          goToStepByName,
          goToStepById,
          onNext,
          onBack,
          onClose,
        }) => <CreateVariantPage onFinished={onNext} app={this.state.app} />}
      </WizardContextConsumer>
    );

    const setupPage = (
      <WizardContextConsumer>
        {({
          activeStep,
          goToStepByName,
          goToStepById,
          onNext,
          onBack,
          onClose,
        }) => (
            <SetupPage
              app={this.state.app!}
              variant={this.state.androidVariant}
              onFinished={onNext}
            />
          )}
      </WizardContextConsumer>
    );

    const steps = [
      {
        id: 1,
        name: 'Create your first Application',
        component: createAppPage,
        nextButtonText: 'next',
      },
      {
        id: 2,
        name: 'Create Application Variant',
        component: createVariantPage,
        nextButtonText: 'Next',
      } as WizardStep,
      {
        id: 3,
        name: 'Mobile device: Set up variant',
        component: setupPage,
        nextButtonText: 'Next',
      },
    ];

    if (this.props.open) {
      return (
        <Wizard
          isOpen={this.props.open}
          onClose={this.props.close}
          title="Create Application"
          description="This wizard will guide you through all the steps required to create an application an its variants"
          steps={steps}
          footer={<></>}
        />
      );
    }

    return null;
  }
}

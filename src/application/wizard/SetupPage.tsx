import React, { Component } from 'react';
import {
  Modal,
  TextContent,
  Text,
  Button,
  Page,
  TextVariants,
  TextList,
  TextListItem,
  TextListVariants,
  variantIcons,
} from '@patternfly/react-core';
import {
  PushApplication,
  AndroidVariant,
  Variant,
} from '@aerogear/unifiedpush-admin-client';
import { AndroidCodeSnippets } from '../ApplicationDetail/panels/android/AndroidCodeSnippets';

interface State {

}

interface Props {
  app: PushApplication;
  variant: AndroidVariant
  onFinished: () => void;
  close?: () => void;
}

export class SetupPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {

    };
  }

  render(): React.ReactNode {
    console.log(this.props.app)
    console.log(this.props.variant)

    return (

      <Page>

        <TextContent>
          <Text component={TextVariants.h1}>{`${this.props.app.name}`}</Text>
          <Text component={TextVariants.p}>
            We are half way there! Use the code snippet below to{' '}
            <Text
              component={TextVariants.a}
              href="https://aerogear.org/docs/unifiedpush/aerogear-push-android/guides/#_registration_with_the_unifiedpush_server"
            >
              {' '}
              register your device{' '}
            </Text>{' '}
            and allow it to receiving notifications through this UnifiedPush
            Server. If you don't know how to do this, go to the{' '}
            <Text
              component={TextVariants.a}
              href="https://aerogear.org/docs/unifiedpush/aerogear-push-android/guides/"
            >
              documentation for full step by step explanation.
            </Text>
          </Text>

          <TextList component={TextListVariants.ol}>
            <TextListItem>
              Copy the code snippet and paste it on your device code.
            </TextListItem>
            <TextListItem>Build and deploy your app</TextListItem>
            <TextListItem>Click Next(below)</TextListItem>
          </TextList>
        </TextContent>

        <AndroidCodeSnippets
          app={this.props.app}
          variant={this.props.variant} />

        <TextContent>
          <Text component={TextVariants.p}>
            Next we are going to send a test notification. Make sure you {''}
            <Text
              component={TextVariants.a}
              href="https://aerogear.org/docs/unifiedpush/aerogear-push-android/guides/#_handling_notification"
            >
              build or deploy your app
            </Text>
               after pasting the snippet.
          </Text>
        </TextContent>
        <Button>Next</Button>
      </Page>

    );
  }
}

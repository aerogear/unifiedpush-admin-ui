import React, { Component, ReactNode } from 'react';
import {AndroidVariantForm} from "./AndroidVariantForm";
import {WebpushVariantForm} from "./WebpushVariantForm";
import {IOSTokenVariantForm} from "./IOSTokenVariantForm";
import {IOSCertificateVariantForm} from "./IOSCertificateForm";
import {VariantType} from "@aerogear/unifiedpush-admin-client";

interface Props {
    type: VariantType;
    name: string;
}

export class VariantEditForm extends Component<Props> {
    render = () => {
        return (
            <>
            <AndroidVariantForm
                open={this.props.type === 'android'}
                onSave={async variant => {
                    await createVariant(variant, 'android');
                }}
                variantName={this.props.name}
                close={() => {
                    this.setState({ androidVariantForm: false });
                    this.props.close();
                }}
            />
        <WebpushVariantForm
            open={this.props.type === 'web_push'}
            onSave={async variant => {
                console.log('variant selection form onSave');
                await createVariant(variant, 'web_push');
            }}
            variantName={this.props.name}
            close={() => {
                this.setState({ webpushVariantForm: false });
                this.props.close();
            }}
        />
        <IOSTokenVariantForm
            open={this.props.type === 'ios_token'}
            onSave={async variant => {
                await createVariant(variant, 'ios_token');
            }}
            variantName={this.props.name}
            close={() => {
                this.setState({ iosTokenVariantForm: false });
                this.props.close();
            }}
        />
        <IOSCertificateVariantForm
            open={this.props.type === 'ios'}
            onSave={async variant => {
                await createVariant(variant, 'ios');
            }}
            variantName={this.props.name}
            close={() => {
                this.setState({ iosCertificateVariantForm: false });
                this.props.close();
            }}
        />
        </>
        );
    }
}

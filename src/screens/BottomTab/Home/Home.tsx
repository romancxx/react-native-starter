import React, { Component } from 'react'
import { Layout, Text, Button } from 'react-native-ui-kitten';
import { SafeAreaView, StyleSheet } from 'react-native';
import { injectIntl, InjectedIntl } from 'react-intl';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from 'react-navigation';
import Header from '@components/Header';
import { ArrowIosBackFill } from '@assets/icons';
import NavigationService from '@services/navigation';

interface Props {
    intl: InjectedIntl
}

class Home extends Component<Props> {

    onBack = () => {
        // NavigationService.goBack();
    };

    render() {
        const { intl } = this.props;
        return (
            <Layout
                style={{ flex: 1 }}>
                <Header title="Header"
                    iconLeft={ArrowIosBackFill}
                    iconLeftOnClick={this.onBack} />
                <Layout
                    style={styles.container}>

                    <SafeAreaView>
                        <Text
                            category='h4'>
                            {intl.formatMessage({ id: "home.title" })}
                        </Text>
                    </SafeAreaView>
                </Layout>
            </Layout>

        )
    }
}

export default injectIntl(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

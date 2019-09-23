import React, { Component } from 'react'
import { Layout, Text, Button } from 'react-native-ui-kitten';
import { SafeAreaView, StyleSheet } from 'react-native';
import { injectIntl, InjectedIntl } from 'react-intl';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from 'react-navigation';

interface IProps {
    intl: InjectedIntl
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class Home extends Component<IProps> {
    render() {
        const { intl } = this.props;
        return (
            <Layout
                style={styles.container}>
                <SafeAreaView>
                    <Text
                        category='h4'>
                        {intl.formatMessage({ id: "home.title" })}
                    </Text>
                </SafeAreaView>
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

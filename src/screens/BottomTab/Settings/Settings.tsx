import React, { Component } from 'react'
import { Layout, Button, Toggle, Text } from 'react-native-ui-kitten';
import { SafeAreaView, StyleSheet } from 'react-native';
import { connect } from "react-redux";
import { IAppState } from '@states/reducer';
import { themeChange, localeChange } from '@states/actions/settings';
import { InjectedIntl, injectIntl } from 'react-intl';
import { ISettingsState } from '@states/reducers/settings';
import { light, dark } from '@eva-design/eva';
import { logout } from '@states/actions/auth';

import { bindActionCreators } from 'redux';
import NavigationService from '@services/navigation';

interface Props {
    intl: InjectedIntl
    settings: ISettingsState;
    localeChange(local: string): any;
    themeChange(theme: any): any;
    logout(): any;
}

interface State {
    checkedTheme: boolean
    checkedLocale: boolean
}

class Settings extends Component<Props, State> {
    state = {
        checkedTheme: false,
        checkedLocale: this.props.settings.locale === "fr" ? true : false,
    }


    logoutUser = () => {
        this.props.logout()
        NavigationService.navigate('Login')
    }

    onThemeChange = () => {
        this.setState({ checkedTheme: !this.state.checkedTheme }, () => {
            if (this.state.checkedTheme) {
                this.props.themeChange(light)
            } else {
                this.props.themeChange(dark)
            }
        })
    }

    onLocaleChange = () => {
        this.setState({ checkedLocale: !this.state.checkedLocale }, () => {
            if (this.state.checkedLocale) {
                this.props.localeChange('fr');
            } else {
                this.props.localeChange('en');
            }
        })
    }

    render() {
        const { intl } = this.props;
        const { checkedTheme, checkedLocale } = this.state;
        return (
            <Layout style={styles.container}>
                <SafeAreaView style={styles.container}>
                    <Text
                        style={{ padding: "5%" }}
                        category="h4">
                        {intl.formatMessage({ id: "settings.title" })}
                    </Text>
                    <Text>Theme</Text>
                    <Toggle
                        style={{ padding: "2%" }}
                        checked={checkedTheme}
                        onChange={this.onThemeChange} />

                    <Layout style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Text>EN</Text>
                        <Toggle
                            style={{ padding: "2%" }}
                            checked={checkedLocale}
                            onChange={() => this.onLocaleChange()} />
                        <Text>FR</Text>
                    </Layout>
                    <Button
                        style={{ justifyContent: "flex-end" }}
                        onPress={() => this.logoutUser()}>
                        {intl.formatMessage({ id: "logout.button" })}
                    </Button>
                </SafeAreaView>
            </Layout>
        )
    }
}

const mapStateToProps = (state: IAppState) => ({
    settings: state.settings,
});

const mapDispatchToProps = {
    logout,
    themeChange,
    localeChange,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(injectIntl(Settings))

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import { IAppState } from '@states/reducer';
import { connect } from 'react-redux';
import { IAuthState } from '@states/reducers/auth';
import NavigationService from '@services/navigation';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';

interface Props {
    auth: IAuthState;
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class AuthLoading extends React.Component<Props> {
    componentDidMount() {
        const { auth, navigation } = this.props;
        NavigationService.setRefNavigator(navigation);

        if (auth.isAuth) {
            NavigationService.navigate('App')
        } else {
            NavigationService.navigate('Auth')
        }
    }

    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const mapStateToProps = (state: IAppState) => ({
    auth: state.auth
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoading)

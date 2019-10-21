import React, { Component } from 'react'
import { BottomNavigation, BottomNavigationTab, Layout } from 'react-native-ui-kitten';
import { InjectedIntl } from 'react-intl';
import { injectIntl } from 'react-intl';

interface State {
    selectedIndex: number;
}

interface Props {
    selectedIndex: number;
    onTabSelect: (index: number) => void;
    intl: InjectedIntl;
}

class BottomTab extends Component<Props, State> {
    state: State = {
        selectedIndex: 0
    }

    render(): React.ReactNode {
        const { selectedIndex, onTabSelect, intl } = this.props;

        return (
            <BottomNavigation
                selectedIndex={selectedIndex}
                onSelect={onTabSelect}>
                <BottomNavigationTab
                    title={intl.formatMessage({ id: "home.title" })} />
                <BottomNavigationTab
                    title={intl.formatMessage({ id: "settings.title" })} />
            </BottomNavigation>
        )
    }
}
export default injectIntl(BottomTab);
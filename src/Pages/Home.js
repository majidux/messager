import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from "../Components/Header";
import SearchArea from "../Components/SearchArea";
import Contacts from "../Components/Contacts";

export default class Home extends Component {
    render() {
        return (
            <View style={styles.className}>
                <Header/>
                <SearchArea/>
                <Contacts/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: 1,
    }
});
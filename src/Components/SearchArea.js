import React, {Component} from 'react';
import {View, TextInput, StyleSheet, Image,Text} from 'react-native';

export default class SearchArea extends Component {
    render() {
        return (
            <View style={styles.search}>
                <View style={styles.searchBox}>
                    <View>
                        <Image
                            source={require('../Assets/image/search.png')}
                        />
                    </View>
                    <View style={styles.searchTextView}>
                        <Text style={styles.searchText}>Search by names and numbers</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    search: {
        flex: 1,
        backgroundColor:'#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBox:{
        backgroundColor: '#fafafb',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        minWidth:390,
        maxWidth:390,
        borderRadius:30,
        borderColor:'#f5f5f6',
        borderWidth: 2
    },
    searchTextView:{
        marginLeft: 10
    },
    searchText:{
        color:'#aeaebd',
        fontWeight: 'bold',
        
    }
});
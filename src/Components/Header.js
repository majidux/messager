import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Header extends Component {

    render() {
        return (
            <View style={styles.header}>
                
                <View style={styles.backPicture}>
                    
                    <View>
                        <Image
                            source={require('../Assets/image/left-arrow.png')}
                            
                        />
                    </View>
                    <View>
                        <Image
                            style={styles.profilePicture}
                            source={require('../Assets/image/person.png')}
                        />
                    </View>
                </View>
                
                <View>
                    <View><Text style={styles.titleTextStyle}>Your friends</Text></View>
                    <View><Text style={styles.contactNumber}>265 available</Text></View>
                </View>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        height:200,
        backgroundColor:'#ffffff',
        paddingHorizontal: 15,
        justifyContent: 'space-around'
    },
    backPicture:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    profilePicture:{
        width:50,
        height:50
    },
    titleTextStyle:{
        fontSize:25,
        fontWeight: 'bold',
        color:'black'
    },
    contactNumber:{
        fontSize: 11,
        opacity:.5,
        fontWeight: 'bold'
    },
});
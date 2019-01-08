import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,FlatList,ActivityIndicator,TouchableHighlight,Alert} from 'react-native';
// import Data from './Data';


export default class Contacts extends Component {
    
    constructor(props){
        super(props);
        this.state={
            dataSource:[]
        }
    }
    componentDidMount() {
        
        fetch('https://randomuser.me/api/?results=15')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    dataSource: data.results
                })
            })
            .catch( error => alert('Cannot Find Server'));
    }
    
    
    alertMessage = () => Alert.alert(this.state.results);
    
    render() {
        return (
            <View style={styles.contact}>
                <FlatList
                    data={this.state.dataSource}
                    keyExtractor={(item)=>item.id.value}
                    renderItem={({item})=>
                        <TouchableHighlight underlayColor='rgba(0,0,0,.1)' onPress={this.alertMessage}>
                            <View style={styles.contactBox}>
                                <View style={styles.checkedView}>
                                    <Image
                                        source={item.picture.medium}
                                        style={styles.checkedImage}
                                    />
                                    <Text>{item.first}</Text>
                                </View>
                                <View style={styles._imageStyleView}>
                                    <Image
                                        source={item.picture.large}
                                        style={styles._imageStyle}
                                    />
                                </View>
                                <View style={styles.names}>
                                    <Text style={styles.nameText}>{item.name.first} {item.name.last}</Text>
                                    <Text style={styles.numberStyle}>{item.phone}</Text>
                                    <Text style={styles.numberStyle}>{item.cell}</Text>
                                </View>
                                
                            </View>
                        </TouchableHighlight>
                        
                    }
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    contact: {
        flex: 5,
    },
    contactBox:{
        flexDirection: 'row',
        padding:10,
        marginHorizontal:20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor:'#e1e1e7'
    },
    _imageStyle:{
        borderRadius:50
    },
    _imageStyleView:{
        backgroundColor:'#516afe',
        padding: 3,
        borderRadius: 50,
        marginHorizontal: 15
    },
    nameText:{
        fontSize:20,
        fontWeight: 'bold',
        color:'black'
    },
    numberStyle:{
        fontSize: 11,
    },
    checkedView:{
        backgroundColor:'#516afe',
        padding:4,
        borderRadius:6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkedImage:{
        width:12,
        height:12
    }
    
});
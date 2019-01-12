import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    TextInput
} from 'react-native';


export default class Contacts extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            filteredData: [],
        };
    }
    
    componentDidMount() {
        fetch('https://randomuser.me/api/?results=15')
            .then(response => response.json())
            .then(data => {
                this.data = data.results;
                this.setState({
                    filteredData: this.data
                });
            })
            .catch(error => alert('Cannot Find Server'));
    }
    
    
    
    searchFilterFunction = text => {
        let result = this.data.filter(contact => `${contact.name.first} ${contact.name.last}`.includes(text));
        this.setState({
            filteredData: result
        });
    };
    
    
    render() {
        return (
            <View style={styles.contact}>
                
                <View style={styles.search}>
                    <View style={styles.searchBox}>
                        <View>
                            <Image
                                source={require('../Assets/image/search.png')}
                            />
                        </View>
                        <View style={styles.searchTextView}>
                            <TextInput
                                style={styles.searchText}
                                placeholder={'Search by names and numbers'}
                                onChangeText={this.searchFilterFunction.bind(this)}>
                            </TextInput>
                        </View>
                    </View>
                </View>
                
                
                
                <FlatList
                    data={this.state.filteredData}
                    keyExtractor={(item) => item.email}
                    renderItem={({item}) =>
                        <View style={{justifyContent:'space-between',flexDirection: 'row',alignItems:'center'}}>
                            <View style={styles.contactBox}>
                                <View style={styles._imageStyleView}>
                                    <Image
                                        source={{uri: item.picture.large}}
                                        style={styles._imageStyle}
                                    />
                                </View>
                                <View style={styles.names}>
                                    <Text style={styles.nameText}>{item.name.first} {item.name.last}</Text>
                                    <Text style={styles.numberStyle}>{item.phone}</Text>
                                    <Text style={styles.numberStyle}>{item.cell}</Text>
                                </View>
                            </View>
                            <View>
                                {item.nat === 'DE' &&
                                <View style={styles.checkedView}>
                                    <Image
                                        source={require('../Assets/image/checked.png')}
                                        style={styles.checkedImage}
                                    />
                                </View>
                                }
                            </View>
                        </View>
                        
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
    contactBox: {
        flexDirection: 'row',
        padding: 10,
        marginHorizontal: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e7'
    },
    _imageStyle: {
        borderRadius: 50,
        width: 50,
        height: 50
    },
    _imageStyleView: {
        backgroundColor: '#516afe',
        padding: 3,
        borderRadius: 50,
        marginHorizontal: 15
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    numberStyle: {
        fontSize: 11,
    },
    checkedView: {
        backgroundColor: '#516afe',
        padding: 4,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    },
    checkedImage: {
        width: 12,
        height: 12
    },
    search: {
        backgroundColor:'#ffffff',
        paddingBottom:10,
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
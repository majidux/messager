import React, {Component} from 'react';
import {View, TextInput, StyleSheet, Image,Text} from 'react-native';


export default class SearchArea extends Component {


    constructor(props){
        super(props);
        this.state={
            loading:false,
            data:[],
            searchInput:'',
            error:null,

        };
        this.arrayholder=[];
    }

    searchFilterFunction = text => {
        const newData = this.arrayholder.filter(item => {
            const itemData =`${item.name.title.toUpperCase()}
            ${item.name.first.toUpperCase()}
            ${item.name.last.toUpperCase()}`;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData)> -1;
        });
        this.setState({data:newData});
    };

    


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
                        <TextInput
                            style={styles.searchText}
                            value={this.state.search}
                            placeholder={'Search by names and numbers'}
                            onChange={text => this.searchFilterFunction(text)}>
                        </TextInput>
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
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MyHeader from '../Components/MyHeader';
import poly from '../img/poly.png';
import tri from '../img/tri.png';
import work from '../img/work.png';
import firebase from 'firebase';
import db from '../config';

export default class Achievment extends React.Component
{
    constructor()
    {
        super()
        this.state=
        {
            chapterwat:0,
            chapterp:0,
            chaptert:0,
            userId: firebase.auth().currentUser.email,
            imagesource1:{},
            imagesource2:{},
            imagesource3:{},
        }
    }
    getDetails=()=>
    {
        db.collection('users').where('email','==',this.state.userId).get()
        .then(snapshot=>
        {
            snapshot.forEach(doc=>
                {
                    this.setState({
                        chapterwat:doc.data().chapterwat,
                        chapterp:doc.data().chapterp,
                        chaptert:doc.data().chaptert,
                    })
                })
        })
    }
    componentDidUpdate()
    {
        this.getDetails()
        this.getImage1()
        
    }

    getImage1=()=>
    {
        var chapterp=this.state.chapterp
        
        if(chapterp===1)
        {
            this.setState({imagesource1:poly})
        }       
    }

    getImage2=()=>
    {
        var chaptert=this.state.chaptert
        
        if(chaptert===1)
        {
            this.setState({imagesource2:tri})
        }       
    }

    getImage3=()=>
    {
        var chapterwat=this.state.chapterwat
        
        if(chapterwat===1)
        {
            this.setState({imagesource3:work})
        }       
    }
    render()
    {
        return(
            
            <View style={styles.container}>
                   <SafeAreaProvider>
                    <MyHeader title="ACHIEVMENTS" navigation={this.props.navigation}/>
                    </SafeAreaProvider>
                
                
                
                <Image style={{width:300,height:300,marginBottom:20,justifyContent:'center'}}
                source={this.state.imagesource1}/>

                <Image style={{width:200,height:200,marginBottom:20,justifyContent:'center'}}
                    source={this.state.imagesource2}/>

                <Image style={{width:200,height:200,marginBottom:20,justifyContent:'center'}}
                    source={this.state.imagesource3}/>
                
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center'
      },
})
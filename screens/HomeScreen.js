import React from 'react';
import { StyleSheet, Text, View,Modal,TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MyHeader from '../Components/MyHeader';
import pr1 from '../img/progress.png'
import pr2 from '../img/progress2.png'
import pr3 from '../img/progress3.png'
import pr4 from '../img/progress4.png'
import db from '../config';
import { Image } from 'react-native';
import firebase from 'firebase'


export default class HomeScreen extends React.Component
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
            imagesource:{},
            isModalVisible:false
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
        this.getImage()
        
    }

    showModal = ()=>{
        return(
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.isModalVisible}
          >
          <View style={styles.modalContainer}>
            <Text style={{textAlign:'center',fontSize:20,color:'black'}}>Check The Achievment</Text>

            <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={()=> this.props.navigation.navigate('Achievments')}>
                <Text style={styles.registerButtonText}>Go</Text>
                </TouchableOpacity>
              </View>
          </View>
        </Modal>
      )
      }    
    getImage=()=>
    {
        var chapterp=this.state.chapterp
        var chaptert=this.state.chaptert
        var chapterwat=this.state.chapterwat

        if(chapterp===0 && chaptert===0 && chapterwat===0)
        {
            this.setState({imagesource:pr1,isModalVisible:true})
            
        }

        if(chapterp===1 && chaptert===0 && chapterwat===0)
        {
            this.setState({imagesource:pr2,isModalVisible:true})
            
        }

        if(chapterp===0 && chaptert===1 && chapterwat===0)
        {
            this.setState({imagesource:pr2,isModalVisible:true})
            
        }

        if(chapterp===0 && chaptert===0 && chapterwat===1)
        {
            this.setState({imagesource:pr2,isModalVisible:true})
            
        }

        if(chapterp===1 && chaptert===1 && chapterwat===0)
        {
            this.setState({imagesource:pr3,isModalVisible:true})
            
        }
        
        if(chapterp===0 && chaptert===1 && chapterwat===1)
        {
            this.setState({imagesource:pr3,isModalVisible:true})
            
        }
        
        if(chapterp===1 && chaptert===0 && chapterwat===1)
        {
            this.setState({imagesource:pr3,isModalVisible:true})
            
        }
        
        if(chapterp===1 && chaptert===1 && chapterwat===1)
        {
            this.setState({imagesource:pr4,isModalVisible:true})
        }

    }
    render()
    {
        return(
            
            <View style={styles.container}>
                {this.showModal()}
                <SafeAreaProvider>
                <MyHeader title="HOME" navigation={this.props.navigation}/>
                </SafeAreaProvider>
                
                <Image style={{width:300,height:300,marginBottom:20,justifyContent:'center'}}
                source={this.state.imagesource}/>
                
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#97FFFF',
        alignItems: 'center',
        justifyContent: 'center'
      },
})
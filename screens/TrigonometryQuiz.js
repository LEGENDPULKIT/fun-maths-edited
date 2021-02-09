import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput } from 'react-native';
import firebase from 'firebase';
import db from '../config.js';


export default class WorkAndTimeQuiz extends React.Component
{
    constructor()
    {
        super()
        this.state=
        {
            userId: firebase.auth().currentUser.email,
            score:0,
            ans1:'',
            ans2:'',
            ans3:'',
            ans4:'',
            ans5:'',
            ans6:'',
            ans7:'',
            ans8:'',
            ans9:'',
            ans10:'',
            isModalVisible:false,
        }
    }
    showModal = ()=>{
        return(
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.isModalVisible}
          >
          <View style={styles.modalContainer}>
            <ScrollView style={{width:'100%'}}>
              <View style={styles.KeyboardAvoidingView}>
              <Text
                style={styles.modalTitle}
                >Score</Text>
                <Text style={{textAlign:'center',fontSize:20,color:'blue'}}>{this.state.score}/10</Text>
             
              <View style={styles.modalBackButton}>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={()=>this.props.navigation.navigate('Home'),
                  
                    db.collection('users').where("email","==",this.state.userId).get() 
                    .then() .then((snapshot)=>{ snapshot.forEach((doc)=> { db.collection('users').doc(doc.id).update({ chaptert:1 }) }) })}
                >
                <Text style={styles.registerButtonText}>Complete The Chapter</Text>
                </TouchableOpacity>
              </View>
              </View>
            </ScrollView>
          </View>
        </Modal>
      )
      }

    correctanswer=()=>
    {
        var s=0
        if(this.state.ans1==='0')
        {
            s=s+1
        }
        if(this.state.ans2==='1')
        {
            s=s+1
        }
        if(this.state.an3==='1/2')
        {
            s=s+1
        }
        if(this.state.ans4==='1')
        {
            s=s+1
        }
        if(this.state.ans5==='-4')
        {
            s=s+1
        }
        if(this.state.ans6==='1')
        {
            s=s+1
        }
        if(this.state.ans7==='0')
        {
            s=s+1
        }
        if(this.state.ans8==='0')
        {
            s=s+1
        }
        if(this.state.ans9==='1')
        {
            s=s+1
        }
        if(this.state.ans10==='1/2')
        {
            s=s+1
        }

        this.setState({score:s})
        db.collection('users').where("email","==",this.state.userId).get() 
        .then() 
        .then((snapshot)=>{ snapshot.forEach((doc)=>
            { db.collection('users').doc(doc.id).update({ scoreoftrigonometry:this.state.score }) }) })
        
    }
    render()
    {
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                {this.showModal()}
                <TouchableOpacity onPress={()=>{this.correctanswer(), this.setState({isModalVisible:true})}}>
                    <Text style={styles.button}>Submit</Text></TouchableOpacity>
                <Text style={styles.question}>Q 1 - sin 2B = 2 sin B is true when B is equal to</Text>                 
                <TextInput
                placeholder='Write The answer '
                style={styles.Option}
                onChangeText={(text)=>
                {
                    this.setState({ans1:text})
                }}
                value={this.state.ans1}
                />

<Text style={styles.question}>Q 2 -  If A and (2A – 45°) are acute angles such that sin A = cos (2A – 45°), then tan A is equal to</Text>                 
                <TextInput
                placeholder='Write The answer '
                style={styles.Option}
                onChangeText={(text)=>
                {
                    this.setState({ans2:text})
                }}
                value={this.state.ans2}
                />

<Text style={styles.question}>Q 3 -  If y sin 45° cos 45° = tan2 45° – cos2 30°, then y = …</Text>                 
                <TextInput
                placeholder='Write The answer '
                style={styles.Option}
                onChangeText={(text)=>
                {
                    this.setState({ans3:text})
                }}
                value={this.state.ans3}
                />

<Text style={styles.question}>Q 4 -  If sin θ + sin² θ = 1, then cos² θ + cos4 θ = ..</Text>                 
                <TextInput
                placeholder='Write The answer'
                style={styles.Option}
                onChangeText={(text)=>
                {
                    this.setState({ans4:text})
                }}
                value={this.state.ans4}
                />
                <Text style={styles.question}>Q 5 - 5 tan² A – 5 sec² A + 1 is equal to</Text>                 
                <TextInput
                placeholder='Write The answer '
                style={styles.Option}
                onChangeText={(text)=>
                {
                    this.setState({ans5:text})
                }}
                value={this.state.ans5}
                />

<Text style={styles.question}>Q 6 - What is the maximum value of 1cscA?</Text>                 
                <TextInput
                placeholder='Write The answer'
                style={styles.Option}
                onChangeText={(text)=>
                {
                    this.setState({ans6:text})
                }}
                value={this.state.ans6}
                />

<Text style={styles.question}>Q 7 -  What is the minimum value of sin A, 0 ≤ A ≤ 90°</Text>                 
                <TextInput
                placeholder='Write The answer '
                style={styles.Option}
                onChangeText={(text)=>
                {
                    this.setState({ans7:text})
                }}
                value={this.state.ans7}
                />

<Text style={styles.question}>Q 8 - What is the minimum value of cos θ, 0 ≤ θ ≤ 90°</Text>                 
                <TextInput
                placeholder='Write The answer '
                style={styles.Option}
                onChangeText={(text)=>
                {
                    this.setState({ans8:text})
                }}
                value={this.state.ans8}
                />

<Text style={styles.question}>Q 9 - If cos 9A = sin A and 9A is smaller than 90°, then the value of tan 5A is</Text>                 
                <TextInput
                placeholder='Write The answer '
                style={styles.Option}
                onChangeText={(text)=>
                {
                    this.setState({ans9:text})
                }}
                value={this.state.ans9}
                />

<Text style={styles.question}>Q 10 -  If sin A – cos A = 0, then the value of sin4 A + cos4 A is</Text>                 
                <TextInput
                placeholder='Write The answer '
                style={styles.Option}
                onChangeText={(text)=>
                {
                    this.setState({ans10:text})
                }}
                value={this.state.ans10}
                />



               
                
                
          </View>
        )
    }
}

const styles=StyleSheet.create({
    question:
    {
        fontSize:15,
        marginBottom:10,
        marginTop:20,
        lineHeight:1.5,
        textAlign:'center',
        color:'black',
    },
    Option:
    {
        backgroundColor:'#00CDCD',
        borderWidth:5,
        textAlign:'center',
        marginTop:15,
        marginBottom:20,
        width:'20%',
        height:30,
        alignItems:'center', 
        justifyContent:'center', 
        color:'#fff',
        fontWeight:'bold',
        fontSize:10,
    },
    button:
    {
        textAlign:'center',
        marginTop:30,
        justifyContent:'flex-start',
        width:90,
        height:50,
        backgroundColor:'green'
    }
})
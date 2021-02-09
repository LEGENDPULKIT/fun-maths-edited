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
                    .then() .then((snapshot)=>{ snapshot.forEach((doc)=> { db.collection('users').doc(doc.id).update({ chapterp:1 }) }) })}
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
        if(this.state.ans1==='-10')
        {
            s=s+1
        }
        if(this.state.ans2==='4/3')
        {
            s=s+1
        }
        if(this.state.an3==='0,-6')
        {
            s=s+1
        }
        if(this.state.ans4==='infinite')
        {
            s=s+1
        }
        if(this.state.ans5==='4/3')
        {
            s=s+1
        }
        if(this.state.ans6==='1')
        {
            s=s+1
        }
        if(this.state.ans7==='3,0')
        {
            s=s+1
        }
        if(this.state.ans8==='3')
        {
            s=s+1
        }
        if(this.state.ans9==='1')
        {
            s=s+1
        }
        if(this.state.ans10==='2')
        {
            s=s+1
        }

        this.setState({score:s})
        db.collection('users').where("email","==",this.state.userId).get() 
        .then() 
        .then((snapshot)=>{ snapshot.forEach((doc)=>
            { db.collection('users').doc(doc.id).update({ scoreofpolynomials:this.state.score }) }) })
        
    }
    render()
    {
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                {this.showModal()}
                <TouchableOpacity onPress={()=>{this.correctanswer(), this.setState({isModalVisible:true})}}>
                    <Text style={styles.button}>Submit</Text></TouchableOpacity>

                <Text style={styles.question}>Q 1 - If one zero of the quadratic polynomial x² + 3x + k is 2, then the value of k is</Text>                 
                <TextInput
                placeholder='Write The answer '
                style={styles.Option}
                onChangeText={(text)=>
                {
                    this.setState({ans1:text})
                }}
                value={this.state.ans1}
                />

<Text style={styles.question}>Q 2 - If one of the zeroes of the quadratic polynomial (k – 1) x² + kx + 1 is – 3, then the value of k is</Text>                 
                <TextInput
                placeholder='Write The answer '
                style={styles.Option}
                onChangeText={(text)=>
                {
                    this.setState({ans2:text})
                }}
                value={this.state.ans2}
                />

<Text style={styles.question}>Q 3 - If the zeroes of the quadratic polynomial x2 + (a + 1) x + b are 2 and -3, then</Text>                 
                <TextInput
                placeholder='Write The answer (use comma exmaple:10,30) '
                style={styles.Option}
                onChangeText={(text)=>
                {
                    this.setState({ans3:text})
                }}
                value={this.state.ans3}
                />

<Text style={styles.question}>Q 4 - The number of polynomials having zeroes as -2 and 5 is</Text>                 
                <TextInput
                placeholder='Write The answer'
                style={styles.Option}
                onChangeText={(text)=>
                {
                    this.setState({ans4:text})
                }}
                value={this.state.ans4}
                />
                <Text style={styles.question}>Q 5 -If one of the zeroes of the quadratic polynomial (p – l)x² + px + 1 is -3, then the value of p is</Text>                 
                <TextInput
                placeholder='Write The answer '
                style={styles.Option}
                onChangeText={(text)=>
                {
                    this.setState({ans5:text})
                }}
                value={this.state.ans5}
                />

<Text style={styles.question}>Q 6 - If x3 + 1 is divided by x² + 5, then the possible degree of quotient is</Text>                 
                <TextInput
                placeholder='Write The answer '
                style={styles.Option}
                onChangeText={(text)=>
                {
                    this.setState({ans6:text})
                }}
                value={this.state.ans6}
                />

<Text style={styles.question}>Q 7 - If x4 + 3x² + 7 is divided by 3x + 5, then the possible degrees of quotient and remainder are:</Text>                 
                <TextInput
                placeholder='Write The answer (example 10,20) '
                style={styles.Option}
                onChangeText={(text)=>
                {
                    this.setState({ans7:text})
                }}
                value={this.state.ans7}
                />

<Text style={styles.question}>Q 8 -  If x5 + 2x4 + x + 6 is divided by g(x), and quotient is x² + 5x + 7, then the possible degree of g(x) is:</Text>                 
                <TextInput
                placeholder='Write The answer '
                style={styles.Option}
                onChangeText={(text)=>
                {
                    this.setState({ans8:text})
                }}
                value={this.state.ans8}
                />

<Text style={styles.question}>Q 9 - What is the number of zeroes that a linear poly-nomial has/have:</Text>                 
                <TextInput
                placeholder='Write The answer '
                style={styles.Option}
                onChangeText={(text)=>
                {
                    this.setState({ans9:text})
                }}
                value={this.state.ans9}
                />

<Text style={styles.question}>Q 10 - What is the number(s) of zeroes that a quadratic polynomial has/have:</Text>                 
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
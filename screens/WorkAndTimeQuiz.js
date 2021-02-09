import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput,Modal } from 'react-native';
import firebase from 'firebase';
import db from '../config.js';
import { ScrollView } from 'react-native';


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
    componentDidUpdate()
    {
        
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
                    .then() .then((snapshot)=>{ snapshot.forEach((doc)=> { db.collection('users').doc(doc.id).update({ chapterwat:1 }) }) })}
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

        if(this.state.ans1==='40/9')
        {
            s=s+1
            console.log('answer1:',s)
        }
        if(this.state.ans2==='20')
        {
            s=s+1
            console.log('answer2:',s)
        }
        if(this.state.ans3==='11')
        {
            s=s+1
            console.log('answer3:',this.state.score)
        }
        if(this.state.ans4==='10,30')
        {
            s=s+1
        }
        if(this.state.ans5==='3000')
        {
            s=s+1
        }
        if(this.state.ans6==='2250,1500,750')
        {
            s=s+1
        }
        if(this.state.ans7==='30')
        {
            s=s+1
        }
        if(this.state.ans8==='8')
        {
            s=s+1
        }
        if(this.state.ans9==='75/2')
        {s=s+1
        }
        if(this.state.ans10==='45/2')
        {
            s=s+1
        }
        this.setState({score:s})
        db.collection('users').where("email","==",this.state.userId).get() 
        .then() 
        .then((snapshot)=>{ snapshot.forEach((doc)=>
            { db.collection('users').doc(doc.id).update({ scoreofworkandtime:this.state.score }) }) })
        
    }
    render()
    {
        return(
            <ScrollView>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                {this.showModal()}
                <TouchableOpacity onPress={()=>{this.correctanswer(),this.setState({isModalVisible:true})}}>
                    <Text style={styles.button}>Submit</Text></TouchableOpacity>
                    <Text>{this.state.score}</Text>
                <Text style={styles.question}>Q 1 - A can do a bit of work in 8 days, which B alone can do in 10 days in how long . In how long both cooperating can do it?</Text>                 
                <TextInput
                placeholder='Write The answer '
                style={styles.Option}
                onChangeText={(text)=>
                {
                    this.setState({ans1:text})
                }}
                value={this.state.ans1}
                />

<Text style={styles.question}>Q 2 - A and B together can dive a trench in 12 days, which A alone can dive in 30 days. In how long B alone can burrow it?</Text>                 
                <TextInput
                placeholder='Write The answer '
                style={styles.Option}
                onChangeText={(text)=>
                {
                    this.setState({ans2:text})
                }}
                value={this.state.ans2}
                />

<Text style={styles.question}>Q 3 - A can do a bit of work in 25 days which B can complete in 20 days. Both together labor for 5 days and afterward A leaves off. How long will B take to complete the remaining work?</Text>                 
                <TextInput
                placeholder='Write The answer '
                style={styles.Option}
                onChangeText={(text)=>
                {
                    this.setState({ans3:text})
                }}
                value={this.state.ans3}
                />

<Text style={styles.question}>Q 4 - A and B can do a bit of work in 12 days. B and C can do it in 15 days while C and A can do it in 20 days. In how long will they complete it cooperating? Additionally, in how long can A alone do it?</Text>                 
                <TextInput
                placeholder='Write The answer (use comma exmaple:10,30) '
                style={styles.Option}
                onChangeText={(text)=>
                {
                    this.setState({ans4:text})
                }}
                value={this.state.ans4}
                />
                <Text style={styles.question}>Q 5 - A can fabricate a divider in 30 days , while B alone can assemble it in 40 days, If they construct it together and get an installment of RS. 7000, what B's offer?</Text>                 
                <TextInput
                placeholder='Write The answer '
                style={styles.Option}
                onChangeText={(text)=>
                {
                    this.setState({ans5:text})
                }}
                value={this.state.ans5}
                />

<Text style={styles.question}>Q 6 - A can do a bit of work in 10 days while B alone can do it in 15 days. They cooperate for 5 days and whatever remains of the work is finished by C in 2 days. On the off chance that they get Rs. 4500 for the entire work, by what means if they partition the cash?</Text>                 
                <TextInput
                placeholder='Write The answer (example:100,1000,2000) '
                style={styles.Option}
                onChangeText={(text)=>
                {
                    this.setState({ans6:text})
                }}
                value={this.state.ans6}
                />

<Text style={styles.question}>Q 7 - A and B can do a bit of work in 12 days. B and C can do it in 15 days and C and A can do it in 20 days. A alone can take every necessary step in:</Text>                 
                <TextInput
                placeholder='Write The answer '
                style={styles.Option}
                onChangeText={(text)=>
                {
                    this.setState({ans7:text})
                }}
                value={this.state.ans7}
                />

<Text style={styles.question}>Q 8 - 2 men and 3 ladies can complete a bit of work in 10 days, while 4 men can do it in 10 days. In how long will 3 men and 3 ladies complete it?</Text>                 
                <TextInput
                placeholder='Write The answer '
                style={styles.Option}
                onChangeText={(text)=>
                {
                    this.setState({ans8:text})
                }}
                value={this.state.ans8}
                />

<Text style={styles.question}>Q 9 - A does 4/5th of a work in 20 days. He then assembles in B and they complete the remaining work in 3 days. To what extent B alone would take to do the entire work?</Text>                 
                <TextInput
                placeholder='Write The answer '
                style={styles.Option}
                onChangeText={(text)=>
                {
                    this.setState({ans9:text})
                }}
                value={this.state.ans9}
                />

<Text style={styles.question}>Q 10 - A is thrice as great a laborers as B and along these lines can complete an occupation in 60 days less than B. Cooperating, they can do it in</Text>                 
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
          </ScrollView>
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
    },
    KeyboardAvoidingView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff',
        borderColor:'black',
      },
      modalTitle :{
        justifyContent:'center',
        alignSelf:'center',
        fontSize:30,
        color:'#008080',
        margin:50
      },
      modalContainer:{
        flex:1,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"white",
        marginRight:30,
        marginLeft : 30,
        marginTop:80,
        marginBottom:80,
      },
      registerButton:{
        width:200,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        marginTop:30
      },
      
      registerButtonText:{
        color:'#05B8CC',
        fontSize:15,
        fontWeight:'bold'
      },
     
})
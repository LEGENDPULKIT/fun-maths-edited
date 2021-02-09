import React from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView} from 'react-native';
import db from '../config';
import firebase from 'firebase'

export default class LoginScreen extends React.Component
{
    constructor(){
        super();
        this.state={
          emailId:'',
          password:'',
          Name:'',
          age:'',
          confirmPassword:'',
          isModalVisible:'false'
        }
      }
    
      userSignUp = (emailId, password,confirmPassword,age) =>{
       if(password !== confirmPassword || age<12){
           return Alert.alert("password doesn't match\nCheck your password. \nor your age may be less than 12 ")
       }else{
         firebase.auth().createUserWithEmailAndPassword(emailId, password)
         .then(()=>{
           db.collection('users').add({
             name:this.state.Name,
             age:this.state.age,
             confirmPassword:this.state.confirmPassword,
             email:this.state.emailId,
             scoreofpolynomials:0,
             scoreoftrigonometry:0,
             scoreofworkandtime:0,
             chapterwat:0,
             chaptert:0,
             chapterp:0,
           })
           return  Alert.alert(
                'User Added Successfully',
                '',
                [
                  {text: 'OK', onPress: () => this.setState({"isModalVisible" : false})},
                ]
            );
         })
         .catch((error)=> {
           // Handle Errors here.
           var errorCode = error.code;
           var errorMessage = error.message;
           return Alert.alert(errorMessage)
         });
       }
     }
    
    userLogin = (emailId, password)=>{
       firebase.auth().signInWithEmailAndPassword(emailId, password)
       .then(()=>{
         this.props.navigation.navigate('Home')
       })
       .catch((error)=> {
         var errorCode = error.code;
         var errorMessage = error.message;
         return Alert.alert(errorMessage)
       })
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
            <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
            <Text
              style={styles.modalTitle}
              >Registration</Text>
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Name"}
              onChangeText={(text)=>{
                this.setState({
                  Name: text
                })
              }}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Age"}
              maxLength ={3}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  age: text
                })
              }}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Email"}
              keyboardType ={'email-address'}
              onChangeText={(text)=>{
                this.setState({
                  emailId: text
                })
              }}
            /><TextInput
              style={styles.formTextInput}
              placeholder ={"Password"}
              secureTextEntry = {true}
              onChangeText={(text)=>{
                this.setState({
                  password: text
                })
              }}
            /><TextInput
              style={styles.formTextInput}
              placeholder ={"Confrim Password"}
              secureTextEntry = {true}
              onChangeText={(text)=>{
                this.setState({
                  confirmPassword: text
                })
              }}
            />
            <View style={styles.modalBackButton}>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={()=>
                  this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword,this.state.age)
                }
              >
              <Text style={styles.registerButtonText}>Register</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.modalBackButton}>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={()=>this.setState({"isModalVisible":false})}
              >
              <Text style={styles.registerButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </Modal>
    )
    }
      render(){
        return(
          <KeyboardAvoidingView style={styles.container}>
            <View style={{justifyContent: 'center',alignItems: 'center'}}>
    
            </View>
              {
                this.showModal()
              }
            <View style={{justifyContent:'center', alignItems:'center'}}>
              <Text style={styles.title}>FUN MATHS</Text>
            </View>
            <View>
                <TextInput
                style={styles.loginBox}
                placeholder="Email Id"
                keyboardType ='email-address'
                onChangeText={(text)=>{
                  this.setState({
                    emailId: text
                  })
                }}
              />
              <TextInput
              style={styles.loginBox}
              secureTextEntry = {true}
              placeholder="enter Password"
              onChangeText={(text)=>{
                this.setState({
                  password: text
                })
              }}
            />
            <TouchableOpacity
               style={[styles.button,{marginBottom:20, marginTop:20}]}
               onPress = {()=>{
                 this.userLogin(this.state.emailId, this.state.password)
               }}
               >
               <Text style={styles.buttonText}>Login</Text>
             </TouchableOpacity>
    
             <TouchableOpacity
               style={styles.button}
               onPress={()=>this.setState({ isModalVisible:true})}
               >
               <Text style={styles.buttonText}>SignUp</Text>
             </TouchableOpacity>
          </View>
          </KeyboardAvoidingView>
        )
      }
    }
    
    const styles = StyleSheet.create({
      container:{
       flex:1,
       backgroundColor:'#66CCCC',
       alignItems: 'center',
       justifyContent: 'center'
     },
     profileContainer:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
     },
     title :{
       fontSize:65,
       fontWeight:'300',
       paddingBottom:30,
       color : '#008080'
     },
     loginBox:{
       width: 300,
       height: 40,
       borderBottomWidth: 1.5,
       borderColor : '#00868B',
       fontSize: 20,
       margin:10,
       paddingLeft:10
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
     formTextInput:{
       width:"75%",
       height:35,
       alignSelf:'center',
       borderColor:'black',
       borderRadius:10,
       borderWidth:1,
       marginTop:20,
       padding:10
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
    
     button:{
       width:300,
       height:50,
       justifyContent:'center',
       alignItems:'center',
       borderRadius:25,
       backgroundColor:"#05B8CC",
       shadowColor: "#000",
       shadowOffset: {
          width: 0,
          height: 8,
       },
       shadowOpacity: 0.30,
       shadowRadius: 10.32,
       elevation: 16,
       padding: 10
     },
     buttonText:{
       color:'#ffff',
       fontWeight:'200',
       fontSize:20
     }
    })
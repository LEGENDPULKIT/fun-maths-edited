import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MyHeader from '../Components/MyHeader';




export default class ChapterScreen extends React.Component
{
    render()
    {
        return(

            <View style={styles.container}>
                <MyHeader title="CHAPTERS" navigation={this.props.navigation}/>
                <View>
                <TouchableOpacity style={styles.chapter}
                onPress={()=>
                {
                    this.props.navigation.navigate('WorkAndTime')
                }}>
                    <Text style={styles.chapterText}>Work And Time</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.chapter}
                onPress={()=>
                {
                    this.props.navigation.navigate('Polynomials')
                }}>
                    <Text style={styles.chapterText}>Polynomials</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.chapter}
                onPress={()=>
                {
                    this.props.navigation.navigate('Trigonometry')
                }}>
                    <Text style={styles.chapterText}>Trigonometry</Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center'
      },
    chapter:{
        width:650,
        height:150,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#05B8CC",
        shadowColor: "#000",
        marginTop:20,
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10
      },
      chapterText:{
        color:'#ffff',
        fontWeight:'200',
        fontSize:40
      }
})
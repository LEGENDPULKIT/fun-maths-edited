import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,ScrollView,SafeAreaView } from 'react-native';
import {Header,Icon} from 'react-native-elements';




export default class WorkAndTime extends React.Component
{
    render()
    {
        return(
            <SafeAreaView>
                <ScrollView>
                <View style={styles.container}>

                
            
                 
            <Header
              leftComponent ={<Icon name='arrow-left' type='feather' color='#696969'  onPress={() => this.props.navigation.goBack()}/>}
              centerComponent={{ text:"WORK AND TIME", style: { color: '#00868B',fontWeight:"bold",fontSize:30} }}
              rightComponent={<TouchableOpacity style={styles.button} onPress={()=>
                {
                    this.props.navigation.navigate('WorkAndTimeQuiz')
                }}><Text>QUIZ</Text></TouchableOpacity>}
              backgroundColor = "#00CDCD"
            />
          
 <Text style={styles.topicText}>What is work?</Text>               

<Text style={styles.topicText}>In the language of maths work means the thing in which A body can consume some time.</Text>
<Text style={styles.topicText}>What is time?</Text>
<Text style={styles.topicText}>In math, time can be defined as the ongoing and continuous sequence of events that occur in succession, from the past through the present to the future. Time is a used to quantify, measure or compare the duration of events or the intervals between them, and even, sequence events.
</Text>
<Text style={styles.topicText}>Now we know that what is time and what is work but what is the relation between time and work. Every work needs some time and, in this chapter, we are going to learn how to calculate the time taken to complete the work and vice versa
</Text>
<Text style={styles.topicText}>Suppose E can finish a work in 10 days then using unitary method we can easily calculate the work he finishes in1 day
</Text>
<Text style={styles.topicText}>So, in 1 day he finishes=1/10 work</Text> 
<Text style={styles.topicText}>(Remember full work is count as 1 and all the fractional part is the part of work done by 11the particular object)</Text> 
<Text style={styles.topicText}>This is simple now let’s make it little difficult</Text>
<Text style={styles.topicText}>Now assume that there are two friends Rohan and Mohan</Text>
<Text style={styles.topicText}>Rohan can finish the work in 10 days while Mohan take 12 days to complete the same work then calculate the time they take if they work together
In this case first we calculate the one-day work of each</Text>
<Text style={styles.topicText}>So, Rohan 1 day work=1/10 work</Text>
<Text style={styles.topicText}>Mohan 1 day work=1/12 work</Text>
<Text style={styles.topicText}>After finding the one-day work of each add them to find the one-day work when they work together
1/10 +1/12=11/60</Text>
<Text style={styles.topicText}>Now 11/60 is the work they done if they work together for one day</Text>
<Text style={styles.topicText}>To find the day they take to complete the work just reciprocal it therefore they take 60/11 days to complete the work.</Text>
<Text style={styles.topicText}>See how easy it was now let go deeper in it </Text>
<Text style={styles.topicText}>Suppose, A can do a work in 15 days and B in 20 days. If they work on it together for 4 days, then the fraction of the work that is left is:</Text>


	

<Text style={styles.topicText}>So firstly, using unitary method find the one day of work of A and B</Text>
<Text style={styles.topicText}>A’s 1 day work=1/15</Text>
<Text style={styles.topicText}>B’s 1 day work =1/20</Text>

<Text style={styles.topicText}>Now work of one day if they work together is</Text>

<Text style={styles.topicText}>1/15+1/20=7/60
It is given that they work for 4 days, so work they done in 4 days is
7/60 multiply by 4=7/15</Text>
<Text style={styles.topicText}>We know that full work is 1 so the remaining work is
Whole work-work they done=1-7/15=8/15</Text>
<Text style={styles.topicText}>So the fraction of work left is 8/15</Text>

<Text style={styles.topicText}>Lets now understand the main scenario</Text>
<Text style={styles.topicText}>Let A and B can do a piece of work in 40 days, B and C can do it in 120 days. If B alone can do it in 180 days, in how many days will A and C do it together?</Text>


<Text style={styles.topicText}>A + B take 40 days. B alone takes 180 days.</Text>
<Text style={styles.topicText}>∴ A will take 1/40 – 1/180 = 7/360 ⇒ 360/7 days.</Text>
<Text style={styles.topicText}>B + C take 120 days. ∴ C alone will take 1/120 – 1/180 = 1/360</Text>

<Text style={styles.topicText}>i.e. 360 days. ∴ A and C together will take 7/360 + 1/360
= 8/360 ⇒ 360/8 = 45 days to complete the work.</Text>


<Text style={styles.topicText}>And watch the video for more information regarding time and work
https://youtu.be/xhTYMyr-NF8</Text>

<Text style={styles.topicText}>Now try some questions from the given link
https://www.indiabix.com/aptitude/time-and-work/</Text>


                
            
            </View>
            </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    container:
    {backgroundColor:'#97FFFF',flex:1,},
    topicText:
    {
        fontSize:20,
        color:'black',
        marginLeft:30,
        
    },
    button:
      {
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
})
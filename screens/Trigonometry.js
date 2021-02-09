import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import {Header,Icon} from 'react-native-elements';
import t1 from '../img/t1.png';
import t2 from '../img/t2.png';
import t3 from '../img/t3.png';
import t4 from '../img/t4.png';
import t5 from '../img/t5.png';

export default class Trigonometry extends React.Component
{
    render()
    {
        return(
            <View style={{backgroundColor:'#97FFFF',flex:1,justifyContent:'center'}}>
                 <View style={{flex:0.1}}>
            <Header
              leftComponent ={<Icon name='arrow-left' type='feather' color='#696969'  onPress={() => this.props.navigation.goBack()}/>}
              centerComponent={{ text:"TRIGONOMETRY", style: { color: '#00868B',fontWeight:"bold",fontSize:30} }}
              rightComponent={<TouchableOpacity style={styles.button} onPress={()=>
                {
                    this.props.navigation.navigate('TrigonometryQuiz')
                }}>QUIZ</TouchableOpacity>}
              backgroundColor = "#00CDCD"
            />
          </View>
            
          

          <Text style={styles.topicText}>What is Trigonometry</Text>
          <Text style={styles.topicText}>• Trigomometry from Greek trigõnon, "triangle" and metron, "measure") is a branch of mathematics that studies relationships involving lengths and angles of triangles.</Text>
          <Text style={styles.topicText}>• The field emerged during the 3rd century BC from applications of geometry to astronomical studies.</Text>
          <Text style={styles.topicText}>• Trigonometry is most simply associated with planar right angle triangles (each of which is a two-dimensional triangle with one angle equal to 90 degrees).</Text>
          <Text style={styles.topicText}>• The applicability to non-right-angle triangles exists, but, since any non-right-angle triangle (on a flat plane) can be bisected to create two right-angle triangles, most problems can be reduced to calculations on right-angle triangles. Thus the majority of applications relate to right-angle triangles</Text>
          <Text style={styles.topicText}>Right triangle trigonometry and Trigonometric ratios</Text>
          <Image style={{ width: 800,height: 400,alignSelf:'center'}}
                    source={t5}
                    />

          <Text style={styles.topicText}>• In a right angle triangle ABC where B=90°</Text>
 
          <Text style={styles.topicText}>• We can define following term for angle A</Text>
          <Image style={{ width: 800,height: 200,alignSelf:'center'}}
                    source={t4}
                    />
 
          <Text style={styles.topicText}>• We can define the trigonometric ratios for angle A as</Text>
          <Image style={{ width: 800,height: 500,alignSelf:'center'}}
                    source={t3}
                    />
 
          <Text style={styles.topicText}>Notice that each ratio in the right-hand column is the inverse, or the reciprocal, of the ratio in the left-hand column.</Text>
          <Text style={styles.topicText}>The reciprocal of sin A is cosec A ; and vice-versa.</Text>
          <Text style={styles.topicText}>The reciprocal of cos A is sec A</Text>
          <Text style={styles.topicText}>And the reciprocal of tan A is cot A</Text>
          <Text style={styles.topicText}>These are valid for acute angles.</Text>
          <Text style={styles.topicText}>• We can define tanA=sinAcosAtan⁡A=sin⁡Acos⁡A</Text>
          <Text style={styles.topicText}>And CotA=cosASinACotA=cosASinA</Text>

          <Text style={styles.topicText}>Important Note</Text>
          <Text style={styles.topicText}>Since the hypotenuse is the longest side in a right triangle, the value of</Text>
          <Text style={styles.topicText}>sin A or cos A is always less than 1 (or, in particular, equal to 1).</Text>
          
          <Text style={styles.topicText}>Trigonometric Identities List</Text>
          <Image style={{ width: 800,height: 400,alignSelf:'center'}}
                    source={t2}
                    />
          <Text style={styles.topicText}>There are various identities in trigonometry which are used for many trigonometric problems. Let us see all the fundamental trigonometric identities here.</Text>
          <Text style={styles.topicText}>Reciprocal Identities</Text>
          <Text style={styles.topicText}>•	Sin θ = 1/Csc θ or Csc θ = 1/Sin θ</Text>
          <Text style={styles.topicText}>•	Cos θ = 1/Sec θ or Sec θ = 1/Cos θ</Text>
          <Text style={styles.topicText}>•	Tan θ = 1/Cot θ or Cot θ = 1/Tan θ</Text>
          <Text style={styles.topicText}>Pythagorean Identities</Text>
          <Text style={styles.topicText}>•	sin2 a + cos2 a = 1</Text>
          <Text style={styles.topicText}>•	1+tan2 a  = sec2 a</Text>
          <Text style={styles.topicText}>•	cosec2 a = 1 + cot2 a</Text>
          <Text style={styles.topicText}>Ratio Identities</Text>
          <Text style={styles.topicText}>•	Tan θ = Sin θ/Cos θ</Text>
          <Text style={styles.topicText}>•	Cot θ = Cos θ/Sin θ</Text>
          <Text style={styles.topicText}>Opposite Angle Identities</Text>
          <Text style={styles.topicText}>•	Sin (-θ) = – Sin θ</Text>
          <Text style={styles.topicText}>•	Cos (-θ) = Cos θ</Text>
          <Text style={styles.topicText}>•	Tan (-θ) = – Tan θ</Text>
          <Text style={styles.topicText}>•	Cot (-θ) = – Cot θ</Text>
          <Text style={styles.topicText}>•	Sec (-θ) = Sec θ</Text>
          <Text style={styles.topicText}>•	Csc (-θ) = -Csc θ</Text>
          <Text style={styles.topicText}>Complementary Angles Identities</Text>
          <Text style={styles.topicText}>•	Sin (90 – θ) = Cos θ</Text>
          <Text style={styles.topicText}>•	Cos (90 – θ) = Sin θ</Text>
          <Text style={styles.topicText}>•	Tan (90 – θ) = Cot θ</Text>
          <Text style={styles.topicText}>•	Cot ( 90 – θ) = Tan θ</Text>
          <Text style={styles.topicText}>•	Sec (90 – θ) = Csc θ</Text>
          <Text style={styles.topicText}>•	Csc (90 – θ) = Sec θ</Text>
          <Text style={styles.topicText}>Angle Sum and Difference Identities</Text>
          <Text style={styles.topicText}>Consider two angles , α and β, the trigonometric sum and difference identities are as follows:</Text>
          <Text style={styles.topicText}>•	sin(α+β)=sin(α).cos(β)+cos(α).sin(β)</Text>
          <Text style={styles.topicText}>•	sin(α–β)=sinα.cosβ–cosα.sinβ</Text>
          <Text style={styles.topicText}>•	cos(α+β)=cosα.cosβ–sinα.sinβ</Text>
          <Text style={styles.topicText}>•	cos(α–β)=cosα.cosβ+sinα.sinβ</Text>
          <Text style={styles.topicText}>•	tan(α+β)=tanα+tanβ1–tanα.tanβ</Text>
          <Text style={styles.topicText}>•	tan(α–β)=tanα–tanβ1+tanα.tanβ</Text>
          <Text style={styles.topicText}>Trigonometric Identities Formula</Text>
          <Text style={styles.topicText}>Similarly, an equation which involves trigonometric ratios of an angle represents a trigonometric identity.</Text>
          <Text style={styles.topicText}>The upcoming discussion covers the fundamental trigonometric identities and their proofs.</Text>
          <Text style={styles.topicText}>Consider the right angle ∆ABC which is right-angled at B as shown in the given figure.</Text>
          <Image style={{ width: 800,height: 400,alignSelf:'center'}}
                    source={t1}
                    />
 
          <Text style={styles.topicText}>Applying Pythagoras Theorem for the given triangle, we have</Text>
          <Text style={styles.topicText}>(hypotenuse)2 = (base)2 + (perpendicular)2</Text>
          <Text style={styles.topicText}>AC2 = AB2+BC2     ………………………..(1)</Text>
          <Text style={styles.topicText}>Let us prove the three Pythagoras trigonometric identities, which are commonly used.</Text>
          <Text style={styles.topicText}>Trigonometric Identity 1</Text>
          <Text style={styles.topicText}>Now, divide each term of equation (1) by AC2, we have</Text>
          <Text style={styles.topicText}>AC2AC2 = AB2AC2 + BC2AC2</Text>
          <Text style={styles.topicText}>⇒AB2AC2+BC2AC2 = 1</Text>
          <Text style={styles.topicText}>⇒(ABAC)2+(BCAC)2 = 1 ………………………….(2)</Text>
          <Text style={styles.topicText}>We know that,</Text>
          <Text style={styles.topicText}>(ABAC)2=cosa and (BCAC)2=sina, thus equation (2) can be written as-</Text>
          <Text style={styles.topicText}>sin2 a + cos2 a = 1</Text>
          <Text style={styles.topicText}>Identity 1 is valid for angles 0 ≤ a ≤ 90.</Text>

          <Text style={styles.topicText}>Trigonometric Identity 2</Text>
          <Text style={styles.topicText}>Now Dividing the equation (1) by AB2, we get</Text>
          <Text style={styles.topicText}>AC2AB2 = AB2AB2+BC2AB2</Text>
          <Text style={styles.topicText}>⇒AC2AB2 = 1+BC2AB2</Text>
          <Text style={styles.topicText}>⇒(ACAB)2 = 1+(BCAB)2 ……………………(3)</Text>
          <Text style={styles.topicText}>By referring trigonometric ratios, it can be seen that:</Text>
          <Text style={styles.topicText}>ACAB = hypotenuseside adjacent to angle a = seca</Text>
          <Text style={styles.topicText}>Similarly,</Text>
          <Text style={styles.topicText}>BCAB = side opposite to angle aside adjacent to angle a = tana</Text>
          <Text style={styles.topicText}>Replacing the values of ACAB and BCAB in the equation (3) gives,</Text>
          <Text style={styles.topicText}>1+tan2 a  = sec2 a</Text>
          <Text style={styles.topicText}>As it is known that tan a is not defined for a = 90° therefore  identity 2 obtained above is true for 0 ≤ A is greater than 90.</Text>
          <Text style={styles.topicText}>Trigonometric Identity 3</Text>
          <Text style={styles.topicText}>Dividing the equation (1) by BC2, we get</Text>
          <Text style={styles.topicText}>AC2BC2 = AB2BC2 + BC2BC2</Text>
          <Text style={styles.topicText}>⇒AC2BC2 = AB2BC2+1</Text>
          <Text style={styles.topicText}>⇒(ACBC)2 = (ABBC)2+1 …………………..(iv) </Text>
          <Text style={styles.topicText}>By referring trigonometric ratios, it can be seen that:</Text>
          <Text style={styles.topicText}>ACBC = hypotenuseside opposite to angle a = cosecA</Text>
          <Text style={styles.topicText}>Also,</Text>
          <Text style={styles.topicText}>ABBC = side adjacent to angle aside opposite to angle a = cotA</Text>
          <Text style={styles.topicText}>Replacing the values of ACBC and ABBC in the equation (4) gives,</Text>
          <Text style={styles.topicText}>cosec2 a = 1 + cot2 a</Text>
          <Text style={styles.topicText}>Since cosec a and cot a are not defined for a = 0°, therefore the identity 3 is obtained is true for all the values of ‘a’ except at a = 0°. Therefore, the identity is true for all such that, 0° is greater than A and A is greater or equal to 90</Text>
          <Text style={styles.topicText}>Trigonometric Identities Problems</Text>
          <Text style={styles.topicText}>Go through the below problem which is solved by using the trigonometric identities.</Text>
          <Text style={styles.topicText}>Example:</Text>
          <Text style={styles.topicText}>Consider a  triangle ABC, right-angled at B. The length of the base, AB = 4 cm and length of perpendicular BC =3 cm. Find the value of sec A.</Text>
          <Text style={styles.topicText}>Solution:</Text>
          <Text style={styles.topicText}>As the length of the perpendicular and base is given; it can be concluded that,</Text>
          <Text style={styles.topicText}>tan A = 3/4</Text>
          <Text style={styles.topicText}>Now, using the trigonometric identity: 1+tan2 a  = sec2 a</Text>
          <Text style={styles.topicText}>sec2 A = 1 + (3/4)2</Text>
          <Text style={styles.topicText}>sec2 A = 25/16</Text>
<Text style={styles.topicText}>sec A = ±5/4</Text>
<Text style={styles.topicText}>Since, the ratio of lengths is positive, we can neglect sec A = 5/4.</Text>
<Text style={styles.topicText}>Therefore, sec A = 5/4</Text>




   
            </View>
        )
    }
}

const styles=StyleSheet.create({
    topicText:
    {
        fontSize:20,
        color:'black',
        marginLeft:30
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
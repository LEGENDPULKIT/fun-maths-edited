import React from 'react';
import { Linking } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import {Header,Icon} from 'react-native-elements'
import p1 from '../img/p1.png';
import p2 from '../img/p2.png';
import p3 from '../img/p3.png';
import p4 from '../img/p4.png';
import p5 from '../img/p5.png';



export default class Polynomial extends React.Component
{
    render()
    {
        return(
            
            <View style={{backgroundColor:'#97FFFF',flex:1,justifyContent:'center'}}>
               <View style={{flex:0.1}}>
            <Header
              leftComponent ={<Icon name='arrow-left' type='feather' color='#696969'  onPress={() => this.props.navigation.goBack()}/>}
              centerComponent={{ text:"POLYNOMIALS", style: { color: '#00868B',fontWeight:"bold",fontSize:30} }}
              rightComponent={<TouchableOpacity style={styles.button} 
              onPress={()=>
                {
                    this.props.navigation.navigate('PolynomialsQuiz')
                }}><Text style={{alignSelf:'center'}}>QUIZ</Text></TouchableOpacity>}
              backgroundColor = "#00CDCD"
            />
          </View>
                <Text style={styles.topicText}>What is a Polynomial?</Text>
                <Text style={styles.topicText}>Polynomial is made up of two terms, namely Poly (meaning “many”) and Nominal (meaning “terms.”). A polynomial is defined as an expression which is composed of variables, constants and exponents, that are combined using the mathematical operations such as addition, subtraction, multiplication and division (No division operation by a variable). Based on the numbers of terms present in the expression, it is classified as monomial, binomial, and trinomial. Examples of constants, variables and exponents are as follows:</Text>
                <Text style={styles.topicText}>• Constants. Example: 1, 2, 3, etc.</Text>
                <Text style={styles.topicText}>• Variables. Example: g, h, x, y, etc.</Text>
                <Text style={styles.topicText}>• Exponents: Example: 5 in x5 etc.</Text>
                <Text style={styles.topicText}>Notation</Text>
                <Text style={styles.topicText}>The polynomial function is denoted by P(x) where x represents the variable. For example,</Text>
                <Text style={styles.topicText}>P(x) = x2-5x+11</Text>
                <Text style={styles.topicText}>If the variable is denoted by a, then the function will be P(a)</Text>
                <Text style={styles.topicText}>Degree of a Polynomial</Text>
                <Text style={styles.topicText}>The degree of a polynomial is defined as the highest degree of a monomial within a polynomial. Thus, a polynomial equation having one variable which has the largest exponent is called a degree of the polynomial.</Text>
                <Image style={{ width: 800,height: 400,alignSelf:'center'}}
                    source={p5}
                    />
                <Text style={styles.topicText}>Polynomial	Degree	Example</Text>
                <Text style={styles.topicText}>Constant or Zero Polynomial	0	6</Text>
                <Text style={styles.topicText}>Linear Polynomial	1	3x+1</Text>
                <Text style={styles.topicText}>Quadratic Polynomial	2	4x2+1x+1</Text>
                <Text style={styles.topicText}>Cubic Polynomial	3	6x3+4x3+3x+1</Text>
                <Text style={styles.topicText}>Quartic Polynomial	4	6x4+3x3+3x2+2x+1</Text>
                <Text style={styles.topicText}>Example: Find the degree of the polynomial 6s4+ 3x2+ 5x +19</Text>
                <Text style={styles.topicText}>Solution:</Text>
                <Text style={styles.topicText}>The degree of the polynomial is 4.</Text>
                <Text style={styles.topicText}>Terms of a Polynomial</Text>
                <Text style={styles.topicText}>The terms of polynomials are the parts of the equation which are generally separated by “+” or “-” signs. So, each part of a polynomial in an equation is a term. For example, in a polynomial, say, 2x2 + 5 +4, the number of terms will be 3. The classification of a polynomial is done based on the number of terms in it.</Text>
                <Image style={{ width: 800,height: 400,alignSelf:'center'}}
                    source={p4}
                    />
                <Text style={styles.topicText}>Polynomial	Terms	Degree</Text>
                <Text style={styles.topicText}>P(x) = x3-2x2+3x+4	x3, -2x2, 3x and 4	3</Text>
                <Text style={styles.topicText}>Types of Polynomials</Text>
                <Text style={styles.topicText}>Polynomials are of 3 different types and are classified based on the number of terms in it. The three types of polynomials are:</Text>
                <Text style={styles.topicText}>• Monomial</Text>
                <Text style={styles.topicText}>• Binomial</Text>
                <Text style={styles.topicText}>• Trinomial</Text>
                <Text style={styles.topicText}>These polynomials can be combined using addition, subtraction, multiplication, and division but is never division by a variable. A few examples of Non Polynomials are: 1/x+2, x-3</Text>

                <Text style={styles.topicText}>Monomial</Text>
                <Text style={styles.topicText}>A monomial is an expression which contains only one term. For an expression to be a monomial, the single term should be a non-zero term. A few examples of monomials are:</Text>
                <Text style={styles.topicText}>• 5x</Text>
                <Text style={styles.topicText}>• 3</Text>
                <Text style={styles.topicText}>• 6a4</Text>
                <Text style={styles.topicText}>• -3xy</Text>
                <Text style={styles.topicText}>Binomial</Text>
                <Text style={styles.topicText}>A binomial is a polynomial expression which contains exactly two terms. A binomial can be considered as a sum or difference between two or more monomials. A few examples of binomials are:</Text>
                <Text style={styles.topicText}>• – 5x+3,</Text>
                <Text style={styles.topicText}>• 6a4 + 17x</Text>
                <Text style={styles.topicText}>• xy2+xy</Text>
                <Text style={styles.topicText}>Trinomial</Text>
                <Text style={styles.topicText}>A trinomial is an expression which is composed of exactly three terms. A few examples of trinomial expressions are:</Text>
                <Text style={styles.topicText}>• – 8a4+2x+7</Text>
                <Text style={styles.topicText}>• 4x2 + 9x + 7</Text>
                <Image style={{ width: 800,height: 400,alignSelf:'center'}}
                    source={p3}
                    />
                <Text style={styles.topicText}>Monomial	Binomial	Trinomial</Text>
                <Text style={styles.topicText}>One Term	Two terms	Three terms</Text>
                <Text style={styles.topicText}>Example: x, 3y, 29, x/2	Example: x2+x, x3-2x, y+2	Example: x2+2x+20</Text>
                <Text style={styles.topicText}>Properties</Text>
                <Text style={styles.topicText}>Some of the important properties of polynomials along with some important polynomial theorems are as follows:</Text>
                <Text style={styles.topicText}>Property 1: Division Algorithm</Text>
                <Text style={styles.topicText}>If a polynomial P(x) is divided by a polynomial G(x) results in quotient Q(x) with remainder R(x), then,</Text>
                <Text style={styles.topicText}>P(x) = G(x) • Q(x) + R(x)</Text>
                <Text style={styles.topicText}>Property 2: Bezout’s Theorem</Text>
                <Text style={styles.topicText}>Polynomial P(x) is divisible by binomial (x – a) if and only if P(a) = 0.</Text>
                <Text style={styles.topicText}>Property 3: Remainder Theorem</Text>
                <Text style={styles.topicText}>If P(x) is divided by (x – a) with remainder r, then P(a) = r.</Text>
                <Text style={styles.topicText}>Property 4: Factor Theorem</Text>
                <Text style={styles.topicText}>A polynomial P(x) divided by Q(x) results in R(x) with zero remainders if and only if Q(x) is a factor of P(x).</Text>
                <Text style={styles.topicText}>Learn More: Factor Theorem</Text>
                <Text style={styles.topicText}>Property 5: Intermediate Value Theorem</Text>
                <Text style={styles.topicText}>If P(x) is a polynomial, and P(x) ≠ P(y) for x is greater than y, then P(x) takes every value from P(x) to P(y) in the closed interval [x, y].</Text>
                <Text style={styles.topicText}>Learn More: Intermediate Value Theorem</Text>
                <Text style={styles.topicText}>Property 6</Text>
                <Text style={styles.topicText}>The addition, subtraction and multiplication of polynomials P and Q result in a polynomial where,</Text>
                <Text style={styles.topicText}>Degree(P ± Q) ≤ Degree(P or Q)</Text>
                <Text style={styles.topicText}>Degree(P × Q) = Degree(P) + Degree(Q)</Text>
                <Text style={styles.topicText}>Property 7</Text>
                <Text style={styles.topicText}>If a polynomial P is divisible by a polynomial Q, then every zero of Q is also a zero of P.</Text>
                <Text style={styles.topicText}>Property 8</Text>
                <Text style={styles.topicText}>If a polynomial P is divisible by two coprime polynomials Q and R, then it is divisible by (Q • R).</Text>
                <Text style={styles.topicText}>Property 9</Text>
                <Text style={styles.topicText}>If P(x) = a0 + a1x + a2x2 + …… + anxn is a polynomial such that deg(P) = n ≥ 0 then, P has at most “n” distinct roots.</Text>
                <Text style={styles.topicText}>Property 10: Descartes’ Rule of Sign</Text>
                <Text style={styles.topicText}>The number of positive real zeroes in a polynomial function P(x) is the same or less than by an even number as the number of changes in the sign of the coefficients. So, if there are “K” sign changes, the number of roots will be “k” or “(k – a)”, where “a” is some even number.</Text>
                <Text style={styles.topicText}>Property 11: Fundamental Theorem of Algebra</Text>
                <Text style={styles.topicText}>Every non-constant single-variable polynomial with complex coefficients has at least one complex root.</Text>
                <Text style={styles.topicText}>Property 12</Text>
                <Text style={styles.topicText}>If P(x) is a polynomial with real coefficients and has one complex zero (x = a – bi), then x = a + bi will also be a zero of P(x). Also, x2 – 2ax + a2 + b2 will be a factor of P(x).</Text>
                <Text style={styles.topicText}>Polynomial Equations</Text>
                <Text style={styles.topicText}>The polynomial equations are those expressions which are made up of multiple constants and variables. The standard form of writing a polynomial equation is to put the highest degree first then, at last, the constant term. An example of a polynomial equation is:</Text>
                <Text style={styles.topicText}>b = a4 +3a3 -2a2 +a +1</Text>
                <Text style={styles.topicText}>Polynomial Functions</Text>
                <Text style={styles.topicText}>A polynomial function is an expression constructed with one or more terms of variables with constant exponents. If there are real numbers denoted by a, then function with one variable and of degree n can be written as:</Text>
                <Text style={styles.topicText}>f(x) = a0xn + a1xn-1 + a2xn-2 + ….. + an-2x2 + an-1x + an</Text>
                <Text style={styles.topicText}>Solving Polynomials</Text>
                <Text style={styles.topicText}>Any polynomial can be easily solved using basic algebra and factorization concepts. While solving the polynomial equation, the first step is to set the right-hand side as 0. The explanation of a polynomial solution is explained in two different ways:</Text>
                <Text style={styles.topicText}>• Solving Linear Polynomials</Text>
                <Text style={styles.topicText}>• Solving Quadratic Polynomials</Text>
                <Text style={styles.topicText}>Solving Linear Polynomials</Text>
                <Text style={styles.topicText}>Getting the solution of linear polynomials is easy and simple. First, isolate the variable term and make the equation as equal to zero. Then solve as basic algebra operation. An example of finding the solution of a linear equation is given below:</Text>
                <Text style={styles.topicText}>Example: Solve 3x – 9</Text>
                <Text style={styles.topicText}>Solution:</Text>
                <Text style={styles.topicText}>First, make the equation as 0. So,</Text>
                <Text style={styles.topicText}>3x – 9 = 0</Text>
                <Text style={styles.topicText}>⇒ 3x = 9</Text>
                <Text style={styles.topicText}>⇒ x = 9/3</Text>
                <Text style={styles.topicText}>Or, x = 3.</Text>
                <Text style={styles.topicText}>Thus, the solution of 3x-9 is x = 3.</Text>

                <Text style={styles.topicText}>Solving Quadratic Polynomials</Text>
                <Text style={styles.topicText}>To solve a quadratic polynomial, first, rewrite the expression in the descending order of degree. Then, equate the equation and perform polynomial factorization to get the solution of the equation. An example to find the solution of a quadratic polynomial is given below for better understanding.</Text>
                <Text style={styles.topicText}>Example: Solve 3x2 – 6x + x3 – 18</Text>
                <Text style={styles.topicText}>Solution:</Text>
                <Text style={styles.topicText}>First, arrange the polynomial in the descending order of degree and equate to zero.</Text>
                <Text style={styles.topicText}>⇒ x3 + 3x2 -6x – 18 = 0</Text>
                <Text style={styles.topicText}>Now, take the common terms.</Text>
                <Text style={styles.topicText}>x2(x+3) – 6(x+3) =0</Text>
                <Text style={styles.topicText}>⇒ (x2-6)(x+3)=0</Text>
                <Text style={styles.topicText}>So, the solutions will be x =-3 and</Text>
                <Text style={styles.topicText}>x2 = 6</Text>
                <Text style={styles.topicText}>Or, x = √6</Text>
                <Text style={styles.topicText}>More Polynomials Related Resources:</Text>
                <Image style={{ width: 800,height: 400,alignSelf:'center'}}
                    source={p1}
                    />
                <Text style={styles.topicText}>Remainder Theorem And Polynomials</Text>
                <Text style={styles.topicText}>Algebraic Expressions</Text>

                <Text style={styles.topicText}>Polynomials Worksheets</Text>
                <Text style={styles.topicText}>Zeros Of polynomial</Text>

                <Text style={styles.topicText}>Polynomial Operations</Text>
                <Text style={styles.topicText}>There are four main polynomial operations which are:</Text>
                <Text style={styles.topicText}>• Addition of Polynomials</Text>
                <Text style={styles.topicText}>• Subtraction of Polynomials</Text>
                <Text style={styles.topicText}>• Multiplication of Polynomials</Text>
                <Text style={styles.topicText}>• Division of Polynomials</Text>
                <Text style={styles.topicText}>Each of the operations on polynomials is explained below using solved examples.</Text>

                <Text style={styles.topicText}>Addition of Polynomials</Text>
                <Text style={styles.topicText}>To add polynomials, always add the like terms, i.e. the terms having the same variable and power. The addition of polynomials always results in a polynomial of the same degree. For example,</Text>
                <Text style={styles.topicText}>Example: Find the sum of two polynomials: 5x3+3x2y+4xy−6y2, 3x2+7x2y−2xy+4xy2−5</Text>
                <Text style={styles.topicText}>Solution:</Text>
                <Text style={styles.topicText}>First, combine the like terms while leaving the unlike terms as they are. Hence,</Text>
                <Text style={styles.topicText}>(5x3+3x2y+4xy−6y2)+(3x2+7x2y−2xy+4xy2−5)</Text>
                <Text style={styles.topicText}>= 5x3+3x2+(3+7)x2y+(4−2)xy+4xy2−6y2−5</Text>
                <Text style={styles.topicText}>= 5x3+3x2+10x2y+2xy+4xy2−6y2−5</Text>

                <Text style={styles.topicText}>Subtraction of Polynomials</Text>
                <Text style={styles.topicText}>Subtracting polynomials is similar to addition, the only difference being the type of operation. So, subtract the like terms to obtain the solution. It should be noted that subtraction of polynomials also results in a polynomial of the same degree.</Text>
                <Text style={styles.topicText}>Example: Find the difference of two polynomials: 5x3+3x2y+4xy−6y2, 3x2+7x2y−2xy+4xy2−5</Text>
                <Text style={styles.topicText}>Solution:</Text>
                <Text style={styles.topicText}>First, combine the like terms while leaving the unlike terms as they are. Hence,</Text>
                <Text style={styles.topicText}>(5x3+3x2y+4xy−6y2)-(3x2+7x2y−2xy+4xy2−5)</Text>
                <Text style={styles.topicText}>= 5x3-3x2+(3-7)x2y+(4+2)xy-4xy2−6y2+5</Text>
                <Text style={styles.topicText}>= 5x3-3x2-4x2y+6xy-4xy2−6y2+5</Text>

                <Text style={styles.topicText}>Multiplication of Polynomials</Text>
                <Text style={styles.topicText}>Two or more polynomial when multiplied always result in a polynomial of higher degree (unless one of them is a constant polynomial). An example of multiplying polynomials is given below:</Text>
                <Text style={styles.topicText}>Example: Solve (6x−3y)×(2x+5y)</Text>
                <Text style={styles.topicText}>Solution:</Text>
                <Text style={styles.topicText}>⇒ 6x ×(2x+5y)–3y × (2x+5y) ———- Using distributive law of multiplication</Text>
                <Text style={styles.topicText}>⇒ (12x2+30xy) – (6yx+15y2) ———- Using distributive law of multiplication</Text>
                <Text style={styles.topicText}>⇒12x2+30xy–6xy–15y2 —————– as xy = yx</Text>
                <Text style={styles.topicText}>Thus, (6x−3y)×(2x+5y)=12x2+24xy−15y2</Text>

                <Text style={styles.topicText}>Division of Polynomials</Text>
                <Text style={styles.topicText}>Division of two polynomial may or may not result in a polynomial. Let us study below the division of polynomials in details. To divide polynomials, follow the given steps:</Text>
                <Text style={styles.topicText}>Polynomial Division Steps:</Text>
                <Text style={styles.topicText}>If a polynomial has more than one term, we use long division method for the same. Following are the steps for it.</Text>
                <Text style={styles.topicText}>1. Write the polynomial in descending order.</Text>
                <Text style={styles.topicText}>2. Check the highest power and divide the terms by the same.</Text>
                <Text style={styles.topicText}>3. Use the answer in step 2 as the division symbol.</Text>
                <Text style={styles.topicText}>4. Now subtract it and bring down the next term.</Text>
                <Text style={styles.topicText}>5. Repeat step 2 to 4 until you have no more terms to carry down.</Text>
                <Text style={styles.topicText}>6. Note the final answer, including remainder, will be in the fraction form (last subtract term).</Text>
                <Text style={styles.topicText}>Polynomial Examples</Text>
                <Text style={styles.topicText}>Example:</Text>
                <Text style={styles.topicText}>Given two polynomial 7s3+2s2+3s+9 and 5s2+2s+1.</Text>
                <Text style={styles.topicText}>Solve these using mathematical operation.</Text>
                <Text style={styles.topicText}>Solution:</Text>
                <Text style={styles.topicText}>Given polynomial:</Text>
                <Text style={styles.topicText}>7s3+2s2+3s+9 and 5s2+2s+1</Text>
                <Text style={styles.topicText}>Polynomial Addition: (7s3+2s2+3s+9) + (5s2+2s+1)</Text>
                <Text style={styles.topicText}>= 7s3+(2s2+5s2)+(3s+2s)+(9+1)</Text>
                <Text style={styles.topicText}>= 7s3+7s2+5s+10</Text>
                <Text style={styles.topicText}>Hence, addition result in a polynomial.</Text>
                <Text style={styles.topicText}>Polynomial Subtraction: (7s3+2s2+3s+9) – (5s2+2s+1)</Text>
                <Text style={styles.topicText}>= 7s3+(2s2-5s2)+(3s-2s)+(9-1)</Text>
                <Text style={styles.topicText}>= 7s3-3s2+s+8</Text>
                <Text style={styles.topicText}>Hence addition result in a polynomial.</Text>
                <Text style={styles.topicText}>Polynomial Multiplication:(7s3+2s2+3s+9) × (5s2+2s+1)</Text>
                <Text style={styles.topicText}>= 7s3 (5s2+2s+1)+2s2 (5s2+2s+1)+3s (5s2+2s+1)+9 (5s2+2s+1))</Text>
                <Text style={styles.topicText}>= (35s5+14s4+7s3)+ (10s4+4s3+2s2)+ (15s3+6s2+3s)+(45s2+18s+9)</Text>
                <Text style={styles.topicText}>= 35s5+(14s4+10s4)+(7s3+4s3+15s3)+ (2s2+6s2+45s2)+ (3s+18s)+9</Text>
                <Text style={styles.topicText}>= 35s5+24s4+26s3+ 53s2+ 21s +9</Text>
                <Text style={styles.topicText}>Polynomial Division: (7s3+2s2+3s+9) ÷ (5s2+2s+1)</Text>
                <Text style={styles.topicText}>(7s3+2s2+3s+9)/(5s2+2s+1)</Text>
                <Text style={styles.topicText}>This cannot be simplified. Therefore, division of these polynomial do not result in a Polynomial.</Text>
                <Text style={styles.topicText}>For more information watch out this video</Text>
                <Text style={styles.topicText}>https://youtu.be/SycTlTbyh3Y</Text>

                <Text style={styles.topicText}>Now try some questions from the given link</Text>
                <Text style={styles.topicText}>https://www.learninsta.com/mcq-questions-for-class-9-maths-chapter-2/</Text>

                
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
    imageIcon: {
        width: 220,
        height: 160,
        marginLeft: 55,
        marginTop:60,
        alignSelf:'center'
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
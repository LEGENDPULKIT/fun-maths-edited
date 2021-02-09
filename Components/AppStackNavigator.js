import {createStackNavigator} from 'react-navigation-stack';
import ChapterScreen from '../screens/ChapterScreen';
import Polynomials from '../screens/Polynomials';
import Trigonometry from '../screens/Trigonometry';
import WorkAndTime from '../screens/WorkAndTime';
import WorkAndTimeQuiz from '../screens/WorkAndTimeQuiz';
import PolynomialsQuiz from '../screens/PolynomialsQuiz';
import TrigonometryQuiz from '../screens/TrigonometryQuiz';
import achievments from '../screens/Achievment';


export const AppStackNavigator=createStackNavigator({
   Chapter:{
        screen:ChapterScreen,
        navigationOptions:{
            headerShown:false,
        }
    },

    WorkAndTime:{
        screen:WorkAndTime,
        navigationOptions:{
            headerShown:false,
        }
    },

    Polynomials:{
        screen:Polynomials,
        navigationOptions:{
            headerShown:false,
        }
    },

    Trigonometry:{
        screen:Trigonometry,
        navigationOptions:{
            headerShown:false,
        }
    },
    WorkAndTimeQuiz:{
        screen:WorkAndTimeQuiz,
        navigationOptions:{
            headerShown:false,
        }
    },
    PolynomialsQuiz:{
        screen:PolynomialsQuiz,
        navigationOptions:{
            headerShown:false,
        }
    },
    TrigonometryQuiz:{
        screen:TrigonometryQuiz,
        navigationOptions:{
            headerShown:false,
        }
    },
    achievment:{
        screen:achievments,
        navigationOptions:{
            headerShown:false,
        }
    },
},
{
    initialRouteName:'Chapter'
}
)


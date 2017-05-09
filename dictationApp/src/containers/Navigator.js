import { StackNavigator } from 'react-navigation'
import HomeContainer from './HomeContainer'
import TranslatorContainer from './TranslatorContainer'
import VocabularyContainer from './VocabularyContainer'
import DictationContainer from './DictationContainer'

const Navigator = StackNavigator({
  Home: { screen: HomeContainer },
  Translator: {screen: TranslatorContainer},
  Vocabulary: {screen: VocabularyContainer},
  Dictation: {screen: DictationContainer},
})

export default Navigator
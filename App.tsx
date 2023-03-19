import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Navigator } from './src/navigator/Navigator'
import { LevelProvider } from './src/context/LevelContext'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'

const AppState = ({ children }: any) => {
  return (
    <LevelProvider>
      { children }
    </LevelProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={ store }>
        <AppState>
          <Navigator />
        </AppState>
      </Provider>
    </NavigationContainer>
  )
}

export default App

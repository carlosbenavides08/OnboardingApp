import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Navigator } from './src/navigator/Navigator'
import { LevelProvider } from './src/context/LevelContext'

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
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  )
}

export default App

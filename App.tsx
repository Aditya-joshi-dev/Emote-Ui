import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Head from './components/Head'
import MainCard from './components/MainCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Head />
        <MainCard/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})
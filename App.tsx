import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Head from './components/Head';
import MainCard from './components/MainCard';
import PlanBody from './components/PlanBody';

const App = () => {
  return (
    <SafeAreaView style={styles.mainColr }>
      <ScrollView>
        <Head />
        <MainCard />
        <PlanBody />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  mainColr:{
    backgroundColor: '#F2E2D2'
},
});

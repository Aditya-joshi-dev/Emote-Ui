import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PlanBody = () => {
  return (
    <View>
      <Text style={styles.headtitle}>Your plan</Text>

      <View style={styles.container}>
        <View style={styles.firstContainer}>
          <View style={styles.boxOne}>
            <View style={styles.oneText}>
              <Text style={[styles.firstText]}> Yoga Group </Text>
              <Text style={[styles.textdesign]}> 25 Nov</Text>
              <Text style={[styles.textdesign]}> 14:00-15:00 </Text>
              <Text style={[styles.textdesign]}> A5 room </Text>
            </View>
          </View>
        </View>

        <View style={styles.secondContainer}>
          <View style={styles.boxTwo}>
            <View style={styles.twoText}>
              <Text style={styles.firstText}> Balance</Text>
              <Text style={[styles.textdesign]}> 28 Nov</Text>
              <Text style={[styles.textdesign]}> 18:00-19:30 </Text>
              <Text style={[styles.textdesign]}> A2 room </Text>
            </View>
          </View>
          <View style={styles.boxThree} />
        </View>
      </View>
    </View>
  );
};

export default PlanBody;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  headtitle:{
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 10,
    left: 30,
},
  boxOne: {
    flex: 1,
    backgroundColor: '#EDB458',
    height: 10,
    borderRadius: 32,
  },
  oneText: {
    position: 'absolute',
    top: 90,
    left: 20,
  },
  firstText: {
    fontSize: 20,
    fontWeight: '800',
    margin: 5,
  },
  twoText: {
    position: 'absolute',
    left: 20,
    top: 65,
  },
  textdesign: {
    padding: 2,
  },
  boxTwo: {
    flex: 2,
    backgroundColor: 'skyblue',
    height: 200,
    margin: 5,
    borderRadius: 32,
  },
  boxThree: {
    flex: 1,
    backgroundColor: 'pink',
    height: 100,
    margin: 5,
    borderRadius: 32,
  },
  firstContainer: {
    flex: 1,
    margin: 5,
  },
  secondContainer: {
    flex: 1,
  },
});

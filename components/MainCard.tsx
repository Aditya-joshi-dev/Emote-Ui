import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MainCard = () => {
  const weeks = [
    {
      day: 'SUN',
    },
    {
      day: 'MON',
    },
    {
      day: 'TUE',
    },
    {
      day: 'WED',
    },
    {
      day: 'THU',
    },
    {
      day: 'FRI',
    },
    {
      day: 'SAT',
    },
  ];
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/585623964/photo/young-man-lifting-weights.jpg?b=1&s=170667a&w=0&k=20&c=WnK0rAS_POEBiEK0tvp_-6U9WQv_RDOgzrVzu-4UMTs=',
          }}
          style={styles.imgOne}
        />
        <View style={styles.textBox}>
          <Text style={styles.textOne}>Daily </Text>
          <Text style={styles.textOne}>Challenge</Text>

          <Text style={styles.textTwo}>Do your plan before 09:00 AM.</Text>
        </View>
      </View>

      <View style={styles.dayShow}>
        {weeks.map(item => (
          <Text style={styles.dayNumber}> {item.day} </Text>
        ))}
      </View>
    </View>
  );
};

export default MainCard;

const styles = StyleSheet.create({
  mainDiv: {},
  container: {
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    justifyContent: 'space-around',
    textAlign: 'center',
  },
  imgOne: {
    flex: 1,
    height: 250,
    borderRadius: 10,
  },
  textOne: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  textTwo: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  textBox: {
    position: 'absolute',
    top: 80,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayShow: {
    margin: 10,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-around',
  },
  dayNumber: {
    textAlignVertical: 'center',
    backgroundColor: '#D4D4AA',
    borderRadius: 18,
    fontWeight: 'bold',
  },
});

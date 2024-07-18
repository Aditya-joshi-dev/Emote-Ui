import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Head = () => {
  return (
    <View style={styles.main}>
      <View>
        <Image 
        source={{uri:'https://imgs.search.brave.com/pZ2DKWjtw7hzsB-caM9l5n5xAr6aaH4tXxJAIMSHK5s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzk4LzcyLzQz/LzM2MF9GXzQ5ODcy/NDMyM19Gb25BeThM/WVlmRDFCVUMwYmNL/NTZhb1l3dUxISjJH/ZS5qcGc'}} 
        style={styles.profileImg}/>
        
      </View>

      <View style={styles.midContainer}>
        <Text style={styles.headtitle}>Hello, User</Text>
        <Text style={styles.subTitle}>Today, Date</Text>
      </View>
      
      <View>
         <Image 
         source={{uri:'https://imgs.search.brave.com/cDNQQDbsID5Giok5WMyHvvwgRLZH9EXMlhbRvWHftHI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzA5LzQ2Lzc3/LzM2MF9GXzEwOTQ2/Nzc4NV9lZVlXSDJ0/WTRDbmtEbDlCdHVZ/TzZoV2prN2hIMG9r/VS5qcGc'}} 
         style={styles.searchIcon}/>
      </View>
    </View>
  );
};

export default Head;

const styles = StyleSheet.create({
    main:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#B1EDE8',
        borderRadius: 10,
        margin: 10,

    },
    profileImg:{
        height: 50,
        width: 50,
        borderRadius: 50/2,
    },
  
    midContainer:{
       
    },
    headtitle:{
        fontWeight: 'bold',
        fontSize: 20,
    },
    subTitle:{
        paddingLeft: 12,
    },
    searchIcon:{
       height:35,
       width:35,
       borderRadius: 60/2,
    }
});

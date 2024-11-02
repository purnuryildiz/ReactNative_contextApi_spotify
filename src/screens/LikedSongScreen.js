import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const LikedSongScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <LinearGradient colors={['#614386', '#516395']} style={{flex: 1}}>
        <ScrollView
          style={{flex: 1, marginTop: 70, marginLeft: 10, marginRight: 10}}>
          <View>
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={24} color="white" />
            </Pressable>
            <Pressable
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                  padding: 10,
                  flex: 1,
                  borderRadius: 3,
                }}>
                <AntDesign name="search1" size={24} color="white" />
                <TextInput
                  placeholderTextColor={'white'}
                  placeholder="Find in liked songs.."
                  style={{color: 'white', fontSize: 18}}
                />
              </View>
              <Pressable
                style={{
                  marginHorizontal: 10,
                  backgroundColor: '#42275a',
                  padding: 10,
                  borderRadius: 3,
                  height: 38,
                }}>
                <Text style={{color: 'white'}}>Sort</Text>
              </Pressable>
            </Pressable>
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
};

export default LikedSongScreen;

const styles = StyleSheet.create({});

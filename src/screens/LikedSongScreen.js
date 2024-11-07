import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import SongItem from '../components/SongItem';
import Feather from 'react-native-vector-icons/Feather';
import {Modal, ModalContent} from 'react-native-modals';
const LikedSongScreen = () => {
  const navigation = useNavigation();
  const [searchedTracks, setSearchedTracks] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <LinearGradient colors={['#614386', '#516395']} style={{flex: 1}}>
        <ScrollView
          style={{flex: 1, marginTop: 70, marginLeft: 10, marginRight: 10}}>
          {/* Back button  */}
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </Pressable>
          {/* Search and sort icon */}
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
                marginHorizontal: 3,
                paddingHorizontal: 10,
                paddingVertical: 8,
                flex: 1,
                borderRadius: 5,
                backgroundColor: '#42275a',
              }}>
              <AntDesign name="search1" size={24} color="white" />
              <TextInput
                placeholderTextColor={'white'}
                placeholder="Find in liked songs.."
                style={{color: 'white', fontSize: 16}}
              />
            </View>
            <Pressable
              style={{
                marginHorizontal: 10,
                paddingHorizontal: 25,
                paddingVertical: 12,
                backgroundColor: '#42275a',
                padding: 10,
                borderRadius: 5,
                height: 38,
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontWeight: '500'}}>Sort</Text>
            </Pressable>
          </Pressable>
          {/* Blank */}
          <View style={{height: 30}} />
          {/* Liked Songs and number of songs */}
          <View>
            <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
              Liked Songs{' '}
            </Text>
            <Text style={{color: 'white', fontSize: 13, marginTop: 5}}>
              430 songs{' '}
            </Text>
          </View>
          {/* ICONS */}
          <Pressable
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Pressable
              style={{
                width: 25,
                height: 25,
                backgroundColor: '#1db954',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 15,
              }}>
              <FontAwesome6 name="arrow-down" size={16} color="white" />
            </Pressable>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
              }}>
              <Entypo name="shuffle" size={24} color="#1db954" />
              <Pressable
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#1db954',
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Entypo name="controller-play" size={24} color="white" />
              </Pressable>
            </View>
          </Pressable>

          {/* Song List */}

          {searchedTracks.length === 0 ? (
            <ActivityIndicator size={'large'} style={{marginTop: 200}} />
          ) : (
            <FlatList
              data={searchedTracks}
              renderItem={({item}) => <SongItem />}
              nestedScrollEnabled // FlatList'in ScrollView içinde çalışmasına izin verir
              style={{flex: 1}}
            />
          )}
        </ScrollView>
      </LinearGradient>
      {/* Present Song */}
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#5072a7',
          padding: 10,

          position: 'absolute',
          left: 20,
          bottom: 10,
          borderRadius: 6,
          marginBottom: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}>
          <Image
            source={{
              uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wired.com%2Fstory%2Fwhy-songs-get-stuck-in-your-head-how-to-stop-them%2F&psig=AOvVaw3u6EaxD6eQ6zgTi-LTYiyq&ust=1730716867501000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNDa6fP8v4kDFQAAAAAdAAAAABAE',
            }}
            style={{width: 40, height: 40}}
          />
          <Text
            style={{
              fontSize: 13,
              width: 220,
              color: 'white',
              fontWeight: 'bold',
            }}>
            name
          </Text>
        </View>
        <View style={{flexDirection: 'row', gap: 10}}>
          <Feather name="headphones" size={24} color="#1db954" />
          <AntDesign name="heart" size={24} color="#1db954" />
          <Pressable>
            <AntDesign name="pause" size={28} color="white" />
          </Pressable>
        </View>
      </Pressable>
      {/* MODAL */}
      {modalVisible ? (
        <ModalContent
          style={{backgroundColor: '#5072a7', width: '100%', height: '100%'}}>
          <View style={{marginTop: 40}}>
            {/* down-song name- dots */}
            <Pressable
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <AntDesign name="down" size={22} color="white" />
              <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>
                Song Name{' '}
              </Text>
              <Entypo name="dots-three-vertical" size={22} color="white" />
            </Pressable>
            {/* Song Image */}
            <View style={{padding: 10, marginTop: 10}}>
              <Image
                source={{
                  uri: 'https://w0.peakpx.com/wallpaper/57/723/HD-wallpaper-horse-silhouette-sunset-thumbnail.jpg',
                }}
                style={{width: '100%', height: 330, borderRadius: 4}}
              />
            </View>
            {/* Song Information */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 30,
              }}>
              {/* name-heart */}
              <View>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
                  name
                </Text>
                <Text style={{color: '#d3d3d3', marginTop: 4}}> name</Text>
              </View>
              <View>
                <AntDesign name="heart" size={24} color="#1db954" />
              </View>
            </View>

            {/* PROGRESSBAR */}
            <View style={{marginTop: 30}}>
              <View
                style={{
                  width: '100%',
                  marginTop: 10,
                  height: 3,
                  backgroundColor: 'gray',
                  borderRadius: 5,
                }}>
                <View style={[styles.progressbar, {width: 1 * 100}]} />
                <View
                  style={{
                    position: 'absolute',
                    top: -5,
                    width: 10,
                    height: 10,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    left: 100,
                  }}
                />
              </View>
              {/* TIMELINE */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 15}}>0:00</Text>
                <Text style={{color: 'white', fontSize: 15}}>0:00</Text>
              </View>
              {/* PLAY ICONS */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 30,
                }}>
                <Pressable>
                  <Entypo name="shuffle" size={26} color="#1db954" />
                </Pressable>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 30,
                  }}>
                  <Pressable>
                    <Ionicons name="play-skip-back" size={40} color="white" />
                  </Pressable>
                  <Pressable>
                    {isPlaying ? (
                      <AntDesign name="pausecircle" size={60} color="white" />
                    ) : (
                      <Pressable>
                        <AntDesign name="play" size={60} color="white" />
                      </Pressable>
                    )}
                  </Pressable>
                  <Pressable>
                    <Ionicons
                      name="play-skip-forward"
                      size={40}
                      color="white"
                    />
                  </Pressable>
                </View>
                <Pressable>
                  <Feather name="repeat" size={26} color="#1db954" />
                </Pressable>
              </View>
            </View>
          </View>
        </ModalContent>
      ) : null}
    </>
  );
};

export default LikedSongScreen;

const styles = StyleSheet.create({
  progressbar: {
    height: '100%',
    backgroundColor: 'white',
  },
});

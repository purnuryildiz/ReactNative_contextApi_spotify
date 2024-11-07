import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './src/navigation/Routes';

import {AlbumsProvider} from './src/context/AlbumsContext';
import {ArtistsProvider} from './src/context/ArtistsContext';
const App = () => {
  return (
    <>
      <ArtistsProvider>
        <AlbumsProvider>
          <Navigation />
        </AlbumsProvider>
      </ArtistsProvider>
    </>
  );
};

export default App;

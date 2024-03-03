import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator, TouchableOpacity, useWindowDimensions } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const HomeScreen = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const itemWidth = 120;
  const numColumns = Math.floor(width / itemWidth);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { isConnected } = await NetInfo.fetch();
      
      if (!isConnected) {
        const cachedData = await AsyncStorage.getItem('cachedImageURLs');
        if (cachedData !== null) {
          setPhotos(JSON.parse(cachedData));
          setLoading(false); 
          return;
        }
        setError('No internet connection. Please connect to the internet.');
        setLoading(false); 
        return;
      }

      const response = await axios.get(
        'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s'
      );
      const jsonData = response.data;
      if (jsonData.stat === 'ok') {
        const fetchedPhotos = jsonData.photos.photo.map(photo => photo.url_s);
        setPhotos(fetchedPhotos);
        await AsyncStorage.setItem('cachedImageURLs', JSON.stringify(fetchedPhotos));
      } else {
        setError('Failed to fetch photos');
      }
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleImagePress = (imageUrl) => {
    navigation.navigate('PhotoScreen', { imageUrl });
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={photos}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleImagePress(item)}>
            <View style={{ width: itemWidth, margin: 5 }}>
              <Image source={{ uri: item }} style={{ width: '100%', height: 100 }} />
            </View>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;

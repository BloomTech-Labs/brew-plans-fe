import { AsyncStorage } from 'react-native';

export async function getLocalData(key) { 
  if (key) {
    try {
      const retrievedItem = await AsyncStorage.getItem(key);
      const item = JSON.parse(retrievedItem);
      return item;
    } catch (error) {
      return error;
    };
  }
  return;
};

export async function storeLocalData(key, item) {
  try {
    let jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
    return jsonOfItem;
  } catch (error) {
    return error;
  };
};
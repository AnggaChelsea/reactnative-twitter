import { StyleSheet,Image, FlatList } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import Tweet from '../../components/Tweet';
import tweets from '../../assets/data/tweets';
export default function TabOneScreen() {
  return (
    <View style={styles.page}>
    <FlatList data={tweets} renderItem={({item}) => <Tweet tweet={item} /> } />
    {/* <Tweet tweet={tweets[0]} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1
  }
 
});

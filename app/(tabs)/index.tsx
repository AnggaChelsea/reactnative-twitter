import { StyleSheet, Image, FlatList, Pressable } from 'react-native'

import EditScreenInfo from '../../components/EditScreenInfo'
import { Text, View } from '../../components/Themed'
import Tweet from '../../components/Tweet'
import { Entypo } from '@expo/vector-icons'
import tweets from '../../assets/data/tweets'
import { Link } from 'expo-router'
export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
      {/* <Tweet tweet={tweets[0]} /> */}

      <Link href="/new_tweet" asChild>
        <Entypo
          name="plus"
          size={24}
          color="white"
          style={styles.floatingBottom}
        />
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  floatingBottom: {
    backgroundColor: '#1D9BF0',
    borderRadius: 50,
    padding:15,
    position: 'absolute',
    right: 15,
    bottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
})

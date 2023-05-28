import { StyleSheet, Image, View, Text } from 'react-native'
import tweets from '../assets/data/tweets'
import { TweetType } from '../types'
import { Entypo, EvilIcons } from '@expo/vector-icons'; 
import IconButton from './IconsButton';
const tweet: any = tweets[0]

type TweetProps = {
  tweet: TweetType
}
type Icons = {
  icon: React.ComponentProps<typeof EvilIcons>['name'],
  text?: string | number,
}

const Tweet = ({ tweet }: TweetProps, {icon}: Icons) => {
  // const tweet = props.tweet
  return (
    <View style={styles.container}>
      <Image src={tweet.user.image} style={styles.userImage} />
      <View style={styles.mainContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.name}>{tweet.user.username} ·2h</Text>
          <Entypo name="dots-three-horizontal" size={16} color="gray" style={{marginLeft: 'auto'}} />
        </View>
        <Text>{tweet.content}</Text>

        {tweet.image && <Image src={tweet.image} style={styles.image} />}

        <View style={styles.footer}>
          {/* comment icon button */}
           <IconButton icon='comment' text={tweet.numberOfComments}  />
           <IconButton icon='retweet' text={tweet.numberOfRetweets} />
           <IconButton icon='heart' text={tweet.numberOfLikes} />
           <IconButton icon='chart' text={tweet.impressions} />
           <IconButton icon='share-apple' />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: 'white',
  },
  userImage: { 
    width: 50, 
    height: 50, 
    borderRadius: 50, 
  },
  mainContainer: {
    marginLeft: 5,
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    color: 'gray' 
  },
  image: {
    width: '100%',
    height: 200,
    aspectRatio: 12 / 9,
    marginTop: 10,
    borderRadius: 15,
    marginVertical: 10
  },
  footer:{
    flexDirection:'row',
    marginVertical:5,
    justifyContent: 'space-between'
  }
})

export default Tweet

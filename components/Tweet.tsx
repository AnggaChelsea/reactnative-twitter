import { StyleSheet,Image, View, Text } from 'react-native';
import tweets from '../assets/data/tweets';
import { TweetType } from '../types';
const tweet:any = tweets[0]


type TweetProps = {
    tweet : TweetType,
}

const Tweet = ({tweet} : TweetProps) => {
    // const tweet = props.tweet
    return (
        <View style={styles.container}>
      <Image src={tweet.user.image} style={styles.userImage} />
     <View style={styles.mainContainer}>
     <Text style={styles.name}>{tweet.user.name}</Text>
     <Text>{tweet.content}</Text>

     {tweet.image && <Image src={tweet.image} style={styles.image} />}
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
      backgroundColor: 'white'
    },
    userImage : {width: 50, height: 50, borderRadius: 50},
    mainContainer: {
      marginLeft: 5,
      flex: 1,
      
    },
    name: {
      fontWeight: 'bold'
    },
    image:{
        width: '100%',
        height: 200,
        aspectRatio: 12 / 9,
        marginTop: 10,
        borderRadius: 15
    }
   
  });
  

  export default Tweet;
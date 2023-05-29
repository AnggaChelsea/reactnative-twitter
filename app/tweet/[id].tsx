import { useSearchParams } from "expo-router"
import tweets from "../../assets/data/tweets"
import Tweet from "../../components/Tweet"
import { Text } from "../../components/Themed"

export default function TweetScreen() {
    const {id} = useSearchParams()
    // console.warn(id)
    const tweet = tweets.find(t => t.id === id)
    if(!tweet){
        return (
            <Text>
                Tweet Id not found
            </Text>
        )
    }
    return <Tweet tweet={tweet} />
    
}


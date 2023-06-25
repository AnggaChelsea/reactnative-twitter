import { Link, useRouter } from "expo-router";
import { View, Text  } from "../components/Themed";
import { StyleSheet , Image, TextInput, Pressable, SafeAreaView} from 'react-native';
import { useState } from 'react'
const user = {
    id: 'u1',
    username: 'VadimNotJustDev',
    name: 'Vadim',
    image:
      'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png',
}

export default function NewTweet(){
    const [text, setText] = useState("")
    const router  = useRouter();

    const onTweetPress = () => {
        // console.warn('test tes' + text)
        setText('');
        router.back()
    }
    return (
        <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Link href="../" style={{fontSize:18}}>Cancle</Link>
                <Pressable onPress={onTweetPress} style={styles.button}>
                    <Text style={styles.buttonText}>Tweet</Text>
                </Pressable>
            </View>
            <View style={styles.inputContainer}>
            <Image src={user.image} style={styles.image} />
            <TextInput value={text} onChangeText={setText} style={styles.textInput} placeholder="what happening?" multiline numberOfLines={5} />
            {/* <Text>Create New Tweet</Text> */}
            </View>
        </View>
        </SafeAreaView>
    )
}

const styles =  StyleSheet.create(
    {
        container: {
            padding:10,
            flex: 1,
        },
        image: {
            width: 50,
            borderRadius: 50,
            aspectRatio: 1,
            marginRight: 10
        },
        inputContainer: {
            flexDirection:'row',
        },
        buttonContainer:{
            flexDirection: 'row',
            marginVertical: 10,
            justifyContent: 'space-between',
            alignItems:'center'
        },
        button:{
            backgroundColor: '#1c9bf0',
            padding: 10,
            paddingHorizontal:10,
            borderRadius:15,
        },
        buttonText:{
            color:'white',
            fontWeight:'bold',
            fontSize:14,
            width:50,
            textAlign:'center',

        },
        textInput:{
            top:-30
        }
    }
)
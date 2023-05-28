import { EvilIcons } from "@expo/vector-icons"
import { View, Text } from "react-native"

type PropsIcon = {
    icon: React.ComponentProps<typeof EvilIcons>['name'],
    text?: string | number
}

const IconButton = (icon: PropsIcon) => {
    return (
        <View style={{flexDirection:'row', alignItems:'center'}}>
        {/* ICON */}
          <EvilIcons name={icon.icon} size={23} color='gray' />
        {/* number */}
        <Text style={{fontSize: 12, color: 'gray'}}>{icon.text}</Text>
      </View>
    )
}

export default IconButton
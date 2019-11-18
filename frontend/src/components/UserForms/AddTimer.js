import React, {useState} from "react" 
import {TextInput} from "react-native-paper"
import {View} from "react-native"
import {MaterialIcons} from "@expo/vector-icons"

export default AddTimer = props=> {
    const [addDuration, setAddDuration] = useState(false
    ) 
    const {handleDurationChange, index, localInstructions} = props

    return (
        <View>
            <MaterialIcons key={"MI"+index} name="timer" size={24} color="#720A13" onPress={()=>setAddDuration(true)}/>
                  {addDuration? <TextInput key={"D"+index} value={localInstructions[index].order}  mode="outlined"
                  onChangeText={value=>this.handleDurationChange(index, value)} />: <></>}

        </View>
    )
}


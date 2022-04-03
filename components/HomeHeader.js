import { View, Text, Image } from 'react-native'
import {COLORS, FONTS, SIZES, assets} from "../constants"

const HomeHeader = () => {
  return (
    <View style={{
      backgroundColor :COLORS.primary,
      padding: SIZES.font
    }}>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems : "center"
      }}>
        <Image source={assets.logo} resizeMode = "contain" style={{width: 90, height: 25}} />
        <View style={{width: 45, height: 45}}>
          <Image source={assets.person01} resizeMode = "contain" style={{width: "100%", height: "100%"}}/>
          <Image source={assets.badge} resizeMode = "contain" style={{width: 15, height: 15, position: "absolute", bottom: 0 , right: 0}}/>
        </View>
        </View>  
        <View style={{marginVertical: SIZES.font}}>
          <Text style={{
            color: COLORS.white,
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,

          }}>
            Hello, Hussein 👋🏼
          </Text>
          <Text style={{
            color: COLORS.white,
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            marginTop: SIZES.base/2
          }}>
            Let's find a masterpiece
          </Text>
        </View>    
    </View>
  )
}

export default HomeHeader
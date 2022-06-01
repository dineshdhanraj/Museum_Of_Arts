import React from 'react'
import {Text,View,Image} from 'react-native'
import styles from './Styles';

export default function MuseumDetails({route})
{
const input_list=route.params;

return(
<View>
  {input_list.primaryImageSmall?<Image testID='PrimaryImage' style={styles.image} source={{ uri: input_list.primaryImageSmall }} />:
  <Image testID='Alt_Image' style={styles.image} source={{ uri: "https://images.metmuseum.org/CRDImages/an/original/DP360616.jpg" }} />}
  
  <View style={styles.seperator}>
          <Text style={styles.Heading} >Credit </Text>
          <Text style={styles.Textstyle} testID='Credit'>{input_list.creditLine}</Text>
  </View>

  <View style={styles.seperator}>
          <Text style={styles.Heading} >Artist </Text>
          <Text style={styles.Textstyle} testID='Artist'>{input_list.artistDisplayName}</Text>
  </View>

  <View style={styles.seperator}>
          <Text style={styles.Heading} >Acquired On </Text>
          <Text style={styles.Textstyle} testID='Acquired'>{input_list.accessionYear}</Text>
  </View>
  
  <View style={styles.seperator}>
          <Text style={styles.Heading} >Measurement </Text>
          <Text style={styles.Textstyle} testID='Measurement'>{input_list.dimensions}</Text>
  </View>
  
  <View style={styles.seperator}>
          <Text style={styles.Heading} >Department </Text>
          <Text style={styles.Textstyle} testID='Department'>{input_list.department}</Text>
  </View>

  <View style={styles.seperator}>
          <Text style={styles.Heading} >View On Site </Text>
          <Text style={styles.Textstyle} dataDetectorType='link' testID='View_On_Site'>{input_list.objectURL}</Text>
  </View>

</View>
)
}

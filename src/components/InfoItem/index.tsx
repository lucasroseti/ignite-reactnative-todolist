import { Text, View } from 'react-native'
import { customColor, styles } from './styles'

interface InfoItemProps {
  text: string
  color: string
}

export function InfoItem({ text, color }: InfoItemProps) {
  return (
    <View style={styles.container}>
      <Text style={customColor(color).item}>{ text }</Text>
      <View style={styles.total}>
        <Text style={styles.totalText}>0</Text>
      </View>
    </View>
  )
}

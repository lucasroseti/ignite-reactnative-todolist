import { Text, View } from 'react-native'
import { customColor, styles } from './styles'

interface InfoItemProps {
  text: string
  color: string
  total: number
}

export function InfoItem({ text, color, total }: InfoItemProps) {
  return (
    <View style={styles.container}>
      <Text style={customColor(color).item}>{ text }</Text>
      <View style={styles.total}>
        <Text style={styles.totalText}>{total}</Text>
      </View>
    </View>
  )
}

import { View } from 'react-native'
import { styles } from './styles'
import { InfoItem } from '../InfoItem'

export function Info() {
  return (
    <View style={styles.container}>
      <InfoItem text="Criadas" color="blue" />
      <InfoItem text="Concluídas" color="purple" />
    </View>
  )
}

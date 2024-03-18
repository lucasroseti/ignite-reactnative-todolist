import { View } from 'react-native'
import { styles } from './styles'
import { InfoItem } from '../InfoItem'

interface InfoProps {
  created: number
  completed: number
}

export function Info({ created, completed }: InfoProps) {
  return (
    <View style={styles.container}>
      <InfoItem text="Criadas" color="blue" total={created} />
      <InfoItem text="Concluídas" color="purple" total={completed} />
    </View>
  )
}

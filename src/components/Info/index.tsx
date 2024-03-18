import { View } from 'react-native'

import { InfoItem } from '../InfoItem'
import { styles } from './styles'

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

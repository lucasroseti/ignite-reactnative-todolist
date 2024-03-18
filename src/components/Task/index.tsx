import { Text, TouchableOpacity, View } from 'react-native'
import { Trash } from 'phosphor-react-native'

import { Checkbox } from '../Checkbox'
import { styles } from './styles'
import { theme } from '../../theme'

export interface TaskType {
  id: string
  title: string
  completed: boolean
}

export interface TaskProps {
  id: string
  title: string
  completed: boolean
  onHandleCheck: (id: string, isChecked: boolean) => void
}

export function Task({ id, title, completed, onHandleCheck }: TaskProps) {
  function handleCheck(isChecked: boolean) {
    onHandleCheck(id, isChecked)
  }

  return (
    <View style={styles.container}>
      <Checkbox isChecked={completed} onHandleCheck={handleCheck} />
      <Text style={completed ? styles.titleChecked : styles.title}>{ title }</Text>
      <TouchableOpacity style={styles.buttonRemove}>
        <Trash size={16} color={theme.colors.gray300}/>
      </TouchableOpacity>
    </View>
  )
}

import { TouchableOpacity } from 'react-native'
import { Check } from 'phosphor-react-native'

import { styles } from './styles'
import { theme } from '../../theme'

interface CheckBoxProps {
  isChecked: boolean
  onHandleCheck: (isChecked: boolean) => void
}

export function Checkbox({ isChecked = false, onHandleCheck }: CheckBoxProps) {
  function handleCheck() {
    onHandleCheck(!isChecked)
  }

  return (
    <TouchableOpacity
      style={isChecked ? styles.buttonChecked : styles.button}
      onPress={handleCheck}
    >
      {isChecked && <Check size={12} color={theme.colors.gray100} /> }
    </TouchableOpacity>
  )
}

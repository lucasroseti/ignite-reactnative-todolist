import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { PlusCircle } from 'phosphor-react-native'

import { Info } from '../../components/Info'
import { styles } from './styles'
import { Empty } from '../../components/Empty'
import { theme } from '../../theme'

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/logo-todolist.png')}
          alt=""
        />
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={theme.colors.gray300}
        />
        <TouchableOpacity style={styles.button}>
          <Text>
            <PlusCircle size={16} color="#FFF" />
          </Text>
        </TouchableOpacity>
      </View>

      <Info />

      <Empty />
    </View>
  )
}

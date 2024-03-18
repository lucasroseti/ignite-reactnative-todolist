import { Image, Text, View } from 'react-native'
import { styles } from './styles'

export function Empty() {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          width={72}
          height={72}
          source={require('../../../assets/clipboard.png')}
          alt="Clipboard"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  )
}

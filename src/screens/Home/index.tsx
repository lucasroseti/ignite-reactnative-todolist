import { useState } from 'react'
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { PlusCircle } from 'phosphor-react-native'

import { Info } from '../../components/Info'
import { Empty } from '../../components/Empty'
import { Task, TaskType } from '../../components/Task'

import { styles } from './styles'
import { theme } from '../../theme'

export function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([])

  function handleTaskCheck(id: string, isChecked: boolean) {
    setTasks(prevState => prevState.map(task => {
      if (task.id === id) {
        task.completed = isChecked
      }

      return task
    }))
  }

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

      <FlatList 
        data={tasks}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Task
            id={item.id}
            title={item.title}
            completed={item.completed}
            onHandleCheck={handleTaskCheck}
          />
        )}
        ListEmptyComponent={() => (
          <Empty />
        )}
      />
    </View>
  )
}

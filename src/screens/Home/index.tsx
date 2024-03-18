import { useState } from 'react'
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { PlusCircle } from 'phosphor-react-native'
import * as Crypto from 'expo-crypto'

import { Info } from '../../components/Info'
import { Empty } from '../../components/Empty'
import { Task, TaskType } from '../../components/Task'
import { styles } from './styles'
import { theme } from '../../theme'

export function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [taskText, setTaskText] = useState('')

  const totalTasks = tasks.length
  const totalTasksCompleted = tasks.reduce(function(completed, task) {
    return task.completed ? completed+1 : completed
  }, 0)

  function handleTaskAdd() {
    if (taskText === '') return

    const newTask =  {
      id: Crypto.randomUUID(),
      title: taskText,
      completed: false
    }

    setTasks(prevState => [...prevState, newTask])
    setTaskText('')
  }

  function handleTaskCheck(id: string, isChecked: boolean) {
    setTasks(prevState => prevState.map(task => {
      if (task.id === id) {
        task.completed = isChecked
      }

      return task
    }))
  }

  function handleTaskRemove(id: string) {
    Alert.alert('Remove', `Remover tarefa?`,[
      {
        text: 'Yes',
        onPress: () => {
          setTasks(prevState => prevState.filter(task => task.id !== id))
        }
      },
      {
        text: 'Cancel',
        style: 'cancel'
      }
    ])
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
          value={taskText}
          onChangeText={setTaskText}
        />
        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <Text>
            <PlusCircle size={16} color="#FFF" />
          </Text>
        </TouchableOpacity>
      </View>

      <Info created={totalTasks} completed={totalTasksCompleted} />

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
            onHandleRemove={handleTaskRemove}
          />
        )}
        ListEmptyComponent={() => (
          <Empty />
        )}
      />
    </View>
  )
}

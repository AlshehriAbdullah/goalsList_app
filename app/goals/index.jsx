import { View, Text, StyleSheet, FlatList, Pressable, Modal } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGoals } from '../../hooks/useGoals'
import { useState } from 'react'
import Slider from '@react-native-community/slider'

const Goals = () => {
  const { goals, updateGoal, deleteGoal } = useGoals()
  const [selected, setSelected] = useState()
  const handleProgressChange = async (value) => {
      await updateGoal(selected.id, {progress: value})
  }
  const [sliderValue, setSliderValue] = useState(0);
  const handleDelete = async () => {
    await deleteGoal(selected.id)
    setSelected(null)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Your Goals</Text>

      <FlatList
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable onPress={() => { 
            setSelected(item); setSliderValue(item.progress)
            }}>
            <View style={styles.goal}>
              <Text style={{margin: 16}}>{item.goal}</Text>
              <View style={[styles.progress, { width: `${item.progress}%` }]} />
            </View>
          </Pressable>
        )}
      />

      { selected && (

        <Modal animationType='slide' visible={selected !== null}>
          <View style={styles.modal}>

            <Text style={styles.title}> {selected.goal}</Text>

            
            <Text>Adjust your progress of this goal:</Text>

            <Text style={{ fontSize: 16, marginTop:30 }}>{Math.round(sliderValue)}%</Text>
            <Slider 
              style={{width: '80%', height: 40, marginBottom: 20, marginTop:10}}
              value={selected.progress}
              minimumValue={0}
              maximumValue={100}
              minimumTrackTintColor='#21cc8d'
              maximumTrackTintColor='#ddd'
              thumbTintColor='#21cc8d'
              onSlidingComplete={handleProgressChange}
              onValueChange={(val) => setSliderValue(Math.round(val))}
            />
              
            

            <View style={styles.buttonsWrapper} >
              <Pressable style={styles.btn} onPress={() => setSelected(null)}>
                <Text style={{color : 'white'}}>Close</Text>
              </Pressable>
              <Pressable 
                style={[styles.btn, {backgroundColor: 'red'}]} 
                onPress={handleDelete}
              >
                <Text style={{color : 'white'}}>Delete Goal</Text>
              </Pressable>
            </View>

          </View>
        </Modal>
      )}
    </SafeAreaView>
  )
}

export default Goals

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 30,
  },
  goal: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 30,
    overflow: 'hidden',
  },
  progress: {
    height: 10,
    backgroundColor: '#21cc8d',
    minWidth: 10,
    borderRadius: 2,
  },
  modal: {
    margin: 20,
    marginTop: 100,
    alignItems: 'center',
  },
  buttonsWrapper: {
    width: '80%',
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  btn: {
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#21cc8d',
  },
})
import { ActivityIndicator, FlatList, SafeAreaView, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import { FAB } from "react-native-paper";
import styles from './components/style';
import DataView from './components/showTodo';
import MyAppBar from './components/appbar';
import AppintroSlider from './components/appintroslider';
import { db } from './configuration/firebase';
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
export default function App() {
  const [loading, setLoading] = useState(false)
  const [showRealApp, setShowRealApp] = useState(false);
  const [todos, setTodos] = useState([{ id: undefined, note: 'This note is from developer cannot be deleted😁😍 _Imran Afzal' }]);
  const [task, setTask] = useState('')
  const docRef = collection(db, 'notes')
  const data = { note: task }
  const UpdateNote = async () => {
    const data = await getDocs(docRef);
    setTodos([{ id: undefined, note: 'This note is from developer cannot be deleted😁😍 _Imran Afzal ' }])
    data.forEach((doc) => {
      setTodos(oldTodos => [{ id: doc.id, note: doc.data().note }, ...oldTodos]);
    });
  }
  console.log(todos)
  useEffect(() => {
    UpdateNote()
  }, [loading])
  const InsertNote = async () => {
    try {
      if (task != '') {
        setLoading(true)
        await addDoc(docRef, data)
      }
    } catch (e) {
      console.log(e)
      alert('please connect to internet')
    }
    setLoading(false)
  }
  const deleteTask = async (id) => {
    const docRef = doc(db, 'notes', id)
    setLoading(true)
    try {
      await deleteDoc(docRef);
      alert('deleted!')
    } catch (e) {
      console.log(e)
    }
    setLoading(false)
  };
  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };
  const showData = (props) => <DataView title={props.item.note} onPress={() => { !loading ? deleteTask(props.item.id) : <ActivityIndicator /> }} />;
  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <MyAppBar />
          <FlatList data={todos} renderItem={showData} />
          <SafeAreaView style={{ flex: 1 }}>
            {!loading ?
              <FAB icon='send' color="white" style={{ position: 'absolute', right: 13, bottom: 12, }} onPress={() => { InsertNote(); setTask(''); }} />
              : <ActivityIndicator />
            }
            <TextInput placeholder='write something' placeholderTextColor={'white'} onChangeText={(value) => setTask(value)} style={styles.textInput} value={task} />
          </SafeAreaView>
        </SafeAreaView>)
        : (<AppintroSlider onDone={onDone} onSkip={onSkip} />)
      }
    </>
  );
}

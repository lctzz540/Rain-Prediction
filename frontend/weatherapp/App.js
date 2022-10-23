import { StatusBar } from 'expo-status-bar';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Pressable,
  Alert
} from 'react-native';
import {useState} from 'react'


export default function App() {
  const [province, setProvince] = useState()
  const [t_max, setT_max] = useState()
  const [t_min, setT_min] = useState()
  const [wind, setWind] = useState()
  const [wind_d, setWind_d] = useState()
  const [rain_today, setRain_today] = useState()
  const [humidi, setHumidi] = useState()
  const [cloud, setCloud] = useState()
  const [pressure, setPressure] = useState()
  const [day, setDay] = useState()
  const [dayofweek, setDayofWeek] = useState()
  const [month, setMonth] = useState()
  const pi = 3.14
  const handleSubmit = () =>{
    fetch('http://127.0.0.1:8000/predict', {
       method: 'POST',
       headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      province:province,
      t_max:t_max,
      t_min:t_min,
      wind:wind,
      wind_d:wind_d,
      rain_today:rain_today,
      humidi:humidi,
      cloud:cloud,
      pressure:pressure,
      day:day,
      dayofweek:dayofweek,
      month:month
    })}).then((res)=> res.json()).then((result)=> {
        if (result.result===1) {Alert.alert(
      "Error",
      "Today may rain",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    )}if (result.result===0){Alert.alert(
      "Error",
      "Today may not rain",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    )}
    }
     )
    .catch((error)=> Alert.alert(
      "Error",
      "Something went wrong",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    ) )
;
  }
  return (
    <View style={styles.container}>
      <Text style={{color:"white", fontSize:72, marginBottom:50, fontFamily: 'SavoyeLetPlain'}}>Weather App</Text>
      <View style={{flexDirection: 'row'}}>
        <View style={{display:"inline-block"}}>
        <TextInput style={styles.input} placeholder="Province" onChangeText={(value)=>setProvince(value)} />
        <TextInput style={styles.input} placeholder="T-max" onChangeText={(value)=>setT_max(value)} />
        <TextInput style={styles.input} placeholder="T-min" onChangeText={(value)=>setT_min(value)} />
        <TextInput style={styles.input} placeholder="wind" onChangeText={(value)=>setWind(value)}/>
        <TextInput style={styles.input} placeholder="wind-d" onChangeText={(value)=>setWind_d(value)}/>
        <TextInput style={styles.input} placeholder="rain_today"onChangeText={(value)=>setRain_today(value)}/>
        </View>
        <View style={{display:"inline-block"}}>
        <TextInput style={styles.input} placeholder="humidi" onChangeText={(value)=>setHumidi(value)}/>
        <TextInput style={styles.input} placeholder="cloud" onChangeText={(value)=>setCloud(value)}/>
        <TextInput style={styles.input} placeholder="pressure" onChangeText={(value)=>setPressure(value)}/>
        <TextInput style={styles.input} placeholder="day" onChangeText={(value)=>setDay(value)}/>
        <TextInput style={styles.input} placeholder="dayofweek"onChangeText={(value)=>setDayofWeek(value)}/>
        <TextInput style={styles.input} placeholder="month"onChangeText={(value)=>setMonth(value)}/>
        </View>
      </View>
      <Pressable style={styles.button} onPress={()=>handleSubmit()}>
        <Text style={{color:'white'}}>Predict</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#556B2F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    marginTop: 10,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#808000',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginTop: 40
  },
}
);

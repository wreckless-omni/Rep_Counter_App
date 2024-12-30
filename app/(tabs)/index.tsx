import React from 'react';
import {Text, TextInput, View, Button, StyleSheet, Alert} from 'react-native';
import { useState,useEffect} from 'react';





const HelloWorldApp = () => {
 
    const [squatCount, squatSetCount] = useState(0);
    const [deadCount, deadSetCount] = useState(0);
    const [benchCount, benchSetCount] = useState(0);
    const [triCount, triSetCount] = useState(0);
    const [curlCount, curlSetCount] = useState(0);
    const [rowCount, rowSetCount] = useState(0);
    const [setsNum, setNum] = useState(-1);
    const legDay = ((squatCount + deadCount)/2);
    const chestDay = ((benchCount + rowCount)/2);
    const armsDay = ((curlCount + triCount)/2);
    const wholeBody = ((squatCount + deadCount + benchCount + rowCount + curlCount + triCount) / 6)

    useEffect(() => {
      if (legDay === setsNum){Alert.alert('LEG DAY   IS DONE!!!')}
    },[legDay]
)

useEffect(() => {
  if (chestDay === setsNum){Alert.alert('CHEST DAY   IS DONE!!!')}
},[chestDay]
)

useEffect(() => {
  if (armsDay === setsNum){Alert.alert('ARMS DAY   IS DONE!!!')}
},[armsDay]
)
 

useEffect(() => {
  if (wholeBody === setsNum){Alert.alert('Whole Body   IS DONE!!! YOU ANIMAL!!!')}
},[wholeBody]
)
     

  return (

    
    <View


    
      style={{
        padding:50,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: 'firebrick',
      }}>
        
    

      <Text style={styles.titleText} > Pain is Glory!</Text>



 {/*Text input box---------------------------------------------------------------------------------------------------------------*/}
      <TextInput
        style={{
          height: 40,
          padding: 10,
          borderColor: 'gray',
        
          borderWidth: 1,
        }}
        placeholder="Enter the amount of sets, DO IT NOW!!! "
        onChangeText={setzNum => setNum(Number.parseFloat(setzNum))}
        keyboardType='number-pad'

        
      />
    
        


      <Text style={styles.baseText} > --------------------Leg Day--------------------</Text>
      
      
      {/*squats---------------------------------------------------------------------------------------------------------------*/}
      <Text style = {styles.baseText}>Squats: {squatCount} sets </Text> 
      <Button 
      onPress={() => {squatSetCount(squatCount + 1)

       
      }} 
      title="Squats"
      color="red"
      
      />
      
      <Button
        onPress={() => {squatSetCount( 0)}}
        title = "Squat Reset"
        color ="grey"


/>


      {/*deadlifts---------------------------------------------------------------------------------------------------------------------*/}
      <Text style = {styles.baseText}>Deadlifts: {deadCount} sets </Text>
      <Button 
      onPress={() => {deadSetCount(deadCount + 1)}} 
      title="Deadlifts"
      color="goldenrod"
      />
      

      <Button
      onPress={() => {deadSetCount( 0)}}
        title = "Deadlift Reset"
        color = "grey"

/>
<Text style={styles.baseText} > ------------------Chest Day------------------</Text>
{/*Benchpress---------------------------------------------------------------------------------------------------------------------*/}
<Text style = {styles.baseText}>Benchpress: {benchCount} sets </Text>
<Button 
      onPress={() => {benchSetCount(benchCount + 1)}} 
      title="Benchpress"
      color="green"
      
      />
      

      <Button
      onPress={() => {benchSetCount( 0)}}
        title = "Benchpress Reset"
        color = "grey"

/>


{/*Rows---------------------------------------------------------------------------------------------------------------------*/}
<Text style = {styles.baseText}>Rows: {rowCount} sets </Text>
<Button 
      onPress={() => {rowSetCount(rowCount + 1)}} 
      title="Rows"
      color="dodgerblue"
      
      />
      

      <Button
      onPress={() => {rowSetCount( 0)}}
        title = "Row Reset"
        color = "grey"

/>


<Text style={styles.baseText} > -----------------Arms Day-----------------</Text>
{/*triceps---------------------------------------------------------------------------------------------------------------------*/}
<Text style = {styles.baseText}>Triceps: {triCount} sets </Text>
<Button 
      onPress={() => {triSetCount(triCount + 1)}} 
      title="Triceps"
      color="indigo"
      
      />
      

      <Button
      onPress={() => {triSetCount( 0)}}
        title = "Triceps Reset"
        color = "grey"

/>

{/*curls---------------------------------------------------------------------------------------------------------------------*/}
<Text style = {styles.baseText}>Curls: {curlCount} sets </Text>
<Button 
      onPress={() => {curlSetCount(curlCount + 1)}} 
      title="Curls"
      color="blue"
      
      />
     

      <Button
      onPress={() => {curlSetCount( 0)}}
        title = "Curl Reset"
        color = "grey"

/>





    </View>
  

    
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontSize : 20,
    textAlign: 'center'
    
  },

  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign : 'center'
  },
 

});


export default HelloWorldApp;
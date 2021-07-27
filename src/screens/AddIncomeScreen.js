import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Title, TextInput, Button} from 'react-native-paper';

const AddIncomeScreen = () => {
  const [source, setSource] = useState('');
  const [amount, setAmount] = useState('');
  return (
    <View>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Add Your Income</Title>
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Source Of Income"
            value={source}
            onChangeText={text => setSource(text)}
            outlineColor="#009387"
          />
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Amount"
            value={amount}
            onChangeText={amt => setAmount(amt)}
            outlineColor="#009387"
            keyboardType="numeric"
          />
          <View style={styles.addbutton}>
            <Button
              color="#009387"
              icon="pencil-plus"
              mode="contained"
              onPress={() => console.log('Pressed')}>
              Add
            </Button>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    color: 'black',
    marginTop: '60%',
    marginHorizontal: '5%',
  },
  title: {
    color: 'black',
  },
  addbutton: {
    width: '15%',
    marginTop: '5%',
    marginLeft: '80%',
  },
});
export default AddIncomeScreen;

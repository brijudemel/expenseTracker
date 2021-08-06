import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Title, TextInput, Button} from 'react-native-paper';
import {DataContext} from '../provider/DataProvider';
import {AuthContext} from '../provider/AuthProvider';
const AddIncomeScreen = () => {
  const [source, setSource] = useState('');
  const [amount, setAmount] = useState('');
  const {user} = useContext(AuthContext);
  const {writeIncome, setIncome, income} = useContext(DataContext);
  useEffect(() => {
    writeIncome(user.uid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [income]);

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
              onPress={async () => {
                await setIncome(prev => [
                  ...prev,
                  {
                    incSource: source,
                    incAmount: amount,
                  },
                ]);
                //console.log(income);
                setSource('');
                setAmount('');
              }}>
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

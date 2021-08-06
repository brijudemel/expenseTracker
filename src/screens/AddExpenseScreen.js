import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Title, TextInput, Button} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import {DataContext} from '../provider/DataProvider';
import {AuthContext} from '../provider/AuthProvider';
const AddExpenseScreen = () => {
  const {writeData, setData, data} = useContext(DataContext);
  const {user} = useContext(AuthContext);
  const [amount, setAmount] = useState('');
  const [other, setOther] = useState('');
  const [selectedSource, setSelectedSource] = useState('');
  useEffect(() => {
    writeData(user.uid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return (
    <View>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Add Your Expense</Title>
          <Picker
            style={styles.picker}
            dropdownIconColor="black"
            selectedValue={selectedSource}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedSource(itemValue)
            }>
            <Picker.Item
              color={selectedSource === '' ? 'black' : 'white'}
              label="Select Expense"
              value=""
            />
            <Picker.Item
              color={selectedSource === 'grocery' ? 'black' : 'white'}
              label="Grocery"
              value="grocery"
            />
            <Picker.Item
              color={selectedSource === 'fv' ? 'black' : 'white'}
              label="Fruits & Vegetbles"
              value="fv"
            />
            <Picker.Item
              color={selectedSource === 'gas' ? 'black' : 'white'}
              label="Gas"
              value="gas"
            />
            <Picker.Item
              color={selectedSource === 'clothes' ? 'black' : 'white'}
              label="Clothes"
              value="clothes"
            />
            <Picker.Item
              color={selectedSource === 'electricity' ? 'black' : 'white'}
              label="Electricity"
              value="electricity"
            />
            <Picker.Item
              color={selectedSource === 'rent' ? 'black' : 'white'}
              label="Rent"
              value="rent"
            />
            <Picker.Item
              color={selectedSource === 'others' ? 'black' : 'white'}
              label="Others"
              value="others"
            />
          </Picker>
          <TextInput
            mode="flat"
            label="Expense (Other)"
            value={other}
            onChangeText={text => setOther(text)}
            outlineColor="#009387"
            disabled={selectedSource === 'others' ? false : true}
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
                await setData(prev => [
                  ...prev,
                  {
                    expSource:
                      selectedSource === '' || selectedSource === 'others'
                        ? other
                        : selectedSource,
                    amount: amount,
                  },
                ]);
                setAmount('');
                setOther('');
                setSelectedSource('');
                //console.log(data);
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
  picker: {
    width: '51%',
    marginBottom: '2%',
  },
  input: {
    marginBottom: '2%',
  },
});
export default AddExpenseScreen;

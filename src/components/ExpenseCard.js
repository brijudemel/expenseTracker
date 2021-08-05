import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Title, Button, Paragraph} from 'react-native-paper';
const ExpenseCard = ({expSource, amount}) => {
  return (
    <View>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.topRow}>
            <Title>
              {expSource === 'fv'
                ? 'Fruits & Vegetables'
                : expSource.charAt(0).toUpperCase() + expSource.slice(1)}
            </Title>
            <Paragraph style={styles.expense}>Expense</Paragraph>
          </View>
          <View style={styles.bottomRow}>
            <Paragraph style={styles.amtText}>Amount</Paragraph>
            <Paragraph style={styles.amount}>₹{amount}</Paragraph>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
  },
  expense: {
    color: 'red',
  },
  amtText: {
    fontSize: 20,
  },
  amount: {
    fontSize: 20,
  },
  card: {
    margin: 10,
  },
});

export default ExpenseCard;

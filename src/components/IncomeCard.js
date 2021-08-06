import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
const IncomeCard = ({incSource, incAmount}) => {
  return (
    <View>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.topRow}>
            <Title>
              {incSource.charAt(0).toUpperCase() + incSource.slice(1)}
            </Title>
            <Paragraph style={styles.expense}>Income</Paragraph>
          </View>
          <View style={styles.bottomRow}>
            <Paragraph style={styles.amtText}>Amount</Paragraph>
            <Paragraph style={styles.amount}>₹{incAmount}</Paragraph>
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
    color: 'green',
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

export default IncomeCard;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { addMonths, format, subMonths } from 'date-fns';

const Header = ({ date, onChange }) => {
  const handlePrevMonth = () => {
    const newDate = subMonths(date, 1);
    onChange(newDate);
  };
  const handleNextMonth = () => {
    const newDate = addMonths(date, 1);
    onChange(newDate);
  };

  return (
    <View style={styles.arrow}>
      <IconButton icon="chevron-left" onPress={handlePrevMonth} color='#0096FF'/>
      <Text>{format(date, 'MMMM yyyy')}</Text>
      <IconButton icon="chevron-right" onPress={handleNextMonth} color='#0096FF' />
    </View>
  );
};
const styles = StyleSheet.create({
  arrow: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  }
})
export default Header;

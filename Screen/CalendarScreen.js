import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import Header from '../Calendar/Header';
import Body from '../Calendar/Body';

const CalendarScreen = () => {
  const [date, setDate] = useState(new Date());
  
  return (
    <View style={{flex:1,  backgroundColor: "white",}}>
      <View>
        <FlatList
          ListHeaderComponent={
            <Header date={date} onChange={(newDate) => setDate(newDate)} />
          }
        />
      </View>
      <View>
        <Body date={date} />
      </View>
    </View>
  );
};

export default CalendarScreen;

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { endOfMonth, startOfMonth } from 'date-fns';

const Body = ({ date }) => {
  const [dateClick, setDateClick] = useState(`now-${date.getDate()}`);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(monthStart);

  const monthDays = () => {
    let matrix = [];
    matrix[0] = weekDays.map((item) => ['week', item]);

    let firstDay = monthStart.getDay();
    let lastMonthDate = monthEnd.getDate();

    let cnt = 1;
    let lastMonthCnt = lastMonthDate - firstDay + 1;
    let nextMonthCnt = 1;

    for (let i = 1; i < 7; i++) {
      matrix[i] = [];
      for (let j = 0; j < 7; j++) {
        if (i === 1) {
          matrix[i][j] =
            j >= firstDay ? ['now', cnt++] : ['last', lastMonthCnt++];
        } else {
          matrix[i][j] =
            cnt <= lastMonthDate ? ['now', cnt++] : ['next', nextMonthCnt++];
        }
      }
      if (cnt > lastMonthDate) {
        break;
      }
    }

    return matrix;
  };

  const onClickDate = (date) => {
    if (date[0] !== 'week') {
      setDateClick(`${date[0]}-${date[1]}`);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        {monthDays().map((day, dayIdx) => (
          <View style={styles.weekDaysContainer} key={dayIdx}>
            <View style={styles.weekDays}>
              {day.map((col, colIdx) => {
                let color = '#3a3a3a';

                if (dayIdx === 0) {
                  if (colIdx === 0) {
                    color = '#eb0000';
                  } else if (colIdx === 6) {
                    color = '#004eea';
                  } else {
                    color = '#8e8e8e';
                  }
                } else {
                  if (col[0] !== 'now') {
                    color = '#cccccc';
                  }
                }
                return (
                  <View
                    key={`${col[0]}-${col[1]}`}
                    style={
                      dstyles(color, dateClick === `${col[0]}-${col[1]}`)
                        .dateContainer
                    }
                  >
                    <Text
                      style={dstyles(color).date}
                      onPress={() => onClickDate(col)}
                    >
                      {col[1]}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingHorizontal: 20,
  },
  weekDaysContainer: {
    height: 45,
  },
  weekDays: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
const dstyles = (color, dateClick) =>
  StyleSheet.create({
    dateContainer: {
      height: 30,
      width: 30,
      justifyContent: 'center',
      alignContent: 'center',
      borderWidth: dateClick ? 1 : 0,
      borderRadius: 15,
      borderColor: dateClick ? '#0096FF' : null,
    },
    date: {
      color: color,
      textAlign: 'center',
      fontSize: 12,
      fontWeight: 'normal',
    },
  });

export default Body;

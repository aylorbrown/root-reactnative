import React, { useContext } from 'react';
import { 
    StyleSheet, 
    View,
    TouchableHighlight,
    Text } from "react-native";
import { 
  VictoryBar, 
  VictoryAxis, 
  VictoryContainer, 
  VictoryChart, 
  VictoryLabel, 
  VictoryStack } from "victory-native";

// import UserContext from './UserContext';

const data = [
    { day: 'Mon', minutes: 5 },
    { day: 'Tues', minutes: 1.5 },
    { day: 'Wed', minutes: 3 },
    { day: 'Thur', minutes:  2},
    { day: 'Fri', minutes:  2},
    { day: 'Sat', minutes:  2},
    { day: 'Sun', minutes:  2},
  ];

const data1 = [
    { day: 'Mon', minutes: 2 },
    { day: 'Tues', minutes: 1 },
    { day: 'Wed', minutes: 1.25 },
    { day: 'Thur', minutes: .25 },
    { day: 'Fri', minutes:  1 },
    { day: 'Sat', minutes: 1.75},
    { day: 'Sun', minutes: 3 },
  ];



export default function ProgressChart() {
  // const {value} = useContext(UserContext);


    return (
      <View style={{ display: "flex", flexWrap: "wrap" }}>

        <VictoryChart
        style={{ 
          parent: { maxWidth: "100%" }
        }}
        domain={{y: [0, 10]}}
        // height={600}
        // width={600}
        containerComponent={<VictoryContainer responsive={false}/>}
        >

        <VictoryAxis
        style={{
          axis: {stroke: '#fc715e'}, 
          tickLabels: {stroke: '#1c1aa9', fontSize: 24}
        }}
        tickValues={[1, 2, 3, 4, 5, 6, 7]}
        tickFormat={['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
      
        />

        <VictoryStack
        colorScale={['#1c1aa9', '#33c18b']}
        >

        {/* kegel bar */}
        <VictoryBar 
        // data={value}
        data={data}
        barWidth={40}
        style={{ 
          data: { fill: "#1c1aa9" },
          labels: { fill: "white"}
        }}
        labelComponent={<VictoryLabel dy={-10}/>}
        x={'day'}
        y={'minutes'}
        />

        {/* squat bar */}
        <VictoryBar 
        // data={value}
        data={data1}
        barWidth={40}
        style={{ 
          data: { fill: "#33c18b" },
          labels: { fill: "white"}
        }}
        labelComponent={<VictoryLabel dy={-10}/>}
        x={'day'}
        y={'minutes'}
        />

      </VictoryStack>

        </VictoryChart>

        {/* a start button here */}

      </View>
    );
}






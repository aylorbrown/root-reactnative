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

import UserContext from './UserContext';


export default function ProgressChart() {
  const {kegelData, squatData} = useContext(UserContext);
  console.log('we are in progress chart');
  console.log(kegelData);
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
        data={kegelData}
        // data={data}
        barWidth={40}
        style={{ 
          data: { fill: "#1c1aa9" },
          labels: {fill: "white"}
        }}
        labels={({ datum }) => datum.minutes == 0 ? '' : datum.minutes}
        labelComponent={<VictoryLabel dy={30}/>}
        x={'day'}
        y={'minutes'}
        />

        {/* squat bar */}
        <VictoryBar 
        data={squatData}
        // data={data1}
        barWidth={40}
        style={{ 
          data: { fill: "#33c18b" },
          labels: { fill: "white"}
        }}
        labels={({ datum }) => datum.minutes == 0 ? '' : datum.minutes}
        labelComponent={<VictoryLabel dy={20}/>}
        x={'day'}
        y={'minutes'}
        />

      </VictoryStack>
        </VictoryChart>
      </View>
    );
}






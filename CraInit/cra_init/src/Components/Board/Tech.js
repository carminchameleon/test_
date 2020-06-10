import React from 'react';
import styled from 'styled-components';
import ReactEcharts from 'echarts-for-react'

const Tech = ({techData}) => {
  const getData = (data, keyword) => {
    const chartData = [];
    data.forEach((item) => {
      chartData.push(item[keyword]);
    });
    return chartData;
  };

  return (
    <Container>
      <ReactEcharts
        option={{
          xAxis: {
            type: 'category',
            data: getData(techData, 'key'),
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: getData(techData, 'value'),
              type: 'line',
            },
          ],
        }}
      />
    </Container>
  );
};
export default Tech;

const Container = styled.div``;

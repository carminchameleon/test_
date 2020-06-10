import React from 'react';
import styled from 'styled-components';
import ReactEcharts from 'echarts-for-react';

const Coporation = ({corData}) => {
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
            data: getData(corData, 'key'),
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: getData(corData, 'value'),
              type: 'bar',
            },
          ],
        }}
      />
    </Container>
  );
};
export default Coporation;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

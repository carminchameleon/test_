import React from 'react'
import styled from 'styled-components'
import ReactEcharts from 'echarts-for-react'


const Industry= ({indusData}) => {
  
  const getData = (data, keyword) => {
    const chartData = [];
    data.forEach((item) => {
      chartData.push(item[keyword]);
    });
    return chartData;
  };

  const handleData = (data) => {
    const list = []
    data.forEach((item)=>{
        list.push({
      "value" : item.value,
       "name" : item.key
      }) 
    }
  )
    return list
  }
  
  return (
    <Container>
      <ReactEcharts
        option={{
          title: {
            text: 'Industry Data',
            subtext: 'Industry ',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: getData(indusData, 'key')
        },
        series: [
            {
                name: '산업군이름',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: handleData(indusData),
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
        }}
      />
    </Container>
  );
}
export default Industry

const Container = styled.div`
width:100%;
height:100vh;`
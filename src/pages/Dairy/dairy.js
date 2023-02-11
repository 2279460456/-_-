import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'antd';

function Buildstation() {
  const [dairy, setDairy] = useState();

  const renderdairy = () => {   //该组件作用为渲染每一条日记
    if (dairy === undefined) {
      return;
    }
    return dairy.map(item => {
      return (
        <Card type="inner"
          key={item._id}
          style={{ marginTop: 16, }}
          title={`时间 : ${dairy === undefined ? '数据马上回来' : item.date}`}
          extra={<a href='#'></a>}>
          {
            dairy === undefined ? '数据马上回来' : item.dairy
          }
        </Card>
      )
    })
  }

  useEffect(() => {
    axios.get(`/dairy`).then(res => {
      // console.log(res.data);
      let data = res.data.reverse();
      setDairy(data);  //取日记
    }).catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div>
      <Card title="生活日记">
        {renderdairy()}
      </Card>
    </div>
  )
}

export default Buildstation
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'antd';

function Buildstation() {
    const [buildDairies, setBuildDairies] = useState();

    const renderdairy = () => {   //该组件作用为渲染每一条日记
        if (buildDairies === undefined) {
            return;
        }
        return buildDairies.map(item => {
            return (
                <Card type="inner"
                    key={item._id}
                    style={{ marginTop: 16, }}
                    title={`时间 : ${buildDairies === undefined ? '数据马上回来' : item.date}`}
                    extra={<a href='#'></a>}>
                    {
                        buildDairies === undefined ? '数据马上回来' : item.dairy
                    }
                </Card>
            )
        })
    }

    useEffect(() => {
        axios.get(`/buildstation`).then(res => {
            // console.log(res.data);
            let data = res.data.reverse();
            setBuildDairies(data);  //取日记
        }).catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div>
            <Card title="建站日记">
                {renderdairy()}
            </Card>
        </div>
    )
}

export default Buildstation
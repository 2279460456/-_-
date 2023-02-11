import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spin } from 'antd';
import axios from 'axios'
const { Meta } = Card;



function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('/movies').then(res => {
            // console.log(res.data);
            setMovies(res.data);
        }).catch(err => { console.log(err) })
    }, [])

    const rendermovie = () => {
        return movies.map(item => {
        
            // console.log(item)
            return (<Col span={6} key={`${item.key}`}>
                <a href={`${item.href}`}>
                    <Card
                        hoverable
                        style={{
                            width: "12vw",
                            height: "47vh"
                        }}
                        cover={<img alt="example" src={`${item.poster}`} style={{ height: '33vh' }} />}
                    ><Meta title={`${item.name}`} description={`${item.dateReleased}   (${item.doubanRating})`} />

                    </Card></a>
            </Col >)
        });
    }
    return (
        <div>
            <h2 >个人推荐电影</h2>
            <div className="site-card-wrapper">
                <Row gutter={[6, 10]}>
                    {movies.length === 0 ? <Spin size="large" style={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }} /> : rendermovie()}
                </Row>
            </div>
        </div>
    )
}

export default Movies
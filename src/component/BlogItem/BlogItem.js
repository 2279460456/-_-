import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { BoxPlotOutlined, UserOutlined } from '@ant-design/icons';
import './BlogItem.css';

function BlogItem() {
    let navigate = useNavigate();

    const [blogs, setBlogs] = useState();

    const renderDate = () => {  //渲染数据
        return blogs !== undefined && blogs.map(item =>
            <div key={nanoid()} className='shell' >
                <div className='top'>
                    <div className='photo_box'>
                        <img src={item.cover}></img>
                    </div>
                    <div className='top_right'>
                        <h2 className='header'> {item.title}</h2>
                        <h4 className='content'>{item.subtitle}</h4>
                    </div>
                </div>
                <hr />
                <div className='bottom' >
                    <span >{item.date}</span>
                    <span >{item.comment}</span>
                    <span >{item.view}</span>
                    <span >{item.point}</span>
                    <span > {item.author}</span>
                    <span > <a onClick={() => { navigate(`/showarticle/${item.key}`) }}>阅读全文</a></span>
                </div>
            </div>
        )
    }

    useEffect(() => {
        axios.get(`/blogs`).then(res => {
            // console.log(res.data);
            let data = res.data.reverse();  //逆序数组，使时间对应
            setBlogs(data)
        })
    }, [])

    return (
        <div>
            {
                renderDate()
            }
        </div>
    )
}

export default BlogItem
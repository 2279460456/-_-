import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Divider, Typography } from 'antd';
import './showartilce.css'

const { Title, Paragraph, Text, Link } = Typography;

function Showarticle() {
    const Parms = useParams();
    const [article, setArticle] = useState();

    useEffect(() => {
        // console.log(Parms.id)
        axios.get(`/blogs/${Parms.id}`).then(res => {
            console.log(res.data);
            setArticle(res.data[0]);
        })
    }, [Parms.id])

    return (
        (article !== undefined) &&
        < div className='show_article' >
            <header>
                <a href='/'>首页</a>
            </header>
            <div className='article'>
                {/* <div className='title'>{article.title}</div>
                <div className='informations'></div>
                <div></div> */}

                <Typography>
                    <Divider />

                    <Title style={{ "textAlign": "center" }}>{article.title}</Title>
                    <div>
                        <ul className='artilce_infrom'>
                            <li>{article.date}.</li>
                            <li >{article.view}次阅读.</li>
                            <li >{article.point}次点赞.</li>
                            <li >{article.comment}条评论.</li>
                        </ul>
                    </div>
                    <Paragraph className='paragraph'>
                        < div className="msg" dangerouslySetInnerHTML={{ __html: article.editContext }} />
                    </Paragraph>
                </Typography>
            </div >
        </div >
    )
}

export default Showarticle
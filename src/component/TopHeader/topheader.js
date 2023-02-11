import React from 'react';
import './topheader.css';


function topheader() {
    return (
        <nav className='navbar'>
            <div className='navbar_left'>
                <a href='/'>赵智的blog</a>
            </div>
            <div className='navbar_right'>
                <ul>
                    <li><a href='/'>首页</a></li>
                    <li><a href='/buildstation'>建站</a></li>
                    <li><a href='/movies'>电影</a></li>
                    <li><a href='/dairy'>日记</a></li>
                    <li><a href='/'>归档</a></li>
                    <li><a href='/aboutme'>关于我</a></li>
                </ul>

            </div>
        </nav>
    )
}

export default topheader
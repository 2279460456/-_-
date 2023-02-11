import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//路由组件
import BuildStation from '../../pages/BuildStation/buildstation'
import Dairy from '../../pages/Dairy/dairy'
import AboutMe from '../../pages/AboutMe/aboutme'
import Home from '../../pages/Home/home';
import PageNotFound from '../PageNotFound';
import ShowArticle from '../../pages/ShowArticle/showarticle';
import Movies from '../../pages/Movies/Movies';
//普通组件
import Search from '../Search/Search';

import './router.css'

function router() {
    return (
        <div className='typearea'>
            <div className='typeleft'>
                <BrowserRouter>
                    <Routes>
                        <Route path='/buildstation' element={<BuildStation />}></Route>
                        <Route path='/dairy' element={<Dairy />}></Route>
                        <Route path='/aboutme' element={<AboutMe />}></Route>
                        <Route path="/showarticle/:id" element={<ShowArticle />} ></Route>
                        <Route path="/movies" element={<Movies></Movies>}></Route>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/*' element={<PageNotFound />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
            <div className='typeright'>
                <Search ></Search>
            </div>
        </div>
    )
}

export default router
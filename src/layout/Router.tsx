import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../components/NotFound'
import Home from '../pages/home/Home'
import Post from '../pages/post/Post'
import Search from '../pages/search/Search'
import PageLayout from './PageLayout'

type Props = {}

const Router = (props: Props) => {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Home />} />
                <Route element={<PageLayout></PageLayout>}>
                    <Route path='search' element={<Search></Search>}></Route>
                    <Route path='post/:id' element={<Post></Post>}></Route>
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default Router
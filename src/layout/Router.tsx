import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Search from '../pages/search/Search'
import PageLayout from './PageLayout'

type Props = {}

const Router = (props: Props) => {
    return (
        <Routes>
            <Route element={<PageLayout />}>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path='search' element={<Search></Search>}></Route>
                    {/* <Route path="teams" element={<Teams />}>
                        <Route path=":teamId" element={<Team />} />
                        <Route path=":teamId/edit" element={<EditTeam />} />
                        <Route path="new" element={<NewTeamForm />} />
                        <Route index element={<LeagueStandings />} />
                    </Route> */}
                </Route>
            </Route>
        </Routes>
    )
}

export default Router
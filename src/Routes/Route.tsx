import { Routes, Router, Route, Link } from 'react-router-dom';
import { RequireAuth } from '../contexts/Auth/RequireAuth';
import { Home } from '../pages/Home';
import { Private } from '../pages/Private';

export const RouteApp = () =>{
    return(
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/private' element={
        <RequireAuth>
            <Private/>
        </RequireAuth>
        }/>
        <Route path='*' element={<Home/>}></Route>
      </Routes>
    )
}
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'

function App() {

  return (
    <div>
      <h1> Book Explorer project </h1>
      <Routes>
        <Route path = '/' element = {<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App

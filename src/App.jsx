import './App.css'
import Animais from './pages/Animais/Animais'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {

    return (
        <>

            <Home />

            <Animais />

        </>
    )
}

export default App

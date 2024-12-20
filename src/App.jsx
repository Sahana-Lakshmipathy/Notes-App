import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Notes from './pages/Notes';
import LoginRegister from './pages/LoginRegister';

const App = () => {
  return (
    <>
    <div id="app">
      <div id="container">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/login" element={<LoginRegister />} />
          </Routes>
      </BrowserRouter>
      </div>
    </div>
      
    </>
    
  )
}

export default App
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Notes from './pages/Notes';
import LoginRegister from './pages/LoginRegister';

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/login" element={<LoginRegister />} />
          </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
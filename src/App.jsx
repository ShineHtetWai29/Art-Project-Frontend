import './App.css'
import Footer from './pages/footer/Footer'
import Nav from './pages/nav/Nav'

function App() {
  
  const userId=localStorage.getItem('userId')
  return (
    <>
    
      <Nav/>
      <Footer/>
    </>
    
  )
}

export default App

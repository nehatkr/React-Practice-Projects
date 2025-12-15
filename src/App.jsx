
import './App.css'
import Category from './component/Category'
import Navbar from './component/Navbar'
import News from './component/page/News'

function App() {

  return (
    <>
     <Navbar />
     <Category className='py-10' />
     <News />
    </>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Delivery } from './pages/Delivery'

import ScrollToTop from './utils/scrollToTop'

import './styles/main.css'

function App() {
  return (
    <>
		<Router>
			<ScrollToTop />
			<Header/>
				<Routes>

					<Route path='/' element= {<Home/>} />
					<Route path='/About' element={<About />} /> 
					<Route path='/Delivery' element={<Delivery />} /> 

				</Routes>
			<Footer/>
		</Router>
    </>
  )
}

export default App

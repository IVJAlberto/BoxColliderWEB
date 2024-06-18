import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { ParallaxProvider } from "react-scroll-parallax";

import { BoxColliderWeb } from './BoxColliderWeb'
import './i18n/i18n'
import './style.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ParallaxProvider>  
      <BoxColliderWeb/>  
    </ParallaxProvider>
  </BrowserRouter>
  )    

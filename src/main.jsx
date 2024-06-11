import { Suspense } from 'react'

import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { BoxColliderWeb } from './BoxColliderWeb'
import './i18n/i18n'
import './style.css'
import { Loading } from './components/Loading'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Loading/>}>
    <BrowserRouter>
        <BoxColliderWeb/>  
    </BrowserRouter>
  </Suspense>
  )    

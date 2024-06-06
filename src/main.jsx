import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import { BoxColliderWeb } from './BoxColliderWeb'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <BoxColliderWeb/>  
  </BrowserRouter>,
)

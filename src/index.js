import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'
import { Overlay } from './Overlay'

createRoot(document.getElementById('root')).render(
  <>
    <div style={{ position: "relative", height: '100vh', width: '100%', }}>


      <App />
      <div style={{ position: "absolute", top: 0, left: 20 }}>
        <h1 style={{ fontWeight: 700, fontSize: 80 }}>GEI EL QUE LO LEA</h1>

      </div>
    </div>
  </>
)

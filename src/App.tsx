import { useState } from 'react'
import './App.css'

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Plannin-React
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          Aplicación para planificación y animación de planes PDDL
        </p>
        <p className="text-md text-green-600 mb-4 font-semibold">
          Basado en FF (Fast Forward)
        </p>
        
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Contador: {count}
          </button>
          <p>
            Edita <code>src/App.tsx</code> y guarda para probar HMR
          </p>
        </div>
        
        <div className="developer-info mt-8 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Desarrollador</h3>
          <p className="text-gray-700">Francisco Javier Gómez Rodríguez</p>
        </div>
        
        <p className="read-the-docs mt-4">
          Haz clic en los enlaces de Vite y React para aprender más
        </p>
      </header>
    </div>
  )
}

export default App
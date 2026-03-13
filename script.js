import React, { useState } from 'react'

// --- NUEVA PUNTUACIÓN VIBRANTE (#E0E0E0) ---
// Observa cómo brillan los puntos, comas, dos puntos y punto y coma.
const config = {
  api: 'https://api.vibrant.dev',
  timeout: 5000,
  headers: ['Content-Type', 'Authorization'],
}

export const HeaderComponent = ({ title, isActive }) => {
  const [count, setCount] = useState(0)

  // --- RESTAURADO EL SIGNO DE IGUAL (=) ---
  // El igual (=) tiene su color original, mientras que la flecha (=>) brilla.
  const handleIncrement = () => {
    setCount((prev) => prev + 1)
    console.log(`Contador actualizado: ${count + 1}`) // Punto vibrante
  }

  return (
    // --- TAGS TENUES (< > /) ---
    // Los símbolos <, >, y /> son discretos, resaltando el nombre del tag (div, h1, button).
    <div className="container" style={{ opacity: isActive ? 1 : 0.5 }}>
      <header className="main-header">
        <h1>{title}</h1>
        <p>Versión del Tema: 1.2.2</p>
      </header>

      <section className="content">
        {/* Brackets con colorization activado (Arcoíris) */}
        {isActive && (
          <button onClick={handleIncrement}>Incrementar: {count}</button>
        )}
      </section>

      {/* Tag de cierre automático tenue */}
      <footer className="footer" />
    </div>
  )
}

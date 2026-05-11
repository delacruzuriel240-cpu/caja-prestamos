'use client'

import { useState } from 'react'

export default function Home() {
  const [nombre, setNombre] = useState('')
  const [monto, setMonto] = useState('')
  const [prestamos, setPrestamos] = useState([])

  const agregarPrestamo = () => {
    if (!nombre || !monto) return

    const nuevo = {
      nombre,
      monto
    }

    setPrestamos([...prestamos, nuevo])

    setNombre('')
    setMonto('')
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f4f4f5',
      padding: '20px',
      fontFamily: 'Arial'
    }}>
      <div style={{
        maxWidth: '400px',
        margin: '0 auto'
      }}>

        <div style={{
          background: '#15803d',
          color: 'white',
          padding: '20px',
          borderRadius: '20px',
          marginBottom: '20px'
        }}>
          <h1>📒 Caja Préstamos 2026</h1>
          <p>Registro de préstamos</p>
        </div>

        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '20px',
          marginBottom: '20px'
        }}>
          <h2>➕ Nuevo préstamo</h2>

          <input
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              marginTop: '10px',
              marginBottom: '10px',
              borderRadius: '10px',
              border: '1px solid #ccc'
            }}
          />

          <input
            placeholder="Monto"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '10px',
              borderRadius: '10px',
              border: '1px solid #ccc'
            }}
          />

          <button
            onClick={agregarPrestamo}
            style={{
              width: '100%',
              padding: '12px',
              background: '#15803d',
              color: 'white',
              border: 'none',
              borderRadius: '10px'
            }}
          >
            Guardar préstamo
          </button>
        </div>

        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '20px'
        }}>
          <h2>💵 Préstamos registrados</h2>

          {prestamos.map((p, i) => (
            <div key={i} style={{
              borderBottom: '1px solid #ddd',
              padding: '10px 0'
            }}>
              <strong>{p.nombre}</strong>
              <p>${p.monto}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
              }

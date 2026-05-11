'use client'

export default function Home() {

  const prestamos = [
    { nombre: 'Mario Ávila', monto: 1000, redito: 35 },
    { nombre: 'Israel de la Cruz', monto: 1500, redito: 53 },
    { nombre: 'Abdiel Roque', monto: 1500, redito: 53 },
    { nombre: 'Josué Roque', monto: 1500, redito: 53 },
    { nombre: 'Silvia', monto: 2000, redito: 80 },
    { nombre: 'Gerardo Roque', monto: 1000, redito: 35 },
    { nombre: 'Micaela Santos', monto: 3000, redito: 105 },
    { nombre: 'Teresa Roque', monto: 1000, redito: 36 },
    { nombre: 'Néstor de la Cruz González', monto: 15000, redito: 525 },
    { nombre: 'Angel Ávila', monto: 1000, redito: 35 },
    { nombre: 'Erendi Ávila', monto: 1000, redito: 35 },
    { nombre: 'Camila Ávila', monto: 1000, redito: 35 },
    { nombre: 'Daniel Cruz Roque', monto: 4500, redito: 158 },
  ]

  const totalPrestado = prestamos.reduce((acc, p) => acc + p.monto, 0)

  const totalReditos = prestamos.reduce((acc, p) => acc + p.redito, 0)

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f4f4f5',
      padding: '20px',
      fontFamily: 'Arial'
    }}>
      <div style={{
        maxWidth: '420px',
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
          <p>Sistema de control financiero</p>
        </div>

        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '20px',
          marginBottom: '15px'
        }}>
          <h2>💰 Total prestado</h2>
          <h1>${totalPrestado.toLocaleString()}</h1>
        </div>

        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '20px',
          marginBottom: '20px'
        }}>
          <h2>📈 Réditos semanales</h2>
          <h1>${totalReditos.toLocaleString()}</h1>
        </div>

        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '20px'
        }}>
          <h2>💵 Préstamos activos</h2>

          {prestamos.map((p, i) => (
            <div
              key={i}
              style={{
                borderBottom: '1px solid #ddd',
                padding: '12px 0'
              }}
            >
              <strong>{p.nombre}</strong>

              <p>💸 ${p.monto.toLocaleString()}</p>

              <p>📈 Rédito semanal: ${p.redito}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

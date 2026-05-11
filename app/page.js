export default function Home() {
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
          <p>Control de préstamos y réditos</p>
        </div>

        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '20px',
          marginBottom: '15px'
        }}>
          <h2>💰 Total prestado</h2>
          <h1>$35,000</h1>
        </div>

        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '20px',
          marginBottom: '15px'
        }}>
          <h2>📈 Réditos próximos</h2>
          <h1>$1,238</h1>
        </div>

        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '20px'
        }}>
          <h2>💵 Préstamos activos</h2>

          <p>• Néstor → $15,000</p>
          <p>• Micaela → $3,000</p>
          <p>• Daniel → $3,000</p>
          <p>• Teresa → $1,000</p>
        </div>

      </div>
    </div>
  );
}

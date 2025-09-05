import { useEffect, useState } from 'react'

export default function App() {
  const [status, setStatus] = useState('…')

  useEffect(() => {
    fetch('http://localhost:4000/health')
      .then(r => r.json())
      .then(() => setStatus('OK'))
      .catch(() => setStatus('DOWN'))
  }, [])

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui' }}>
      <h1>UVA Studio is working! (JS)</h1>
      <p>API status: {status}</p>
    </div>
  )
}

import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Thornleigh Mechanic & Auto Electrician'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #0F172A 0%, #1e293b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
          }}
        >
          <div style={{ fontSize: 72, fontWeight: 'bold', color: '#FF6F3C' }}>
            Thornleigh Mechanic
          </div>
          <div style={{ fontSize: 36, color: '#2C7BE5' }}>
            & Auto Electrician
          </div>
          <div style={{ fontSize: 24, color: '#94a3b8', marginTop: 20 }}>
            Expert Car Service & Repairs
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
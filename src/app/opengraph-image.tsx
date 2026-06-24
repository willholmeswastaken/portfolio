import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Will Holmes — Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '72px',
          background: '#0B0A09',
          color: '#fff',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 40 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src='https://avatars.githubusercontent.com/u/13040458'
            width={72}
            height={72}
            style={{ borderRadius: 9999, border: '1px solid rgba(255,255,255,0.1)' }}
            alt=''
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: 48, fontWeight: 600, letterSpacing: '-0.02em' }}>
              Will Holmes
            </div>
            <div style={{ fontSize: 24, color: 'rgba(255,255,255,0.5)' }}>
              Software engineer · UK
            </div>
          </div>
        </div>

        <div style={{ fontSize: 28, color: 'rgba(255,255,255,0.55)', maxWidth: 800, lineHeight: 1.5 }}>
          Side projects, writing, and open-source packages.
        </div>
      </div>
    ),
    size
  );
}

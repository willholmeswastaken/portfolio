import { ImageResponse } from 'next/og';
import { AUTHOR_AVATAR, AUTHOR_NAME } from '@/lib/blog-post';

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

const rootStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'space-between',
  padding: '72px',
  background: '#0B0A09',
  color: '#fff',
  fontFamily: 'Inter, system-ui, sans-serif',
};

function OgAuthorHeader() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={AUTHOR_AVATAR}
        width={56}
        height={56}
        style={{ borderRadius: 9999, border: '1px solid rgba(255,255,255,0.1)' }}
        alt=''
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em' }}>{AUTHOR_NAME}</div>
        <div style={{ fontSize: 20, color: 'rgba(255,255,255,0.5)' }}>willholmes.dev</div>
      </div>
    </div>
  );
}

function titleFontSize(title: string): number {
  if (title.length > 90) return 40;
  if (title.length > 60) return 48;
  return 56;
}

export function createSiteOgImage() {
  return new ImageResponse(
    (
      <div style={{ ...rootStyle, justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 40 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={AUTHOR_AVATAR}
            width={72}
            height={72}
            style={{ borderRadius: 9999, border: '1px solid rgba(255,255,255,0.1)' }}
            alt=''
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: 48, fontWeight: 600, letterSpacing: '-0.02em' }}>{AUTHOR_NAME}</div>
            <div style={{ fontSize: 24, color: 'rgba(255,255,255,0.5)' }}>Software engineer · UK</div>
          </div>
        </div>
        <div style={{ fontSize: 28, color: 'rgba(255,255,255,0.55)', maxWidth: 800, lineHeight: 1.5 }}>
          Side projects, writing, and open-source packages.
        </div>
      </div>
    ),
    ogSize,
  );
}

export function createPostOgImage({
  title,
  description,
  date,
}: {
  title: string;
  description: string;
  date: string;
}) {
  return new ImageResponse(
    (
      <div style={rootStyle}>
        <OgAuthorHeader />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, flex: 1, justifyContent: 'center' }}>
          <div
            style={{
              fontSize: titleFontSize(title),
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 24,
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.45,
              maxWidth: 900,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {description}
          </div>
        </div>
        <div style={{ fontSize: 20, color: 'rgba(255,255,255,0.35)' }}>{date}</div>
      </div>
    ),
    ogSize,
  );
}

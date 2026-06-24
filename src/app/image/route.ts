import { NextRequest, NextResponse } from 'next/server';
import { projectUrls } from '@/data';

function normalizeUrl(url: string): string {
  return url.replace(/\/$/, '');
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get('url');
  const dimension = searchParams.get('dimension') || '1024x768';

  if (!url) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
  }

  if (!projectUrls.has(normalizeUrl(url))) {
    return NextResponse.json({ error: 'URL not allowed' }, { status: 403 });
  }

  const apiKey = process.env.SCREENSHOT_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Screenshot service unavailable' }, { status: 503 });
  }

  const apiUrl = `https://api.screenshotmachine.com?key=${apiKey}&url=${encodeURIComponent(url)}&dimension=${dimension}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch image');
    }

    const imageBuffer = await response.arrayBuffer();

    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Error fetching image:', error);
    return NextResponse.json({ error: 'Failed to fetch image' }, { status: 500 });
  }
}

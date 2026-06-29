import { createSiteOgImage, ogContentType, ogSize } from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Will Holmes — Software Engineer';
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return createSiteOgImage();
}

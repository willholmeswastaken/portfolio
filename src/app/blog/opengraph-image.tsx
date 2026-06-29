import { createBlogIndexOgImage, ogContentType, ogSize } from '@/lib/og-image';

export const alt = 'Writing — Will Holmes';
export const size = ogSize;
export const contentType = ogContentType;

export default function OgImage() {
  return createBlogIndexOgImage();
}

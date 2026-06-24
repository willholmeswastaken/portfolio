export function getProjectScreenshotUrl(projectUrl: string, dimension = '1024x640'): string {
  return `/image?url=${encodeURIComponent(projectUrl)}&dimension=${dimension}`;
}

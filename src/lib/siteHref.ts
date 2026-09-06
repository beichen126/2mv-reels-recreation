/** Keep this recreation local; other pages belong to the original site. */
export function siteHref(path: string) {
  return path === '/ai-video-analyzer/instagram-reels' ? '/' : new URL(path, 'https://www.2mv.ai').href
}

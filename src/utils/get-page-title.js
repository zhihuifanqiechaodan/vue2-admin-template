import defaultSettings from '@/settings'
const title = defaultSettings.title|| `Ale AnLian`

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}

import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: '7aulmgx4', // ← GANTI INI!
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // ← WAJIB false untuk development
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// FUNGSI INI WAJIB ADA:
export async function getSiteSettings() {
  try {
    const settings = await client.fetch(`*[_type == "siteSettings"][0]`)
    return settings || null
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return null
  }
}

export default client
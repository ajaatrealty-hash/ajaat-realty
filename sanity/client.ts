import {createClient} from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'

export const client = createClient({
  projectId: '3els5zpg',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // fast, cached reads — good for public pages
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
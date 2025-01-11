import { type SchemaTypeDefinition } from 'sanity'
import { author } from '@/sanity/schemaTypes/author'
import { webapp } from '@/sanity/schemaTypes/webapp'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, webapp],
}

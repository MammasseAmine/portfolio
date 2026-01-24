import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'only_texts',
    title: 'Text Content',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Internal Title',
            type: 'string',
            description: 'Reference title for internal use (e.g. "Hero Section Text")',
        }),
        defineField({
            name: 'hero_text',
            title: 'Hero Subtitle Text',
            type: 'string',
            description: 'The main subtitle text in the Hero section (e.g. "AI & Data Science Engineer...")',
        }),
    ],
})

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
        defineField({
            name: 'About_text',
            title: 'About Me Text',
            type: 'text',
            description: 'The main bio text in the About section. Use [square brackets] to highlight keywords (e.g. "[ESTIN]"). Use double newlines for paragraphs.',
        }),
    ],
})

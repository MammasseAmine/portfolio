import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'about_realms',
    title: 'About Me Realms',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Internal Title',
            type: 'string',
            description: 'Reference title for internal use (e.g. "Main Realms")',
        }),
        defineField({
            name: 'realms',
            title: 'Realms List',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                            description: 'e.g. "Assistant Professor"'
                        },
                        {
                            name: 'icon',
                            title: 'Icon Name',
                            type: 'string',
                            description: 'Lucide icon name: GraduationCap, Brain, Code2, Users, Atom, TrendingUp'
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                            description: 'Use [square brackets] to highlight keywords.'
                        },
                    ],
                },
            ],
        }),
    ],
})

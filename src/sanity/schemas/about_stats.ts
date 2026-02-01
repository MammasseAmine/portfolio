import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'about_stats',
    title: 'About Me Statistics',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Internal Title',
            type: 'string',
            description: 'Reference title for internal use (e.g. "Main Statistics")',
        }),
        defineField({
            name: 'stats',
            title: 'Statistics List',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'number', title: 'Number', type: 'string', description: 'e.g. "50+"' },
                        { name: 'label', title: 'Label', type: 'string', description: 'e.g. "Students Trained"' },
                    ],
                },
            ],
        }),
    ],
})

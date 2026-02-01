import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Skill Name',
            type: 'string',
            description: 'e.g. ReactJS, Python, Docker',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'order',
            title: 'Order ID',
            type: 'number',
            description: 'Order of appearance (Lower numbers come first)',
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: 'level',
            title: 'Proficiency Level',
            type: 'number',
            description: 'Level from 0 to 100',
            validation: (Rule) => Rule.required().min(0).max(100),
        }),
        defineField({
            name: 'icon',
            title: 'Icon Component Name',
            type: 'string',
            description: 'Icon name from react-icons (e.g. SiReact, FaPython) or lucide-react (e.g. Brain)',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    'Front end',
                    'Back end',
                    'Databases',
                    'DevOps',
                    'Deployment',
                    'Content & CMS',
                    'AI and ML',
                    'Data Science',
                    'Platforms',
                    'Software',
                    'Training and Leadership',
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
    ],
})

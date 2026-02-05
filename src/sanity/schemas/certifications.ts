import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'certification',
    title: 'Certification',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'issuer',
            title: 'Issuer',
            type: 'string',
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'string',
            description: 'Year or full date string (e.g. "2024")',
        }),
        defineField({
            name: 'color',
            title: 'Color Gradient Classes',
            type: 'string',
            description: 'Tailwind CSS classes for gradient (e.g. "from-blue-600 to-indigo-800")',
        }),
        defineField({
            name: 'credentialId',
            title: 'Credential ID',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'imageName',
            title: 'Image Filename',
            type: 'string',
            description: 'The filename of the image in /images/certificates/ (e.g. "certificate.jpg")',
        }),
        // Optional: keep an order field if they want to sort them manually
        defineField({
            name: 'order',
            title: 'Order',
            type: 'number',
        }),
    ],
})

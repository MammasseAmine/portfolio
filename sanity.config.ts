import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import project from './src/sanity/schemas/project'
import only_texts from './src/sanity/schemas/only_texts'
import about_stats from './src/sanity/schemas/about_stats'
import about_realms from './src/sanity/schemas/about_realms'

import skills from './src/sanity/schemas/skills'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
    basePath: '/studio',
    projectId,
    dataset,
    // Add and edit the content schema in the 'schema' plugin
    schema: {
        types: [project, only_texts, about_stats, about_realms, skills],
    },
    plugins: [
        structureTool(),
        // Vision is a tool that lets you query your content with GROQ in the studio
        // https://www.sanity.io/docs/the-vision-plugin
        visionTool({ defaultApiVersion: '2024-03-24' }),
    ],
})

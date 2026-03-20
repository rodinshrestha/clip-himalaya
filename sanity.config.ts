'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/admin/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'
import {AutoMarkAsReadAction} from './src/sanity/actions/markAsReadAction'
import {inquiryBadgePlugin} from './src/sanity/plugins/inquiryBadgePlugin'

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    inquiryBadgePlugin(),
  ],
  document: {
    actions: (prev, context) => {
      if (context.schemaType === 'contactSubmission') {
        return [AutoMarkAsReadAction, ...prev];
      }
      return prev;
    },
  },
})

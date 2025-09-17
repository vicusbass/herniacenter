import {defineCliConfig} from 'sanity/cli'
import dotenv from 'dotenv'
dotenv.config({path: '../.env'})

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: 'production',
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    appId: process.env.SANITY_STUDIO_APP_ID,
    autoUpdates: true,
  },
})

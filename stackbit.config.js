import { defineStackbitConfig } from '@stackbit/types'
import { GitContentSource } from '@stackbit/cms-git'
import { Button } from '.stackbit/models/Button'
import { Page } from '.stackbit/models/Page'


export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['content'],
      models: [ Button, Page ],
      assetsConfig: {
        referenceType: 'static',
        staticDir: 'static',
        uploadDir: 'images',
        publicPath: '/'
      }
    }),
  ],
})

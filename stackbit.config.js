import { GitContentSource } from '@stackbit/cms-git';
import { defineStackbitConfig } from '@stackbit/types';
import { allModels } from './.stackbit/models';

const gitContentSource = new GitContentSource({
    rootPath: __dirname,
    contentDirs: ['content'],
    models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/{slug}",
          filePath: "content/pages/{slug}.json",
          fields: [{ name: "title", type: "string", required: true }]
        }
      ],
    assetsConfig: {
        referenceType: 'static',
        staticDir: 'public',
        uploadDir: 'images',
        publicPath: '/'
    }
});

export const sbConfig = defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    ssgName: 'nextjs',
    nodeVersion: '18',
    contentSources: [gitContentSource],
    presetSource: {
        type: 'files',
        presetDirs: ['.stackbit/presets']
    },
    styleObjectModelName: 'ThemeStyle',
    siteMap: ({ documents, models }) => {
        const pageModels = models
          .filter((m) => m.type === 'page')
          .map((m) => m.name)
        return documents
          .filter((d) => pageModels.includes(d.modelName))
          .map((document) => {
            const slug = getLocalizedFieldForLocale(document.fields.slug)
            if (!slug.value) return null
            const urlPath = '/' + slug.value.replace(/^\/+/, '')
            return {
              stableId: document.id,
              urlPath,
              document,
              isHomePage: urlPath === '/',
            }
          })
      },
});

export default sbConfig;
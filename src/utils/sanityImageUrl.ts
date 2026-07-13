import { createImageUrlBuilder } from '@sanity/image-url';
import { sanityClient } from 'sanity:client';
import type { SanityImageSource } from '@sanity/image-url';

const clientConfig = sanityClient.config();
const projectId = clientConfig.projectId;
const dataset = clientConfig.dataset;

let builder: ReturnType<typeof createImageUrlBuilder> | null = null;

if (projectId && dataset) {
  builder = createImageUrlBuilder({ projectId, dataset });
} else {
  console.warn(
    'Sanity `projectId` or `dataset` not found in `sanityClient` configuration. ' +
      'This is usually configured in `astro.config.mjs` via the Sanity integration ' +
      'and relies on environment variables (e.g., SANITY_STUDIO_PROJECT_ID). ' +
      'Image URLs will not be generated. ' +
      'Current config from sanityClient:',
    clientConfig
  );
}
export function urlFor(source: SanityImageSource) {
  return builder?.image(source);
}

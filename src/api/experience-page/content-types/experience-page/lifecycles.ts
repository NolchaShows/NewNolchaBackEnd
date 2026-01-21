type MediaRef = number | { id?: number } | null | undefined;

async function resolveUploadFileName(strapi: any, media: MediaRef): Promise<string | null> {
  const id = typeof media === 'number' ? media : media?.id;
  if (!id) return null;

  const file = await strapi.db.query('plugin::upload.file').findOne({
    where: { id },
    select: ['name'],
  });

  return file?.name ?? null;
}

async function hydrateGalleryItemNames(strapi: any, data: any) {
  if (!data?.blocks || !Array.isArray(data.blocks)) return;

  for (const block of data.blocks) {
    if (block?.__component !== 'blocks.gallery') continue;
    if (!Array.isArray(block.items)) continue;

    for (const item of block.items) {
      if (!item) continue;
      if (item.imageName) continue;

      const name = await resolveUploadFileName(strapi, item.image);
      if (name) item.imageName = name;
    }
  }
}

export default {
  async beforeCreate(event: any) {
    await hydrateGalleryItemNames(event.strapi, event.params?.data);
  },
  async beforeUpdate(event: any) {
    await hydrateGalleryItemNames(event.strapi, event.params?.data);
  },
};


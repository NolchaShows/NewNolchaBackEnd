export default {
  async beforeCreate(event: any) {
    const data = event.params?.data;
    if (!data?.blocks || !Array.isArray(data.blocks)) return;

    for (const block of data.blocks) {
      if (block?.__component !== 'blocks.gallery') continue;
      if (!Array.isArray(block.items)) continue;

      block.items.forEach((item: any, idx: number) => {
        if (!item) return;
        item.label = `Image ${idx + 1}`;
      });
    }
  },
  async beforeUpdate(event: any) {
    const data = event.params?.data;
    if (!data?.blocks || !Array.isArray(data.blocks)) return;

    for (const block of data.blocks) {
      if (block?.__component !== 'blocks.gallery') continue;
      if (!Array.isArray(block.items)) continue;

      block.items.forEach((item: any, idx: number) => {
        if (!item) return;
        item.label = `Image ${idx + 1}`;
      });
    }
  },
};


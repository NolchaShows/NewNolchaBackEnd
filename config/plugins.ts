export default ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        // Optional but recommended: serve public URLs from your own domain/CDN
        // e.g. https://media.example.com
        baseUrl: env('R2_PUBLIC_URL', undefined),
        rootPath: env('R2_ROOT_PATH', undefined),
        s3Options: {
          credentials: {
            accessKeyId: env('R2_ACCESS_KEY_ID'),
            secretAccessKey: env('R2_SECRET_ACCESS_KEY'),
          },
          region: env('R2_REGION', 'auto'),
          endpoint: env('R2_ENDPOINT'),
          // Cloudflare R2 is S3-compatible and generally expects path-style.
          forcePathStyle: true,
          params: {
            Bucket: env('R2_BUCKET'),
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});

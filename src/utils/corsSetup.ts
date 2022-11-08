import cors from 'cors';

export const corsSetup = () => {
  const allowedOrigin =
    process.env.MODE === 'development'
      ? process.env.CLIENT_DEV_ORIGIN
      : process.env.CLIENT_PROD_ORIGIN;

  return cors({
    origin: (origin, cb) => {
      origin === allowedOrigin
        ? cb(null, true)
        : cb(new Error('Not allowed by CORS'));
    },
  });
};

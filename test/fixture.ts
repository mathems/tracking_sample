const { APP_PORT } = process.env;

export const fixture = {
  url: `http://localhost:${APP_PORT}`,
  endpoint: {
    POST: {
      createTrack: '/track',
    },
    PUT: {
      updateTrack: (_id: string) => `/track/${_id}`,
    },
  },
} as const;

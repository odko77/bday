module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: (ctx) => {
        const origin = ctx.request.header.origin;
        console.log("origin", origin, typeof origin);
        if (['http://localhost:4050', 'http://127.0.0.1:4050', 'http://localhost:4050/'].includes(origin)) {
          return origin; // The returns will be part of the Access-Control-Allow-Origin header
        }
        return ''; // Fail cors check
      }
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

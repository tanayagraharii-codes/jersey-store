// This file makes every request under /api/... run through our existing
// Express server (server.js), using Vercel's zero-config convention:
// anything inside /api becomes a serverless function automatically, and
// everything in /public is served directly as static files — no
// vercel.json routing config needed at all.
module.exports = require('../server.js');

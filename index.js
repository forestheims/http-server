import dotenv from 'dotenv';
import { serve } from './lib/server.js';

dotenv.config();

serve(
  process.env['BLOG_HOST'] || 'localhost',
  parseInt(process.env['BLOG_PORT']) || 8080,
);

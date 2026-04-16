import { json } from '@sveltejs/kit';
import { songs } from '$lib/data/songs';

export function GET() {
  return json(songs);
}
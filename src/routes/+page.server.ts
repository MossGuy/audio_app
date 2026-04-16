export async function load({ fetch }) {
    const res = await fetch('/api/songs');
    const songs = await res.json();

    return {
        songs
    };
}
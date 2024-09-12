import SpotifyWebApi from "spotify-web-api-node";

export const spotifyAPI = new SpotifyWebApi({
  clientId: process.env.b1d29ba24e024655a07b78a5c1dcb287,
  clientSecret: process.env.20a2ea65172c451b888bccef138f2429,
  refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
  redirectUri: `${process.env.BASE_URL}/api/login-callback`,
});

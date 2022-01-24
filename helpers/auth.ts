export const href = (clientId: string, redirectURI: string) => `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectURI}&scope=user-read-recently-played&show_dialog=true`

export const connect = async (href: string) => {
  const popup = window.open(href, 'Login with Spotify', 'width=800,height=600')

  const callback = async (payload: string) => {
    localStorage.setItem('authorization', payload)
  
    if (popup) {
      popup.close()
    }
  }

  // @ts-ignore
  window.spotifyCallback = callback
}
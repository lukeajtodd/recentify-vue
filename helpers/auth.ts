export const connect = async () => {
  const result = await fetch('/api/authenticate')
  const { href } = await result.json()
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
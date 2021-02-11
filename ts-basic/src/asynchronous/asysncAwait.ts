export default async function asysnchAwaitSample() {
  const url = 'https://api.github.com/users/Akiyoshi999'

  type Profile = {
    login: string
    id: number
  }

  type FetchProfile = () => Promise<Profile | null>

  const fetchProfile: FetchProfile = async () => {
    const response = await fetch(url)
      .then((res) => res)
      .catch((error) => {
        console.error(error)
        return null
      })

    if (!response) {
      return null
    }

    const json = await response
      .json()
      .then((json: Profile) => {
        console.log('Asysnchronus asynchAwait 1', json)
        return json
      })
      .catch((error) => {
        console.error(error)
        return null
      })
    if (!json) {
      return null
    }
    return json
  }

  const profile = await fetchProfile()
  if (profile) {
    console.log('Asysnchronus asynchAwait 2:', profile)
  }
}

export default function promiseSample() {
  const url = 'https://api.github.com/users/Akiyoshi999'

  type Profile = {
    login: string
    id: number
  }

  type FetchProfile = () => Promise<Profile | null>

  const fetchProfile: FetchProfile = () => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res: Response) => {
          //レスポンスのbodyをjsonで読み取る
          res
            .json()
            .then((json: Profile) => {
              console.log('Asynchronous Promis sample 1:', json)
              resolve(json)
            })
            .catch((error) => {
              console.error(error)
              reject(null)
            })
        })
        .catch((error) => {
          console.error(error)
          reject(null)
        })
    })
  }

  fetchProfile().then((profile: Profile | null) => {
    if (profile) {
      console.log('Asynchronous Promis sample 1:', profile)
    }
  })
  // .catch(() =>{

  // })
}

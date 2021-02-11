export default function callbackSample() {
  const url = 'https://api.github.com/users/Akiyoshi999'

  // コールバックで呼び出す同期処理
  const fetchProfile = () => {
    fetch(url)
      .then((res: Response) => {
        //レスポンスのbodyをjsonで読み取る
        res
          .json()
          .then((json) => {
            console.log('Asynchronous Callback sample 1:', json)
            return json
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const profile = fetchProfile()
  console.log('Asynchronous Callback sample 2:', profile)
}

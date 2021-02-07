export default function objectSample(): void {
  // const a: object = {
  //     name: 'torahack',
  //     age: 29
  // }
  // a.name

  // オブジェクトリテラル記法で型定義
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }

  console.log('Object object sample 1:', country)

  country = {
    language: 'English',
    name: 'United States of America',
  }

  console.log('Object object sample 2:', country)

  // 特別なプロパティ
  // ?のついたプロパティはあってもなくてもOK
  // readonlyのプロパティは上書きできない

  const torahack: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 28,
    lastName: 'Akiyoshi',
    firstName: 'Saito',
  }

  torahack.gender = 'male'
  torahack.lastName = 'kamado'
  // torahack.firstName = "Tanjiro"
  console.log('Object object sample 3:', torahack)

  /*
    オブジェクトの柔軟な型定義
    インデックスシグネチャ
    ・オブジェクトが複数のプロパティを持つ可能性を示す
    ・[key:T]:Uのように定義する
    ・keyはtringかnumberのみ
    */

  const capitals: {
    [country: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }

  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'

  console.log('Object object sample 4:', capitals)
}

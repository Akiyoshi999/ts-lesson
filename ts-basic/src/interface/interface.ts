interface Bread {
  calories: number
}

interface Bread {
  type: string
}

const francePan: Bread = {
  calories: 300,
  type: 'hard',
}

// 型エイリアスで表現
type MaboDofu = {
  calories: number
  spicyLevel: number
}

type Rice = {
  calories: number
  gram: number
}

type MaboDon = MaboDofu & Rice // 交差型(union)

const maboDon: MaboDon = {
  calories: 500,
  spicyLevel: 10,
  gram: 350,
}

// Interfaceの拡張
interface Book {
  page: number
  title: string
}

interface Magazine extends Book {
  cycle: 'dailiy' | 'weekly' | 'monthly' | 'yearly'
}

const jump: Magazine = {
  page: 300,
  cycle: 'weekly',
  title: '週刊少年ジャンプ',
}

type BookType = {
  page: number
  title: string
}

interface Handbook extends BookType {
  theme: string
}

const cotrip: Handbook = {
  page: 120,
  title: 'cotrip',
  theme: 'travel',
}

// implementsでclassに型を定義できる
class Comic implements Book {
  page: number
  title: string

  constructor(page: number, title: string, private publishYear: string) {
    this.page = page
    this.title = title
  }

  getPublishYear() {
    return this.title + 'が発売されたのは' + this.publishYear + '年です'
  }
}

const popularComic = new Comic(200, '鬼滅の刃', '週刊少年ジャンプ')

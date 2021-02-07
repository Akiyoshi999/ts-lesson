export default function typeAliasSample() {
  /**
   * 型エイリアス(型定義を再利用)
   * ・typeを使って、型に名前をつけて宣言できる
   * ・同じ型を何度も定義する必要がない
   * ・型に名前をつけることで変数の役割を明確化
   */

  type Country = {
    capital: string
    language: string
    name: string
  }

  const Japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  }

  const America: Country = {
    capital: 'washinton',
    language: 'English',
    name: 'USA',
  }
  console.log('Object object sample 5:', Japan, America)

  // 合併型(union)と交差型(intersection)
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  // 合併型... knight or Wizard
  type Adventure = Knight | Wizard

  // 交差型... Knight and Wizard
  type Paladin = Knight & Wizard

  const adventure1: Adventure = {
    hp: 100,
    sp: 20,
    weapon: '木の棒',
    swordSkill: '居合切り',
  }
  // Wizard寄り
  const adventure2: Adventure = {
    hp: 100,
    mp: 30,
    weapon: '木の杖',
    magicSkill: 'メラ',
  }

  console.log('Object object sample 6:', adventure1)
  console.log('Object object sample 7:', adventure2)

  const paradin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 200,
    weapon: '銀の件',
    swordSkill: '居合切り',
    magicSkill: 'メラ',
  }
  console.log('Object object sample 8:', paradin)
}

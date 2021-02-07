export default function arraySample() {
  // simple array define
  const colors: string[] = ['red', 'blue']
  colors.push('yellow')
  // colors.push(123)
  console.log('Array array sample 1:', colors)

  const even: Array<number> = [2, 4, 6]
  even.push(8)
  // even.push("aaa")
  console.log('Array array sample 2:', even)

  const ids: (string | number)[] = ['ABC', 123]
  ids.push('DEF')
  ids.push(456)
  // ids.push(true)
  console.log('Array array sample 3:', ids)

  // 配列の型推論
  const generateSomeArray = (): (string | number)[] => {
    const _someArray = [] // any[]
    _someArray.push(123) // number[]
    _someArray.push('ABC') // (string | number)[]
    return _someArray
  }

  const someArray = generateSomeArray()
  someArray.push(456)
  // someArray.push(true)
  console.log('Array array sample 4:', someArray)

  //イミュータブルな配列
  const mutableNumbers: number[] = [1, 2, 3]
  mutableNumbers[2] = 4

  // readonlyでイミュータブル（書き換え不可）な配列タプルを作れる
  const commands: readonly string[] = ['git add', 'git commit', 'git push']
  // commands.push("git fetch") // 追加不可
  // commands[2]("git stash") // 追加不可
  console.log('Array array sample 5:', commands)
}

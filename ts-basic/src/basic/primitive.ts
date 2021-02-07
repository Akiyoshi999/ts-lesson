export default function primitiveSample() {
  const name = '虎ハック'
  // name = 123
  console.log('pritimitive sample 1:', typeof name, name)

  const age = 28
  console.log('primitive sampe 2:', typeof age, age)

  const isSingle = true
  console.log('primitive sampe 3:', typeof isSingle, isSingle)

  const isOver20: boolean = age > 20
  console.log('primitive sampe 4:', typeof isOver20, isOver20)
}

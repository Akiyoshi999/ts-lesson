export default function notExitstSsample() {
  let name = null
  console.log('notExitst sample1:', typeof name, name)

  name = 'Akiyoshi'
  if (!name) {
    console.log('notExitst sample 2:', '吾輩は' + name)
  } else {
    console.log('notExitst sample 3:', '吾輩は' + name)
  }

  let age = undefined
  console.log('notExitst sample1:', typeof age, age)

  age = 28

  if (!age) {
    console.log('noExist sample 5:', '年齢は秘密です')
  } else {
    console.log('noExist sample 5:', '年齢は' + age + 'です')
  }
}

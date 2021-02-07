// import World from './world'

// const root = document.getElementById('root')
// const world = new World('Hello World!')
// world.sayHello(root)

// 03.基本の型定義
// import { anySample, notExitstSsample, primitiveSample, unknownSample } from './basic'

// unknownSample()
// anySample()
// notExitstSsample()
// primitiveSample()

// 04.関数の型定義
import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters'
import { logMessage, logMessage2, logMessage3, logMessage4 } from './function/basic'

isUserSignedIn('ABC', 'torahack')
isUserSignedIn('DEF')
isUserSignedIn2('ABC', 'torahack')
isUserSignedIn2('DEF')
const sum = sumProductsPrice(100, 300, 99, 400)
console.log('Function parameters sample 5:', sum)

logMessage('Hello TypeScript!')
logMessage2('Hello TypeScript!')
logMessage3('Hello TypeScript!')
logMessage4('Hello TypeScript!')

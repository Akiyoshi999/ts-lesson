// オプションパラメータを持つ関数
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters smaple 1: User is Signed in! Username i ', username)
    return true
  } else {
    console.log('Function parameters smaple 2: User is not Signed in!')
    return false
  }
}

// デフォルトパラメータ
export const isUserSignedIn2 = (userId: string, username = 'NO NAME'): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters smaple 3: User is Signed in! Username i ', username)
    return true
  } else {
    console.log('Function parameters smaple 4: User is not Signed in!')
    return false
  }
}

// レストパラメータ関数
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal, productsPrice) => {
    return prevTotal + productsPrice
  }, 0)
}

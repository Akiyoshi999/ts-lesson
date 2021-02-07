export default function unknownSample() {
  const mayberNumber: unknown = 10
  console.log('unknown sample 1:', typeof mayberNumber, mayberNumber)

  const isFoo = mayberNumber == 'foo'
  console.log('unknown sample 2:', typeof isFoo, isFoo)

  // const sum = mayberNumber + 10

  if (typeof mayberNumber === 'number') {
    const sum = mayberNumber + 10
    console.log('unknown sample 3:', typeof sum, sum)
  }
}

const TestTwo = () => (
  <div>
    <h1>TEST3</h1>
  </div>
)

const TestComponent = () => {
  return (
    <div>
      <h1>TEST5</h1>
      <TestTwo />
      </div>
  )
}

export default TestComponent
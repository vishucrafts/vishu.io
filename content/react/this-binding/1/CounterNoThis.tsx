import React from 'react'
import styled from 'styled-components'

interface State {
  count: number
}

export class CounterNoThis extends React.Component<unknown, State> {
  constructor(props: null) {
    super(props)
    this.state = {count: 0}
  }

  increment() {
    alert('"+" button is clicked')
  }

  decrement() {
    alert('"-" button is clicked')
  }

  render() {
    return (
      <Container>
        <H2>Counter</H2>
        <Button onClick={this.decrement}>-</Button>
        <StyledSpan aria-label="counter">{this.state.count}</StyledSpan>
        <Button onClick={this.increment}>+</Button>
      </Container>
    )
  }
}

const Container = styled.div`
  text-align: center;
  border: 1px solid gray;
  padding: 1rem;
`

const H2 = styled.h2``

const Button = styled.button`
  padding: 0 1rem;
  border: 1px solid black;
`

const StyledSpan = styled.span`
  padding: 0 2rem;
`

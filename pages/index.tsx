import { Text } from '@nextui-org/react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

const Home = () => (
  <>
    <Text h1>
      Welcome to a whole new{' '}
      <Text color='primary' span>
        typescript
      </Text>{' '}
      project!
    </Text>

    <Wrapper>
      <Title>I'm fucking styled 💅</Title>
    </Wrapper>
  </>
)

export default Home

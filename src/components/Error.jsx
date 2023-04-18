import styled from '@emotion/styled'

const Text = styled.div`
  background-color: #b7322c;
  color: #fff;
  padding: 15px;
  font-size: 16pxpx;
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  text-align: center;
  border-radius: 5px;
`

export function Error({ children }) {
  return (
    <Text>
      {children}
    </Text>
  )
}
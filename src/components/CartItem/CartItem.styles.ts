import styled from 'styled-components'

export const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;

  margin: 0.5rem auto;

  div {
    flex: 1;
  }

  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  img {
    max-width: 100px;
    max-height: 80px;
    object-fit: cover;
    margin-left: 20px;
  }
`

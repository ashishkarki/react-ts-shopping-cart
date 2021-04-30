import styled from 'styled-components'

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 1.25rem;
  height: 100%;

  button {
    border-radius: 0 0 1.25rem 1.25rem;

    padding-top: 1rem;
    padding-bottom: 1rem;
    font-weight: bold;
  }

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 1.25rem 1.25rem 0 0;
  }

  div {
    font-family: 'New Rocker', cursive;
    padding: 1rem;
    height: 100%;
  }
`

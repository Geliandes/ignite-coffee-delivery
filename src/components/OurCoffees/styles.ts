import { styled } from "styled-components";

export const OurCoffeesContainer = styled.section`
  margin-top: 2rem;

  @media(max-width: 1200px) { 
    h1{
      font-size: 1.7rem;
    }
}
`

export const CoffeeList = styled.div`

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 256px);
    justify-content: space-around
  }

  @media (max-width: 966px) {
    grid-template-columns: repeat(2, 256px);
  }
 

  @media (max-width: 620px) {
    grid-template-columns: repeat(1, 256px);
  }
`
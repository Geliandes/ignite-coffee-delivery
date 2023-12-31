import { styled } from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  @media(max-width: 1200px){
    width: 100%;
    margin-bottom: 2rem;
  }
`
export const DetailsContainer =  styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  border-radius: 6px 44px;
`

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between
  }
  
  > button {
    margin-top: 0.7rem;
  }
`

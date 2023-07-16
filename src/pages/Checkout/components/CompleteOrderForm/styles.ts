import { styled } from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const CompleteOrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  @media(max-width: 1200px){
    width: 100%;
  }
`
export const FormSectionContainer= styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

`

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }

  @media(max-width: 1200px){
    grid-template-columns: 1fr 1fr;

    .cep {
      grid-column: span 2;
      max-width: unset;
    }

    .street {
      grid-column: span 2;
    }

    .complement {
      grid-column: span 1;
    }
  }

  @media(max-width: 620px){
    grid-template-columns: 1fr;

    .cep {
      grid-column: span 1;
      max-width: unset;
    }

    .street {
      grid-column: span 1;
    }

    .complement {
      grid-column: span 1;
    }
  }
`

export const PaymentMethodsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.875rem;

  @media(max-width: 1200px){
    grid-template-columns: 1fr;
    gap: 0;
  }
`
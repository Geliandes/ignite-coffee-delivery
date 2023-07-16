import { styled } from "styled-components";

export const CheckoutContainer = styled.form`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media(max-width: 1200px){
    flex-wrap: wrap;
    margin-top: 1.25rem;
  }

`
export const SectionBaseStyle = styled.div`
  width: 100%;
  border-radius: 6px;
  padding: 2.25rem;
  background: ${({ theme }) => theme.colors["base-card"]};
`
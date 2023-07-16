import { styled } from "styled-components";

export const SuccessContainer = styled.section`
  margin-top: 5rem;

  > h1 {
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }

  @media(max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;

    > h1 {
      text-align: center;
      font-size: 1.75rem;
    }

    > p {
      text-align: center;
      font-size: 1rem;
    }

  }

`

export const InfoSectionSuccessContainer = styled.section`
  display: flex;
  gap: 6.375rem;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 1200px) {
    flex-wrap: wrap;
    flex-direction:column-reverse;
    margin-top: 3rem;
    margin-bottom: 3rem;
    gap: 3rem;

    > img {
      width: 50vw;
      min-width: 350px;
    }
  }
`

export const InfoSuccessContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background: ${({ theme }) => theme.colors["base-background"]};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  &::before{
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
  }

  @media(max-width: 1200px) {
    min-width: unset;
  }


  
`

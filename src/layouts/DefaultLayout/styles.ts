import styled  from "styled-components";

export const LayoutContainer = styled.div`
  .container {
    width: 100%;
    max-width: 70rem;
    margin-right: auto;
    margin-left: auto;
  }

  @media (max-width: 1200px) {
    .container {
      width: unset;
      margin-right: 4rem;
      margin-left: 4rem;
    }
  }

  @media (max-width: 620px) {
    .container {
      width: unset;
      margin-right: 2rem;
      margin-left: 2rem;
    }
  }
`
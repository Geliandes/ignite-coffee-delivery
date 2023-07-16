import { styled } from "styled-components";
import introBackgroundImg from '../../../../assets/intro-background.svg'
import { rgba } from "polished";
import { TitleText } from "../../../../components/Typography";

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["base-white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    height: unset;
  }

`
export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    flex-direction: column-reverse;

  }

  @media (max-width: 620px) {
    img{
      width: 80vw;
    }
  }
`

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;

  @media(max-width: 620px) {
    font-size: 2.5rem;
    text-align: center;
  }
`
export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  @media(max-width: 620px) {
    column-gap: 1.25rem;
  }
`
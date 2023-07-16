import { styled, keyframes } from "styled-components";

const popupAnimation = keyframes`
  0% {
    transform: translateY(-100%) rotate(0deg);
    opacity: 0;
  }
  20% {
    transform: translateY(-50%) rotate(-5deg);
  }
  40% {
    transform: translateY(0%) rotate(5deg);
  }
  60% {
    transform: rotate(-2deg);
  }
  80% {
    transform: rotate(2deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

interface PopupCartActionContainerProps{
  type: 'increase' | 'decrease' | null
}

export const PopupCartActionContainer = styled.div<PopupCartActionContainerProps>`
  background: ${({ theme, type }) => type !== null ? theme.colors[`brand-${type}`] : 'unset'};
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  position: fixed;
  z-index: 9999;
  padding: 15px 10px;
  border-radius: 8px;
  left: 75%;
  margin-top: 1rem;
  animation: ${popupAnimation} 0.8s ease-in-out;
  display: flex;
  gap: 0.25rem;
  top: 100px;
  align-items: center;
  
  > p {
    color: ${({ theme }) => theme.colors["base-white"]};
    font-weight: 700;
  }

  @media (max-width: 620px) {
    left: 50%;
  }
`
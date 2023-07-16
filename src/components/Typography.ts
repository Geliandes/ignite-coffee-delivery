import { styled } from "styled-components";

interface TitleTextProps {
  size?: 'xs' | 's' | 'm' | 'l' | 'xl',
  color?: 'title' | 'subtitle' | 'text',
  weight?: string | number;
}

interface RegularTextProps {
  size?: 'xs' |'s' | 'm' | 'l',
  color?: 'subtitle' | 'text' | 'label',
  weight?: string | number;
}

export const TitleText = styled.h1<TitleTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? "title"}`]};
  font-size: ${({ theme, size }) => theme.textSizes[`title-title-${size ?? "m"}`]};
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: ${({ weight }) => weight ?? 800};
  line-height: 130%;
`;

export const RegularText = styled.p<RegularTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? "text"}`]};
  font-size: ${({ theme, size }) => theme.textSizes[`text-regular-${size ?? "m"}`]};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: ${({ weight }) => weight ?? 400};
  line-height: 130%;
`;
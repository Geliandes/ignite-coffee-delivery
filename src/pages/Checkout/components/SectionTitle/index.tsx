import { IconWithInfo } from "./styles";
import { RegularText } from "../../../../components/Typography";
import { ReactNode } from "react";


interface SectionTitleProps {
  icon: ReactNode,
  title: string,
  subtitle: string;
}

export function SectionTitle({ icon, title, subtitle}:SectionTitleProps){
  return(
    <IconWithInfo>

    {icon}

    <div>
      <RegularText size="m" color="subtitle">
        {title}
      </RegularText>

      <RegularText size="s" color="text">
        {subtitle}
      </RegularText>

    </div>

  </IconWithInfo>
  )
}
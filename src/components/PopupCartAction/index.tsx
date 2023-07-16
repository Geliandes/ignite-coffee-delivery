import { CheckCircle, XCircle } from "@phosphor-icons/react";
import { RegularText } from "../Typography";
import { PopupCartActionContainer } from "./styles";

interface PopupCartActionContainerProps{
  type: 'increase' | 'decrease' | null
}

export function PopupCartAction({ type }: PopupCartActionContainerProps){
  return(
    <PopupCartActionContainer type={type}>
      
      <RegularText>
        {type === 'increase' ? 'ITEM ADICIONADO' : 'ITEM REMOVIDO'}
      </RegularText>

        {type === 'increase' ? <CheckCircle size={20} color="#FFFFFF" weight="bold" /> : <XCircle size={20} color="#FFFFFF" weight="bold" />}
        
    </PopupCartActionContainer>
  )
}
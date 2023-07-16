import { useTheme } from "styled-components";
import { TitleText } from "../../../../components/Typography";
import {FormSectionContainer, CompleteOrderFormContainer } from "./styles";
import { CurrencyDollar, MapPinLine } from "@phosphor-icons/react";
import { SectionTitle } from "../SectionTitle";
import { AdressForm } from "./AdressForm";
import { PaymentMethodOptions } from "./PaymentMethods";

export function CompleteOrderForm(){
  const { colors } = useTheme();

  return(
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">Complete seu pedido</TitleText>
      
      <FormSectionContainer>
        <SectionTitle 
          icon={<MapPinLine size={22} color={colors["brand-yellow-dark"]}/>} 
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
        />

        <AdressForm/>

      </FormSectionContainer>

      
      <FormSectionContainer>
        <SectionTitle 
            icon={<CurrencyDollar size={22} color={colors["brand-purple"]}/>} 
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          />
          <PaymentMethodOptions />
      </FormSectionContainer>
      
    </CompleteOrderFormContainer>
    
  )
}
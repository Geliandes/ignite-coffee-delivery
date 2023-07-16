import { RegularText, TitleText } from "../../components/Typography";
import { InfoSectionSuccessContainer, InfoSuccessContainer, SuccessContainer } from "./styles";
import successImg from '../../assets/success.svg'
import { InfoWithIcon } from "../../components/InfoWithIcon";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../Checkout";
import { paymentMethods } from "../Checkout/components/CompleteOrderForm/PaymentMethods";
import { useEffect } from "react";

interface LocationType {
  state: OrderData;
}

export function Success() {
  const { colors } = useTheme();

  const { state } = useLocation() as LocationType;

  const navigate = useNavigate();

  useEffect(() => {
    if(!state) {
      navigate('/')
    }
  }, []);

  if(!state) return <></>

  return(
    <SuccessContainer className="container">
      <TitleText size="l" weight={800}>Uhu! Pedido confirmado</TitleText>
      <RegularText size="l" color="subtitle">Agora é só aguardar que logo o café chegará até você</RegularText>
      <InfoSectionSuccessContainer>
        <InfoSuccessContainer>
           <InfoWithIcon 
           icon={<MapPin size={16} weight="fill" />}
           iconBg={colors["brand-purple"]}
           text={<RegularText>Entrega em 
            <strong> {state.street}, {state.number}</strong>
            <br/>
            {state.district} - {state.city}, {state.uf}</RegularText>}
           />

        <InfoWithIcon 
           icon={<Timer size={16} weight="fill" />}
           iconBg={colors["brand-yellow"]}
           text={<RegularText>Previsão de entrega<br/>
           <strong>20 min - 30 min</strong></RegularText>}
           />

        <InfoWithIcon 
           icon={<CurrencyDollar size={16} weight="fill" />}
           iconBg={colors["brand-yellow-dark"]}
           text={<RegularText>Pagamento na entrega<br/>
            <strong>{paymentMethods[state.paymentMethod].label}</strong></RegularText>}
           />
        </InfoSuccessContainer>
        <img src={successImg} />
      </InfoSectionSuccessContainer>
    </SuccessContainer>
  )
}
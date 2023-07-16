import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ConfirmationSectionContainer } from "./styles";

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart();

  const DELIVERY_PRICE = cartQuantity <= 0 ? 0 : cartQuantity * 3.5;
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formattedItemsTotal = formatMoney(cartItemsTotal);
  const formattedCartTotal = formatMoney(cartTotal);
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);
  
  return(
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s" color="text">Total de itens</RegularText>
        <RegularText color="text">R$ {formattedItemsTotal}</RegularText>
      </div>

      <div>
        <RegularText size="s" color="text">Entrega</RegularText>
        <RegularText color="text">R$ {formattedDeliveryPrice}</RegularText>
      </div>

      <div>
        <RegularText size="l" weight={700} color="subtitle">Total</RegularText>
        <RegularText size="l" weight={700} color="subtitle">R$ {formattedCartTotal}</RegularText>
      </div>

      <Button text="Confirmar Pedido" disabled={cartQuantity <= 0} type="submit"/>
    </ConfirmationSectionContainer>
  )
}
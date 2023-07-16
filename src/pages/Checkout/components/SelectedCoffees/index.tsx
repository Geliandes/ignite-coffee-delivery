import { useCart } from "../../../../hooks/useCart";
import { TitleText } from "../../../../components/Typography";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";
import { PopupCartAction } from "../../../../components/PopupCartAction";
import { useEffect } from "react";

export function SelectedCoffees() {
  const { cartItems, popupCartAction, setPopupCart } = useCart();

  useEffect(() => {
    if (popupCartAction) {
      const timeout = setTimeout(() => {
        setPopupCart(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [popupCartAction, setPopupCart]);

  return (
    <SelectedCoffeesContainer>
      {popupCartAction && <PopupCartAction type={'decrease'} />}
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}
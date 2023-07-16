import { useState, useEffect } from "react";
import { AddCartWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles"
import { RegularText, TitleText } from "../../../../components/Typography"
import { QuantityInput } from "../../../../components/QuantityInput"
import { ShoppingCart } from "@phosphor-icons/react"
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";
import { PopupCartAction } from "../../../../components/PopupCartAction";

export interface Coffee { 
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps{
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1);
  const [popupAction, setPopupAction] = useState(false);

  useEffect(() => {
    if (popupAction) {
      const timer = setTimeout(() => {
        setPopupAction(false);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [popupAction]);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  const { addCoffeeToCart } = useCart();
  function handleAddToCart(){
    const coffeeToAdd = {
      ...coffee,
      quantity
    }
    addCoffeeToCart(coffeeToAdd)

    setPopupAction(true);
  }

  const formattedPrice = formatMoney(coffee.price);
  return(
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt={coffee.name}/>
      
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>
        {coffee.name}
      </Name>

      <Description>
        {coffee.description}
      </Description>

      <CardFooter>
        <div>
          <RegularText size="s" color="text">R$</RegularText>
          <TitleText size="m" color="text" as="strong">{formattedPrice}</TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput 
            onIncrease={handleIncrease} 
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            {popupAction && <PopupCartAction type="increase" />}
            <ShoppingCart size={20} weight="fill"/>
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}

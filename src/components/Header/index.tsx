import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoCoffee from '../../assets/header/logo.svg';
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { useCart } from '../../hooks/useCart';
import { getCurrentLocation } from '../../utils/geolocation';
import axios from 'axios';
import { stateMapping } from '../../utils/stateMappings';

interface AddressProps {
  city: string;
  state: string;
}

export function Header() {
  const { cartQuantity } = useCart();
  const [address, setAddress] = useState<AddressProps>({ city: '', state: '' });

  useEffect(() => {
    async function fetchLocation() {
      try {
        const currentLocation = await getCurrentLocation();

        const latitude = currentLocation?.latitude?.toString() ?? '';
        const longitude = currentLocation?.longitude?.toString() ?? '';

        const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
        const response = await axios.get<{ address: AddressProps }>(url);

        const state = response?.data?.address?.state ?? '';
        const stateAbbreviation = stateMapping[state] || state;

        setAddress({
          city: response?.data?.address?.city ?? '',
          state: stateAbbreviation,
        });
      } catch (error) {
        console.log(error);
      }
    }

    if (!address.city && !address.state) {
      fetchLocation().catch(error => {
        console.log(error);
      });
    }
  }, [address])

  return (
    <HeaderContainer>
      <div className="container container-header">
        <NavLink to="/">
          <img src={logoCoffee} alt="Coffee Delivery" />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            {address.city ? address.city + ', ' + address.state : 'Não definida'}
          </HeaderButton>

          <NavLink to="/checkout">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}

import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";
import { checkCEP } from "../../../../utils/viacep";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    }
  }
}

export function AdressForm() {
  const { register, formState, setValue } = useFormContext();
  
  const { errors } = formState as unknown as ErrorsType;

  interface CepData {
    cep: string;
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
  }
  
  const handleCepBlur = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const cep = e.target.value;
  
    checkCEP(cep)
      .then((data: CepData) => {
        setValue('street', data.logradouro);
        setValue('district', data.bairro);
        setValue('city', data.localidade);
        setValue('uf', data.uf);
      })
      .catch((error: Error) => {
        console.log(error);
      });
  };
  
  return(
    <AddressFormContainer>
      <Input 
        placeholder="CEP" 
        className="cep" 
        type="number" 
        {...register("cep")} 
        error={errors.cep?.message}
        onBlur={handleCepBlur}
      />
      
      <Input 
        placeholder="Rua" 
        className="street"
        {...register("street")} 
        error={errors.street?.message}
      />

      <Input 
        placeholder="Número" 
        type="number" 
        {...register("number")} 
        error={errors.number?.message}
      />

      <Input 
        placeholder="Complemento" 
        className="complement"
        {...register("complement")} 
        error={errors.complement?.message}
        rightText="Opcional"
      />

      <Input 
        placeholder="Bairro" 
        {...register("district")} 
        error={errors.district?.message}
      />

      <Input 
        placeholder="Cidade" 
        {...register("city")} 
        error={errors.city?.message}
      />

      <Input 
        placeholder="UF"
        {...register("uf")} 
        error={errors.uf?.message}
      />
    </AddressFormContainer>
  )
}
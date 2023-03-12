import { FlatList, TouchableOpacity } from "react-native";

import { CartItem } from "../../types/CartItem";

import {
  Item,
  ProductContainer,
  Actions,
  Image,
  QuantitiyContainer,
  ProductDetails
} from './styles';

import { Text } from '../Text';
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { MinusCircle } from "../Icons/MinusCircle";


interface CartProps {
  cartItems: CartItem[];
}

export function Cart({ cartItems }: CartProps) {
  return (
    <FlatList
    data={cartItems}
    keyExtractor={cartItem => cartItem.product._id}
    showsVerticalScrollIndicator={false}
    renderItem={({ item: cartItem }) => (
      <Item>
        <ProductContainer>
          <Image
          source={{
            uri: `http://192.168.0.28:3001/uploads/${cartItem.product.imagePath}`,
          }}
          />

          <QuantitiyContainer>
            <Text size={14} color="#666">
              {cartItem.quantity}x
            </Text>
          </QuantitiyContainer>

          <ProductDetails>
            <Text size={14} weight="600">{cartItem.product.name}</Text>
            <Text size={14} color="#666" style={{ marginTop: 4}}>
              {formatCurrency(cartItem.product.price)}
              </Text>
          </ProductDetails>
        </ProductContainer>

        <Actions>
          <TouchableOpacity style={{marginRight: 24}}>
            <PlusCircle></PlusCircle>
          </TouchableOpacity>

          <TouchableOpacity>
            <MinusCircle></MinusCircle>
          </TouchableOpacity>
        </Actions>
      </Item>
    )}
    />
  );
}

import { Modal } from "react-native";
import { Text } from "../Text";
import { Product } from "../../types/Product";


interface ProductModalProps {
  visible: boolean;
  onClose: () => void;
  product: Product;
}

export function ProductModal({ visible, onClose }: ProductModalProps) {
  return(
    <Modal
    visible={visible}
    animationType="slide"
    presentationStyle="pageSheet"
    onRequestClose={onClose}
    >
      <Text>
        ProductModal
      </Text>
    </Modal>
  )
}

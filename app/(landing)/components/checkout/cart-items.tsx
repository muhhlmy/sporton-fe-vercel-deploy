import Image from "next/image";
import { cartList } from "../ui/cart-popup";
import priceFormatter from "@/app/utils/price-formater";
import Button from "../ui/button";
import { FiArrowRight, FiCreditCard, FiTrash2 } from "react-icons/fi";

const CartItems = () => {
  const totalPrice = cartList.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="bg-white">
      <div className="p-5 border-b border-gray-200">
        <h2 className="font-bold text-lg">Cart Items</h2>
      </div>
      <div className="overflow-auto max-h-75">
        {cartList.map((item, index) => (
          <div className="border-b border-gray-200 p-4 flex gap-3" key={index}>
            <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
              <Image
                src={`/images/products/${item.imgUrl}`}
                alt={item.name}
                width={63}
                height={63}
                className="aspect-square object-contain"
              />
            </div>
            <div className="self-center w-full">
              <div className="text-sm font-medium">{item.name}</div>
              <div className="flex gap-3 font-medium text-xs">
                <div>{item.qty}x</div>
                <div className="text-primary">{priceFormatter(item.price)}</div>
              </div>
            </div>
            <Button
              size="small"
              variant="ghost"
              className="w-7 h-7 p-0! self-center mx-auto"
            >
              <FiTrash2 />
            </Button>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 p-4">
        <div className="font-semibold flex justify-between items-center">
          <div className="text-sm">Total</div>
          <div className="text-primary text-xs">
            {priceFormatter(totalPrice)}
          </div>
        </div>
        <Button variant="dark" className="w-full mt-4">
          <FiCreditCard /> Proceed to Payment
        </Button>
      </div>
    </div>
  );
};

export default CartItems;

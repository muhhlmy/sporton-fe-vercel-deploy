import priceFormatter from "@/app/utils/price-formater";
import Image from "next/image";
import Button from "./button";
import { FiTrash2 } from "react-icons/fi";

const cartList = [
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 329000,
    imgUrl: "product-1.png",
    qty: 2,
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 999000,
    imgUrl: "product-2.png",
    qty: 1,
  },
  {
    name: "SportsOn Slowlivin",
    category: "Running",
    price: 119000,
    imgUrl: "product-3.png",
    qty: 1,
  },
];

const CardPopup = () => {
  return (
    <div className="absolute bg-white right-0 top-12 shadow-xl border border-gray-200 w-90">
      <div className="font-bold text-center p-4 border-b border-gray-200">
        Shopping Cart
      </div>
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
  );
};

export default CardPopup;

"use client";

import * as React from "react";

export interface ProductItemProps {
  name: string;
  description: string;
  color: string;
  price: string;
  imageUrl: string;
}

export interface SizeQuantityProps {
  size: string;
  quantity: string;
}

export interface OrderSummaryProps {
  subtotal: string;
  total: string;
}

export function ProductItem({
  name,
  description,
  color,
  price,
  imageUrl,
}: ProductItemProps) {
  return (
    <div className="flex items-start py-6 bg-white">
      <img
        loading="lazy"
        src={imageUrl}
        alt={`${name} - ${color}`}
        className="object-contain w-40 h-40"
      />
      <div className="ml-4 flex-1">
        <div className="text-neutral-900 font-medium text-lg">{name}</div>
        <div className="text-neutral-500">{description}</div>
        <div className="text-neutral-500">{color}</div>
        <SizeQuantitySelector />
        <div className="text-neutral-900 font-semibold mt-4">{price}</div>
        <div className="mt-2 flex gap-4">
          <button aria-label="Remove item">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb43f6fea1270df886a35d7deaf70781595a0f9385361fb12fd748cd832ad197"
              alt=""
              className="w-6"
            />
          </button>
          <button aria-label="Save for later">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd995eccfbff0ceeceadbcca72ceaf11e0e60ab162cdaf1405e4089b97aa127d"
              alt=""
              className="w-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export function SizeQuantitySelector() {
  const [size, setSize] = React.useState("L");
  const [quantity, setQuantity] = React.useState("1");

  return (
    <div className="flex items-center gap-4 mt-2">
      <div>
        <label htmlFor="size" className="block text-sm">
          Size
        </label>
        <select
          id="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="border px-2 py-1"
        >
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
      </div>
      <div>
        <label htmlFor="quantity" className="block text-sm">
          Quantity
        </label>
        <select
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="border px-2 py-1"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </div>
  );
}

export function OrderSummary({ subtotal, total }: OrderSummaryProps) {
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-medium mb-4">Order Summary</h2>
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>{subtotal}</span>
      </div>
      <div className="flex justify-between mt-2">
        <span>Delivery</span>
        <span>Free</span>
      </div>
      <div className="flex justify-between font-semibold mt-4 border-t pt-2">
        <span>Total</span>
        <span>{total}</span>
      </div>
      <button className="mt-4 w-full bg-black text-white py-2 rounded-lg">
        Member Checkout
      </button>
    </div>
  );
}

const products = [
  {
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    description: "Men's Short-Sleeve Running Top",
    color: "Ashen Slate/Cobalt Bliss",
    price: "₹3,895.00",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/078056c0bc94d18491f5d6a24eaa62397f22f8983445fbb7e544a57d431e1aea",
  },
  {
    name: "Nike Air Max 97 SE",
    description: "Men's Shoes",
    color: "Flat Pewter/Light Bone/Black/White",
    price: "₹16,995.00",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bcd1f89172ecfe92f7b4d5a451cf3588ef1b09d466af3042ed0e7e79c5e00475",
  },
];

export default function Cart() {
  return (
    <main className="p-6 grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <h1 className="text-2xl font-bold mb-4">Bag</h1>
        {products.map((product, index) => (
          <ProductItem key={index} {...product} />
        ))}
      </div>
      <OrderSummary subtotal="₹20,890.00" total="₹20,890.00" />
    </main>
  );
}

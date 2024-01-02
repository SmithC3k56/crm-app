"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Skeleton,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { useMachine } from "@xstate/react";
import { productMachine } from "./productmachine";
import { ProductItem } from "@/components/products/productItem";
import { BigProductItem } from "@/components/products/bigProductItem";


// // This gets called on every request
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://.../data`)
//   const data = await res.json()
 
//   // Pass data to the page via props
//   return { props: { data } }
// }

export default function ProductsPage() {
  const [state, send] = useMachine(productMachine);
  // const [list, setList] = React.useState([]);
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <ProductItem
        title="What to watch"
        description="Stream the Acme event"
        image="/images/card-example-4.jpeg"
      />

      <ProductItem
        title="Plant a tree"
        description="Contribute to the planet"
        image="/images/card-example-3.jpeg"
      />

      <ProductItem
        title="Supercharged"
        description="Creates beauty like a beast"
        image="/images/card-example-2.jpeg"
      />

      <ProductItem
        title="New"
        description="Acme camera"
        image="/images/card-example-6.jpeg"
      />
      <BigProductItem
        title="your day your way"
        description="Your checklist for better sleep"
        subdescription="Your checklist for better sleep"
        imageHeader="/images/card-example-5.jpeg"
        imageBody="/images/breathing-app-icon.jpeg"
      />
    </div>
  );
}

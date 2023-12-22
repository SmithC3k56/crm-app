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
import { productMachine } from "@/app/products/productmachine";

type props ={
  title:string,
  description :string,
  image: string,

}

export const ProductItem = ({title,description,image}:props) => {
  const [state, send] = useMachine(productMachine);
  return (
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      {state.value === "loading" ? (
        <>
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="space-y-5 my-11">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </>
      ) : (
        <>
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              {title}
            </p>
            <h4 className="text-white font-medium text-large">
              {description}
            </h4>
          </CardHeader>
          <Image
          isZoomed
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={image}
          />
        </>
      )}
    </Card>
  );
}

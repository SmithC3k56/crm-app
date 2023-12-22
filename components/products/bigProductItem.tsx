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

type props = {
  title: string;
  description: string;
  subdescription: string;
  imageHeader: string;
  imageBody: string;
};

export const BigProductItem = ({
  title,
  description,
  subdescription,
  imageHeader,
  imageBody,
}: props) => {
  const [state, send] = useMachine(productMachine);

  return (
    <Card
      isFooterBlurred
      className="w-full h-[300px] col-span-12 sm:col-span-8"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">{title}</p>
        <h4 className="text-white/90 font-medium text-xl">{description}</h4>
      </CardHeader>
      <Image
      isZoomed
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={imageHeader}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
          
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src={imageBody}
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Breathing App</p>
            <p className="text-tiny text-white/60">{subdescription}</p>
          </div>
        </div>
        <Button radius="full" size="sm">
          Get App
        </Button>
      </CardFooter>
    </Card>
  );
};

'use client'
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Kbd,
} from "@nextui-org/react";


import { SearchIcon } from "../icons";

export const SearchPopup = () => {

  const  [isOpen, setIsOpen] = useState(false);

  const onOfSwitcher = () => {
    setIsOpen(!isOpen);
  }

  
  const onOpenChange = () => {

  }
  return (
    <>
      <Button
        onPress={onOfSwitcher}
        aria-label="Search"
        endContent={
          <Kbd className="hidden lg:inline-block" keys={["command"]}>
            K
          </Kbd>
        }
        startContent={
          <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
        }
      >
        Quick Search...
      </Button>
      {/* <Button  color="primary">Open Modal</Button> */}
      <Modal  isOpen={isOpen} onOpenChange={onOpenChange} placement="center" hideCloseButton={true} isDismissable={true} isKeyboardDismissDisabled={true}>
        <ModalContent>
          {(onClose) => (
            <>
              {/* <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader> */}
              <ModalBody>
                <Input
                  autoFocus
                  startContent={<SearchIcon />}
                  // label="Search"
                  placeholder="Enter search"
                  endContent={<Kbd>⌘K</Kbd>}
                   variant="underlined"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onOfSwitcher}>
                  Close
                </Button>
       
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

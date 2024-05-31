'use client'
import {Slider} from "@nextui-org/slider";
import {BrokenHeartIcon} from '../../components/icon/BrokenHeartIcon';
import {HeartIcon} from '../../components/icon/HeartIcon';
import {BatteryChargeIcon} from "../../components/icon/BatteryChargeIcon";
import {BatteryLowIcon} from "../../components/icon/BatteryLowIcon";
import {MaskHapplyIcon} from "../../components/icon/MaskHapplyIcon";
import {MaskSadIcon} from "../../components/icon/MaskSadIcon";
import {Switch, cn} from "@nextui-org/react";
import {Avatar} from "@nextui-org/react";
import {User} from "@nextui-org/react";
import {UserIcon} from '../../components/icon/UserIcon';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {Link} from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function DatingPage() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      
      <div className="inline-block max-w-lg text-center justify-center">
        <p className="text-3xl">Dashboard</p>
        <p className="text-2xl text-pink-600">
          Incontri&nbsp;
        </p>
      </div>
      <h2 className="text-xl">
          I tuoi 5 incontri migliori:
      </h2>
      <div className="grid grid-cols-1 gap-4">
      <div className="text-center justify-center">
          <Avatar showFallback isBordered radius="full" src="./fruit-2.jpeg" className="w-24 h-24 text-large" />
          <p className="text-xl" >
            Pesca&nbsp;
          </p>
          <Button  onPress={onOpen} size="sm" color="primary">
            Contatta
          </Button>
          <Modal backdrop="blur" isOpen={isOpen} size="sm" placement="center" onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">Contatto</ModalHeader>
                  <ModalBody>

                  <Button href="https://www.instagram.com/nomeprofiloIG" as={Link} >Instagram: @nomeprofiloIG</Button> 
                    
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="bordered" onPress={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="text-center justify-center">
          <Avatar showFallback isBordered radius="full" src="./fruit-5.jpeg" className="w-24 h-24 text-large" />
          <p className="text-xl" >
            Avocado&nbsp;
          </p>
          <Button onPress={onOpen} size="sm" color="primary">
          Contatta
          </Button> 
        </div>

        <div className="text-center justify-center">
          <Avatar showFallback isBordered radius="full" src="./fruit-8.jpeg" className="w-24 h-24 text-large" />
          <p className="text-xl">
            Anguria&nbsp;
          </p>
          <Button onPress={onOpen} size="sm" color="primary">
          Contatta
          </Button> 
        </div>

        <div className="text-center justify-center">
          <Avatar showFallback isBordered radius="full" src="./fruit-4.jpeg" className="w-24 h-24 text-large" />
          <p className="text-xl" >
            Limone&nbsp;
          </p>
          <Button onPress={onOpen} size="sm" color="primary">
          Contatta
          </Button> 
        </div>

        <div className="text-center justify-center">
          <Avatar showFallback isBordered radius="full" src="./fruit-7.jpeg" className="w-24 h-24 text-large" />
          <p className="text-xl">
            Banana&nbsp;
          </p>
          <Button onPress={onOpen} size="sm" color="primary">
          Contatta
          </Button> 
        </div>

      </div>
      
      <br/>
      <Switch
        color="danger"
        classNames={{
          base: cn(
            "inline-flex flex-row-reverse w-full max-w-md bg-content1 hover:bg-content2 items-center",
            "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
            "data-[selected=true]:border-danger",
          ),
          wrapper: "p-0 h-4 overflow-visible",
          thumb: cn("w-6 h-6 border-2 shadow-lg",
            "group-data-[hover=true]:border-danger",
            //selected
            "group-data-[selected=true]:ml-6",
            // pressed
            "group-data-[pressed=true]:w-7",
            "group-data-[selected]:group-data-[pressed]:ml-4",
          ),
        }}
      >
        <div className="flex flex-col gap-1">
          <p className="text-medium font-bold">Condividi Contatto</p>
          <p className="text-tiny text-default-400">
          Se queste persone lo richiedono condivideremo in automatio il tuo contatto IG
          </p>
        </div>
      </Switch>

 

    </section>
  );
}

import {Slider} from "@nextui-org/slider";
import {BrokenHeartIcon} from '../../components/icon/BrokenHeartIcon';
import {HeartIcon} from '../../components/icon/HeartIcon';
import {BatteryChargeIcon} from "../../components/icon/BatteryChargeIcon";
import {BatteryLowIcon} from "../../components/icon/BatteryLowIcon";
import {MaskHapplyIcon} from "../../components/icon/MaskHapplyIcon";
import {MaskSadIcon} from "../../components/icon/MaskSadIcon";
import {Switch, cn} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {Avatar} from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";
import {Progress} from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function DatingPage() {
  
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      
      <div className="inline-block max-w-lg text-center justify-center">
        <p className="text-3xl">In meeting </p>
        <p className="text-2xl text-pink-600">
           con...&nbsp;
        </p>
      </div>
{/* 
      <div className="flex gap-4 items-center">
        <Card shadow="sm" radius="lg">
          <CardBody className="overflow-visible p-0 basis-1/2">
            <Image
              shadow="sm"
              radius="lg"
              height={100}
              alt="Banana"
              src="./fruit-5.jpeg"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b className="text-medium">
              Avocado
            </b>
          </CardFooter>
        </Card>
      </div> */}
      
      <div className="flex flex-col gap-6 w-full max-w-md">
        <Progress label="Meeting fatti" showValueLabel={true} color="primary" size="sm" aria-label="Loading..." value={40} />
      </div> 

      <p className="text-xl font-bold">Posto 10 - Avocado</p>

      <div className="flex gap-3 items-center">
        <Avatar showFallback isBordered radius="full" isDisabled src="./fruit-8.jpeg" className="w-6 h-6 text-tiny"  />
        <Avatar showFallback isBordered radius="full" isDisabled  src="./fruit-7.jpeg" size="lg" />
        <Avatar showFallback isBordered radius="full" src="./fruit-5.jpeg" className="w-32 h-32 text-large" />
        <Avatar showFallback isBordered radius="full" isDisabled  src="./fruit-2.jpeg" size="lg" />
        <Avatar showFallback isBordered radius="full" isDisabled  src="./fruit-4.jpeg" className="w-6 h-6 text-tiny"  />
      </div>

      <h2 className={subtitle({ class: "mt-4" })}>
          Attratività
      </h2>

      <div className="flex flex-col gap-6 w-full max-w-md">
        <Slider   
          aria-label="Volume"
          size="lg"
          color="secondary"
          startContent={<BrokenHeartIcon className="text-2xl" />}
          endContent={<HeartIcon className="text-2xl" />}
          className="max-w-md"
          showTooltip={true}
          showSteps={true} 
          step={1} 
          maxValue={10}
          minValue={0}
          defaultValue={5}
        />
      </div>

      <h2 className={subtitle({ class: "mt-4" })}>
          Interazioni
      </h2>

      <div className="flex flex-col gap-6 w-full max-w-md">
        <Slider   
          aria-label="Volume"
          size="lg"
          color="secondary"
          startContent={<BatteryLowIcon className="text-2xl" />}
          endContent={<BatteryChargeIcon className="text-2xl" />}
          className="max-w-md"
          showTooltip={true}
          showSteps={true} 
          step={1} 
          maxValue={10}
          minValue={0}
          defaultValue={5}
        />
      </div>

      <h2 className={subtitle({ class: "mt-4" })}>
          Interessi Comuni
      </h2>

      <div className="flex flex-col gap-6 w-full max-w-md">
        <Slider   
          aria-label="Volume"
          size="lg"
          color="secondary"
          startContent={<MaskSadIcon className="text-2xl" />}
          endContent={<MaskHapplyIcon className="text-2xl" />}
          className="max-w-md"
          showTooltip={true}
          showSteps={true} 
          step={1} 
          maxValue={10}
          minValue={0}
          defaultValue={5}
        />
      </div>

      <Switch
        classNames={{
          base: cn(
            "inline-flex flex-row-reverse w-full max-w-md bg-content1 hover:bg-content2 items-center",
            "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
            "data-[selected=true]:border-primary",
          ),
          wrapper: "p-0 h-4 overflow-visible",
          thumb: cn("w-6 h-6 border-2 shadow-lg",
            "group-data-[hover=true]:border-primary",
            //selected
            "group-data-[selected=true]:ml-6",
            // pressed
            "group-data-[pressed=true]:w-7",
            "group-data-[selected]:group-data-[pressed]:ml-4",
          ),
        }}
      >
        <div className="flex flex-col gap-1">
          <p className="text-medium">Ignora incontro</p>
          <p className="text-tiny text-default-400">
          Se già lo conosci o se assolutamente non vuoi averci più a che fare
          </p>
        </div>
      </Switch>

      <Button color="primary">
        Valuta l'incontro
      </Button>  

    </section>
  );
}

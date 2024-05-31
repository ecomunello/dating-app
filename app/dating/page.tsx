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
import { headers } from 'next/headers';

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import type { InferGetStaticPropsType, GetStaticProps } from 'next'

type User = {
  id: string
  nome: string
  url: string
}

async function getDataPrev() {
  const headersList = headers();
  const res = await fetch("http://" + headersList.get('host') + "/api/user?type=prev")
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
async function getDataNext() {
  const headersList = headers();
  const res = await fetch("http://" + headersList.get('host') + "/api/user?type=next")
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
export default async function DatingPage() {
  const dataPrev = await getDataPrev()
  const dataNext = await getDataNext()

  const meetingDonePerc = Math.round(dataPrev.length / (dataNext.length + dataPrev.length)*100)
 
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      
      <div className="inline-block max-w-lg text-center justify-center">
        <p className="text-3xl">Prossimo incontro </p>
        <p className="text-2xl text-pink-600">
           con...&nbsp;
        </p>
      </div>    
     
      <p className="text-xl font-bold">Posto 10 - {dataNext[0].nome}</p>

      <div className="flex gap-3 items-center">
        <Avatar showFallback isBordered radius="full" isDisabled src={dataPrev[0].src} className="w-6 h-6 text-tiny"  />
        <Avatar showFallback isBordered radius="full" isDisabled  src={dataPrev[1].src} size="lg" />
        <Avatar showFallback isBordered radius="full" src={dataNext[0].src} className="w-32 h-32 text-large" />
        <Avatar showFallback isBordered radius="full" isDisabled  src={dataNext[1].src} size="lg" />
        <Avatar showFallback isBordered radius="full" isDisabled  src={dataNext[2].src} className="w-6 h-6 text-tiny"  />
      </div>

      <div className="flex flex-col gap-6 w-full max-w-md">
        <Progress label="Incontri fatti" showValueLabel={true} color="primary" size="sm" aria-label="Loading..." value={meetingDonePerc} />
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
          minValue={1}
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
          minValue={1}
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
          minValue={1}
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

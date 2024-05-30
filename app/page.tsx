import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import {Slider} from "@nextui-org/slider";
import { button as buttonStyles } from "@nextui-org/theme";
import {BrokenHeartIcon} from '../components/icon/BrokenHeartIcon';
import {HeartIcon} from '../components/icon/HeartIcon';
import {DialogIcon} from "../components/icon/DialogIcon";
import {Card, CardFooter, Image, CardBody} from "@nextui-org/react"
import {Switch, cn} from "@nextui-org/react";


import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Let's&nbsp; dating </h1>
        <h1 className="text-large text-secondary">
           with...&nbsp;
        </h1>
      </div>

      <div className="flex gap-4 items-center">
        <Card shadow="sm" radius="lg">
          <CardBody className="overflow-visible p-0 basis-1/2">
            <Image
              shadow="sm"
              radius="lg"
              height={100}
              alt="Banana"
              src="./fruit-5-200.jpeg"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b className="text-medium">
              Avocado
            </b>
          </CardFooter>
        </Card>
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
          startContent={<BrokenHeartIcon className="text-2xl" />}
          endContent={<HeartIcon className="text-2xl" />}
          className="max-w-md"
          showTooltip={true}
          showSteps={true} 
          step={1} 
          maxValue={10}
          minValue={0}
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
          startContent={<BrokenHeartIcon className="text-2xl" />}
          endContent={<DialogIcon className="text-2xl" />}
          className="max-w-md"
          showTooltip={true}
          showSteps={true} 
          step={1} 
          maxValue={10}
          minValue={0}
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
          <p className="text-medium">Skip dating</p>
          <p className="text-tiny text-default-400">
          If you already know him or if you want to be absolutely sure to avoid him
          </p>
        </div>
      </Switch>

    </section>
  );
}

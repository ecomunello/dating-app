import React from "react";

import {Button} from "@nextui-org/react";
import {Avatar} from "@nextui-org/react";
import { FormEvent } from 'react'
import {Input} from "@nextui-org/react";
import {Link} from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      
      <div className="inline-block max-w-lg text-center justify-center">
        <span className="text-4xl">Meeting </span>
        <span className="text-4xl text-pink-600">
           App&nbsp;
        </span>
      </div>

      <div className="flex gap-3 items-center">
        <Avatar isBordered radius="full" src="./fruit-8.jpeg" className="w-20 h-20 text-large" />
        <Avatar isBordered radius="full" src="./logo-app.png" className="w-40 h-40 text-large" />
        <Avatar isBordered radius="full" src="./fruit-2.jpeg" className="w-20 h-20 text-large" />
      </div>

      <form className="flex w-full flex-wrap md:flex-nowrap gap-4 items-center">
      <span className="text-xl">Dati Partecipante</span>
      <Input isRequired variant="faded" type="tezt" label="Nickname" value="Avocado" placeholder="Inserisci il tuo utente" />
      <Input isRequired variant="faded" type="password" label="Codice Accesso" value="1234" placeholder="Inserisci la tua password" />
      <Input variant="faded" type="text" label="Contatto IG" value="@profiloig" placeholder="Inserisci il tuo profilo IG" />
      <Button href="/dating" as={Link} color="primary">Inizia a giocare</Button> 
      

      </form>

    </section>
  );
}

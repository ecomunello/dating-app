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
        <span className="text-4xl">Dating </span>
        <span className="text-4xl text-pink-600">
           App&nbsp;
        </span>
      </div>

      <div className="flex gap-3 items-center">
        <Avatar isBordered radius="full" src="./fruit-8.jpeg" className="w-6 h-6 text-tiny"  />
        <Avatar isBordered radius="full" src="./fruit-7.jpeg" size="lg" />
        <Avatar isBordered radius="full" src="./fruit-5.jpeg" className="w-32 h-32 text-large" />
        <Avatar isBordered radius="full" src="./fruit-2.jpeg" size="lg" />
        <Avatar isBordered radius="full" src="./fruit-4.jpeg" className="w-6 h-6 text-tiny"  />
      </div>

      <form className="flex w-full flex-wrap md:flex-nowrap gap-4 items-center">
      <span className="text-xl">Dati Giocatore</span>
      <Input isRequired variant="faded" type="email" label="Email" placeholder="Inserisci la tua mail" />
      <Input isRequired variant="faded" type="password" label="Password" placeholder="Inserisci la tua password" />
      <Button href="/dating" as={Link} color="primary">Inizia a giocare</Button> 
      </form>

    </section>
  );
}

import React from "react";
import Input from "@/components/input";

export default function Home() {
  
  return (
    <section className="flex flex-col items-center justify-center gap-2 py-10">
      
      <div className="inline-block max-w-lg text-center justify-center py-10">
        <h1 className="text-3xl">Conosci nuovi </h1>
        <h1 className="text-5xl text-pink-600">
           Amici
        </h1>
      </div>

      <div className="flex gap-1 items-center py-3">
        <div className="avatar">
          <div className="w-20 rounded-full">
            <img src="./fruit-8.jpeg" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-32 rounded-full">
            <img src="./logo-app.png" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-20 rounded-full">
            <img src="./fruit-2.jpeg" />
          </div>
        </div>
      </div>
      
      <div className="flex gap-1 items-center py-5">
        <form action="/dating" className="grid grid-flow-row-dense">
          <p className="text-xl">Dati Partecipante</p>
          <Input type="tezt" label="Nickname" value="Avocado" placeholder="Inserisci il tuo utente" />
          <Input type="password" label="Codice Accesso" value="1234" placeholder="Inserisci la tua password" />
          <Input  type="text" label="Contatto IG" value="@profiloig" placeholder="Inserisci il tuo profilo IG" />
          <button className="btn btn-wide btn-primary">Inizia a giocare</button>
        </form>
      </div>

    </section>
  );
}

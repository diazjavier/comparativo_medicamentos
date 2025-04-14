"use client";
import { useEffect, useState } from "react";

export default function page() {
  const [numero, setNumero] = useState("0");
  const [numero2, setNumero2] = useState("0");

  function handleChange(e: any) {

    setNumero(e.target.id);
  }
  
  function handleChange2(e: any) {

    setNumero2("");
  }
  
  function handleChange3(e: any) {

    setNumero("");
  }

  useEffect(() => {
    setNumero2(numero);
  }, [numero]);

  useEffect(() => {


  }, [numero2]);

  return (
    <div>
      <button id="1" className="h-8 w-14" type="button" onClick={handleChange}>
        1
      </button>
      <button id="" className="h-8 w-14" type="button" onClick={handleChange}>
        2
      </button>
      <button id="3" className="h-8 w-14" type="button" onClick={handleChange}>
        3
      </button>      
      <button id="4" className="h-8 w-14" type="button" onClick={handleChange2}>
        Nada
      </button>
      <div className="ml-8">Número: {numero}</div>
      <br />
      <div className="ml-8">Número 2: {numero2}</div>
    </div>
  );
}

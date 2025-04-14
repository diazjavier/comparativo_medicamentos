export interface Medicamento {
    nne: number;
    nne_desc: string;
    // fecha: number;
    // bd: string;
    codcombinado: string;
    // codproducto: number;
    // codpresentac: number;
    // codcaba: number;
    unidades: number;
    precpub: number;
    precpubuni: number;
    // fechavigecia: Date;
    // considerado: number;
    // causa:string;
    comercial: string;
    // laboratorio: string;
    // diasdesdebase: number;
}

export interface MedicamentosData {
    data: {
      nnes: Medicamento[];
    }
  }

export interface Generico {
        nne: number | null;
        nne_desc: string | null;
}

export interface GenericosData {
    data: {
        genericos: Generico[];
    }
}

export interface Opciones {
  label: string;
  value: number;
}

export interface MedicamentosComparativo {
  droga_combo: string;
  codigo1:string;
  nombrecomercial: string;
  formapresentacion: string;
  clavelab: number;
  laboratorio:string;
  q: number;
  //dosis: number;
  dosis: string;
  ppu: number;
  pvp: number;
  //forma10: number;
  forma10: string;
}

export interface MedicamentosComparativoData {
  data: {
    meds: MedicamentosComparativo[];
  }
}

export interface MedicamentoComparativoComercial {
  codigo: string;
  nombre: string;
}

export interface MedicamentoComparativoComercialData {
  data: {
    coms: MedicamentoComparativoComercial[];
  }
}

export interface DatosDelComercial {
  droga: string;
  dosis: string;
  ff: string;
  unidades: string;
}
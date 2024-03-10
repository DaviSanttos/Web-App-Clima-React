import { codesOOM } from "./codes_OOM";

export function codeOption(op:number){
    switch(op){
      case 0  : return `${codesOOM[0]}/ceu_limpo.png`;
      case 1  : return `${codesOOM[1]}/parcial_claro.png`;
      case 2  : return `${codesOOM[2]}/parcial_nublado.png`;
      case 3  : return `${codesOOM[3]}/parcial_nublado.png`;
      case 45 : return `${codesOOM[45]}/parcial_nublado.png`;
      case 48 : return `${codesOOM[48]}/parcial_nublado`;
      case 51 : return `${codesOOM[51]}/chuva_leve_moderada.png`;
      case 61 : return `${codesOOM[61]}/chuva_leve_moderada.png`;
      case 63 : return `${codesOOM[63]}/chuva_leve_moderada.png`;
      case 53 : return `${codesOOM[53]}/chuva_leve_moderada.png`;
      case 55 : return `${codesOOM[55]}/chuva_leve_forte.png`;
      case 65 : return `${codesOOM[65]}/chuva_leve_moderada.png`;
      case 66 : return `${codesOOM[66]}/neve_leve.png`;
      case 56 : return `${codesOOM[56]}/neve_leve.png`;
      case 57 : return `${codesOOM[57]}/neve_moderada.png`;
      case 67 : return `${codesOOM[67]}/neve_moderada.png`;
      case 71 : return `${codesOOM[71]}/neve_leve.png`;
      case 73 : return `${codesOOM[73]}/neve_moderada.png`;
      case 75 : return `${codesOOM[75]}/neve_moderada.png`;
      case 77 : return `${codesOOM[77]}/neve_leve.png`;
      case 80 : return `${codesOOM[80]}/chuva_leve_moderada.png`;
      case 81 : return `${codesOOM[81]}/chuva_leve_moderada.png`;
      case 82 : return `${codesOOM[82]}/chuva_leve_forte.png`;
      case 85 : return `${codesOOM[85]}/neve_leve.png`;
      case 86 : return `${codesOOM[86]}/neve_moderada.png`;
      case 95 : return `${codesOOM[95]}/trovoada_leve.png`;
      case 96 : return `${codesOOM[96]}/trovoada_chuva.png`;
      case 99 : return `${codesOOM[99]}/trovoada_chuva.png`;
    }
  }
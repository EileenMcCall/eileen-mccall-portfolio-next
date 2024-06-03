import local from 'next/font/local';

export const deasChlo = local({
    variable: "--deasChlo",
    src: "../../public/fonts/DeaschloGC-Regular.otf"
  });
  
export const firaCode = local({
    variable: "--firaCode",
    src: [
      {
        path: "../../public/fonts/FiraCode-Regular.ttf",
        weight: "normal"
      }, {
        path: "../../public/fonts/FiraCode-Bold.ttf",
        weight: "bold"
      }
    ]
  });
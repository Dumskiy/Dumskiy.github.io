const ELEMENTS=["project__slider","project__image","navigation","acquaintance"];export const initRemoveClassNojs=()=>{removeClassNojs(ELEMENTS)};const removeClassNojs=o=>{o.forEach((o=>{document.querySelectorAll(`.${o}--nojs`).forEach((e=>{e.classList.remove(`${o}--nojs`)}))}))};
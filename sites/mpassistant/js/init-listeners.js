import{reserve}from"./reserve.js";const elementList=document.querySelector(".catalog__list");export const initListeners=()=>{elementList.addEventListener("click",reserve)};
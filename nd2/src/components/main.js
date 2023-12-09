import React from "react";
import { Icon } from '@iconify/react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Papildymas from "./papildymas";
import Success from "./success";
        
 
function Main() {
    return (
        <section className='main'>
        <article className='main-content'>
        
          <a href="/papildymas" className="main-link"><button className='main-button'><Icon icon="uil:money-insert" className='main-icon'/>Papildyti sąskaitą</button></a>
          <a href="/isvedimas" className="main-link"> <button className='main-button'><Icon icon="solar:cash-out-broken" className='main-icon'/>Išvesti pinigus</button></a>
          <a href="/info" className="main-link"> <button className='main-button'><Icon icon="material-symbols:info-outline" className='main-icon'/>Sąskaitos informacija</button></a>
          {/* <a href="/pervedimas" className="main-link"><button className='main-button'><Icon icon="fa6-solid:money-bill-transfer" className='main-icon'/>Pervesti pinigus į kitą sąskaitą</button></a> */}
      </article>
    </section>);
}
 
export default Main;
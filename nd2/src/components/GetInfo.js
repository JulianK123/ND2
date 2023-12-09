import React from "react";
import { Icon } from '@iconify/react';
import validator from 'validator';
import axios, * as others from 'axios';
import { useNavigate } from "react-router-dom";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useLocation} from 'react-router-dom';



 
function GetInfo() {
    const location = useLocation();
    // console.log(location.state);

    // const {param} = route;
    const entries = Object.entries(location.state.operations[0]);
    entries.splice(0,1);
    entries.splice(0,1);
    console.log(entries);
    const listKeys = entries.map((el) =>
  <li>{el[0]}</li>);

  let op = Object.entries(location.state.operations);

//   console.log(location.state.operations);

//   const listVal = op.map((el) =>
// <li>{el[0]}</li>)

const listOp = (ops) => {
    return ops.map(op => op.map(o => <li>{o.operation}</li>));
  }
  const listDt = (ops) => {
    return ops.map(op => op.map(o => <li>{o.date}</li>));
  }
  const listSum = (ops) => {
    return ops.map(op => op.map(o => <li>{o.sum}</li>));
  }
//   console.log(listOp(op));
//   for(var i = 0; i < listOp.length; i++) {
//     listOp.splice(i+1,1);
// }

// const a = listOp(op);
//   for(var i = 0; i < a.length; i++) {
//     a.splice(i+1,1);
// }
// console.log(a[0]);

//   listOp(op);


    return (
        <section className="get-info">
            <div className='get-info-content' >
            <a href="/" className="atgal"><Icon icon="ep:back" className="atgal-icon"/>atsijungti</a>
                <div className="get-info-header">
                    <h2>Kortelės numeris: </h2>
                    <p className="sask-num">{location.state.card.number}</p>
                    <h2>Likutis: </h2>
                    <div className="sask-mon-wrapper">
                        <p className="sask-mon">{location.state.card.money}€</p>
                    </div>
                </div>
                <div className="get-info-main">
                    <p className="operacijos">Operacijos:</p>
                    <div className="get-info-keys">
                        <ul>{listKeys}</ul>
                    </div>
                    <div className="get-info-list">
                        <ul>
                             {listSum(op)}
                        </ul>
                        <ul>
                            {listOp(op)}
                            
                            
                        </ul>
                        <ul>
                        {listDt(op)}
                        </ul>
                        
                    </div>
                </div>
                
            </div>
        </section>
    );
}
 
export default GetInfo;
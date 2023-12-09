import React from "react";
import { Icon } from '@iconify/react';
import validator from 'validator';
import axios, * as others from 'axios';
import { useNavigate } from "react-router-dom";



 
function Isvedimas() {
    let navigate = useNavigate();
    function query(values){
        // console.log(errors);
        if(errors.number === "" && errors.cvv === "" && errors.sum === "" && errors.date === ""){
        axios.post("http://localhost:3001/cash", {
            number: values.number,
            cvv: values.cvv,
            date: values.date,
            sum: values.sum,
            
          },{
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
              }
          })
          .then((response) => {
            if(response.status == 200){
                    console.log("OK");
                    navigate('/success');
                    return 0;
            }
                
          }).catch((e) => {
            if(e.response.status === 404){
                console.log("Ne OK");
                setErrors({["number"]:"Tokio numerio ne egzistuoja"});
                return 1;
            }else if(e.response.status === 402){
                alert("Nepakanka pinigų");
            }else{
                console.log("Ne OK");
                alert("Cvv ar data netaisingi");
                return 2;
            };
            
        
        });
    }
    }
    const submitHandle = (e)=>{
        e.preventDefault();
        query(values);
        validateNumber(e);
        validateCvv(e);
        validateDate(e);
        validateSum(e);
    };

    const [values, setValues] = React.useState({});
    const handleInput = (event)=>{
        setValues(prev=>({...prev, [event.target.name]:[event.target.value]}));
        console.log(errors);
        // console.log(Object.keys(values).length);
    };
    const [errors, setErrors] = React.useState({});
    const validateNumber = (event) =>{
        if(!event.target.value){
            setErrors({...errors,"number":"Įveskite korteles numerį"});
        }
        else{
                setErrors(!validator.isCreditCard(event.target.value)?{...errors,"number":"Įveskite taisyklingą kortelės numerį"}:{...errors,"number":""}); 
        }
    };
    const validateCvv = (event) => {
        if(!event.target.value){
            setErrors({...errors,"cvv":"Įveskite CVV"});
        }
        else{
            setErrors(!validator.isByteLength(event.target.value, {
                min: 3,
                max: 3
            })?{...errors,"cvv":"Cvv turi buti 3-simbolių ilgio"}: {...errors,"cvv":""}); 
        }
    };
    const validateDate = (event) =>{
        if(!event.target.value){
            setErrors({...errors,"date":"Įveskite datą"});
        }
        else{
            setErrors({...errors,"date":""});

        }
    }
    const validateSum = (event) =>{
        if(event.target.value == ""){
            
            setErrors({...errors,"sum":"Įveskite sumą"});
            
        }
        else{
            setErrors({...errors,"sum":""});
            console.log(errors);
        }
    }



    return (
    <section className="main">
    <form action="#" className='main-content' onSubmit={submitHandle}>
        <a href="/" className="atgal"><Icon icon="ep:back" className="atgal-icon"/>atgal</a>
        <section className="form-item">
         <p>kortelės numeris: </p>
         <input type="text" name='number' onChange={e=>{handleInput(e); validateNumber(e)}} required placeholder='Įveskite kortelės numerį' className='form-input' id='main-card-number' value={values.number||""} maxLength = "16"/>
         <p className="error">{errors.number||""}</p>
        </section>
        <section className="form-item1">
            <section className="form-item1-element">
                <p>cvv: </p>
                <input type="text" name='cvv' onChange={e=>{handleInput(e); validateCvv(e)}}  required placeholder='cvv' className='form-input' id='main-card-cvv' value={values.cvv||""} maxLength = "3"/>
                <p className="error">{errors.cvv||""}</p>
            </section>
            <section className="form-item1-element">
         <p>data: </p>
         <input type="text" name='date' onChange={e=>{handleInput(e); validateDate(e)}} required placeholder='data' className='form-input' id='main-card-date' value = {values.date} maxLength={5} />
         <p className="error">{errors.date||""}</p>
        </section>
     </section>
     <section className="form-item suma">
        <p>suma: </p>
        <input type="text" name='sum' onChange={e=>{handleInput(e); validateSum(e)}} required placeholder='0' className='form-input' id='main-card-number' value = {values.sum} maxLength={4}/>
        <p className="error">{errors.sum||""}</p>
       </section>
        <section className="form-item">
           <button type="submit" className='papil-button' ><Icon icon="solar:cash-out-broken" className='main-icon'/>Išvesti</button>
        </section>  
      </form>
    </section>);
}
 
export default Isvedimas;
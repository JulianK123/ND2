import React from "react";
import { Icon } from '@iconify/react';
import { useNavigate } from "react-router-dom";
 
function Success() {
    let navigate = useNavigate();
    React.useEffect(() => {
        setTimeout(() => {
          navigate('/')
        }, 5000)
      }, [])
    return (
        <section className='main'>
        <article className='main-content'>
        <Icon icon="ep:success-filled" className='success-icon'/>
            <p className="success-text">Operacija atlikta</p>
        </article>
      </section>);
}
 
export default Success;
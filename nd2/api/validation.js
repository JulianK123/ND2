// import validator from 'validator';

// async function validation(values){
//     var errors = new Map();

//     errors.set(!validator.isCreditCard(values.number)?{[values.number]:"Įveskite taisyklingą kortelės numerį"}:"");
//     errors.set(!(values.number)?"Įveskite korteles numerį":"");

//     errors.set(!validator.isCreditCard(values.cvv)?{[values.cvv]:"Įveskite cvv"}:"");
//     errors.set(!(values.cvv)?{[values.number]:"Įveskite CVV"});

//     errors.set(!validator.isCreditCard(values.number)?{[values.number]:"Įveskite taisyklingą kortelės numerį"}:"");
//     errors.set(!(values.number)?"Įveskite korteles numerį":"");

//     errors.set("password", validator.isEmpty(values.password[0]||"")?"Enter password please": "");

//     if(errors.size === 0){
//         await axios.post("http://localhost:3001/checkuserLogin", {
//         username: values.username,
//         password: values.password,
//       },{
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Content-Type': 'application/json',
//           }
//       }).then((response) => {
//             if(response.data.username === "1") errors.set("username","User does not exists");
//             if(response.data.password === "1") errors.set("password","Password is incorrect");
            
//       });
//     }

//     return(Object.fromEntries(errors));
// }

// export default validation;
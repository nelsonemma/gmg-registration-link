// const form = document.querySelector('#form')
// const name = document.querySelector('#name')
// const email = document.querySelector('#email')
// const address = document.querySelector('#address')
// const phone = document.querySelector('#phone')
// const whatsappNumber = document.querySelector('#whatsapp')
// const dob= document.querySelector('#dob')
// const Identification = document.querySelector('#Identification')
// const courseStudy = document.querySelector('#study')
// const studyDuration = document.querySelector('#study-duration')
// const travel = document.querySelector('#travel')
// const obtainCertificate = document.querySelector('#obtain-certificate')
// const promiseReturn = document.querySelector('#promise-to-return')
// const guarantorName = document.querySelector('#guarantor-name')
// const guarantorEmail= document.querySelector('#guarantor-email')
// const guarantorNumber= document.querySelector('#guarantor-number')
// const allInputs = document.querySelectorAll(' .input ' )
// const errorMsg = document.querySelectorAll(' .error ' )


// const btn = document.querySelector('button')



// form.addEventListener( 'submit' , submitForm)

// function sendEmail ( ){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "register.gmg@gmail.com",
//         Password : "4CB8B71233681DD546B9AF7E7A880FBB677F",
//         To : 'register.gmg@gmail.com',
//         From : document.getElementById("email").value,
       
//         Subject : "New Registration",
//         Body : "Name " + document.getElementById("name").value 
//         + "<br> Email : " + document.getElementById("email").value 
//         + "<br> Address : " + document.getElementById("address").value 
//         + "<br> Phone : " + document.getElementById("phone").value 
//         + "<br> whatsappNumber : " + document.getElementById("whatsapp").value 
//         + "<br> Date of  Birth : " + document.getElementById("dob").value 
//         + "<br> Identification : " + document.getElementById("identification").value 
//         + "<br> Course Of Study : " + document.getElementById("study").value 
//         + "<br> Study Duration : " + document.getElementById("study-duration").value 
//         + "<br>  Will You Travel : " + document.getElementById(" travel").value 
//         + "<br> Obtain Certificate  : " + document.getElementById("obtain-certificate").value 
//         + "<br> Promise  To Return : " + document.getElementById("promise-to-return'").value 
//         + "<br> Guarantor Name : " + document.getElementById("guarantor-name").value 
//         + "<br> Guarantor  Address : " + document.getElementById("guarantor-address").value 
//         + "<br> Guarantor Number : " + document.getElementById("guarantor-number").value 
//     }).then(
//       message =>alert ("message")
//     );
// }

// form.addEventListener("submit", (e) =>{
//     e.preventDefault( );

//     sendEmail ( );
// })





const form = document.querySelector('form')
const  fullName =document.getElementById("name")
const email =document.getElementById("email")
const address =document.getElementById("address")
const phone =document.getElementById("phone")
const dob = document.getElementById("dob")
const identification = document.getElementById("identification")
const study = document.getElementById("study")
const duration = document.getElementById("duration")
const travel = document.getElementById("travel")
const certificate = document.getElementById("certificate")
const returns = document.getElementById("returns")

const guarantorName = document.getElementById("guarantor_name")
const guarantorEmail = document.getElementById("guarantor_email")
const guarantorNumber = document.getElementById("guarantor_number")







function sendEmail( ) {
  
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "register.gmg@gmail.com",
        Password : "4CB8B71233681DD546B9AF7E7A880FBB677F",
        To : 'register.gmg@gmail.com',
        From : "register.gmg@gmail.com",
        Subject : "New Registration",
       
        Body :  "Name: " + document.getElementById("name").value 
         + "<br> Email: " + document.getElementById("email").value 
         + "<br> Address: " + document.getElementById("address").value
         + "<br> Phone Number: " + document.getElementById("phone").value
         + "<br> Date Of Birth: " + document.getElementById("dob").value
         + "<br> Identification: " + document.getElementById("identification").value
         + "<br> Study: " + document.getElementById("study").value
         + "<br>Duration: " + document.getElementById("duration").value
         + "<br> Travel: " + document.getElementById("travel").value
         + "<br> Certificate: " + document.getElementById("certificate").value
         + "<br> Returns: " + document.getElementById("returns").value
         + "<br> Guarantor Name: " + document.getElementById("guarantor_name").value
         + "<br> Guarantor Email: " + document.getElementById("guarantor_email").value
         + "<br> Guarantor Phone Number: " + document.getElementById("guarantor_number").value

    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Sucess!!",
                    text: "Registration Sucessful!",
                    icon: "success"
                  });
            } 
        }
    //   message => alert(message)


   
    );
}



form.addEventListener("submit" , (e) =>{
    e.preventDefault ( );

  

    sendEmail( );

    form.reset();
    return false;

    
})







// function submitForm( e ) {
//     // stops to reload page 
//    e.preventDefault( )  



//    let valid = true

//    allInputs.forEach( x =>{
//     return x.style.borderColor = 'black'
//    })

//    errorMsg.forEach(x => {
//     return x.textContent = ' '
//    })

//    if( allInputs[ 0].value.length < 2  || /\d/.test(allInputs[0].value)){
//     allInputs[ 0 ].style.borderColor = 'red' 
//     allInputs[0].nextElementSibling.textContent = 'input a valid name'
//         valid = false

//     }


//     if(!allInputs[1].value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
//      allInputs[ 1 ].style.borderColor = 'red' 
//     allInputs[1].nextElementSibling.textContent = 'input not valid' 
//             valid = false
    
//   }

//   if( allInputs[ 2].value.length < 3  || /\d/.test(allInputs[0].value)){
//     allInputs[ 2 ].style.borderColor = 'red' 
//     allInputs[2].nextElementSibling.textContent = 'input not valid' 
//         valid = false

//     }

//     if( allInputs[ 3].value.length < 3  || /\d/.test(allInputs[0].value)){
//         allInputs[ 3 ].style.borderColor = 'red' 
//         allInputs[3].nextElementSibling.textContent = 'input not valid' 
//             valid = false
    
//         }

//         if( allInputs[ 4].value.length < 3  || /\d/.test(allInputs[0].value)){
//             allInputs[ 4 ].style.borderColor = 'red' 
//             allInputs[4].nextElementSibling.textContent =  'input not valid' 
//                 valid = false
        
//             }

//             if( allInputs[ 5].value.length < 3  || /\d/.test(allInputs[0].value)){
//                 allInputs[ 5 ].style.borderColor = 'red' 
//                 allInputs[5].nextElementSibling.textContent = 'input not valid' 
//                     valid = false
            
//                 }

//             if( allInputs[ 6].value.length < 3  || /\d/.test(allInputs[0].value)){
//                 allInputs[ 6].style.borderColor = 'red' 
//                 allInputs[6].nextElementSibling.textContent = 'input not valid' 
//                     valid = false
            
//                 }

//                 if( allInputs[ 7].value.length < 3  || /\d/.test(allInputs[0].value)){
//                     allInputs[ 7 ].style.borderColor = 'red' 
//                     allInputs[7].nextElementSibling.textContent = 'input not valid' 
//                         valid = false
                
//                     }

//                     if( allInputs[ 8].value.length < 3  || /\d/.test(allInputs[0].value)){
//                         allInputs[ 8 ].style.borderColor = 'red' 
//                         allInputs[8].nextElementSibling.textContent = 'input not valid' 
//                             valid = false
                    
//                         }

//                         if( allInputs[ 9].value.length < 3  || /\d/.test(allInputs[0].value)){
//                             allInputs[ 9 ].style.borderColor = 'red' 
//                             allInputs[9].nextElementSibling.textContent = 'input not valid' 
//                                 valid = false
                        
//                             }

//                             if( allInputs[ 10].value.length < 3  || /\d/.test(allInputs[0].value)){
//                                 allInputs[ 10 ].style.borderColor = 'red' 
//                                 allInputs[10].nextElementSibling.textContent = 'input not valid' 
//                                     valid = false
                            
//                                 }

//                                 if( allInputs[ 11].value.length < 3  || /\d/.test(allInputs[0].value)){
//                                     allInputs[ 11 ].style.borderColor = 'red' 
//                                     allInputs[11].nextElementSibling.textContent = 'input not valid' 
//                                         valid = false
                                
//                                     }

//                                     if( allInputs[ 12].value.length < 3  || /\d/.test(allInputs[0].value)){
//                                         allInputs[ 12 ].style.borderColor = 'red' 
//                                         allInputs[12].nextElementSibling.textContent = 'input not valid' 
//                                             valid = false
                                    
//                                         }

//                                         if( allInputs[ 13].value.length < 3  || /\d/.test(allInputs[0].value)){
//                                             allInputs[ 13 ].style.borderColor = 'red' 
//                                             allInputs[13].nextElementSibling.textContent = 'input not valid' 
//                                                 valid = false
                                        
//                                             }

//                                             if( allInputs[ 14].value.length < 3  || /\d/.test(allInputs[0].value)){
//                                                 allInputs[ 14 ].style.borderColor = 'red' 
//                                                 allInputs[14].nextElementSibling.textContent = 'input not valid' 
//                                                     valid = false
                                            
//                                                 }

                          

                

//                 if (valid) {
//                     const tr = document.createElement('tr')
//                     tr.innerHTML = `
//                     <td>${allInputs[0].value}</td>
//                   <td>${allInputs[1].value} </td>
//                   <td>${allInputs[2].value} </td>
//                   <td>${allInputs[3].value} </td>
//                   <td>${allInputs[4].value} </td>
//                   <td>${allInputs[5].value} </td>
//                   <td>${allInputs[6].value} </td>
//                   <td>${allInputs[7].value} </td>
//                   <td>${allInputs[8].value} </td>
//                   <td>${allInputs[9].value} </td>
//                   <td>${allInputs[10].value} </td>
//                   <td>${allInputs[11].value} </td>
//                   <td>${allInputs[12].value} </td>
//                   <td>${allInputs[13].value} </td>
//                   <td>${allInputs[14].value} </td>`

                  

//                    myTable.appendChild( tr )
//                    btn.disabled = true
//                    form.reset()

                   
//                 }
    


               

// }  


























//js goes here


// const form = document.querySelector('#form');

// const allInputs = document.querySelectorAll('.input');
// const allErr = document.querySelectorAll('.error')

// form.addEventListener('submit', submitForm);

// function submitForm(e) {
//     e.preventDefault();
//     allInputs.forEach(input => {
//         input.style.borderColor = 'black';
//     })

//     allErr.forEach(err => {
//         err.textContent = ''
//     })

//     let valid = true
    

//     if(allInputs[0].value.length < 5 || /\d/.test(allInputs[0].value)){
//         allInputs[0].style.borderColor = 'red';
//         allInputs[0].nextElementSibling.textContent = 'input a valid name';
//         valid = false;
//     }

//     if(!allInputs[1].value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
//         allInputs[1].style.borderColor = 'red';
//         allInputs[1].nextElementSibling.textContent = 'enter a valid email';
//         valid = false;
//     }
    
//     if(allInputs[2].value.length < 5){
//         allInputs[2].style.borderColor = 'red';
//         allInputs[2].nextElementSibling.textContent = 'input a valid address';
//         valid = false;
//     }

//     if(allInputs[3].value.length < 5){
//         allInputs[3].style.borderColor = 'red';
//         allInputs[3].nextElementSibling.textContent = 'input a valid address';
//         valid = false;
//     }

//     if(allInputs[4].value.length < 3 || /\d/.test(allInputs[0].value)){
//         allInputs[4].style.borderColor = 'red';
//         allInputs[4].nextElementSibling.textContent = 'input a valid occipation';
//         valid = false;
//     }

//     if(allInputs[5].value.length < 20){
//         allInputs[5].style.borderColor = 'red';
//         allInputs[5].nextElementSibling.textContent = 'input is too short';
//         valid = false;
//     }
//     else if(allInputs[5].value.length > 50) {
//         allInputs[5].style.borderColor = 'red';
//         allInputs[5].nextElementSibling.textContent = 'too many characters';
//         valid = false;
//     }

//     if(valid) {
//         console.log('submit form')
//     }
// }



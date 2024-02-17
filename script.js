


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


// function togglePopup( ) {
//     document.getElementById("popup-1").classList.toggle("active")

// }


  

function sendEmail( ) {
  
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "register.gmg@gmail.com",
        Password : "4CB8B71233681DD546B9AF7E7A880FBB677F",
        To : 'goldmindsgrower@gmail.com',
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











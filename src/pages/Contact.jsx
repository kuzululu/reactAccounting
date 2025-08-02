import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

import axios from "axios"
import Swal from "sweetalert2"

// dynamic webpage title
import { Helmet } from "react-helmet-async"

const ContactPage = () => {

  const formRef = useRef(null)
const [status, setStatus] = useState("")

useEffect(()=>{

  const form = formRef.current

  const handleSubmit = async (event) =>{
    const contactInput = form.querySelector('input[name="contact"]')

    // Custom validation: Contact must not be 0
    if(contactInput){
      if(contactInput.value === "0"){
        contactInput.setCustomValidity("Contact number cannot be 0.")
      }else{
        contactInput.setCustomValidity("")
      }
    }

    // Check overall form validity
    if(!form.checkValidity()){
      event.preventDefault()
      event.stopPropagation()
      form.classList.add("was-validated")
      return //prevent further code
    }

    event.preventDefault() //stop default html post

    // prepare form data
    const formData = {
      name: form.name.value,
      email: form.email.value,
      contact: form.contact.value,
      msg: form.msg.value
    }

    try{

       // ✅ Show loading while waiting for response
        Swal.fire({
          title: "Sending...",
          position: "top-end",
          text: "Please wait while we send your message",
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading()
          }
        })

      const res = await axios.post("http://localhost:2022/send_email.php", formData)
      // const res = await axios.post("http://ip_address_of_pc:2022/send_email.php", formData)
    
       Swal.close(); // ✅ CLOSE the loading popup before next one

      if(res.data.status === "success"){
          setStatus("✅ Message sent successfully!")
          form.reset();
          form.classList.remove("was-validated")
          Swal.fire({
            icon: "success",
            title: "Message sent success",
            position: "top-end",
            text: "your message has been sent",
            timer: 2000,
            showConfirmButton: false
          }).then(()=>{
            window.location.href = window.location.href
          })
      }else{
          setStatus("❌ " + (res.data.message || "Failed to send message."));
           Swal.fire({
            icon: "error",
            title: "Oops",
            position: "top-end",
            text: res.data.message || "message not sent",
            timer: 2000,
            showConfirmButton: false
          }).then(()=>{
            window.location.href = window.location.href
          })
      }

    }catch(err){
      setStatus("❌ An error occurred. Please try again later.")
    }
  }

  if(form){
    form.addEventListener("submit", handleSubmit)
  }

  // cleanup
  return () =>{
     if (form) {
        form.removeEventListener("submit", handleSubmit);
      }
  }

}, [])


  return (
    <>
      <Helmet>
        <title>Accounting | Contact</title>
      </Helmet>

      <div className="container-fluid mt-3 mb-5">
     <div className="row">
      
      <div className="col-md-6 col-lg-6">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2842.108601305618!2d120.9756391751037!3d14.47000788600107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cd56bd8bb561%3A0xa884d162e7ece415!2sJuanito&#39;s%20Vape%20Hub!5e1!3m2!1sen!2sph!4v1753421865125!5m2!1sen!2sph" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="col-md-6 col-lg-6">
          <form method="POST" id="formContact" className="row p-1 needs-validation" noValidate ref={formRef}>
            
            <div className="col-md-12 mb-3">
              <label>Name</label>
              <div className="input-group">
                <span className="input-group-text"><i className="fa fa-user"></i></span>
                <input type="text" name="name" className="form-control" required />
              </div>
            </div>

            <div className="col-md-12 mb-3">
              <label>Email</label>
              <div className="input-group">
                <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                <input type="email" name="email" className="form-control" required />
              </div>
            </div>

            <div className="col-md-12 mb-3">
              <label>Contact</label>
              <div className="input-group">
                <span className="input-group-text"><i className="fa fa-phone-alt"></i></span>
                <input type="tel" name="contact" maxLength={11} minLength={8} pattern="^[0-9]{8,11}$" className="form-control" required onInput={(e)=>{
                  e.target.value = e.target.value.replace(/[^0-9]/g, '')
                }} />
              </div>
            </div>

            <div className="col-md-12 col-lg-12 mb-3">
              <label>Message</label>
              <div>
                <textarea name="msg" required rows={6} className="form-control"></textarea>
              </div>
            </div>

            <div className="col-md-12 text-end">
              <input type="submit" className="btn btn-outline-light btn-sm" name="btnSubmit" value="Send" />
            </div>
          </form>
      </div>

     </div>
   </div>
    </>
  )
}

export default ContactPage

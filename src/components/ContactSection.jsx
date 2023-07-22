import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";


const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j1jj052",
        "template_froqa16",
        form.current,
        "Gly32Prtgc0vdrQAZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: "Success!",
            text: "Email sent successfully!",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: "Error!",
            text: "An error occurred. Please try again.",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      );
  };
  return (
    <section className="s2">
      <div className="main-container">
        <h3 style={{ textAlign: "center" }}>Get In Touch</h3>

        <form ref={form} onSubmit={sendEmail} id="contact-form">
          <a name="contact"></a>
          <label>Name</label>
          <input className="input-field" type="text" name="user_name" />
          <label>Email</label>
          <input className="input-field" type="email" name="user_email" />
          <label>Message</label>
          <textarea className="input-field" name="message"></textarea>
          <input id="submit-btn" type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

// import React from 'react'

// function Contact() {
//   return (
//     <section id='Contact'>
//       <h2 className='titre_contact'>Contact</h2>
//       <div className='input'>
              
//               <p>Your Full Name<span>*</span></p>
//               <input type="text" id="fullname" />
//               <p>Téléphone<span>*</span></p>
//               <input type="text" id="telephone" />
//               <p>Your Email Adress<span>*</span></p>
//               <input type="email" id="email" /> <br />
//               <p>Your Message<span>*</span></p>
//               <textarea id="message"></textarea><br />
//               <a href="/">Send Message</a>
//             </div>
//     </section>
//   )
// }

// export default Contact

import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Contact() {
//   return (
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m55decx', 'template_bikrdg5', form.current, 'pJnZIt7edryLHnTOq')
      .then((result) => {
          console.log(result.text);
          alert("message envoyé")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <h2 className='titre_contact'>Contact</h2>
    <form ref={form} onSubmit={sendEmail}>
      <label>Your Full Name<span>*</span></label><br />
      <input type="text" name="user_name" id="fullname" /><br />
      <label>Téléphone<span>*</span></label><br />
      <input type="telephone" name="telephone" id="telephone" /><br />
      <label>Your Email Adress<span>*</span></label><br />
      <input type="email" name="user_email" id="email" /><br />
      <label>Message</label><br />
      <textarea name="message" id="message" /><br />
      <input type="submit" value="Envoyé"  id='send'/>
    </form>
    </>
  );
}
export default Contact
import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_3i0z3rs', 
      'template_bgvvjxc', 
      form.current, 
      'L3V_dKZr4DIWwEEVM'
    )
    .then(() => {
      alert('Pesan berhasil dikirim!');
      form.current.reset();
    })
    .catch((error) => {
      alert('Gagal mengirim pesan');
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <form ref={form} onSubmit={sendEmail} className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input required name="user_name" className="inputName" type="text" />
                <label className="nameLabel">Name</label>
              </div>
              <div>
                <input required name="user_email" className="inputEmail" type="email" />
                <label className="emailLabel">Email</label>
              </div>
              <div>
                <textarea required name="message" className="inputDescription" rows="5" />
                <label className="descriptionLabel">Description</label>
              </div>
            </div>
            <button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </Animate>
      </div>
    </section>
  );
};
export default Contact;
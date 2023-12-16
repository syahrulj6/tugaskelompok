import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import OutlineButton from '../../Components/Button/OutlineButton';
import './contactme.css';
import MovingDot from '../MovingDot';
import Modals from '../Modals';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [succes, setSucces] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rok7waf', 'template_ugyladz', form.current, 'l2iiptLxMxAPYaQqr').then(
      (result) => {
        console.log(result.text);
        console.log('message sent');
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  function handleClick() {
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => {
      setSucces((succes) => !succes);
    }, 400);
  }

  function handleClose() {
    setSucces((succes) => !succes);
  }

  return (
    <>
      {succes && <Modals onClick={handleClose} />}
      <MovingDot />
      <div className="mx-4 flex flex-col">
        <h1 className="grad-text lg:ml-56 mb-3 font-bold text-3xl">Have an idea?</h1>
        <p className="text-white lg:ml-56 mb-7">Tell me about it</p>
        <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg justify-start lg:ml-56">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-neutral-400 text-xs font-bold mb-2" htmlFor="grid-password">
                Name
              </label>
              <input
                className="appearance-none block w-full  text-neutral-300 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none inputs-sec border-none"
                type="text"
                name="user_name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-neutral-400 text-xs font-bold mb-2" htmlFor="grid-password">
                E-mail
              </label>
              <input
                className="appearance-none block w-full  text-neutral-300 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none inputs-sec border-none"
                id="email"
                type="email"
                name="user_email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-neutral-400 text-xs font-bold mb-2" htmlFor="grid-password">
                Message
              </label>
              <textarea
                name="message"
                className=" no-resize appearance-none block w-full  text-neutral-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none inputs-sec border-none h-48 resize-none"
                id="message"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <input className="shadow font-thin inputs-sec hover:bg-slate-950 text-white  py-2 px-4 rounded" type="submit" value="Send" onClick={handleClick}></input>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
        <div className="mt-10 lg:ml-56 mx-1">
          <OutlineButton to="/" text="Go Back To Home" />
        </div>
      </div>
    </>
  );
};

export default ContactMe;

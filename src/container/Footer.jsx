import { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

import { AppWrap, MotionWrap } from '../wrapper';
import { client } from '../client';
import styles from '../style';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className={`${styles.headText} mb-[1rem]`}>Contact me</h2>
      {!isFormSubmitted ? (
        <div className={`${styles.footerForm} ${styles.flexCenter}`}>
          <span className='text-left w-full ml-2'>Name</span>
          <div className={`${styles.flexCenter} w-full my-[0.75rem] mx-0 rounded-[10px] cursor-pointer bg-secondary transition-all ease-in-out duration-300 border border-transparent hover:border-primAccent`}>
            <input className={`${styles.pText} w-full p-[0.95rem] border-none rounded-[7px] bg-secondary text-primary outline-none`} type="text" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <span className='text-left w-full ml-2'>Email</span>
          <div className={`${styles.flexCenter} w-full my-[0.75rem] mx-0 rounded-[10px] cursor-pointer bg-secondary transition-all ease-in-out duration-300 border border-transparent hover:border-primAccent`}>
            <input className={`${styles.pText} w-full p-[0.95rem] border-none rounded-[7px] bg-secondary text-primary outline-none`} type="email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <span className='text-left w-full ml-2'>Message</span>
          <div className='w-full my-[0.75rem] mx-0 rounded-[10px] cursor-pointer bg-secondary transition-all ease-in-out duration-300 border border-transparent hover:border-primAccent' >
            <textarea
              className={`${styles.pText} w-full h-[170px] p-[0.95rem] border-none rounded-[7px] bg-secondary text-primary outline-none`}
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type='button' className={`${styles.pText} ${styles.footerButton}`} onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className={styles.headText}>
            Thank you for getting in touch!
          </h3>
        </div>
      )}
      <div className="flex w-full">
        <a href="https://www.linkedin.com/in/toni-krstic-75b857240" target="_blank" rel="noreferrer" className='w-full flex mx-10  justify-end'>
          <FaLinkedin className='w-[40px] h-[40px] mt-[2rem]' fill='#FDFEFE' /> 
        </a>
        <a href="https://github.com/toni-krstic" target="_blank" rel="noreferrer" className='flex  justify-end'>
          <AiFillGithub className='w-[40px] h-[40px] mt-[2rem]' fill='#FDFEFE' /> 
        </a>
        <div className={`${styles.copyright}`}>
          <p className={`${styles.pText} uppercase text-xs text-[#B9BABE]`}>@2022 Toni</p>
          <p className={`${styles.pText} uppercase text-xs text-[#B9BABE]`}>All rights reserved</p>
        </div>
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Footer, 'flex-1 w-full flex-col'),
  'contact');
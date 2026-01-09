import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../lib/utils';
import { useRDStation } from '../../hooks/useRDStation';

export function FooterProduct() {
  const [email, setEmail] = useState('');
  const { sendLead, isLoading, isSuccess } = useRDStation();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    sendLead({
      name: 'Lead Newsletter Footer',
      email: email,
      phone: '',
      profile: 'Newsletter',
    }, 'home');
  };

  return (
    <>
      <section id="contato" className="py-20 scroll-mt-24" style={{ backgroundColor: 'rgba(155, 128, 255, 0.1)' }}>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="container mx-auto px-4 flex flex-col items-center"
        >
          
          <motion.div variants={fadeInUp} className="mb-6">
            <svg width="93" height="50" viewBox="0 0 93 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.5244 19.4252V5.05394C26.5244 3.09927 28.1225 1.5 30.0756 1.5H87.339C89.2922 1.5 90.8903 3.09927 90.8903 5.05394V27.0884" stroke="#9B80FF" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M90.8903 35.8841V44.7245C90.8903 46.6792 89.2922 48.2784 87.339 48.2784H30.0756C28.1225 48.2784 26.5244 46.6792 26.5244 44.7245V30.1978" stroke="#9B80FF" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M80.17 12.5171L60.9934 28.5987C59.6839 29.7093 57.7529 29.7093 56.4212 28.5987L37.2446 12.5171" stroke="#9B80FF" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M51.96 24.8667L37.2446 37.2167" stroke="#9B80FF" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M80.1699 37.2167L65.4324 24.8667" stroke="#9B80FF" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M35.4691 24.8667H6.52661" stroke="#9B80FF" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M26.3691 15.9819H15.4047" stroke="#9B80FF" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M26.369 33.752H19.8436" stroke="#9B80FF" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1.08789 24.2788C1.41188 24.279 1.6748 24.5425 1.6748 24.8677C1.67455 25.1927 1.41172 25.4554 1.08789 25.4556C0.763909 25.4556 0.500253 25.1928 0.5 24.8677C0.5 24.5423 0.763752 24.2788 1.08789 24.2788Z" fill="white" stroke="#9B80FF"/>
              <path d="M9.96594 15.394C10.2899 15.3942 10.5529 15.6577 10.5529 15.9829C10.5526 16.3079 10.2898 16.5706 9.96594 16.5708C9.64196 16.5708 9.37831 16.308 9.37805 15.9829C9.37805 15.6576 9.6418 15.394 9.96594 15.394Z" fill="white" stroke="#9B80FF"/>
              <path d="M14.3828 33.1636C14.7068 33.1638 14.9697 33.4272 14.9697 33.7524C14.9695 34.0774 14.7066 34.3402 14.3828 34.3403C14.0588 34.3403 13.7952 34.0775 13.7949 33.7524C13.7949 33.4271 14.0587 33.1636 14.3828 33.1636Z" fill="white" stroke="#9B80FF"/>
            </svg>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="font-heading font-semibold text-[#9B80FF] text-[36px] leading-[48px] text-center mb-8">
            Receba novidades no seu e-mail.
          </motion.h2>

          <motion.div variants={fadeInUp} className="w-full max-w-[680px] flex flex-col items-center">
            <form 
              onSubmit={handleNewsletterSubmit}
              className="flex gap-4 w-full"
            >
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading || isSuccess}
                className="flex-1 h-[58px] px-6 rounded-[8px] border border-[#9B80FF]/50 bg-[#9B80FF]/10 text-[#9B80FF] placeholder-[#9B80FF]/60 focus:outline-none focus:border-[#9B80FF] disabled:opacity-50"
              />
              <button 
                type="submit"
                disabled={isLoading || isSuccess}
                className={`w-[58px] h-[58px] rounded-[8px] flex items-center justify-center transition-all shadow-sm ${
                  isSuccess ? 'bg-[#20CE66]' : 'bg-[#9B80FF] hover:bg-[#8a6df0]'
                }`}
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : isSuccess ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : (
                  <svg width="29" height="18" viewBox="0 0 29 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.2041 8.06836C1.59565 8.06836 1.90893 8.38313 1.90918 8.76562C1.90918 9.14833 1.59581 9.46387 1.2041 9.46387C0.812563 9.46368 0.5 9.14822 0.5 8.76562C0.500252 8.38324 0.812721 8.06855 1.2041 8.06836Z" fill="#FDFDFD" stroke="#FDFDFD"/>
                    <path d="M6.52417 8.76611H26.0042" stroke="#FDFDFD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.6479 16.1122L26.955 8.76611" stroke="#FDFDFD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.6479 1.5L26.955 8.7662" stroke="#FDFDFD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            </form>

            <AnimatePresence>
              {isSuccess && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-[#20CE66] font-bold mt-4"
                >
                  E-mail cadastrado com sucesso!
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

        </motion.div>
      </section>

      <footer className="bg-[#F3F4F6] py-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8"
          >
            <div className="flex gap-4">
              
              <a 
                href="https://youtube.com/@buddybapp?si=YrZO3KSdCKISNpRZ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#9B80FF] rounded-[4px] flex items-center justify-center hover:bg-[#8a6df0] transition-colors"
              >
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.775 1.9C16.575 1.2 15.975 0.6 15.275 0.4C13.875 0 8.575 0 8.575 0C8.575 0 3.175 0 1.875 0.4C1.075 0.6 0.575 1.1 0.375 1.9C-0.125 4.6 -0.125 7.4 0.375 10.2C0.575 10.9 1.175 11.5 1.875 11.7C3.175 12 8.575 12 8.575 12C8.575 12 13.975 12 15.275 11.6C15.975 11.4 16.575 10.8 16.775 10.1C16.975 8.8 17.175 7.4 17.075 6C17.175 4.6 16.975 3.2 16.775 1.9ZM6.875 8.6V3.4L11.275 6L6.875 8.6Z" fill="white"/>
                </svg>
              </a>

              <a 
                href="https://www.instagram.com/buddybapp?igsh=Zml5eGZ6ZnY4eG1y" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#9B80FF] rounded-[4px] flex items-center justify-center hover:bg-[#8a6df0] transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.09998 1.09999C7.69998 1.09999 7.9 1.09999 8.5 1.09999C8.9 1.09999 9.29998 1.19999 9.59998 1.29999C9.89998 1.39999 10.1 1.5 10.3 1.7C10.5 1.9 10.7 2.09999 10.7 2.39999C10.8 2.79999 10.9 3.1 10.9 3.5C10.9 4.1 10.9 4.29999 10.9 5.89999C10.9 7.49999 10.9 7.69999 10.9 8.29999C10.9 8.69999 10.8 9.09999 10.7 9.39999C10.6 9.69999 10.5 9.89999 10.3 10.1C10.1 10.3 9.89998 10.5 9.59998 10.5C9.19998 10.6 8.9 10.7 8.5 10.7C7.9 10.7 7.69998 10.7 6.09998 10.7C4.49998 10.7 4.30001 10.7 3.70001 10.7C3.30001 10.7 2.89998 10.6 2.59998 10.5C2.29998 10.4 2.09996 10.3 1.89996 10.1C1.69996 9.89999 1.5 9.69999 1.5 9.39999C1.4 8.99999 1.29999 8.69999 1.29999 8.29999C1.29999 7.69999 1.29999 7.49999 1.29999 5.89999C1.29999 4.29999 1.29999 4.1 1.29999 3.5C1.29999 3.1 1.4 2.69999 1.5 2.39999C1.6 2.09999 1.69996 1.9 1.89996 1.7C2.09996 1.5 2.29998 1.29999 2.59998 1.29999C2.99998 1.19999 3.30001 1.09999 3.70001 1.09999C4.30001 1.09999 4.49998 1.09999 6.09998 1.09999ZM6.09998 0C4.49998 0 4.29998 0 3.59998 0C3.09998 0 2.59998 0.0999878 2.09998 0.299988C1.69998 0.499988 1.3 0.7 1 1C0.7 1.3 0.499988 1.69999 0.299988 2.09999C0.0999878 2.59999 0 3.09999 0 3.59999C0 4.19999 0 4.39999 0 6.09999C0 7.79999 0 7.89999 0 8.59999C0 9.09999 0.0999878 9.59999 0.299988 10.1C0.499988 10.5 0.7 10.9 1 11.2C1.3 11.5 1.69998 11.7 2.09998 11.9C2.59998 12.1 3.09998 12.2 3.59998 12.2C4.19998 12.2 4.39998 12.2 6.09998 12.2C7.79998 12.2 7.89998 12.2 8.59998 12.2C9.09998 12.2 9.59998 12.1 10.1 11.9C10.5 11.7 10.9 11.5 11.2 11.2C11.5 10.9 11.7 10.5 11.9 10.1C12.1 9.59999 12.2 9.09999 12.2 8.59999C12.2 7.99999 12.2 7.79999 12.2 6.09999C12.2 4.39999 12.2 4.29999 12.2 3.59999C12.2 3.09999 12.1 2.59999 11.9 2.09999C11.7 1.69999 11.5 1.3 11.2 1C10.9 0.7 10.5 0.499988 10.1 0.299988C9.59998 0.0999878 9.09998 0 8.59998 0C7.89998 0 7.69998 0 6.09998 0Z" fill="white"/>
                  <path d="M6.10004 2.7998C4.30004 2.7998 2.90002 4.19982 2.90002 5.99982C2.90002 7.79982 4.30004 9.19981 6.10004 9.19981C7.90004 9.19981 9.30005 7.79982 9.30005 5.99982C9.30005 4.19982 7.80004 2.7998 6.10004 2.7998ZM6.10004 8.09981C4.90004 8.09981 4.00006 7.19982 4.00006 5.99982C4.00006 4.79982 4.90004 3.89981 6.10004 3.89981C7.30004 3.89981 8.20007 4.79982 8.20007 5.99982C8.10007 7.09982 7.20004 8.09981 6.10004 8.09981Z" fill="white"/>
                  <path d="M9.29999 3.50011C9.68659 3.50011 10 3.18669 10 2.80009C10 2.4135 9.68659 2.1001 9.29999 2.1001C8.91339 2.1001 8.59998 2.4135 8.59998 2.80009C8.59998 3.18669 8.91339 3.50011 9.29999 3.50011Z" fill="white"/>
                </svg>
              </a>

              <a 
                href="https://www.linkedin.com/company/savvyb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#9B80FF] rounded-[4px] flex items-center justify-center hover:bg-[#8a6df0] transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.59996 5.09991C6.69996 4.89991 6.89996 4.69988 7.09996 4.49988C7.59996 3.99988 8.29995 3.69992 8.99995 3.79992C9.49995 3.79992 9.99995 3.89988 10.3999 3.99988C11.1999 4.29988 11.6999 4.9999 11.8999 5.8999C11.9999 6.4999 12.1 7.09989 12.1 7.69989C12.1 9.09989 12.1 10.4999 12.1 11.8999C12.1 11.9999 12.0999 12.0999 11.8999 12.0999C11.1999 12.0999 10.5 12.0999 9.79996 12.0999C9.69996 12.0999 9.59996 12.0999 9.59996 11.8999C9.59996 10.5999 9.59996 9.1999 9.59996 7.8999C9.59996 7.5999 9.59995 7.29988 9.49995 6.99988C9.39995 6.39988 8.89996 5.99988 8.29996 5.99988C7.59996 5.89988 6.99996 6.39991 6.79996 7.09991C6.69996 7.39991 6.69995 7.6999 6.69995 7.8999C6.69995 9.1999 6.69995 10.4999 6.69995 11.8999C6.69995 11.9999 6.69995 12.0999 6.49995 12.0999C5.79995 12.0999 5.09996 12.0999 4.29996 12.0999C4.19996 12.0999 4.19995 12.0999 4.19995 11.9999C4.19995 9.39988 4.19995 6.89992 4.19995 4.29992C4.19995 4.19992 4.19995 4.09991 4.39995 4.09991C5.09995 4.09991 5.79995 4.09991 6.49995 4.09991C6.59995 4.09991 6.69995 4.09992 6.69995 4.29992C6.69995 4.59992 6.69995 4.79991 6.69995 5.09991C6.59995 4.99991 6.59996 4.99991 6.59996 5.09991Z" fill="white"/>
                  <path d="M0.199966 8C0.199966 6.7 0.199966 5.40001 0.199966 4.20001C0.199966 4.10001 0.199963 4 0.399963 4C1.09996 4 1.79997 4 2.49997 4C2.59997 4 2.69997 4.00001 2.69997 4.20001C2.69997 6.80001 2.69997 9.30002 2.69997 11.9C2.69997 12 2.69997 12.1 2.49997 12.1C1.79997 12.1 0.999973 12.1 0.299973 12.1C0.199973 12.1 0.0999756 12.1 0.0999756 11.9C0.199976 10.5 0.199966 9.3 0.199966 8Z" fill="white"/>
                  <path d="M1.39999 2.90002C0.599994 2.90002 0 2.3 0 1.5C0 0.7 0.599994 0.1 1.39999 0C2.19999 0 2.8 0.600024 2.8 1.40002C2.9 2.20002 2.19999 2.90002 1.39999 2.90002Z" fill="white"/>
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="text-[12px] leading-[22px] text-[#424242] font-normal flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-8 mt-4"
          >
            <p className="mb-2 md:mb-0">Copyright 2026 © Savvy B. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <Link to="/termos-de-uso" className="hover:text-[#9B80FF]">Termos de Uso</Link>
              <span>•</span>
              <Link to="/politica-privacidade" className="hover:text-[#9B80FF]">Política de Privacidade</Link>
            </div>
          </motion.div>

        </div>
      </footer>
    </>
  );
}
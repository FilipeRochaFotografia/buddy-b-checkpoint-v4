import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeInUp, staggerContainer } from '../../lib/utils';

const blogPosts = [
  {
    id: 1,
    slug: 'ferramentas-gestao-financeira',
    image: "/assets/images/post1blog.png", 
    category: "Dicas financeiras",
    title: "Ferramentas de Gestão Financeira Pessoal: Por Que Você Precisa de Uma e Como Escolher a Melhor?",
    excerpt: "Cuidar das finanças pessoais pode parecer complicado, mas com as ferramentas certas, você pode simplificar esse processo e transformar sua relação com o dinheiro. Em tempos em que o controle financeiro é essencial para alcançar metas e viver com mais tranquilidade, ferramentas como o Buddy B surgem como aliadas indispensáveis. Neste post, vamos explorar os benefícios dessas ferramentas, o que você deve buscar em uma boa opção e como começar a usá-las para maximizar seus resultados.",
    author: "Samuel Ferreira",
    readTime: "5 min. de leitura",
    avatar: "/assets/images/lucas.png" 
  },
  {
    id: 2,
    slug: 'orcamento-pessoal-eficiente',
    image: "/assets/images/blog2.png", 
    category: "Dicas Financeiras",
    title: "Como Criar um Orçamento Pessoal Eficiente Usando Ferramentas de Gestão Financeira",
    excerpt: "Cuidar das finanças pessoais começa com um bom orçamento. Ele é a base para uma vida financeira equilibrada e pode ser o segredo para alcançar metas como viajar, comprar uma casa ou simplesmente viver com mais tranquilidade. Mas criar e manter um orçamento eficiente não precisa ser complicado; especialmente quando você tem ferramentas como o Buddy B para ajudar. Neste post, explicamos o que é um orçamento pessoal, por que ele é essencial, como criá-lo passo a passo e como evitar erros comuns.",
    author: "Samuel Ferreira",
    readTime: "4 min. de leitura",
    avatar: "/assets/images/lucas.png" 
  }
];

export function BlogPreview() {
  return (
    <section id="blog" className="py-10 lg:py-24 scroll-mt-24" style={{ backgroundColor: 'rgba(155, 128, 255, 0.1)' }}>
      <div className="container mx-auto px-4 md:px-12">
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid lg:grid-cols-[470px_1fr] gap-8 lg:gap-20 items-start lg:items-center"
        >
          
          {/* --- LEFT COLUMN --- */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center lg:items-start w-full">

            <h2 className="font-body font-bold text-[#424242] text-[30px] leading-[41px] lg:text-[32px] lg:leading-[47px] mb-4 w-[354px] lg:w-[470px] max-w-full text-left">
              <span className="inline-block">
                <img 
                  src="/assets/images/logoblog.png" 
                  alt="Blog Buddy B" 
                  className="inline-block h-[42px] lg:h-[48px] w-auto mr-2 align-bottom" 
                />
                conhecimento que impulsiona suas finanças
              </span>
            </h2>

            <p className="font-body font-normal text-[#424242] text-[20px] leading-[27px] text-justify w-[349px] lg:w-[424px] max-w-full mb-6 lg:mb-8">
              Acesse conteúdos exclusivos com dicas, análises e estratégias para turbinar sua gestão financeira e alcançar novos resultados
            </p>

            {/* DESKTOP BUTTON */}
            <div className="hidden lg:block">
              <Link to="/blog">
                <div className="w-[305px] h-[54px] bg-[#9B80FF] rounded-pill flex items-center justify-center text-white font-bold text-lg gap-3 shadow-lg hover:bg-[#8a6df0] transition-colors cursor-pointer">
                  Ler todos os artigos
                  <svg width="34" height="21" viewBox="0 0 34 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.7323 10.1602H32" stroke="#FDFDFD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23.2863 18.9156L31.9465 10.1602" stroke="#FDFDFD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23.2863 1.5L31.9465 10.1602" stroke="#FDFDFD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.42751 11.5877C2.2159 11.5877 2.85502 10.9486 2.85502 10.1602C2.85502 9.37178 2.2159 8.73267 1.42751 8.73267C0.639118 8.73267 0 9.37178 0 10.1602C0 10.9486 0.639118 11.5877 1.42751 11.5877Z" fill="#FDFDFD"/>
                  </svg>
                </div>
              </Link>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN (Cards) --- */}
          <div className="flex flex-col items-center w-full gap-8">
            <div className="flex flex-col md:flex-row gap-8 justify-center lg:justify-start">
              {blogPosts.map((post) => (
                <Link to={`/blog/${post.slug}`} key={post.id}>
                  <motion.div 
                    variants={fadeInUp}
                    className="relative bg-white shadow-md overflow-hidden border border-[#E8E9EA] hover:shadow-lg transition-shadow cursor-pointer"
                    style={{ width: '350px', height: '350px', borderRadius: '10px' }}
                  >
                    <div className="absolute top-0 left-0 w-full h-[133px] bg-gray-200 group">
                      <img src={post.image} alt="Post" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                    </div>

                    <div 
                      className="absolute left-0 h-[34px] bg-[#9B80FF] flex items-center justify-center px-4 z-10"
                      style={{ top: '109px', borderRadius: '0px 5px 5px 0px', minWidth: '130px' }}
                    >
                      <span className="text-white font-body font-bold text-sm">{post.category}</span>
                    </div>

                    <div className="absolute top-[133px] left-0 w-full px-[12px]">
                      <div className="w-[291px]" style={{ marginTop: '22px', height: '53px' }}>
                        <h3 className="font-body font-semibold text-[#424242] text-[20px] leading-[26px] line-clamp-2">
                          {post.title}
                        </h3>
                      </div>
                      
                      <div className="w-[290px]" style={{ marginTop: '9px', height: '65px' }}>
                        <p className="font-body font-normal text-[#424242] text-[14px] leading-[22px] line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between w-full" style={{ marginTop: '19px' }}>
                        <div className="flex items-center gap-2">
                          <div className="w-[37px] h-[37px] rounded-full bg-gray-300 overflow-hidden">
                             <img src={post.avatar} alt="Avatar" className="w-full h-full object-cover"/>
                          </div>
                          <span className="font-body font-semibold text-[#424242] text-[14px] leading-[26px]">
                            {post.author}
                          </span>
                        </div>
                        <span className="font-body font-normal text-[#424242] text-[14px] leading-[26px]">
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* MOBILE BUTTON */}
            <motion.div variants={fadeInUp} className="block lg:hidden mt-6">
              <Link to="/blog">
                <div className="w-[350px] h-[54px] bg-[#9B80FF] rounded-pill flex items-center justify-center text-white font-bold text-lg gap-3 shadow-lg hover:bg-[#8a6df0] transition-colors cursor-pointer">
                  Ler todos os artigos
                  <svg width="34" height="21" viewBox="0 0 34 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.7323 10.1602H32" stroke="#FDFDFD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23.2863 18.9156L31.9465 10.1602" stroke="#FDFDFD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23.2863 1.5L31.9465 10.1602" stroke="#FDFDFD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.42751 11.5877C2.2159 11.5877 2.85502 10.9486 2.85502 10.1602C2.85502 9.37178 2.2159 8.73267 1.42751 8.73267C0.639118 8.73267 0 9.37178 0 10.1602C0 10.9486 0.639118 11.5877 1.42751 11.5877Z" fill="#FDFDFD"/>
                  </svg>
                </div>
              </Link>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
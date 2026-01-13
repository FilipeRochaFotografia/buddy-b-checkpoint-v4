import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NavbarProduct } from '../components/layout/Navbar/NavbarProduct';
import { BlogFooter } from '../sections/blog/BlogFooter';
import { blogPosts } from '../data/posts'; 

const categories = [
  "Todos", "Dicas financeiras", "Mercado", "Economia", "Onde investir", "Tecnologia", "Sustentabilidade"
];

const POSTS_PER_PAGE = 3;

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(0);
  
  // Mobile Carousel State
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const filteredPosts = activeCategory === "Todos" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  
  // Autoplay Mobile
  useEffect(() => {
    if (!isPaused && window.innerWidth < 1024 && filteredPosts.length > 0) {
      const interval = setInterval(() => {
        setMobileIndex((prev) => (prev === filteredPosts.length - 1 ? 0 : prev + 1));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, filteredPosts.length]);

  const paginateMobile = (newDirection: number) => {
    let nextIndex = mobileIndex + newDirection;
    if (nextIndex < 0) nextIndex = filteredPosts.length - 1;
    if (nextIndex >= filteredPosts.length) nextIndex = 0;
    setMobileIndex(nextIndex);
  };

  const displayedPosts = filteredPosts.slice(
    currentPage * POSTS_PER_PAGE, 
    (currentPage + 1) * POSTS_PER_PAGE
  );

  return (
    <>
      <Helmet>
        <title>Blog - Buddy B</title>
        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </Helmet>

      <NavbarProduct />

      <div className="bg-white min-h-screen">
        
        <header className="bg-[#9B80FF] pt-[117px] pb-16 lg:pt-[251px] lg:pb-[140px] relative">
          <div className="container mx-auto px-5 lg:px-0 lg:w-[1104px]">
            <h1 className="font-heading font-semibold text-white text-[24px] leading-[36px] lg:text-[52px] lg:leading-[77px] mb-4 lg:mb-4">
              As Melhores Dicas para Quem Quer Mudar a Maneira de Pensar Sobre Finanças e Recursos Pessoais
            </h1>
            <p className="font-body font-normal text-white text-[14px] leading-[26px] lg:text-[16px] mb-4 lg:mb-8">
              Buddy B • 13 de Janeiro de 2025
            </p>
            <p className="font-body font-normal text-white text-[14px] leading-[26px] lg:text-[18px] lg:leading-[26px] mb-8 lg:mb-12">
              Mudar a forma como pensamos e lidamos com nossas finanças pode parecer um desafio, mas é uma decisão poderosa que impacta todas as áreas da vida. Ter um planejamento financeiro claro, aliado ao controle dos recursos pessoais, ajuda a criar uma vida financeira mais tranquila e sustentável. Se você deseja transformar sua relação com o dinheiro, confira as melhores dicas que reunimos para ajudar nessa jornada!
            </p>
            <Link to="/blog/ferramentas-gestao-financeira">
              <button className="w-[149px] lg:w-[158px] h-[45px] lg:h-[48px] bg-white rounded-[15px] text-[#9B80FF] font-heading font-bold text-sm shadow-md hover:bg-gray-100 transition-colors">
                LEIA MAIS
              </button>
            </Link>
          </div>
        </header>

        <div className="container mx-auto px-5 lg:px-0 lg:w-[1104px] py-16">
          
          <div className="flex flex-col lg:items-start mb-8 lg:mb-12">
            <img src="/assets/images/logoblog.png" alt="Blog Buddy B" className="w-[100px] lg:w-[126px] h-auto mb-6" />
            <div className="relative w-full lg:w-[1110px] h-[58px]">
              <input type="text" placeholder="Pesquisar" className="w-full h-full pl-12 pr-4 rounded-[8px] border border-[#E8E9EA] text-[#424242] focus:outline-none focus:border-[#9B80FF]" />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#A2A2A2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
          </div>

          <div className="flex gap-2 lg:gap-6 overflow-x-auto pb-4 lg:pb-8 mb-8 no-scrollbar">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => { setActiveCategory(cat); setCurrentPage(0); setMobileIndex(0); }}
                className={`whitespace-nowrap px-6 py-2 rounded-[10px] font-body font-normal text-[16px] leading-[26px] transition-colors flex-shrink-0 ${activeCategory === cat ? 'bg-[#9B80FF] text-white' : 'bg-white border border-[#9B80FF] text-[#9B80FF] hover:bg-gray-50'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="font-body font-normal text-[#424242] text-[14px] lg:text-[16px] leading-[26px] mb-12">
            As melhores dicas pra quem quer mudar a maneira de pensar sobre finanças e recursos pessoais. Vem com a gente!
          </p>

          {/* DESKTOP GRID */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {displayedPosts.length > 0 ? displayedPosts.map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.id}>
                <div className="flex-shrink-0 relative bg-white border border-[#E8E9EA] rounded-[10px] overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-[350px]">
                  <div className="relative h-[133px] w-full bg-gray-200">
                     <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div className="absolute top-[109px] left-0 h-[34px] bg-[#9B80FF] flex items-center justify-center px-4 rounded-r-[5px] z-10">
                     <span className="text-white font-body font-bold text-xs">{post.category}</span>
                  </div>
                  <div className="px-4 pt-[22px] pb-4 flex flex-col h-[217px] justify-between">
                     <div>
                        <h3 className="font-heading font-semibold text-[#424242] text-[20px] leading-[28px] mb-2 line-clamp-2">{post.title}</h3>
                        <p className="font-body font-normal text-[#424242] text-[14px] leading-[22px] line-clamp-3">{typeof post.content[0].value === 'string' ? post.content[0].value : 'Leia mais...'}</p>
                     </div>
                     <div className="flex items-center justify-between border-t border-[#E8E9EA] pt-3">
                        <div className="flex items-center gap-2">
                          <div className="w-[30px] h-[30px] rounded-full bg-gray-300 overflow-hidden"><img src={post.author.avatar} alt="Avatar" className="w-full h-full object-cover"/></div>
                          <span className="font-body font-semibold text-[#424242] text-[12px]">{post.author.name}</span>
                        </div>
                        <span className="font-body font-normal text-[#424242] text-[12px]">{post.readTime}</span>
                     </div>
                  </div>
                </div>
              </Link>
            )) : <p className="col-span-3 text-center text-gray-500 py-12">Nenhum post encontrado nesta categoria.</p>}
          </div>

          {/* MOBILE CAROUSEL */}
          <div 
            className="lg:hidden flex flex-col items-center"
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div className="relative w-[350px] h-[350px]">
              <AnimatePresence mode="wait">
                {filteredPosts.length > 0 && (
                  <motion.div
                    key={mobileIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);
                      if (swipe < -swipeConfidenceThreshold) { paginateMobile(1); } 
                      else if (swipe > swipeConfidenceThreshold) { paginateMobile(-1); }
                    }}
                    className="absolute top-0 w-full h-full"
                  >
                    <Link to={`/blog/${filteredPosts[mobileIndex].slug}`}>
                      <div className="bg-white border border-[#E8E9EA] rounded-[10px] overflow-hidden h-full shadow-sm">
                        <div className="relative h-[133px] w-full bg-gray-200">
                          <img src={filteredPosts[mobileIndex].image} alt="" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                        </div>
                        <div className="absolute top-[109px] left-0 h-[34px] bg-[#9B80FF] flex items-center justify-center px-4 rounded-r-[5px] z-10">
                          <span className="text-white font-body font-bold text-xs">{filteredPosts[mobileIndex].category}</span>
                        </div>
                        <div className="px-4 pt-[22px] pb-4 flex flex-col h-[217px] justify-between">
                          <div>
                              <h3 className="font-heading font-semibold text-[#424242] text-[20px] leading-[28px] mb-2 line-clamp-2">{filteredPosts[mobileIndex].title}</h3>
                              <p className="font-body font-normal text-[#424242] text-[14px] leading-[22px] line-clamp-3">
                                {typeof filteredPosts[mobileIndex].content[0].value === 'string' ? filteredPosts[mobileIndex].content[0].value : 'Leia mais...'}
                              </p>
                          </div>
                          <div className="flex items-center justify-between border-t border-[#E8E9EA] pt-3">
                              <div className="flex items-center gap-2">
                                <div className="w-[30px] h-[30px] rounded-full bg-gray-300 overflow-hidden"><img src={filteredPosts[mobileIndex].author.avatar} alt="Avatar" className="w-full h-full object-cover"/></div>
                                <span className="font-body font-semibold text-[#424242] text-[12px]">{filteredPosts[mobileIndex].author.name}</span>
                              </div>
                              <span className="font-body font-normal text-[#424242] text-[12px]">{filteredPosts[mobileIndex].readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Mobile Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6">
               {filteredPosts.map((_, idx) => (
                 <div 
                    key={idx}
                    onClick={() => setMobileIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${mobileIndex === idx ? 'w-8 bg-[#9B80FF]' : 'w-2 bg-[#E8E9EA]'}`}
                 />
               ))}
            </div>
          </div>

          {/* Desktop Pagination */}
          <div className="hidden lg:flex justify-center gap-2 mt-12">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button key={idx} onClick={() => setCurrentPage(idx)} className={`h-2 rounded-full transition-all duration-300 ${currentPage === idx ? 'w-8 bg-[#9B80FF]' : 'w-2 bg-[#E8E9EA] hover:bg-[#D1D5DB]'}`} />
            ))}
          </div>

        </div>

        <BlogFooter />
      </div>
    </>
  );
};

export default BlogPage;
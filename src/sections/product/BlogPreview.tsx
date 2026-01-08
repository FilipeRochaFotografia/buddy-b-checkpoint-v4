import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    image: "/assets/images/blog1.png",
    category: "Dicas financeiras",
    title: <>Viajar para o exterior: um <br/> sonho impossível?</>,
    excerpt: "Estamos passando por um momento muito infeliz no Brasil. Mas será que viajar é algo só para milionários?",
    author: "Lucas Almeida",
    readTime: "4 min. de leitura",
    avatar: "/assets/images/avatar-lucas.png" 
  },
  {
    id: 2,
    image: "/assets/images/blog2.png", 
    category: "Investimentos",
    title: <>Investimentos: você não <br/> precisa ser expert.</>,
    excerpt: "Não adianta se imaginar em Wall Street se você não sabe nem o que é Tesouro Direto. Aplique o seu dinheiro sem tantos riscos.",
    author: "Lucas Almeida",
    readTime: "4 min. de leitura",
    avatar: "/assets/images/avatar-lucas.png"
  }
];

export function BlogPreview() {
  return (
    <section className="py-24" style={{ backgroundColor: 'rgba(155, 128, 255, 0.1)' }}>
      <div className="container mx-auto px-4 md:px-12">
        
        <div className="grid lg:grid-cols-[470px_1fr] gap-12 lg:gap-20 items-center">
          
          <div className="flex flex-col items-start">
            <h2 className="font-heading font-bold text-[#424242] text-[32px] leading-[47px] mb-4 w-full lg:w-[470px]">
              <div className="flex items-center gap-2 mb-1">
                <img src="/assets/images/logoblog.png" alt="Blog Buddy B" className="h-[40px] w-auto" />
                <span>conhecimento que</span>
              </div>
              <div>impulsiona suas finanças</div>
            </h2>

            <p className="font-body font-normal text-[#424242] text-[20px] leading-[27px] text-justify w-full lg:w-[424px] mb-8">
              Acesse conteúdos exclusivos com dicas, análises e estratégias para turbinar sua gestão financeira e alcançar novos resultados
            </p>

            <Link to="/blog">
              <div 
                className="w-[305px] h-[54px] bg-[#9B80FF] rounded-pill flex items-center justify-center text-white font-bold text-lg gap-3 shadow-lg hover:bg-[#8a6df0] transition-colors cursor-pointer"
              >
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

          <div className="flex flex-col md:flex-row gap-8 justify-center lg:justify-start">
            {blogPosts.map((post) => (
              <div 
                key={post.id}
                className="relative bg-white shadow-md overflow-hidden border border-[#E8E9EA]"
                style={{ width: '350px', height: '350px', borderRadius: '10px' }}
              >
                {/* Imagem */}
                <div className="absolute top-0 left-0 w-full h-[133px] bg-gray-200 group">
                  <img src={post.image} alt="Post" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Tag */}
                <div 
                  className="absolute left-0 h-[34px] bg-[#9B80FF] flex items-center justify-center px-4 z-10"
                  style={{ top: '109px', borderRadius: '0px 5px 5px 0px', minWidth: '130px' }}
                >
                  <span className="text-white font-body font-bold text-sm">{post.category}</span>
                </div>

                {/* Área de Conteúdo */}
                <div className="absolute top-[133px] left-0 w-full px-[12px]">
                  
                  {/* Título: Open Sans, SemiBold, 22px */}
                  <div className="w-[291px]" style={{ marginTop: '22px', height: '53px' }}>
                    <h3 className="font-body font-semibold text-[#424242] text-[22px] leading-[30px]">
                      {post.title}
                    </h3>
                  </div>
                  
                  {/* Resumo: Open Sans, Regular, 14px */}
                  <div className="w-[290px]" style={{ marginTop: '9px', height: '65px' }}>
                    <p className="font-body font-normal text-[#424242] text-[14px] leading-[24px]">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Rodapé: Margin Top 19px */}
                  <div className="flex items-center justify-between w-full" style={{ marginTop: '19px' }}>
                    <div className="flex items-center gap-2">
                      <div className="w-[37px] h-[37px] rounded-full bg-gray-300 overflow-hidden">
                         <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" className="w-full h-full object-cover"/>
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
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
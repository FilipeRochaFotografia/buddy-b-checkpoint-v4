import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { NavbarProduct } from '../components/layout/Navbar/NavbarProduct';
import { BlogFooter } from '../sections/blog/BlogFooter';
import { blogPosts } from '../data/posts';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
  }, [post, navigate]);

  if (!post) return null;

  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{post.title} - Blog Buddy B</title>
      </Helmet>

      <NavbarProduct />

      <div className="bg-white min-h-screen pt-[120px] pb-20">
        <div className="container mx-auto px-5 lg:px-0 lg:w-[1104px]">
          
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to="/blog" className="text-[#9B80FF] font-bold hover:underline flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Voltar para o Blog
            </Link>
          </div>

          {/* 1. IMAGEM PRINCIPAL (HERO) */}
          <div className="w-full h-[300px] lg:h-[542px] rounded-[10px] overflow-hidden mb-8 shadow-sm">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* 2. METADADOS */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="bg-[#9B80FF] text-white px-6 py-2 rounded-[10px] text-[16px] font-normal">
              {post.category}
            </span>
            <span className="text-[#424242] text-[16px] font-normal">{post.date}</span>
            <span className="text-[#424242] text-[16px] font-normal">• {post.readTime}</span>
          </div>

          {/* 3. TÍTULO PRINCIPAL */}
          <h1 className="font-heading font-extrabold text-[#424242] text-[32px] lg:text-[46px] leading-tight lg:leading-[68px] mb-8">
            {post.title}
          </h1>

          <div className="grid lg:grid-cols-[1fr] gap-12">
            
            {/* 4. CONTEÚDO DO ARTIGO */}
            <article className="font-body text-[#424242]">
              {post.content.map((block, index) => {
                switch (block.type) {
                  case 'heading':
                    return (
                      <h2 key={index} className="font-body font-semibold text-[24px] lg:text-[30px] leading-[26px] mt-10 mb-6 text-[#424242]">
                        {block.value}
                      </h2>
                    );
                  case 'paragraph':
                    return (
                      <p key={index} className="text-[18px] lg:text-[22px] leading-[26px] mb-6 text-justify font-normal">
                        {block.value}
                      </p>
                    );
                  case 'list':
                    return (
                      <ul key={index} className="list-disc pl-6 mb-6 space-y-4">
                        {(block.value as string[]).map((item, i) => (
                          <li key={i} className="text-[18px] lg:text-[22px] leading-[26px] font-normal text-justify">{item}</li>
                        ))}
                      </ul>
                    );
                  case 'image':
                    return (
                      <div key={index} className="my-8 rounded-[10px] overflow-hidden">
                        <img src={block.value as string} alt="Conteúdo" className="w-full h-auto" />
                      </div>
                    );
                  default:
                    return null;
                }
              })}

              {/* 5. CARD DO AUTOR (CONSULTOR) - SEM O BOTÃO */}
              <div className="mt-16 w-full lg:w-[560px] bg-white rounded-[10px] border border-[#E8E9EA] p-8 relative shadow-sm">
                <div className="flex gap-6">
                  {/* Foto */}
                  <div className="w-[85px] h-[85px] rounded-full overflow-hidden flex-shrink-0">
                    <img src={post.author.avatar} alt={post.author.name} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Info */}
                  <div>
                    <h4 className="font-body font-semibold text-[26px] leading-[26px] text-[#424242] mb-1">
                      {post.author.name}
                    </h4>
                    <p className="font-body font-semibold text-[14px] leading-[26px] text-[#424242] mb-4">
                      {post.author.role}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p className="font-body font-normal text-[18px] leading-[26px] text-[#424242] mt-4 w-full lg:w-[495px]">
                  {post.author.bio}
                </p>
              </div>
            </article>

            {/* 6. VEJA TAMBÉM */}
            <aside className="mt-16">
              <h3 className="font-heading font-extrabold text-[#424242] text-[40px] leading-[59px] mb-8">
                Você pode gostar também
              </h3>
              
              <div className="flex flex-col lg:flex-row gap-8">
                {relatedPosts.map(related => (
                  <Link key={related.id} to={`/blog/${related.slug}`} className="group w-full lg:w-[350px]">
                    <div className="relative h-[133px] bg-gray-200 overflow-hidden rounded-t-[10px]">
                      <img src={related.image} alt={related.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    </div>
                    
                    <div className="bg-white border border-[#E8E9EA] border-t-0 rounded-b-[10px] p-4 h-[217px] flex flex-col justify-between relative">
                      {/* Tag Sobreposta */}
                      <div className="absolute top-[-17px] left-0 bg-[#9B80FF] text-white px-4 py-1 text-xs font-bold rounded-r-[5px]">
                        {related.category}
                      </div>

                      <div className="mt-4">
                        <h4 className="font-body font-semibold text-[#424242] text-[20px] leading-[28px] line-clamp-2 group-hover:text-[#9B80FF] transition-colors">
                          {related.title}
                        </h4>
                        <p className="font-body font-normal text-[#424242] text-[14px] mt-2 line-clamp-3">
                          Ver resumo...
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-[#E8E9EA] pt-3 mt-4">
                         <div className="flex items-center gap-2">
                           <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                             <img src={related.author.avatar} alt="" className="w-full h-full object-cover"/>
                           </div>
                           <span className="text-xs font-semibold text-[#424242]">{related.author.name}</span>
                         </div>
                         <span className="text-xs text-[#424242]">{related.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </aside>

          </div>
        </div>
      </div>

      <BlogFooter />
    </>
  );
};

export default BlogPostPage;
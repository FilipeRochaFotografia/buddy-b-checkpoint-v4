import React from 'react';

export function TestimonialsGeneral() {
  return (
    <section id="depoimentos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Confiança que gera resultados</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Amanda Silva", text: "Sempre tentei controlar minhas finanças em planilhas, mas acabava me perdendo. O BuddyB facilitou tudo!" },
            { name: "Felipe Rodrigues", text: "Planilhas nunca funcionaram pra mim. Com o BuddyB, tudo ficou automático e simples.", white: true },
            { name: "Luana Silva", text: "O app me ajudou a criar metas e controlar meus gastos sem dor de cabeça. Recomendo demais!" }
          ].map((depo, i) => (
            <div key={i} className={`p-8 rounded-[20px] shadow-system ${depo.white ? 'bg-white border border-primary/20' : 'bg-primary text-white'}`}>
              <p className={`text-lg mb-6 leading-relaxed ${depo.white ? 'text-primary' : 'text-white/90'}`}>"{depo.text}"</p>
              <p className="font-bold font-heading">{depo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
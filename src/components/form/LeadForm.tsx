import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { useRDStation } from '../../hooks/useRDStation';

const leadSchema = z.object({
  name: z.string().min(3, "Nome muito curto"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  profile: z.string().min(1, "Selecione uma opção"),
  math: z.string().refine(val => val === "11", "Resposta incorreta")
});

type LeadFormData = z.infer<typeof leadSchema>;

interface LeadFormProps {
  showTitle?: boolean;
}

export default function LeadForm({ showTitle = true }: LeadFormProps) {
  const { sendLead, isLoading, isSuccess } = useRDStation();
  
  const { register, handleSubmit, formState: { errors } } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema)
  });

  useEffect(() => {
    if (isSuccess) {
      window.location.href = "https://app.buddybapp.com/";
    }
  }, [isSuccess]);

  const onSubmit = (data: LeadFormData) => {
    sendLead(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 md:gap-4">
      
      {showTitle && (
        <div className="text-center mb-1 md:mb-2">
          <h3 className="text-lg md:text-xl font-heading font-bold text-primary">
            Quero essa Condição Especial!
          </h3>
          <p className="text-[10px] md:text-xs text-gray-400 mt-0.5">Oferta por tempo limitado</p>
        </div>
      )}

      <div className="space-y-2 md:space-y-3">
        <Input 
          label="Nome*" 
          placeholder="Seu nome completo" 
          {...register('name')} 
          error={errors.name?.message} 
        />
        
        <Input 
          label="Email*" 
          placeholder="Seu melhor email" 
          type="email"
          {...register('email')} 
          error={errors.email?.message} 
        />

        {/* Input de Celular */}
        <div className="relative flex flex-col gap-1 w-full text-left">
           <label className="font-heading text-xs md:text-sm font-semibold mb-1 ml-1 text-text-title">
             Celular*
           </label>
           <div className="relative flex items-center">
             <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 border-r border-gray-200 pr-3 h-5 md:h-6">
                <img src="https://flagcdn.com/w20/br.png" alt="Brasil" className="w-4 md:w-5 rounded-[2px]" />
                <span className="text-xs md:text-sm text-text-body font-semibold">+55</span>
             </div>
             
             <input 
               placeholder="(DDD) 99999-9999" 
               {...register('phone')}
               className={`w-full p-3 md:p-4 pl-20 md:pl-24 rounded-card border-[2px] outline-none transition-all duration-200 font-body text-sm md:text-base text-text-title placeholder-gray-300
                 ${errors.phone 
                   ? "border-error bg-error-light focus:border-error" 
                   : "border-gray-200 bg-white focus:border-primary focus:shadow-sm"}`}
             />
           </div>
           {errors.phone && <span className="text-[10px] md:text-xs text-error font-semibold ml-1">{errors.phone.message}</span>}
        </div>

        {/* Radio Button */}
        <div className="flex flex-col gap-1 md:gap-2 pt-1">
          <label className="text-xs md:text-sm font-heading font-bold text-text-title">
            Como é sua gestão hoje?*
          </label>
          <div className="space-y-1 md:space-y-2">
            {["Tenho desafios e preciso de ajuda", "Tenho uma organização básica", "Tenho um bom controle"].map((option) => (
              <label key={option} className="flex items-center gap-2 cursor-pointer group">
                <input 
                  type="radio" 
                  value={option} 
                  {...register('profile')}
                  className="peer appearance-none w-3.5 h-3.5 md:w-4 md:h-4 border-2 border-gray-300 rounded-full checked:border-primary checked:border-[5px] transition-all" 
                />
                <span className="text-[11px] md:text-sm text-text-body group-hover:text-primary transition-colors">{option}</span>
              </label>
            ))}
          </div>
          {errors.profile && <span className="text-[10px] md:text-xs text-error font-semibold">{errors.profile.message}</span>}
        </div>

        {/* Desafio Matemático */}
        <div className="relative flex flex-col gap-1 w-full text-left pt-1">
           <label className="font-heading text-xs md:text-sm font-semibold mb-1 ml-1 text-text-title">
             7 + 4 = ?
           </label>
           <input 
             placeholder="Digite a resposta" 
             {...register('math')}
             className={`w-full p-3 md:p-4 rounded-card border-[2px] outline-none transition-all duration-200 font-body text-sm md:text-base text-text-title placeholder-gray-300
               ${errors.math 
                 ? "border-error bg-error-light focus:border-error" 
                 : "border-gray-200 bg-white focus:border-primary focus:shadow-sm"}`}
           />
           {errors.math && <span className="text-[10px] md:text-xs text-error font-semibold ml-1">{errors.math.message}</span>}
        </div>

      </div>

      <div className="pt-2">
        <Button 
          type="submit" 
          fullWidth 
          disabled={isLoading || isSuccess} 
          variant="primary" 
          className="h-12 md:h-[56px] text-base md:text-lg shadow-system hover:shadow-float transition-all hover:scale-[1.02]"
        >
          {isLoading || isSuccess ? "Processando..." : "Garantir Desconto!"}
        </Button>
      </div>
      
      <p className="text-[9px] md:text-[10px] text-center text-gray-400">
        *Seus dados estão 100% seguros conosco.
      </p>
    </form>
  );
}
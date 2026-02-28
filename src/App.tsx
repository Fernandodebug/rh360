import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronRight, Users, TrendingUp, Cpu, 
  CheckCircle2, Quote, Mail, MapPin, Phone, 
  Instagram, Linkedin, Facebook, ArrowRight
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 selection:bg-slate-900 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
              <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                RH<span className="text-emerald-500">360</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {['Início', 'Sobre', 'Serviços', 'Depoimentos', 'Blog', 'Contato'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === 'início' ? 'home' : item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-emerald-500 ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contato')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm"
              >
                Fale Conosco
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`${isScrolled ? 'text-gray-900' : 'text-white'}`}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-4 pb-6 shadow-xl md:hidden flex flex-col"
          >
            <div className="flex flex-col space-y-4">
              {['Início', 'Sobre', 'Serviços', 'Depoimentos', 'Blog', 'Contato'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === 'início' ? 'home' : item.toLowerCase())}
                  className="text-left text-lg font-medium text-gray-800 py-2 border-b border-gray-100"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80" 
            alt="Equipe colaborando" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6"
          >
            Transforme sua gestão de RH <br className="hidden md:block" />
            <span className="text-emerald-400">com a expertise da RH360</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light mb-10"
          >
            Soluções inovadoras em consultoria, treinamento e gestão de pessoas para impulsionar os resultados da sua empresa.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button 
              onClick={() => scrollToSection('serviços')}
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Saiba Mais <ChevronRight size={20} />
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2"
            >
              Entre em Contato
            </button>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white relative z-20 -mt-10 mx-4 md:mx-auto max-w-6xl rounded-2xl shadow-xl">
        <div className="px-6 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4 text-emerald-600">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Consultoria Especializada</h3>
              <p className="text-gray-600">Otimizamos seu departamento de RH com estratégias sob medida para o seu negócio.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 md:border-l md:border-r border-gray-100">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4 text-emerald-600">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Treinamento de Equipes</h3>
              <p className="text-gray-600">Capacitação contínua para elevar a performance e o engajamento dos seus colaboradores.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4 text-emerald-600">
                <Cpu size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Melhoria de Processos</h3>
              <p className="text-gray-600">Implementação de tecnologias e fluxos ágeis para resultados rápidos e eficazes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-emerald-600 tracking-wider uppercase mb-2">Sobre Nós</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Nossa missão é potencializar o capital humano da sua empresa.
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A RH360 nasceu com o propósito de transformar a maneira como as empresas gerenciam suas pessoas. Com anos de experiência no mercado, nossa equipe de especialistas combina conhecimento técnico profundo com uma visão estratégica de negócios.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-900">Inovação Constante</h4>
                    <p className="text-gray-600 text-sm">Buscamos sempre as melhores práticas e tecnologias do mercado.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-900">Respeito às Pessoas</h4>
                    <p className="text-gray-600 text-sm">Acreditamos que o sucesso de qualquer negócio começa com o bem-estar da equipe.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-900">Excelência em Resultados</h4>
                    <p className="text-gray-600 text-sm">Nosso foco é entregar valor real e mensurável para nossos clientes.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Consultora de RH" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xl">
                    10+
                  </div>
                  <div className="font-bold text-gray-900 leading-tight">Anos de<br/>Experiência</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-emerald-600 tracking-wider uppercase mb-2">Nossos Serviços</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Soluções completas para o seu RH</h3>
            <p className="text-lg text-gray-600">
              Oferecemos um portfólio abrangente de serviços desenhados para atender às necessidades específicas da sua empresa, independentemente do tamanho ou segmento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center text-white mb-6">
                <Users size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Consultoria em RH</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Diagnóstico completo, reestruturação de cargos e salários, avaliação de desempenho, clima organizacional e atração de talentos. Otimizamos seu departamento para operar de forma estratégica.
              </p>
              <a href="#contato" className="text-emerald-600 font-semibold flex items-center gap-2 hover:text-emerald-800 transition-colors">
                Saber mais <ArrowRight size={16} />
              </a>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center text-white mb-6">
                <TrendingUp size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Treinamentos e Capacitação</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Programas de desenvolvimento de lideranças, workshops de soft skills, integração de novos colaboradores e trilhas de aprendizagem personalizadas para impulsionar a performance.
              </p>
              <a href="#contato" className="text-emerald-600 font-semibold flex items-center gap-2 hover:text-emerald-800 transition-colors">
                Saber mais <ArrowRight size={16} />
              </a>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center text-white mb-6">
                <Cpu size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Tecnologia e Inovação</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Implementação de sistemas de automação de RH (HR Techs), digitalização de processos de admissão, folha de pagamento e people analytics para decisões baseadas em dados.
              </p>
              <a href="#contato" className="text-emerald-600 font-semibold flex items-center gap-2 hover:text-emerald-800 transition-colors">
                Saber mais <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-emerald-300 tracking-wider uppercase mb-2">Casos de Sucesso</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">O que dizem nossos clientes</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "A consultoria da RH360 transformou nossa cultura interna. Reduzimos o turnover em 40% em apenas seis meses e nossa equipe está mais engajada do que nunca.",
                name: "Carlos Mendes",
                role: "CEO, TechSolutions",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
              },
              {
                quote: "Os treinamentos de liderança foram um divisor de águas. Nossos gestores agora têm as ferramentas certas para motivar e guiar suas equipes para resultados excepcionais.",
                name: "Mariana Costa",
                role: "Diretora de Operações, Varejo Mais",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
              },
              {
                quote: "A implementação do novo sistema de RH automatizou tarefas que levavam dias. Agora nosso time de DP foca no que realmente importa: as pessoas.",
                name: "Roberto Almeida",
                role: "Gerente de RH, Indústria Forte",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <Quote className="text-emerald-400 mb-4" size={32} />
                <p className="text-gray-200 mb-6 text-lg italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <h5 className="font-bold text-white">{testimonial.name}</h5>
                    <p className="text-emerald-300 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-bold text-emerald-600 tracking-wider uppercase mb-2">Conteúdo</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Últimos Artigos</h3>
            </div>
            <button className="hidden md:flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-800 transition-colors">
              Ver todos <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Como reter talentos na era do trabalho híbrido",
                category: "Gestão de Pessoas",
                image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                date: "12 Out, 2023"
              },
              {
                title: "5 indicadores de RH que toda empresa deve acompanhar",
                category: "Estratégia",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                date: "05 Out, 2023"
              },
              {
                title: "O impacto da inteligência artificial no recrutamento",
                category: "Tecnologia",
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                date: "28 Set, 2023"
              }
            ].map((post, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">{post.category}</span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">{post.title}</h4>
                  <p className="text-gray-600 text-sm line-clamp-2">Descubra as melhores práticas e tendências do mercado para otimizar os processos da sua empresa e engajar sua equipe.</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <button className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-800 transition-colors">
              Ver todos os artigos <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-bold text-emerald-600 tracking-wider uppercase mb-2">Fale Conosco</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Vamos transformar o seu RH juntos?</h3>
              <p className="text-lg text-gray-600 mb-10">
                Preencha o formulário e nossa equipe de especialistas entrará em contato para entender as necessidades da sua empresa.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">E-mail</h4>
                    <p className="text-gray-600">rh360oficial@outlook.com.br</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Telefone</h4>
                    <p className="text-gray-600">(61) 99864-1917</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Endereço</h4>
                    <p className="text-gray-600">Brasília - DF</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all" placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail Corporativo</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all" placeholder="seu@email.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all" placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all resize-none" placeholder="Como podemos ajudar sua empresa?"></textarea>
                </div>
                <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-colors shadow-md">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          {/* Placeholder for actual Google Maps iframe */}
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-4 opacity-50" />
            <p className="font-medium">Mapa de Localização (Placeholder)</p>
          </div>
        </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245781.93282276332!2d-48.06734173873426!3d-15.774545686008138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3d18df9ae275%3A0x738470e469754a24!2sBras%C3%ADlia%2C%20DF!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 grayscale contrast-125 opacity-80 mix-blend-multiply"
        ></iframe>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <span className="text-3xl font-bold tracking-tighter text-white mb-6 block">
                RH<span className="text-emerald-500">360</span>
              </span>
              <p className="text-gray-400 text-sm mb-6">
                Transformando a gestão de pessoas e impulsionando resultados através de soluções inovadoras em RH.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Início</button></li>
                <li><button onClick={() => scrollToSection('sobre')} className="hover:text-white transition-colors">Sobre Nós</button></li>
                <li><button onClick={() => scrollToSection('serviços')} className="hover:text-white transition-colors">Serviços</button></li>
                <li><button onClick={() => scrollToSection('blog')} className="hover:text-white transition-colors">Blog</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Serviços</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Consultoria em RH</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Treinamentos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Recrutamento e Seleção</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tecnologia e Inovação</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Contato</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>Brasília - DF</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-emerald-500 flex-shrink-0" />
                  <span>(61) 99864-1917</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-emerald-500 flex-shrink-0" />
                  <span>rh360oficial@outlook.com.br</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} RH360 Consultoria. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

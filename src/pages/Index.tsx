import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'portfolio', 'services', 'about', 'process', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const portfolioItems = [
    {
      id: 1,
      title: 'Современная гостиная',
      description: 'Минималистичный дизайн с элементами роскоши',
      image: '/img/1f838171-b271-4eda-a984-71b53122881d.jpg',
      category: 'Гостиная'
    },
    {
      id: 2,
      title: 'Кухня премиум класса',
      description: 'Функциональное пространство с мраморными поверхностями',
      image: '/img/c76df321-3c42-4c32-a647-02f1b59851e0.jpg',
      category: 'Кухня'
    },
    {
      id: 3,
      title: 'Элегантная спальня',
      description: 'Спокойная атмосфера в нейтральных тонах',
      image: '/img/ce546073-1b98-4d9e-96fe-cc5bed19fe8a.jpg',
      category: 'Спальня'
    }
  ];

  const services = [
    {
      icon: 'Home',
      title: 'Визуализация квартир',
      description: 'Создание фотореалистичных 3D изображений интерьеров квартир любой планировки'
    },
    {
      icon: 'Package',
      title: 'Предметная визуализация',
      description: 'Создание фотореалистичных изображений мебели, декора и товаров'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Техническое задание',
      description: 'Обсуждаем ваши пожелания, получаем планировку и референсы'
    },
    {
      step: '02',
      title: '3D моделирование',
      description: 'Создаем трёхмерную модель помещения с мебелью и декором'
    },
    {
      step: '03',
      title: 'Рендеринг',
      description: 'Настраиваем освещение и материалы, создаем фотореалистичные изображения'
    },
    {
      step: '04',
      title: 'Финальная подача',
      description: 'Передаем готовые визуализации в высоком разрешении'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-primary" style={{ fontFamily: 'Montserrat', fontWeight: '300', letterSpacing: '0.05em' }}>
              Кристина Калугина
              <span className="block text-sm font-normal opacity-80 mt-1">3D визуализатор</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'services', label: 'Услуги' },
                { id: 'about', label: 'Обо мне' },
                { id: 'process', label: 'Процесс' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors story-link ${
                    activeSection === item.id ? 'text-accent' : 'text-foreground hover:text-accent'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6">
              Превращаю идеи
              <br />
              в <span className="text-accent">фотореальность</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Создаю высококачественные 3D визуализации интерьеров и предметов, 
              которые помогают увидеть будущий дизайн до начала ремонта
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg"
                onClick={() => scrollToSection('portfolio')}
              >
                Посмотреть работы
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
                onClick={() => scrollToSection('contact')}
              >
                Обсудить проект
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Портфолио
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры моих работ — от концепции до финальной визуализации
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={item.id} className="group overflow-hidden hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Услуги
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по 3D визуализации интерьеров
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name={service.icon} className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                Обо мне
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Меня зовут Александр, и я специализируюсь на создании фотореалистичных 
                3D визуализаций интерьеров. С более чем 7-летним опытом в области 
                архитектурной визуализации, я помогаю дизайнерам, архитекторам и 
                частным клиентам воплощать их идеи в жизнь.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Моя цель — создать изображения, которые неотличимы от фотографий 
                реальных интерьеров, позволяя клиентам принимать взвешенные решения 
                на этапе планирования.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Award" className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">7+ лет опыта</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Users" className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">200+ проектов</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">3-5 дней</span>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/1f838171-b271-4eda-a984-71b53122881d.jpg" 
                alt="О работе с 3D визуализацией"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Процесс работы
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Четкий алгоритм от идеи до готовой визуализации
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Готовы увидеть свой проект?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Обсудим ваши идеи и создадим визуализацию, которая превзойдет ожидания
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg"
              >
                <Icon name="Phone" className="w-5 h-5 mr-2" />
                Позвонить
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 text-lg"
              >
                <Icon name="Mail" className="w-5 h-5 mr-2" />
                Написать
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" className="w-5 h-5" />
                <span>+7 (XXX) XXX-XX-XX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" className="w-5 h-5" />
                <span>info@3dviz.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" className="w-5 h-5" />
                <span>Москва</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
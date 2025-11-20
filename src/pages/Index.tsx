import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-secondary/30">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Crown" className="text-primary" size={28} />
              <span className="text-2xl font-bold text-primary">Путь КОРОЛЕВЫ</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'О курсе', 'Тарифы', 'Отзывы', 'Контакты'].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(['home', 'about', 'pricing', 'reviews', 'contact'][idx])}
                  className="text-foreground/70 hover:text-primary transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://cdn.poehali.dev/projects/267a53a3-da67-461c-ad9c-f5652cdd98b3/files/f90253b6-a87c-4a65-914f-ed92754d67d9.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <Icon name="Crown" className="text-primary" size={64} />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-primary mb-6 leading-tight">
              Путь КОРОЛЕВЫ
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Работа с самооценкой, принятие себя и выход на новый уровень жизни через развитие внутренней гармонии, элегантности и женственности
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => scrollToSection('pricing')}
            >
              Начать путь <Icon name="Sparkles" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white/60">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-primary mb-12 animate-fade-in">
              О курсе
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'Heart',
                  title: 'Работа с самооценкой',
                  description: 'Научитесь ценить себя и свою уникальность, повысьте уверенность и избавьтесь от внутренних ограничений'
                },
                {
                  icon: 'Sparkles',
                  title: 'Принятие себя',
                  description: 'Примите свою женскую природу, обретите внутреннюю целостность и гармонию с собой'
                },
                {
                  icon: 'TrendingUp',
                  title: 'Новый уровень жизни',
                  description: 'Выйдите на качественно новый уровень — в отношениях, карьере и самореализации'
                }
              ].map((item, idx) => (
                <Card 
                  key={idx} 
                  className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg animate-scale-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CardContent className="pt-8 pb-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name={item.icon as any} className="text-primary" size={32} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-primary">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-16 bg-gradient-to-r from-accent/30 to-secondary/30 rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-primary mb-6">Что вы получите:</h3>
              <ul className="space-y-4">
                {[
                  'Проработку самооценки и внутренних блоков',
                  'Техники глубокого принятия себя',
                  'Инструменты для трансформации жизни',
                  'Поддержку сообщества единомышленниц',
                  'Личное сопровождение на пути к новому себе',
                  'Практики женственности и элегантности'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={24} />
                    <span className="text-lg text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-primary mb-4 animate-fade-in">
              Тарифы
            </h2>
            <p className="text-center text-xl text-muted-foreground mb-12">
              Выберите свой путь к трансформации
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Принцесса',
                  price: '15 000',
                  icon: 'Sparkle',
                  features: [
                    'Доступ к базовому курсу',
                    '8 обучающих модулей',
                    'Рабочие тетради',
                    'Закрытый чат поддержки',
                    'Сертификат о прохождении'
                  ],
                  popular: false
                },
                {
                  name: 'Королева',
                  price: '35 000',
                  icon: 'Crown',
                  features: [
                    'Всё из тарифа "Принцесса"',
                    '12 обучающих модулей',
                    '4 групповых созвона',
                    'Личная консультация (1 час)',
                    'Доступ к закрытому клубу',
                    'Бонусные материалы'
                  ],
                  popular: true
                },
                {
                  name: 'Императрица',
                  price: '65 000',
                  icon: 'Gem',
                  features: [
                    'Всё из тарифа "Королева"',
                    'Полный курс (16 модулей)',
                    '8 индивидуальных встреч',
                    'Персональный план развития',
                    'VIP поддержка 24/7',
                    'Годовое наставничество'
                  ],
                  popular: false
                }
              ].map((plan, idx) => (
                <Card 
                  key={idx}
                  className={`relative overflow-hidden border-2 transition-all hover:shadow-2xl animate-scale-in ${
                    plan.popular 
                      ? 'border-primary shadow-xl scale-105' 
                      : 'border-primary/20 hover:border-primary/40'
                  }`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  {plan.popular && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Популярный
                    </div>
                  )}
                  <CardContent className="pt-8 pb-6">
                    <div className="flex justify-center mb-4">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name={plan.icon as any} className="text-primary" size={40} />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-center mb-2 text-primary">{plan.name}</h3>
                    <div className="text-center mb-6">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">₽</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full rounded-full ${plan.popular ? 'shadow-lg' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                      onClick={() => scrollToSection('contact')}
                    >
                      Выбрать тариф
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-6 bg-white/60">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-primary mb-12 animate-fade-in">
              Отзывы
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: 'Анастасия',
                  text: 'Этот курс изменил мою жизнь. Я научилась принимать себя, обрела уверенность и внутреннюю силу. Теперь я чувствую себя настоящей королевой!',
                  rating: 5
                },
                {
                  name: 'Елена',
                  text: 'Прекрасный курс с глубоким содержанием. Каждый модуль — это открытие. Особенно ценю поддержку наставника и атмосферу в группе.',
                  rating: 5
                },
                {
                  name: 'Мария',
                  text: 'Рекомендую всем женщинам! Курс помог мне раскрыть свою женственность, научил элегантности не только внешней, но и внутренней.',
                  rating: 5
                },
                {
                  name: 'Виктория',
                  text: 'Благодарна за этот опыт! Я обрела гармонию с собой и миром. Практики работают, результаты видны уже после первого модуля.',
                  rating: 5
                },
                {
                  name: 'Ольга',
                  text: 'После курса я стала совершенно другим человеком. Повысилась самооценка, появилась уверенность в себе. Отношения с близкими вышли на новый уровень!',
                  rating: 5
                },
                {
                  name: 'Дарья',
                  text: 'Невероятная трансформация! Я наконец приняла себя такой, какая я есть. Это дало мне крылья для новых свершений в карьере и личной жизни.',
                  rating: 5
                },
                {
                  name: 'Татьяна',
                  text: 'Курс превзошёл все ожидания. Глубокая работа с самооценкой помогла избавиться от старых комплексов. Спасибо за мудрое сопровождение!',
                  rating: 5
                },
                {
                  name: 'Алина',
                  text: 'Я в восторге! Практики простые, но невероятно эффективные. За 2 месяца я изменилась больше, чем за последние 5 лет. Жизнь заиграла новыми красками.',
                  rating: 5
                },
                {
                  name: 'Светлана',
                  text: 'Этот курс — настоящий подарок для каждой женщины. Я научилась ценить себя, раскрыла свою силу и красоту. Чувствую себя королевой каждый день!',
                  rating: 5
                }
              ].map((review, idx) => (
                <Card 
                  key={idx}
                  className="border-2 border-primary/20 hover:shadow-lg transition-all animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-primary fill-primary" size={18} />
                      ))}
                    </div>
                    <p className="text-foreground/80 mb-4 italic leading-relaxed">"{review.text}"</p>
                    <p className="font-semibold text-primary">{review.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-primary mb-4 animate-fade-in">
              Контакты
            </h2>
            <p className="text-center text-xl text-muted-foreground mb-12">
              Готовы начать свой путь? Свяжитесь с нами
            </p>
            <Card className="border-2 border-primary/20 shadow-xl">
              <CardContent className="pt-8 pb-8">
                <div className="space-y-6">
                  {[
                    { icon: 'Mail', label: 'Email', value: 'info@queen-path.ru' },
                    { icon: 'Phone', label: 'Телефон', value: '+7 (999) 123-45-67' },
                    { icon: 'Send', label: 'Telegram', value: '@queen_path_bot' }
                  ].map((contact, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-accent/30 hover:bg-accent/50 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={contact.icon as any} className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        <p className="text-lg font-medium text-foreground">{contact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button 
                  className="w-full mt-8 text-lg py-6 rounded-full shadow-lg"
                  size="lg"
                >
                  Записаться на консультацию <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary/5 py-12 px-6 border-t border-primary/10">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Crown" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">Путь КОРОЛЕВЫ</span>
            </div>
            <p className="text-muted-foreground text-center max-w-md">
              Курс для развития женственности, элегантности и внутренней гармонии
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 Путь КОРОЛЕВЫ. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
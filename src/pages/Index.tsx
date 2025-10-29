import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface Portfolio {
  id: number;
  title: string;
  style: string;
  image: string;
}

interface PricingTier {
  id: number;
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}

const portfolio: Portfolio[] = [
  { id: 1, title: 'Портрет в масле', style: 'Классика', image: 'https://cdn.poehali.dev/projects/e4360abc-69b5-4a85-b2a2-edafb664f459/files/8b506e0c-79ab-405d-ac5f-b9a1aa21347e.jpg' },
  { id: 2, title: 'Абстракция', style: 'Современное', image: 'https://cdn.poehali.dev/projects/e4360abc-69b5-4a85-b2a2-edafb664f459/files/b0304e28-5206-4af2-9754-79ec22a7f68a.jpg' },
  { id: 3, title: 'Акварель', style: 'Нежность', image: 'https://cdn.poehali.dev/projects/e4360abc-69b5-4a85-b2a2-edafb664f459/files/fae34049-9658-4936-adb0-1b667de37f89.jpg' },
  { id: 4, title: 'Поп-арт', style: 'Яркость', image: 'https://cdn.poehali.dev/projects/e4360abc-69b5-4a85-b2a2-edafb664f459/files/10d3a2dd-ad28-4493-88a6-4f3ca065db63.jpg' },
];

const pricing: PricingTier[] = [
  { 
    id: 1, 
    name: 'Базовый', 
    price: 100, 
    features: ['Цифровой скетч', 'Базовая обработка', '1 правка', 'Срок: 3 дня']
  },
  { 
    id: 2, 
    name: 'Стандарт', 
    price: 2500, 
    features: ['Детальная обработка', 'Выбор стиля', '3 правки', 'Срок: 5 дней', 'Печать A4'], 
    popular: true 
  },
  { 
    id: 3, 
    name: 'Премиум', 
    price: 10000, 
    features: ['Ручная работа маслом', 'Холст 50x70 см', 'Неограниченные правки', 'Срок: 14 дней', 'Доставка по РФ']
  },
  { 
    id: 4, 
    name: 'Люкс', 
    price: 40000, 
    features: ['Холст 100x150 см', 'Музейное качество', 'Консультация художника', 'Срок: 30 дней', 'Рама в подарок', 'Доставка worldwide']
  },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState<'home' | 'portfolio' | 'upload' | 'pricing' | 'about' | 'contact'>('home');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              ArtStudio
            </h1>
            <div className="flex gap-6">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'portfolio', label: 'Портфолио', icon: 'Image' },
                { id: 'upload', label: 'Загрузить', icon: 'Upload' },
                { id: 'pricing', label: 'Тарифы', icon: 'DollarSign' },
                { id: 'about', label: 'О нас', icon: 'Users' },
                { id: 'contact', label: 'Контакты', icon: 'Mail' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id as any)}
                  className={`flex items-center gap-2 transition-colors ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span className="hidden md:inline">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <div className="container mx-auto px-4 py-20 animate-fade-in">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="mb-6 relative">
              <h2 className="text-7xl font-bold mb-4 relative z-10">
                Превратим ваше фото
                <br />
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  в произведение искусства
                </span>
              </h2>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              От цифрового скетча за 100₽ до эксклюзивного холста за 40 000₽
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90" onClick={() => setActiveSection('upload')}>
                <Icon name="Upload" size={20} className="mr-2" />
                Загрузить фото
              </Button>
              <Button size="lg" variant="outline" onClick={() => setActiveSection('portfolio')}>
                <Icon name="Image" size={20} className="mr-2" />
                Посмотреть работы
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: 'Palette', title: 'Любой стиль', desc: 'От классики до поп-арта' },
              { icon: 'Clock', title: 'Быстро', desc: 'От 3 до 30 дней' },
              { icon: 'Award', title: 'Качество', desc: 'Профессиональные художники' },
            ].map((feature, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'portfolio' && (
        <div className="container mx-auto px-4 py-12 animate-fade-in">
          <h2 className="text-5xl font-bold text-center mb-12">Наши работы</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((work) => (
              <Card key={work.id} className="overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="h-64 overflow-hidden">
                  <img src={work.image} alt={work.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{work.title}</CardTitle>
                    <Badge variant="secondary">{work.style}</Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'upload' && (
        <div className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-4">Загрузите ваше фото</h2>
            <p className="text-center text-muted-foreground mb-12">Мы превратим его в уникальное произведение искусства</p>
            
            <Card>
              <CardHeader>
                <CardTitle>Форма заказа</CardTitle>
                <CardDescription>Заполните детали для создания вашей работы</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="photo">Ваше фото</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <input
                      id="photo"
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <label htmlFor="photo" className="cursor-pointer">
                      <Icon name="Upload" size={48} className="mx-auto text-muted-foreground mb-4" />
                      <p className="text-sm text-muted-foreground">
                        {uploadedFile ? uploadedFile.name : 'Нажмите для выбора файла'}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">JPG, PNG до 10MB</p>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="style">Желаемый стиль</Label>
                  <Input id="style" placeholder="Например: акварель, масло, поп-арт" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comments">Комментарии</Label>
                  <Textarea id="comments" placeholder="Расскажите о ваших пожеланиях..." />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заказ
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}

      {activeSection === 'pricing' && (
        <div className="container mx-auto px-4 py-12 animate-fade-in">
          <h2 className="text-5xl font-bold text-center mb-4">Тарифы</h2>
          <p className="text-center text-muted-foreground mb-12">Выберите подходящий вариант</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((tier) => (
              <Card key={tier.id} className={`relative hover:shadow-2xl transition-all ${tier.popular ? 'border-2 border-primary shadow-xl scale-105' : ''}`}>
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent">
                    Популярный
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{tier.price.toLocaleString()}₽</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${tier.popular ? 'bg-gradient-to-r from-primary to-accent' : ''}`}
                    variant={tier.popular ? 'default' : 'outline'}
                    onClick={() => setActiveSection('upload')}
                  >
                    Выбрать
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'about' && (
        <div className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-8">О нас</h2>
            <Card>
              <CardContent className="pt-6 space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  ArtStudio — это команда профессиональных художников, которые превращают обычные фотографии в настоящие произведения искусства.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  За 5 лет работы мы создали более 10 000 уникальных работ для клиентов по всему миру. Каждая работа выполняется с душой и вниманием к деталям.
                </p>
                <div className="grid md:grid-cols-3 gap-8 pt-8">
                  {[
                    { number: '10 000+', label: 'Работ создано' },
                    { number: '50+', label: 'Художников' },
                    { number: '5 лет', label: 'На рынке' },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {activeSection === 'contact' && (
        <div className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-8">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Email</CardTitle>
                  <CardDescription className="text-base">info@artstudio.ru</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Телефон</CardTitle>
                  <CardDescription className="text-base">+7 (999) 123-45-67</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="MessageCircle" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Telegram</CardTitle>
                  <CardDescription className="text-base">@artstudio_ru</CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Instagram" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Instagram</CardTitle>
                  <CardDescription className="text-base">@artstudio_official</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
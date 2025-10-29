import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Car {
  id: number;
  brand: string;
  model: string;
  price: number;
  gtaPrice: number;
  speed: number;
  acceleration: number;
  handling: number;
  image: string;
  class: string;
}

const cars: Car[] = [
  { id: 1, brand: 'Lamborghini', model: 'Aventador', price: 450000, gtaPrice: 2500000, speed: 350, acceleration: 95, handling: 88, image: 'https://cdn.poehali.dev/projects/e4360abc-69b5-4a85-b2a2-edafb664f459/files/a5d6321e-6543-40c0-88b1-f5e7372b8068.jpg', class: 'Super' },
  { id: 2, brand: 'Porsche', model: '911 Turbo S', price: 220000, gtaPrice: 1800000, speed: 330, acceleration: 92, handling: 94, image: 'https://cdn.poehali.dev/projects/e4360abc-69b5-4a85-b2a2-edafb664f459/files/e0c20a34-8502-4260-980e-da36315beb84.jpg', class: 'Sports' },
  { id: 3, brand: 'Mercedes-Benz', model: 'AMG GT R', price: 180000, gtaPrice: 1500000, speed: 318, acceleration: 88, handling: 90, image: 'https://cdn.poehali.dev/projects/e4360abc-69b5-4a85-b2a2-edafb664f459/files/e0c20a34-8502-4260-980e-da36315beb84.jpg', class: 'Sports' },
  { id: 4, brand: 'BMW', model: 'M8 Competition', price: 150000, gtaPrice: 1200000, speed: 305, acceleration: 85, handling: 87, image: 'https://cdn.poehali.dev/projects/e4360abc-69b5-4a85-b2a2-edafb664f459/files/e0c20a34-8502-4260-980e-da36315beb84.jpg', class: 'Sports' },
  { id: 5, brand: 'Ferrari', model: 'F8 Tributo', price: 280000, gtaPrice: 2000000, speed: 340, acceleration: 93, handling: 92, image: 'https://cdn.poehali.dev/projects/e4360abc-69b5-4a85-b2a2-edafb664f459/files/4a9fcdb3-874b-4c7d-8967-0dc8f58a0cce.jpg', class: 'Super' },
  { id: 6, brand: 'McLaren', model: '720S', price: 300000, gtaPrice: 2200000, speed: 341, acceleration: 94, handling: 91, image: 'https://cdn.poehali.dev/projects/e4360abc-69b5-4a85-b2a2-edafb664f459/files/a5d6321e-6543-40c0-88b1-f5e7372b8068.jpg', class: 'Super' },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState<'home' | 'catalog' | 'garage'>('home');
  const [garage, setGarage] = useState<Car[]>([]);
  const [currency, setCurrency] = useState<'usd' | 'gta'>('usd');

  const addToGarage = (car: Car) => {
    if (!garage.find(c => c.id === car.id)) {
      setGarage([...garage, car]);
    }
  };

  const repairCar = (carId: number) => {
    console.log(`Ремонт авто #${carId} выполнен бесплатно!`);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              GTA 6 AUTO
            </h1>
            <div className="flex gap-6">
              <button
                onClick={() => setActiveSection('home')}
                className={`flex items-center gap-2 transition-colors ${
                  activeSection === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name="Home" size={20} />
                Главная
              </button>
              <button
                onClick={() => setActiveSection('catalog')}
                className={`flex items-center gap-2 transition-colors ${
                  activeSection === 'catalog' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name="Car" size={20} />
                Каталог
              </button>
              <button
                onClick={() => setActiveSection('garage')}
                className={`flex items-center gap-2 transition-colors ${
                  activeSection === 'garage' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name="Warehouse" size={20} />
                Гараж
                {garage.length > 0 && (
                  <Badge variant="secondary" className="ml-1">{garage.length}</Badge>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <div className="container mx-auto px-4 py-16 animate-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-scale-in">
              Премиум автомобили
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Покупайте легендарные машины за реальные деньги или игровую валюту
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => setActiveSection('catalog')}>
                <Icon name="Zap" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" onClick={() => setActiveSection('garage')}>
                <Icon name="Warehouse" size={20} className="mr-2" />
                Мой гараж
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {cars.slice(0, 3).map((car, idx) => (
              <Card key={car.id} className="overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="h-48 overflow-hidden">
                  <img src={car.image} alt={car.model} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-primary/20 text-primary">{car.class}</Badge>
                    <Badge variant="outline">{car.brand}</Badge>
                  </div>
                  <CardTitle className="text-2xl">{car.model}</CardTitle>
                  <CardDescription>Максимальная скорость: {car.speed} км/ч</CardDescription>
                </CardHeader>
                <CardFooter className="flex-col gap-2">
                  <div className="flex gap-2 w-full text-sm">
                    <div className="flex-1 text-center">
                      <div className="text-muted-foreground">💵 ${car.price.toLocaleString()}</div>
                    </div>
                    <div className="flex-1 text-center">
                      <div className="text-secondary">💰 {car.gtaPrice.toLocaleString()} GTA$</div>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90" onClick={() => addToGarage(car)}>
                    Купить сейчас
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'catalog' && (
        <div className="container mx-auto px-4 py-8 animate-fade-in">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-4xl font-bold">Каталог автомобилей</h2>
              <Tabs value={currency} onValueChange={(v) => setCurrency(v as 'usd' | 'gta')}>
                <TabsList>
                  <TabsTrigger value="usd">💵 USD</TabsTrigger>
                  <TabsTrigger value="gta">💰 GTA$</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="super">Super</TabsTrigger>
                <TabsTrigger value="sports">Sports</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="grid md:grid-cols-3 gap-6">
                  {cars.map((car) => (
                    <Card key={car.id} className="overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                      <div className="h-48 overflow-hidden">
                        <img src={car.image} alt={car.model} className="w-full h-full object-cover" />
                      </div>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge className="bg-primary/20 text-primary">{car.class}</Badge>
                          <Badge variant="outline">{car.brand}</Badge>
                        </div>
                        <CardTitle>{car.model}</CardTitle>
                        <CardDescription>
                          <div className="flex items-center gap-4 mt-2 text-xs">
                            <div className="flex items-center gap-1">
                              <Icon name="Gauge" size={14} />
                              {car.speed} км/ч
                            </div>
                            <div className="flex items-center gap-1">
                              <Icon name="Zap" size={14} />
                              {car.acceleration}/100
                            </div>
                            <div className="flex items-center gap-1">
                              <Icon name="Crosshair" size={14} />
                              {car.handling}/100
                            </div>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="flex-col gap-2">
                        <div className="text-2xl font-bold text-center w-full">
                          {currency === 'usd' ? (
                            <span className="text-primary">${car.price.toLocaleString()}</span>
                          ) : (
                            <span className="text-secondary">{car.gtaPrice.toLocaleString()} GTA$</span>
                          )}
                        </div>
                        <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90" onClick={() => addToGarage(car)}>
                          <Icon name="ShoppingCart" size={18} className="mr-2" />
                          Купить
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="super" className="mt-0">
                <div className="grid md:grid-cols-3 gap-6">
                  {cars.filter(car => car.class === 'Super').map((car) => (
                    <Card key={car.id} className="overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                      <div className="h-48 overflow-hidden">
                        <img src={car.image} alt={car.model} className="w-full h-full object-cover" />
                      </div>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge className="bg-primary/20 text-primary">{car.class}</Badge>
                          <Badge variant="outline">{car.brand}</Badge>
                        </div>
                        <CardTitle>{car.model}</CardTitle>
                        <CardDescription>
                          <div className="flex items-center gap-4 mt-2 text-xs">
                            <div className="flex items-center gap-1">
                              <Icon name="Gauge" size={14} />
                              {car.speed} км/ч
                            </div>
                            <div className="flex items-center gap-1">
                              <Icon name="Zap" size={14} />
                              {car.acceleration}/100
                            </div>
                            <div className="flex items-center gap-1">
                              <Icon name="Crosshair" size={14} />
                              {car.handling}/100
                            </div>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="flex-col gap-2">
                        <div className="text-2xl font-bold text-center w-full">
                          {currency === 'usd' ? (
                            <span className="text-primary">${car.price.toLocaleString()}</span>
                          ) : (
                            <span className="text-secondary">{car.gtaPrice.toLocaleString()} GTA$</span>
                          )}
                        </div>
                        <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90" onClick={() => addToGarage(car)}>
                          <Icon name="ShoppingCart" size={18} className="mr-2" />
                          Купить
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="sports" className="mt-0">
                <div className="grid md:grid-cols-3 gap-6">
                  {cars.filter(car => car.class === 'Sports').map((car) => (
                    <Card key={car.id} className="overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                      <div className="h-48 overflow-hidden">
                        <img src={car.image} alt={car.model} className="w-full h-full object-cover" />
                      </div>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge className="bg-primary/20 text-primary">{car.class}</Badge>
                          <Badge variant="outline">{car.brand}</Badge>
                        </div>
                        <CardTitle>{car.model}</CardTitle>
                        <CardDescription>
                          <div className="flex items-center gap-4 mt-2 text-xs">
                            <div className="flex items-center gap-1">
                              <Icon name="Gauge" size={14} />
                              {car.speed} км/ч
                            </div>
                            <div className="flex items-center gap-1">
                              <Icon name="Zap" size={14} />
                              {car.acceleration}/100
                            </div>
                            <div className="flex items-center gap-1">
                              <Icon name="Crosshair" size={14} />
                              {car.handling}/100
                            </div>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="flex-col gap-2">
                        <div className="text-2xl font-bold text-center w-full">
                          {currency === 'usd' ? (
                            <span className="text-primary">${car.price.toLocaleString()}</span>
                          ) : (
                            <span className="text-secondary">{car.gtaPrice.toLocaleString()} GTA$</span>
                          )}
                        </div>
                        <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90" onClick={() => addToGarage(car)}>
                          <Icon name="ShoppingCart" size={18} className="mr-2" />
                          Купить
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      )}

      {activeSection === 'garage' && (
        <div className="container mx-auto px-4 py-8 animate-fade-in">
          <h2 className="text-4xl font-bold mb-8">Мой гараж</h2>
          {garage.length === 0 ? (
            <div className="text-center py-16">
              <Icon name="Warehouse" size={80} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-xl text-muted-foreground mb-4">Ваш гараж пуст</p>
              <Button onClick={() => setActiveSection('catalog')}>
                <Icon name="Car" size={18} className="mr-2" />
                Перейти в каталог
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {garage.map((car) => (
                <Card key={car.id} className="overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img src={car.image} alt={car.model} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-primary/20 text-primary">{car.class}</Badge>
                      <Badge variant="outline">{car.brand}</Badge>
                    </div>
                    <CardTitle>{car.model}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-4 mt-2 text-xs">
                        <div className="flex items-center gap-1">
                          <Icon name="Gauge" size={14} />
                          {car.speed} км/ч
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Zap" size={14} />
                          {car.acceleration}/100
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Crosshair" size={14} />
                          {car.handling}/100
                        </div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex-col gap-2">
                    <Button variant="outline" className="w-full" onClick={() => repairCar(car.id)}>
                      <Icon name="Wrench" size={18} className="mr-2" />
                      Бесплатный ремонт
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
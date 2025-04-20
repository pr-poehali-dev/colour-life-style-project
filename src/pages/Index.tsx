
import { Link } from "react-router-dom";
import { 
  Hotel, 
  Utensils, 
  Palmtree, 
  Plane, 
  Map, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  MapPin 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Верхнее меню */}
      <header className="bg-purple-600 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold tracking-tight">Colour Life Style</span>
            </div>
            <NavigationMenu>
              <NavigationMenuList className="hidden md:flex gap-6">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/" className="text-white hover:text-purple-200 font-medium">Главная</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/parks" className="text-white hover:text-purple-200 font-medium">Парки развлечений</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/restaurants" className="text-white hover:text-purple-200 font-medium">Рестораны</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/hotels" className="text-white hover:text-purple-200 font-medium">Отели</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/tours" className="text-white hover:text-purple-200 font-medium">Туры</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div>
              <Button variant="secondary" className="bg-white text-purple-600 hover:bg-purple-100">
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Баннер */}
      <section className="relative h-[500px] bg-gradient-to-r from-purple-700 to-purple-500">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-20 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Добро пожаловать в мир ярких впечатлений</h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-3xl">
            Сеть парков развлечений, ресторанов, отелей и туристических услуг в одном месте
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-100">
              Наши услуги
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Забронировать
            </Button>
          </div>
        </div>
      </section>

      {/* Направления */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши направления</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Palmtree className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-semibold">Парки развлечений</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Незабываемые впечатления для всей семьи в наших тематических парках развлечений.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/parks">Подробнее</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Utensils className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-semibold">Рестораны</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Изысканная кухня, элегантная атмосфера и внимательный сервис в наших ресторанах.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/restaurants">Подробнее</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Hotel className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-semibold">Отели</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Комфортное проживание с превосходным сервисом и современными удобствами.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/hotels">Подробнее</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Plane className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-semibold">Туры</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Увлекательные путешествия с профессиональными гидами и насыщенными программами.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/tours">Подробнее</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Специальные предложения */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Специальные предложения</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-md transition-shadow border-purple-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Семейный пакет</h3>
                <p className="text-gray-600 mb-4">
                  Включает проживание в отеле, посещение парка развлечений и ужин в ресторане.
                </p>
                <div className="text-purple-600 font-bold text-xl mb-4">от 15 000 ₽</div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Забронировать</Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-md transition-shadow border-purple-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Романтический уикенд</h3>
                <p className="text-gray-600 mb-4">
                  Проживание в люксе, ужин при свечах и спа-процедуры для двоих.
                </p>
                <div className="text-purple-600 font-bold text-xl mb-4">от 25 000 ₽</div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Забронировать</Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-md transition-shadow border-purple-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Тур выходного дня</h3>
                <p className="text-gray-600 mb-4">
                  Экскурсия по лучшим местам региона с профессиональным гидом.
                </p>
                <div className="text-purple-600 font-bold text-xl mb-4">от 8 000 ₽</div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Забронировать</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* О нас */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">О компании Colour Life Style</h2>
              <p className="text-gray-600 mb-4">
                Наша компания более 15 лет создает незабываемые впечатления для наших гостей. 
                Мы предлагаем полный спектр услуг для вашего отдыха и развлечений: 
                от увлекательных парков развлечений до изысканных ресторанов и комфортабельных отелей.
              </p>
              <p className="text-gray-600 mb-6">
                Наша миссия — сделать каждый день вашего отдыха ярким и насыщенным, 
                предоставляя высочайший уровень сервиса и внимание к каждой детали.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700">Узнать больше</Button>
            </div>
            <div className="flex-1">
              <div className="rounded-lg overflow-hidden h-80 bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-purple-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Colour Life Style</h3>
              <p className="mb-4">Яркие впечатления каждый день</p>
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-purple-200">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-purple-200">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Направления</h3>
              <ul className="space-y-2">
                <li><Link to="/parks" className="hover:text-purple-200">Парки развлечений</Link></li>
                <li><Link to="/restaurants" className="hover:text-purple-200">Рестораны</Link></li>
                <li><Link to="/hotels" className="hover:text-purple-200">Отели</Link></li>
                <li><Link to="/tours" className="hover:text-purple-200">Туристические туры</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Информация</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-200">О компании</a></li>
                <li><a href="#" className="hover:text-purple-200">Специальные предложения</a></li>
                <li><a href="#" className="hover:text-purple-200">Карьера</a></li>
                <li><a href="#" className="hover:text-purple-200">Новости</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Контакты</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-purple-300" />
                  <span>Москва, ул. Пушкина, д. 10</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-purple-300" />
                  <span>+7 (800) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-purple-300" />
                  <span>info@colourlifestyle.ru</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-purple-700 text-center text-purple-300">
            <p>© 2023 Colour Life Style. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

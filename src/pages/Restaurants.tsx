
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Utensils, Clock, MapPin, Star } from "lucide-react";

const Restaurants = () => {
  const restaurants = [
    {
      id: 1,
      name: "Амаретто",
      cuisine: "Итальянская",
      description: "Аутентичная итальянская кухня с широким выбором пасты и пиццы",
      location: "Москва, ул. Гастрономическая, 34",
      hours: "10:00 - 23:00",
      rating: 4.8
    },
    {
      id: 2,
      name: "Сакура",
      cuisine: "Японская",
      description: "Традиционные японские блюда и суши от лучших шеф-поваров",
      location: "Санкт-Петербург, пр. Невский, 112",
      hours: "12:00 - 22:00",
      rating: 4.6
    },
    {
      id: 3,
      name: "Рустико",
      cuisine: "Русская",
      description: "Домашняя русская кухня с современной подачей и атмосферой",
      location: "Казань, ул. Кремлевская, 15",
      hours: "09:00 - 21:00",
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[400px] bg-gradient-to-r from-purple-700 to-purple-500">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-20 bg-cover bg-center"></div>
          <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white relative z-10">
            <h1 className="text-5xl font-bold mb-4">Наши рестораны</h1>
            <p className="text-xl max-w-2xl mb-6">
              Откройте для себя мир изысканных вкусов в ресторанах сети Colour Life Style. 
              Разнообразная кухня, уютная атмосфера и безупречный сервис.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-100">
                Забронировать столик
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Посмотреть меню
              </Button>
            </div>
          </div>
        </section>

        {/* Restaurants List */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Рестораны нашей сети</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {restaurants.map(restaurant => (
                <div key={restaurant.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-56 bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-2xl font-semibold">{restaurant.name}</h3>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        {restaurant.cuisine}
                      </span>
                    </div>
                    <div className="flex items-center mb-3">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="ml-1 text-gray-700">{restaurant.rating}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{restaurant.description}</p>
                    <div className="flex items-center text-gray-500 mb-2">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span>{restaurant.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500 mb-4">
                      <Clock className="h-5 w-5 mr-2" />
                      <span>{restaurant.hours}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1">Забронировать столик</Button>
                      <Button variant="outline" className="flex items-center">
                        <Utensils className="h-4 w-4 mr-2" />
                        Меню
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Специальные предложения</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-purple-50 rounded-lg p-8 relative overflow-hidden">
                <div className="relative z-10">
                  <span className="inline-block px-4 py-1 bg-purple-600 text-white rounded-full text-sm font-medium mb-4">Акция</span>
                  <h3 className="text-2xl font-semibold mb-3">Семейный ужин со скидкой 20%</h3>
                  <p className="text-gray-700 mb-4">
                    Приходите всей семьей в будние дни с 17:00 до 19:00 и получите скидку 20% на все меню.
                    Предложение действует для компаний от 3 человек.
                  </p>
                  <Button>Забронировать столик</Button>
                </div>
                <div className="absolute right-0 bottom-0 h-40 w-40 opacity-10">
                  <Utensils className="h-full w-full text-purple-900" />
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-8 relative overflow-hidden">
                <div className="relative z-10">
                  <span className="inline-block px-4 py-1 bg-purple-600 text-white rounded-full text-sm font-medium mb-4">Новинка</span>
                  <h3 className="text-2xl font-semibold mb-3">Сезонное меню "Летние вкусы"</h3>
                  <p className="text-gray-700 mb-4">
                    Попробуйте наше новое сезонное меню с блюдами из свежайших летних продуктов.
                    Доступно во всех ресторанах сети до конца августа.
                  </p>
                  <Button>Посмотреть меню</Button>
                </div>
                <div className="absolute right-0 bottom-0 h-40 w-40 opacity-10">
                  <Utensils className="h-full w-full text-purple-900" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Restaurants;


import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Bed, Calendar, MapPin, Star, Wifi, Coffee, BathIcon } from "lucide-react";

const Hotels = () => {
  const hotels = [
    {
      id: 1,
      name: "Colour Grand Hotel",
      category: "5 звезд",
      description: "Роскошный отель с панорамным видом и всеми удобствами для идеального отдыха",
      location: "Москва, Пресненская наб., 12",
      price: "от 7 500 ₽/ночь",
      rating: 4.9,
      amenities: ["Бассейн", "Спа", "Ресторан", "Тренажерный зал"]
    },
    {
      id: 2,
      name: "Colour Ocean Resort",
      category: "4 звезды",
      description: "Уютный отель на первой линии у моря с собственным пляжем и аквапарком",
      location: "Сочи, ул. Приморская, 25",
      price: "от 5 200 ₽/ночь",
      rating: 4.7,
      amenities: ["Пляж", "Аквапарк", "Бар", "Детская площадка"]
    },
    {
      id: 3,
      name: "Colour City Hotel",
      category: "4 звезды",
      description: "Современный бизнес-отель в центре города с удобным расположением",
      location: "Санкт-Петербург, Невский пр., 88",
      price: "от 4 800 ₽/ночь",
      rating: 4.6,
      amenities: ["Бизнес-центр", "Конференц-залы", "Ресторан", "Парковка"]
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
            <h1 className="text-5xl font-bold mb-4">Отели сети Colour Life Style</h1>
            <p className="text-xl max-w-2xl mb-6">
              Отдыхайте с комфортом в наших отелях по всей стране. 
              Безупречный сервис, современные номера и неповторимая атмосфера.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-100">
                Забронировать номер
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Специальные предложения
              </Button>
            </div>
          </div>
        </section>

        {/* Search Form */}
        <section className="py-8 bg-white shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-between">
              <div className="w-full md:w-auto">
                <label className="block text-sm font-medium text-gray-700 mb-1">Место</label>
                <select className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Все города</option>
                  <option>Москва</option>
                  <option>Санкт-Петербург</option>
                  <option>Сочи</option>
                  <option>Казань</option>
                </select>
              </div>
              <div className="w-full md:w-auto">
                <label className="block text-sm font-medium text-gray-700 mb-1">Дата заезда</label>
                <input 
                  type="date" 
                  className="w-full md:w-40 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="w-full md:w-auto">
                <label className="block text-sm font-medium text-gray-700 mb-1">Дата выезда</label>
                <input 
                  type="date" 
                  className="w-full md:w-40 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="w-full md:w-auto">
                <label className="block text-sm font-medium text-gray-700 mb-1">Количество гостей</label>
                <select className="w-full md:w-40 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>1 гость</option>
                  <option>2 гостя</option>
                  <option>3 гостя</option>
                  <option>4+ гостя</option>
                </select>
              </div>
              <div className="w-full md:w-auto md:self-end">
                <Button className="w-full mt-6">Найти отель</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Hotels List */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Наши отели</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {hotels.map(hotel => (
                <div key={hotel.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-56 bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-2xl font-semibold">{hotel.name}</h3>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        {hotel.category}
                      </span>
                    </div>
                    <div className="flex items-center mb-3">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="ml-1 text-gray-700">{hotel.rating}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{hotel.description}</p>
                    <div className="flex items-center text-gray-500 mb-2">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span>{hotel.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500 mb-4">
                      <Bed className="h-5 w-5 mr-2" />
                      <span>{hotel.price}</span>
                    </div>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {hotel.amenities.map((amenity, index) => (
                          <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {amenity === "Wifi" && <Wifi className="h-3 w-3 mr-1" />}
                            {amenity === "Ресторан" && <Coffee className="h-3 w-3 mr-1" />}
                            {amenity === "Спа" && <BathIcon className="h-3 w-3 mr-1" />}
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1">Забронировать</Button>
                      <Button variant="outline" className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        Проверить доступность
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают наши отели</h2>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-purple-50 rounded-lg p-8">
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full text-purple-600 mb-4">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Высокий уровень сервиса</h3>
                <p className="text-gray-600">
                  Наш персонал обеспечивает безупречный сервис и заботится о каждой детали вашего пребывания.
                </p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-8">
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full text-purple-600 mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Удобное расположение</h3>
                <p className="text-gray-600">
                  Все наши отели расположены в удобных районах с хорошей транспортной доступностью и рядом с достопримечательностями.
                </p>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-8">
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full text-purple-600 mb-4">
                  <Bed className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Комфортные номера</h3>
                <p className="text-gray-600">
                  Мы предлагаем просторные и уютные номера с современной мебелью и всем необходимым для комфортного отдыха.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Hotels;


import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Globe, Calendar, Clock, MapPin, Users, Plane } from "lucide-react";

const Tours = () => {
  const tours = [
    {
      id: 1,
      name: "Золотое кольцо России",
      type: "Экскурсионный",
      description: "Увлекательное путешествие по древним русским городам с богатой историей и культурой",
      duration: "7 дней / 6 ночей",
      groupSize: "до 15 человек",
      price: "от 38 500 ₽",
      nextDate: "15 июня 2023"
    },
    {
      id: 2,
      name: "Солнечная Турция",
      type: "Пляжный отдых",
      description: "Незабываемый отдых на лучших пляжах Турции с системой "всё включено"",
      duration: "10 дней / 9 ночей",
      groupSize: "индивидуально",
      price: "от 42 900 ₽",
      nextDate: "еженедельно"
    },
    {
      id: 3,
      name: "Горы Кавказа",
      type: "Активный отдых",
      description: "Треккинг по живописным маршрутам Кавказа с профессиональными гидами",
      duration: "5 дней / 4 ночи",
      groupSize: "до 10 человек",
      price: "от 28 500 ₽",
      nextDate: "20 июня 2023"
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
            <h1 className="text-5xl font-bold mb-4">Туры от Colour Life Style</h1>
            <p className="text-xl max-w-2xl mb-6">
              Откройте для себя уникальные направления с нашими тщательно спланированными турами. 
              От пляжного отдыха до экстремальных приключений — мы предложим тур на любой вкус.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-100">
                Подобрать тур
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Специальные предложения
              </Button>
            </div>
          </div>
        </section>

        {/* Tours List */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Популярные туры</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {tours.map(tour => (
                <div key={tour.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-56 bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-2xl font-semibold">{tour.name}</h3>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                        {tour.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{tour.description}</p>
                    <div className="flex items-center text-gray-500 mb-2">
                      <Clock className="h-5 w-5 mr-2" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-500 mb-2">
                      <Users className="h-5 w-5 mr-2" />
                      <span>Группа: {tour.groupSize}</span>
                    </div>
                    <div className="flex items-center text-gray-500 mb-2">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span>Ближайшая дата: {tour.nextDate}</span>
                    </div>
                    <div className="flex items-center text-gray-500 mb-4">
                      <Plane className="h-5 w-5 mr-2" />
                      <span>{tour.price}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1">Забронировать</Button>
                      <Button variant="outline" className="flex items-center">
                        Детали тура
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button size="lg" variant="outline">Показать все туры</Button>
            </div>
          </div>
        </section>

        {/* Destinations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Популярные направления</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative h-40 md:h-64 rounded-lg overflow-hidden group">
                <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">Москва</h3>
                  <p className="text-sm">от 12 500 ₽</p>
                </div>
              </div>
              
              <div className="relative h-40 md:h-64 rounded-lg overflow-hidden group">
                <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">Сочи</h3>
                  <p className="text-sm">от 18 900 ₽</p>
                </div>
              </div>
              
              <div className="relative h-40 md:h-64 rounded-lg overflow-hidden group">
                <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">Санкт-Петербург</h3>
                  <p className="text-sm">от 15 700 ₽</p>
                </div>
              </div>
              
              <div className="relative h-40 md:h-64 rounded-lg overflow-hidden group">
                <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center group-hover:scale-105 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">Калининград</h3>
                  <p className="text-sm">от 22 300 ₽</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <Globe className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Хотите индивидуальный тур?</h2>
              <p className="text-xl mb-8">
                Наши специалисты разработают для вас уникальный маршрут по вашим предпочтениям и бюджету.
                Оставьте заявку, и мы свяжемся с вами в ближайшее время.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="px-4 py-3 rounded-md text-gray-900 w-full md:w-64"
                />
                <input
                  type="tel"
                  placeholder="Ваш телефон"
                  className="px-4 py-3 rounded-md text-gray-900 w-full md:w-64"
                />
                <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-100">
                  Оставить заявку
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tours;


import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Ticket, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Parks = () => {
  const parks = [
    {
      id: 1,
      name: "Фантастик Парк",
      description: "Тематический парк с захватывающими аттракционами для всей семьи",
      location: "Москва, ул. Парковая, 123",
      price: "от 1200 ₽"
    },
    {
      id: 2,
      name: "Аквамир",
      description: "Крупнейший аквапарк с множеством водных горок и бассейнов",
      location: "Санкт-Петербург, пр. Приморский, 45",
      price: "от 1500 ₽"
    },
    {
      id: 3,
      name: "Детский Мир Развлечений",
      description: "Интерактивный парк для детей с образовательными аттракционами",
      location: "Казань, ул. Центральная, 78",
      price: "от 900 ₽"
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
            <h1 className="text-5xl font-bold mb-4">Парки развлечений</h1>
            <p className="text-xl max-w-2xl mb-6">
              Откройте для себя мир невероятных впечатлений в наших тематических парках. 
              Незабываемые аттракционы, шоу и развлечения для посетителей любого возраста.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-100">
                Забронировать билет
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Посмотреть карту парков
              </Button>
            </div>
          </div>
        </section>

        {/* Parks List */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Наши парки развлечений</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {parks.map(park => (
                <div key={park.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-56 bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">{park.name}</h3>
                    <p className="text-gray-600 mb-4">{park.description}</p>
                    <div className="flex items-center text-gray-500 mb-2">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span>{park.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500 mb-4">
                      <Ticket className="h-5 w-5 mr-2" />
                      <span>{park.price}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1">Купить билет</Button>
                      <Button variant="outline" className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        График работы
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-purple-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6">Информация для посетителей</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Часто задаваемые вопросы</h3>
                  <ul className="space-y-4">
                    <li className="p-4 bg-white rounded-lg shadow-sm">
                      <p className="font-medium">Есть ли ограничения по росту и возрасту?</p>
                      <p className="text-gray-600 mt-1">Да, для каждого аттракциона установлены свои ограничения. Подробную информацию можно узнать на странице каждого парка.</p>
                    </li>
                    <li className="p-4 bg-white rounded-lg shadow-sm">
                      <p className="font-medium">Можно ли приносить еду и напитки?</p>
                      <p className="text-gray-600 mt-1">В парках действуют различные правила. Обычно разрешается приносить воду и небольшие перекусы.</p>
                    </li>
                    <li className="p-4 bg-white rounded-lg shadow-sm">
                      <p className="font-medium">Как добраться до парков?</p>
                      <p className="text-gray-600 mt-1">К каждому парку организовано транспортное сообщение. Схемы проезда доступны на страницах парков.</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Правила посещения</h3>
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Дети до 14 лет должны находиться в сопровождении взрослых</li>
                      <li>Запрещено проносить алкогольные напитки</li>
                      <li>Соблюдайте правила безопасности на каждом аттракционе</li>
                      <li>Не бегайте по территории парка</li>
                      <li>Сохраняйте билеты до конца посещения</li>
                      <li>Следуйте указаниям персонала</li>
                      <li>Запрещено курение вне специально отведенных мест</li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <Button className="w-full">Скачать полные правила (PDF)</Button>
                  </div>
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

export default Parks;


import { Link } from "react-router-dom";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
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
  );
};

export default Footer;


import { Link } from "react-router-dom";
import { Palmtree, Utensils, Hotel, Plane } from "lucide-react";
import DirectionCard from "./DirectionCard";

const Directions = () => {
  const directions = [
    {
      title: "Парки развлечений",
      description: "Посетите наши тематические парки с аттракционами для всей семьи. Незабываемые впечатления гарантированы!",
      icon: Palmtree,
      linkTo: "/parks"
    },
    {
      title: "Рестораны",
      description: "Насладитесь изысканной кухней в наших ресторанах. Разнообразное меню и приятная атмосфера ждут вас.",
      icon: Utensils,
      linkTo: "/restaurants"
    },
    {
      title: "Отели",
      description: "Остановитесь в наших комфортабельных отелях. Высокий уровень сервиса и уютные номера для вашего отдыха.",
      icon: Hotel,
      linkTo: "/hotels"
    },
    {
      title: "Туры",
      description: "Откройте для себя мир с нашими эксклюзивными турами. Путешествуйте с комфортом и получайте новые впечатления.",
      icon: Plane,
      linkTo: "/tours"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Наши направления</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Мы предлагаем разнообразные услуги для вашего отдыха и развлечений
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {directions.map((direction, index) => (
            <DirectionCard
              key={index}
              title={direction.title}
              description={direction.description}
              icon={direction.icon}
              linkTo={direction.linkTo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Directions;

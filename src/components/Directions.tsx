
import { Hotel, Utensils, Palmtree, Plane } from "lucide-react";
import DirectionCard from "./DirectionCard";

const Directions = () => {
  const directions = [
    {
      title: "Парки развлечений",
      description: "Незабываемые впечатления для всей семьи в наших тематических парках развлечений.",
      icon: Palmtree,
      linkTo: "/parks"
    },
    {
      title: "Рестораны",
      description: "Изысканная кухня, элегантная атмосфера и внимательный сервис в наших ресторанах.",
      icon: Utensils,
      linkTo: "/restaurants"
    },
    {
      title: "Отели",
      description: "Комфортное проживание с превосходным сервисом и современными удобствами.",
      icon: Hotel,
      linkTo: "/hotels"
    },
    {
      title: "Туры",
      description: "Увлекательные путешествия с профессиональными гидами и насыщенными программами.",
      icon: Plane,
      linkTo: "/tours"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Наши направления</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

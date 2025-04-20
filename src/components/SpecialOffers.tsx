
import SpecialOffer from "./SpecialOffer";

const SpecialOffers = () => {
  const offers = [
    {
      title: "Семейный пакет",
      description: "Включает проживание в отеле, посещение парка развлечений и ужин в ресторане.",
      price: "от 15 000 ₽"
    },
    {
      title: "Романтический уикенд",
      description: "Проживание в люксе, ужин при свечах и спа-процедуры для двоих.",
      price: "от 25 000 ₽"
    },
    {
      title: "Тур выходного дня",
      description: "Экскурсия по лучшим местам региона с профессиональным гидом.",
      price: "от 8 000 ₽"
    }
  ];

  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Специальные предложения</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <SpecialOffer
              key={index}
              title={offer.title}
              description={offer.description}
              price={offer.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;


import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
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
  );
};

export default AboutUs;

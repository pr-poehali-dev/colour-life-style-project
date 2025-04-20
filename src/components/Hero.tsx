
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
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
  );
};

export default Hero;

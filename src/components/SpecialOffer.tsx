
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface SpecialOfferProps {
  title: string;
  description: string;
  price: string;
}

const SpecialOffer = ({ title, description, price }: SpecialOfferProps) => {
  return (
    <Card className="bg-white hover:shadow-md transition-shadow border-purple-200">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <div className="text-purple-600 font-bold text-xl mb-4">{price}</div>
        <Button className="w-full bg-purple-600 hover:bg-purple-700">Забронировать</Button>
      </CardContent>
    </Card>
  );
};

export default SpecialOffer;

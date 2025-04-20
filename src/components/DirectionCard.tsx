
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface DirectionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  linkTo: string;
}

const DirectionCard = ({ title, description, icon: Icon, linkTo }: DirectionCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Icon className="h-6 w-6 text-purple-600" />
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <Button variant="outline" className="w-full" asChild>
          <Link to={linkTo}>Подробнее</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default DirectionCard;

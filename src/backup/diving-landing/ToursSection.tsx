import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

const ToursSection = () => {
  const tours = [
    {
      id: 1,
      title: "Остров Ко Лан",
      description: "Идеальное место для начинающих дайверов",
      price: "2,500 ฿",
      duration: "Полный день",
      difficulty: "Начинающий",
      image:
        "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop",
      features: ["Трансфер", "Обеденный перерыв", "Снаряжение"],
    },
    {
      id: 2,
      title: "Затонувший корабль HTMS Khram",
      description: "Захватывающее погружение к историческому рэку",
      price: "3,800 ฿",
      duration: "Полный день",
      difficulty: "Продвинутый",
      image:
        "https://images.unsplash.com/photo-1566467806665-84f2e3b3d8b8?w=400&h=300&fit=crop",
      features: ["Глубина 30м", "Богатая морская жизнь", "Профи гид"],
    },
    {
      id: 3,
      title: "Остров Ко Сак",
      description: "Красочные коралловые рифы и тропические рыбы",
      price: "3,200 ฿",
      duration: "Полный день",
      difficulty: "Средний",
      image:
        "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=400&h=300&fit=crop",
      features: ["2 погружения", "Коралловые сады", "Фото под водой"],
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Начинающий":
        return "text-green-600 bg-green-100";
      case "Средний":
        return "text-yellow-600 bg-yellow-100";
      case "Продвинутый":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const handleBooking = (tourTitle: string) => {
    toast.success(
      `Заявка на тур "${tourTitle}" отправлена! Мы свяжемся с вами в ближайшее время.`,
    );
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="tours"
      className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Популярные дайв-туры
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите идеальное приключение под водой из наших проверенных
            маршрутов
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Card
              key={tour.id}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(tour.difficulty)}`}
                  >
                    {tour.difficulty}
                  </span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  {tour.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {tour.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-2xl font-bold text-blue-600">
                    {tour.price}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Icon name="Clock" className="w-4 h-4 mr-1" />
                    {tour.duration}
                  </div>
                </div>

                <div className="space-y-2">
                  {tour.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <Icon
                        name="Check"
                        className="w-4 h-4 mr-2 text-green-500"
                      />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => handleBooking(tour.title)}
                >
                  Забронировать тур
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursSection;

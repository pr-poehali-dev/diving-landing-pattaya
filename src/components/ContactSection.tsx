import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tour: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
    // Здесь будет логика отправки формы
  };

  const contactInfo = [
    {
      icon: "MapPin",
      title: "Адрес",
      details: "Паттайя, Пляж Джомтьен",
    },
    {
      icon: "Phone",
      title: "Телефон",
      details: "+66 123 456 789",
    },
    {
      icon: "Mail",
      title: "Email",
      details: "info@pattayadiving.com",
    },
    {
      icon: "Clock",
      title: "Время работы",
      details: "8:00 - 18:00 ежедневно",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Забронируйте ваше приключение
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нами для бронирования тура или получения дополнительной
            информации
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Форма бронирования
              </CardTitle>
              <CardDescription>
                Заполните форму и мы свяжемся с вами в течение часа
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Выберите тур</Label>
                    <Select
                      onValueChange={(value) =>
                        setFormData({ ...formData, tour: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тур" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ko-lan">Остров Ко Лан</SelectItem>
                        <SelectItem value="wreck">
                          Затонувший корабль
                        </SelectItem>
                        <SelectItem value="ko-sak">Остров Ко Сак</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="date">Предпочтительная дата</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Дополнительные пожелания</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Расскажите о своем опыте дайвинга или особых требованиях..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3"
                >
                  <Icon name="Send" className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Контактная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon
                        name={info.icon as any}
                        className="w-6 h-6 text-blue-600"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-600">{info.details}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="shadow-xl bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-xl text-red-900 flex items-center gap-2">
                  <Icon name="AlertCircle" className="w-6 h-6" />
                  Экстренная связь
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-800 font-semibold">
                  24/7 Горячая линия: +66 987 654 321
                </p>
                <p className="text-red-700 text-sm mt-2">
                  Для экстренных случаев во время погружений
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

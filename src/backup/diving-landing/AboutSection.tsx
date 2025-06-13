import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const certifications = [
    { name: "PADI", logo: "🏆" },
    { name: "SSI", logo: "🌊" },
    { name: "NAUI", logo: "🏅" },
  ];

  const features = [
    {
      icon: "Shield",
      title: "Безопасность превыше всего",
      description: "Современное снаряжение и строгие протоколы безопасности",
    },
    {
      icon: "Users",
      title: "Опытные инструкторы",
      description: "Сертифицированные профессионалы с многолетним опытом",
    },
    {
      icon: "MapPin",
      title: "Лучшие локации",
      description: "Доступ к эксклюзивным дайв-сайтам вокруг Паттайи",
    },
    {
      icon: "Camera",
      title: "Подводная съемка",
      description: "Профессиональная фото и видеосъемка ваших погружений",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              О нашем дайв-центре
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Уже 7 лет мы открываем красоты подводного мира Паттайи для
              дайверов всех уровней. Наша команда сертифицированных инструкторов
              обеспечивает безопасные и незабываемые погружения в самых
              живописных местах Сиамского залива.
            </p>

            {/* Certifications */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Наши сертификации
              </h3>
              <div className="flex gap-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg"
                  >
                    <span className="text-2xl">{cert.logo}</span>
                    <span className="font-semibold text-blue-900">
                      {cert.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon
                      name={feature.icon as any}
                      className="w-8 h-8 text-blue-600"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=700&fit=crop"
                alt="Наша команда дайверов"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>

            {/* Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-xl p-6 border">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-xs text-gray-600">Погружений</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-xs text-gray-600">Безопасность</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

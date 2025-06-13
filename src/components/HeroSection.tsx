import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Дайвинг в <span className="text-blue-300">Паттайе</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
          Откройте подводный мир Сиамского залива с профессиональными
          инструкторами
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-scale-in">
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg"
          >
            <Icon name="Waves" className="mr-2" />
            Забронировать тур
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg"
          >
            <Icon name="Play" className="mr-2" />
            Смотреть видео
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-300">500+</div>
            <div className="text-sm opacity-80">Довольных клиентов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-300">15+</div>
            <div className="text-sm opacity-80">Дайв-сайтов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-300">7</div>
            <div className="text-sm opacity-80">Лет опыта</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="text-white w-8 h-8" />
      </div>
    </section>
  );
};

export default HeroSection;

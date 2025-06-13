import { useState } from "react";
import Icon from "@/components/ui/icon";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      alt: "Дайвер среди коралловых рифов",
      title: "Коралловые сады",
    },
    {
      src: "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=600&h=400&fit=crop",
      alt: "Тропические рыбы",
      title: "Морская жизнь",
    },
    {
      src: "https://images.unsplash.com/photo-1571419902307-fa0c3bea2755?w=600&h=400&fit=crop",
      alt: "Школа рыб",
      title: "Подводный мир",
    },
    {
      src: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=400&fit=crop",
      alt: "Черепаха",
      title: "Встреча с черепахами",
    },
    {
      src: "https://images.unsplash.com/photo-1566467806665-84f2e3b3d8b8?w=600&h=400&fit=crop",
      alt: "Затонувший корабль",
      title: "Исследование рэков",
    },
    {
      src: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600&h=400&fit=crop",
      alt: "Дайвер с камерой",
      title: "Подводная фотография",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Галерея подводного мира
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Погрузитесь в красоту Сиамского залива через объектив наших
            фотографов
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <Icon name="ZoomIn" className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm font-semibold">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Увеличенное изображение"
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <Icon name="X" className="w-8 h-8" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;

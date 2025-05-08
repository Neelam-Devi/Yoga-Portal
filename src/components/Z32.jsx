import React from 'react';

const Z32 = () => {
  const cardData = [
    {
      id: 1,
      title: 'Restorative Yoga',
      image: '/about-img-2.jpg',
      description: 'Props are essential in restorative yoga to support the body in a comfortable and restful position,allowing for longer hold times.Its slow and gentle practice, moving from pose to pose with ease.',
    },
    {
      id: 2,
      title: 'Kundalini Yoga',
      image: '/about-img.jpg',
      description: 'Kundalini is often visualized as a coiled serpent or a dormant energy force at the base of spine .Its believed that this energy is present in everyone but is typically in dormant state in the kundalini yoga',
    },
    {
      id: 3,
      title: 'Awakening Inner Harmony',
      image: '/img-4.jpg',
      description: 'Awakening inner harmony through yoga involves a conscious effort to align the body, mind, and spirit, fostering a sense of well-being and inner peace. This is achieved through practices like meditation, mindfulness, and focused breathing. ',
    },
    {
      id: 4,
      title: 'Vinyasa Yoga',
      image: '/img-1.jpg',
      description: 'Vinyasa classes are characterized by smooth transitions between poses, creating a continuous flow of movement. The breath is a key element in vinyasa, guiding the movement and creating a mindful experience.',
    },
    {
      id: 5,
      title: 'Restorative Yoga',
      image: '/img-2.jpg',
      description: 'Props are essential in restorative yoga to support the body in a comfortable and restful position,allowing for longer hold times.Its slow and gentle practice, moving from pose to pose with ease.',
    },
    {
      id: 6,
      title: 'Ying and Yang Flow',
      image: '/img-3.jpg',
      description: ' Classes may begin with Yin poses to calm the mind and body, followed by Yang sequences to invigorate and build strength. To achieve a holistic practice that addresses both physical and spiritual well-being.',
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-75 object-cover"
            />
            <div className="p-8 bg-[#e0f1d4] hover:bg-[#8da577]">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>


  );
};

export default Z32;

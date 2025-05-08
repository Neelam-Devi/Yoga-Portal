import React from "react";
import { FaStar } from "react-icons/fa";

// ✅ Correct image import
import AboutImg from "/img-2.jpg";

function Z34() {
  return (
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-4xl font-bold font-serif mb-4">
        What they say about our service
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system,
      </p>

      <div className="grid md:grid-cols-3 gap-6 items-start max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-[#f2f5f0] p-9 rounded-2xl text-left relative overflow-hidden">
          <div className="flex text-green-700 mb-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <FaStar key={i} />
              ))}
          </div>
          <h3 className="font-semibold text-lg mb-2">
            The yoga studio is a source of harmony and positive emotions!
          </h3>
          <p className="text-sm text-gray-700 mb-6">
            Embrace the flow of mindful movement and balance at our yoga
            studio. Awaken your body and calm your mind through gentle yet
            powerful practices. With each session, experience deeper
            connection, inner peace, and rejuvenation. Let your journey to
            wellness and harmony begin here.
          </p>
          <hr className="mb-2" />
          <p className="text-sm font-medium text-gray-800">
            Emilio Kozey &nbsp;{" "}
            <span className="text-gray-500">24</span>
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#f2f5f0] p-9 rounded-2xl text-left relative overflow-hidden">
          <div className="flex text-green-700 mb-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <FaStar key={i} />
              ))}
          </div>
          <h3 className="font-semibold text-lg mb-2">
            The yoga studio is a source of harmony and positive emotions!
          </h3>
          <p className="text-sm text-gray-700 mb-6">
            Embrace the flow of mindful movement and balance at our yoga
            studio. Awaken your body and calm your mind through gentle yet
            powerful practices. With each session, experience deeper
            connection, inner peace, and rejuvenation. Let your journey to
            wellness and harmony begin here.
          </p>
          <hr className="mb-2" />
          <p className="text-sm font-medium text-gray-800">
            Rudolph Cartwright &nbsp;{" "}
            <span className="text-gray-500">32</span>
          </p>
        </div>

        {/* Image section */}
        <div className="rounded-2xl overflow-hidden h-88">
          <img
            src={AboutImg}
            alt="Yoga practice"
            className="w-full h-full object-cover"
          />
          <div className="bg-black/40 p-4 text-left text-white -mt-20 relative z-10">
            <h4 className="text-xl font-semibold">Heather Shanahan</h4>
            <p className="text-sm">25 years</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Z34;

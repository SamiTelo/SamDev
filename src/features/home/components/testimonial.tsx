import Image from "next/image";
import { Quote } from "lucide-react";
import { Title } from "./title";

const testimonials = [
  {
    id: 1,
    name: "James Emily",
    role: "Residential Clients",
    image: "/assets/photo4.png",
    text: "At Builder Renderings, we specialize in delivering photorealistic 3D visualizations, modeling, and animation that bring your projects to life. With a focus on fast turnaround times and competitive pricing.",
  },
];

const clients = [
  {
    id: 1,
    name: "James Emily",
    role: "Residential",
    image: "/assets/photo2.png",
  },
  {
    id: 2,
    name: "James Emily",
    role: "Residential",
    image: "/assets/photo3.png",
  },
  {
    id: 3,
    name: "James Emily",
    role: "Residential",
    image: "/assets/photo1.png",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-26 px-4">

      {/* Title */}
      <Title
        title="Témoignages"
        heading="Ce Que Disent Mes Clients"
        text=" Découvrez les retours de mes clients sur la qualité de mon travail et les projets que nous avons réalisés ensemble."
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2  gap-16 sm:gap-24 md:gap-10 items-center pl-6 sm:pl-10 md:pl-12 py-10 sm:py-18 md:py-18">
        {/* LEFT */}
        <div className="space-y-8">
          {testimonials.map((item) => (
            <div key={item.id}>
              <div className="flex items-center gap-6">
                <div className="relative w-30 h-30 md:w-38 md:h-38 rounded-full overflow-hidden bg-white">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">{item.name}</h3>
                  <p className="text-gray-500 font-medium">{item.role}</p>
                </div>

                <div className="ml-auto opacity-10">
                  <Quote size={80} strokeWidth={1} />
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed max-w-lg text-sm md:text-base mt-6">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-center lg:items-end pr-12">
          <div className="grid grid-cols-3 gap-6 mb-12">
            {clients.map((client) => (
              <div key={client.id} className="text-center">
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-4 shadow-xl grayscale">
                  <Image
                    src={client.image}
                    alt={client.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold text-sm">{client.name}</h4>
                <p className="text-[10px] text-gray-400">{client.role}</p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-1 w-full max-w-50 mr-0 md:mr-20">
            <div className="h-0.5 flex-1 bg-black" />
            <div className="h-3.5 flex-2 bg-[#FF5722]" />
            <div className="h-0.5 flex-1 bg-black" />
          </div>
        </div>
      </div>
    </section>
  );
};

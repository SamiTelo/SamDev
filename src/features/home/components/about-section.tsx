import Image from 'next/image';
import Link from 'next/link';

export const AboutSection = () => {
  return (
    <section className="py-16 px-6 lg:px-12 bg-cover bg-center bg-[url('/assets/About-bg.png')] md:h-242 h-auto" >
      <div className="max-w-7xl mx-auto  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* --- BLOC GAUCHE : IMAGE ET BADGES --- */}
        <div className="relative flex justify-center lg:justify-start md:pl-10">
          <div className="relative w-full max-w-md">
            {/* Image */}
            <div className="">
              <Image 
                src="/assets/img.svg" 
                alt="Portrait" 
                width={100}
                height={100}
                className="w-full h-130"
              />
            </div>

            {/* Badge : Années d'Expérience (Bas-Gauche) */}
            <div className="absolute bottom-26 -left-4 md:-left-10 bg-white py-4 px-10 rounded-xl shadow-2xl flex items-center space-x-4 border border-gray-100">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-purple-100 text-purple-600 font-bold text-2xl">
                3
              </div>
              <p className="text-gray-700 font-medium leading-tight">
                Années <br /> d Exp
              </p>
            </div>

            {/* Badge : Projets (Haut-Droite) */}
            <div className="absolute top-30 -right-4 md:-right-26 bg-white py-6 px-10 rounded-xl shadow-2xl flex items-center space-x-4 border border-gray-100">
              <span className="text-emerald-400 text-4xl font-bold">+15</span>
              <p className="text-gray-700 font-medium leading-tight">
                Projets <br /> Total
              </p>
            </div>
          </div>
        </div>

        {/* --- BLOC DROITE : TEXTE*/}
        <div className="space-y-6 ">
          <span className="text-orange-500 font-medium text-lg  tracking-wider">
            A propos
          </span>
          
          <h2 className="font-bold text-4xl md:text-5xl leading-tight">
            Je Créer Des Appli Web 
            Responsive  et Mobile
          </h2>
          
          <p className="md:text-[16px] text-sm text-gray-700 leading-relaxed max-w-xl">
            Passionné par la création d applications modernes, performantes et intuitives, 
            j ai acquis les compétences nécessaires pour transformer vos idées en solutions 
            concrètes. J’apprécie chaque étape du processus : de l’écoute attentive et l’analyse
             du besoin, à la conception de l’architecture, au développement rigoureux, jusqu’aux tests, à l’optimisation et à la mise en ligne. <br/><br/> Mon objectif est de livrer des solutions fiables, maintenables et pensées pour durer, tout en offrant une expérience utilisateur fluide et impactante.
          </p>

          <div className="pt-4">
            <Link 
              href="https://github.com/SamiTelo" 
              className="inline-block bg-[#FF5722] hover:bg-[#E64A19] text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-200"
            >
              Github
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

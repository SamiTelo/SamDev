import Image from "next/image";
import Link from "next/link";

export const AboutSection = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-42 px-6 sm:px-10 lg:px-12 -mt-30 md:-mt-30 sm:mt-8">
      
    {/* IMAGE BG TOP RIGHT */}
      <div className="absolute top-0 right-0 -z-10 pointer-events-none">
        <Image
          src="/assets/About-bg-2.png"
          alt=""
          width={600}
          height={600}
          className="`w-75 md:w-112.5 lg:w-137.5  md:h-100 h-auto"
        />
      </div>

       {/* IMAGE BG BOTTOM LEFT */}
      <div className="absolute -bottom-10 md:-bottom-46 left-0 -z-10 pointer-events-none">
        <Image
          src="/assets/about-bg-1.svg"
          alt=""
          width={600}
          height={600}
          className="w-45 sm:w-50 md:w-50 lg:w-50 md:h-125 h-auto animate-pulse"
        />
      </div>

      {/*----------------------------------------------
           Main Content Grid 
        ----------------------------------------------------*/}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-30 items-center">
        
       {/* ---------------------------------------- 
        BLOC GAUCHE : IMAGE ET BADGES 
        ----------------------------------------------- */}
        <div className="relative flex justify-center lg:justify-start -ml-3 sm:ml-0 md:ml-0 pl-0 md:pl-10 order-2 md:order-1">
          <div className="relative w-full max-w-md">
            <Image 
              src="/assets/img.svg" 
              alt="Portrait" 
              width={500}
              height={500}
              className="w-full md:h-130 sm:h-130 h-118"
            />

            {/* Badge 1 */}
            <div className="absolute bottom-10 md:bottom-26 left-0 md:-left-10 bg-white py-4 px-6 md:px-10 rounded-xl shadow-2xl flex items-center space-x-4 border border-gray-100">
              <div className="flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-full border-4 border-purple-100 text-purple-600 font-bold text-2xl md:text-4xl">
                3
              </div>
              <p className="text-gray-700 font-medium text-xs md:text-[16px] leading-tight">
                Années <br /> d&apos;Exp
              </p>
            </div>

            {/* Badge 2 */}
            <div className="absolute top-30 md:top-30 -right-4 md:-right-24 bg-white py-4 md:py-6 px-4 md:px-10 rounded-xl shadow-2xl flex items-center space-x-4 border border-gray-100">
              <span className="text-emerald-400 text-2xl md:text-4xl font-bold">+15</span>
              <p className="text-gray-700 font-medium text-xs md:text-[16px] leading-tight">
                Projets <br /> Total
              </p>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------- 
             BLOC DROITE : TEXTE
        ---------------------------------------------------------*/}
         <div className="space-y-6 md:-mt-6 -mt-1 order-1 md:order-2">
          <span className="text-[#FF5722] font-medium text-sm md:text-lg  tracking-wider">
            A propos
          </span>
          
          <h2 className="font-bold text-3xl md:text-5xl mt-6 md:mt-4 leading-tight">
            Je Créer Des Appli Web 
            Responsive  et Mobile
          </h2>
          
          <p className="sm:text-[16px] md:text-[16px] text-sm text-gray-700 leading-relaxed max-w-xl">
            Passionné par la création d’applications modernes, performantes et intuitives, 
            j’ai acquis les compétences nécessaires pour transformer vos idées en solutions concrètes. 
            J’interviens à chaque étape : de l’analyse du besoin à la conception, au développement, aux tests,
             à l’optimisation et à la mise en ligne. <br/><br/> 
            Mon objectif est de livrer des solutions fiables, maintenables et pensées pour durer, en alliant 
            performance technique et design soigné, tout en offrant une expérience utilisateur fluide et impactante.
          </p>

          <div className="pt-4">
            <Link 
              href="https://github.com/SamiTelo" 
              className="inline-block  text-white md:text-[16px] text-sm py-4 px-10 rounded-full bg-[#FF5722] hover:bg-black transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-200 hover:shadow-black/50"
            >
              Github
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
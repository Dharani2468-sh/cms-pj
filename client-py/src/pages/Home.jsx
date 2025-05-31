import { Link, Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative h-[32rem] flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          background: "linear-gradient(120deg, #9E72C3, #7338A0)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />
        <img
          src="https://www.hdwallpapers.in/download/yellow_eyes_brown_white_fur_cute_cat_in_black_background_hd_cute_cat-1920x1080.jpg"
          alt="Cat"
          className="absolute left-0 bottom-0 max-h-72 object-contain z-10 hidden sm:block"
        />
        <img
          src="https://thumbs.dreamstime.com/b/golden-labrador-retriever-puppy-isolated-black-background-cute-sitting-front-view-88977827.jpg"
          alt="Puppy"
          className="absolute right-0 bottom-0 max-h-72 object-contain z-10 hidden sm:block"
        />

        <div className="relative z-20 px-4">
          <h2 className="text-4xl font-bold mb-2">Adopt a Pet</h2>
          <p className="mb-4 text-lg">Your new best friend is waiting!</p>
          <Link
            to="/sign-up"
            className="bg-white text-[#7338A0] font-semibold py-2 px-6 rounded-full hover:bg-[#9E72C3] hover:text-white transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="p-6 bg-gradient-to-br from-[#924DBF] to-[#0F0529] min-h-screen text-white">
        {/* Service Cards */}
        <section className="my-10 max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10">Book Pet Care Services</h3>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Pet Grooming",
                desc: "Schedule professional grooming for your cat or dog at home.",
                link: "#",
                color: "from-[#9E72C3] to-[#924DBF]",
                icon: "🛁",
              },
              {
                title: "Pet Boarding",
                desc: "Trusted boarding services while you're away.",
                link: "#",
                color: "from-[#7338A0] to-[#4A2574]",
                icon: "🏠",
              },
              {
                title: "Dog Walking",
                desc: "Reserve personalized dog walking near you.",
                link: "#",
                color: "from-[#4A2574] to-[#0F0529]",
                icon: "🐕",
              },
              {
                title: "Vet Consultation",
                desc: "Book online or in-home vet consultation.",
                link: "#",
                color: "from-[#924DBF] to-[#7338A0]",
                icon: "💉",
              },
              {
                title: "Dog Training",
                desc: "Professional dog training service at home.",
                link: "#",
                color: "from-[#7338A0] to-[#0F0529]",
                icon: "🎓",
              },
              {
                title: "Pet Mating",
                desc: "Find the perfect match with mating profiles.",
                link: "#",
                color: "from-[#9E72C3] to-[#4A2574]",
                icon: "💘",
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${card.color} text-white rounded-2xl p-6 shadow-xl transition-transform duration-300 hover:scale-105`}
              >
                <div className="text-5xl mb-4">{card.icon}</div>
                <h4 className="text-xl font-bold mb-2">{card.title}</h4>
                <p className="text-sm opacity-90 mb-4">{card.desc}</p>
                <a
                  href={card.link}
                  className="inline-block text-white font-semibold underline hover:text-gray-200"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 4-Step Adoption Process */}
        <section className="my-16 max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-10">
            How Adoption Works
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: "Search Pet",
                description:
                  "Adopt a dog or cat who's right for you. Simply enter your city above to start your search.",
                img: "https://cdn-icons-png.flaticon.com/128/616/616408.png",
              },
              {
                title: "Connect",
                description:
                  'Once you find a pet, click "show number" to get contact info for their pet parent or rescue. Contact them to learn more about how to meet and adopt the pet.',
                img: "https://cdn-icons-png.flaticon.com/128/857/857681.png",
              },
              {
                title: "AdoptLove",
                description:
                  "The rescue or pet parents will walk you through their adoption process. Prepare your home for the arrival of your fur baby to help them adjust to their new family.",
                img: "https://cdn-icons-png.flaticon.com/128/616/616408.png",
              },
              {
                title: "Free Vet Consultation",
                description:
                  "ThePetNest will help your pet to settle down in its new home. Once you complete the adoption journey reach out to us for free vet consultation.",
                img: "https://cdn-icons-png.flaticon.com/128/2885/2885471.png",
              },
            ].map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <img src={step.img} alt={step.title} className="w-16 h-16" />
                <div>
                  <h4 className="text-xl font-semibold mb-1">{step.title}</h4>
                  <p className="text-white text-sm opacity-85">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Route Outlet */}
        <Outlet />
      </main>
    </>
  );
}

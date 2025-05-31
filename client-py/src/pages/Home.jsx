import { Link, Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative h-80 flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

        {/* LEFT: Cat */}
        <img
          src="https://www.hdwallpapers.in/download/yellow_eyes_brown_white_fur_cute_cat_in_black_background_hd_cute_cat-1920x1080.jpg"
          alt="Cat"
          className="absolute left-0 bottom-0 max-h-72 object-contain z-10 hidden sm:block"
        />

        {/* RIGHT: Dog */}
        <img
          src="https://thumbs.dreamstime.com/b/golden-labrador-retriever-puppy-isolated-black-background-cute-sitting-front-view-88977827.jpg"
          alt="Puppy"
          className="absolute right-0 bottom-0 max-h-72 object-contain z-10 hidden sm:block"
        />

        {/* Hero Text Content */}
        <div className="relative z-20 px-4">
          <h2 className="text-4xl font-bold mb-2">Adopt a Pet</h2>
          <p className="mb-4">Your new best friend is waiting!</p>
          <Link
            to="/adopt"
            className="bg-white text-pink-500 font-semibold py-2 px-6 rounded-full hover:bg-pink-100 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="p-6">
        {/* Service Cards */}
        <section className="my-10 max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Book Pet Care Services
          </h3>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Pet Grooming",
                desc: "Schedule professional grooming for your cat or dog at home.",
                link: "#",
                color: "from-pink-500 to-pink-300",
                icon: "🛁",
              },
              {
                title: "Pet Boarding",
                desc: "Trusted boarding services while you're away.",
                link: "#",
                color: "from-yellow-500 to-yellow-300",
                icon: "🏠",
              },
              {
                title: "Dog Walking",
                desc: "Reserve personalized dog walking near you.",
                link: "#",
                color: "from-blue-500 to-blue-300",
                icon: "🐕",
              },
              {
                title: "Vet Consultation",
                desc: "Book online or in-home vet consultation.",
                link: "#",
                color: "from-purple-500 to-purple-300",
                icon: "💉",
              },
              {
                title: "Dog Training",
                desc: "Professional dog training service at home.",
                link: "#",
                color: "from-green-500 to-green-300",
                icon: "🎓",
              },
              {
                title: "Pet Mating",
                desc: "Find the perfect match with mating profiles.",
                link: "#",
                color: "from-orange-500 to-orange-300",
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
                  className="inline-block text-white font-semibold underline hover:text-gray-100"
                >
                  Learn More →
                </a>
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

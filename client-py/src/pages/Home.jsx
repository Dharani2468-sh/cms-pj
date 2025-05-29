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
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
}

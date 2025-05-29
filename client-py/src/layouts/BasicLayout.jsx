import { Link, Outlet } from "react-router";

function BasicLayouts() {
    return (
        <>
            <header style={{ backgroundColor: '#2B124C' }} className="px-6 py-8 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Link to={'/home'}><img
                    src="https://static.vecteezy.com/system/resources/previews/055/299/327/non_2x/white-paw-print-on-white-background-on-transparent-background-png.png"
                    alt="Logo"
                    className="w-12 h-12"
                  /></Link>
                  <h1 className="text-white text-xl font-bold">The Pet Nest</h1>
                </div>
                <div className="mt-3 sm:mt-0 flex gap-3">
                    <div className="bg-white border-2 text-black px-4 py-2 rounded cursor-pointer">
                        <Link to={'/login'} >sign-in</Link>
                    </div>
                    <div className="bg-white border-2 text-black px-4 py-2 rounded cursor-pointer">
                        <Link to={'/sign-up'}>sign-up</Link>
                    </div>
                    <div className="bg-white border-2 text-black px-4 py-2 rounded cursor-pointer">
                        <Link to={'/about'}>About</Link>
                    </div>
                    <div className="bg-white border-2 text-black px-4 py-2 rounded cursor-pointer">
                        <Link to={'/developer'}>Developer</Link>
                    </div>
                </div>
            </header>
            <main className="">
                <Outlet />
            </main>
        </>
    );
}

export default BasicLayouts;




// import { Link, Outlet } from "react-router-dom";

// function BasicLayouts() {
//   return (
//     <div>
//       {/* HEADER */}
//       <header className="bg-pink-400 px-6 py-8 flex justify-between items-center">
//         <div className="flex items-center gap-2">
//           <img
//             src="https://static.vecteezy.com/system/resources/previews/055/299/327/non_2x/white-paw-print-on-white-background-on-transparent-background-png.png"
//             alt="Logo"
//             className="w-12 h-12"
//           />
//           <h1 className="text-white text-xl font-bold">The Pet Nest</h1>
//         </div>
//         <nav className="flex gap-4 text-white text-sm">
//           <Link to="/home" className="hover:underline">Home</Link>
//           <Link to="/adopt" className="hover:underline">Adopt</Link>
//           <Link to="/about" className="hover:underline">About</Link>
//           <Link to="/contact" className="hover:underline">Contact</Link>
//         </nav>
//       </header>

//       {/* HERO SECTION */}
//       <section
//         className="relative h-80 flex items-center justify-center text-center text-white overflow-hidden"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

//         {/* LEFT: Cat */}
//         <img
//           src="https://www.hdwallpapers.in/download/yellow_eyes_brown_white_fur_cute_cat_in_black_background_hd_cute_cat-1920x1080.jpg"
//           alt="Cat"
//           className="absolute left-0 bottom-0 max-h-72 object-contain z-10 hidden sm:block"
//         />

//         {/* RIGHT: Dog */}
//         <img
//           src="https://thumbs.dreamstime.com/b/golden-labrador-retriever-puppy-isolated-black-background-cute-sitting-front-view-88977827.jpg"
//           alt="Puppy"
//           className="absolute right-0 bottom-0 max-h-72 object-contain z-10 hidden sm:block"
//         />

//         {/* Hero Text Content */}
//         <div className="relative z-20 px-4">
//           <h2 className="text-4xl font-bold mb-2">Adopt a Pet</h2>
//           <p className="mb-4">Your new best friend is waiting!</p>
//           <Link
//             to="/adopt"
//             className="bg-white text-pink-500 font-semibold py-2 px-6 rounded-full hover:bg-pink-100 transition"
//           >
//             Get Started
//           </Link>
//         </div>
//       </section>

//       {/* MAIN CONTENT */}
//       <main className="p-4">
//         <Outlet />
//       </main>

//       {/* FOOTER */}
//       <footer className="bg-pink-400 text-white text-center py-6 text-sm">
//         © {new Date().getFullYear()} The Pet Nest. All rights reserved.
//       </footer>
//     </div>
//   );
// }

// export default BasicLayouts;
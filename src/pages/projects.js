import Navbar from "./navbar";
import Footer from "./footer";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (

    <main>
      <Navbar></Navbar>
      <h1 class="text-2xl font-[500] text-(--color-title) text-center">Meus <span class="text-blue-500">projetos</span></h1>

      <section class="py-10 bg-(--background)">
        <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-8 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">

          {/* inicio card */}
          <div class="relative flex flex-col my-6 bg-(--foreground) shadow-sm w-auto rounded-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
            <div class="relative h-auto m-2.5 overflow-hidden text-white rounded-md">
              <Image
      src="./logoJA.svg"
      width={500}
      height={500}
      alt=""
    />
            </div>
            <div class="p-4">
              <h6 class="mb-2 text-gray-100 text-xl ">
                Jovem&Ativo
              </h6>
              <p class="text-slate-400 leading-normal font-light">
                ...
              </p>
            </div>
            <div class="px-4 pb-4 pt-0 mt-2">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-indigo-500 group-hover:from-blue-600 group-hover:to-indigo-500 hover:text-white dark:text-(--color-gray) focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="flex flex-row gap-2 relative px-5 py-2.5 transition-all ease-in duration-75 bg-(--background) text-gray-300 dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  <Link href="#"><img class="w-4" src="./github-brands.svg" /></Link>
                  <p class="text-sm">GitHub</p>
                </span>
              </button>
            </div>
          </div>
          {/* fim card */}


          

        </div>
      </section>
      <Footer></Footer>
    </main>
    //
  );
}

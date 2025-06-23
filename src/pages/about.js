import Navbar from "./navbar";
import Footer from "./footer";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main>
      <Navbar></Navbar>
      <div class="flex flex-col-reverse items-center justify-center xl:px-80 h-auto w-auto mb-20 mt-20 gap-8 xl:flex-row ">
        <div class="flex flex-col gap-4 ">
          <h1 class="text-3xl font-[500] text-(--color-title) ">Sobre <span class = "text-blue-500">mim</span></h1>
          <p class=" text-(--color-gray) leading-7 w-86 md:w-150 xl:w-200">
            Sou <em>Esther Tozzo</em>, tenho 17 anos e atualmente curso o Ensino Médio Técnico em TI na <em>Fiap School</em>. Desde cedo, desenvolvi um grande interesse pela tecnologia e, ao longo dos últimos anos, esse interesse se transformou em paixão pelo desenvolvimento de soluções digitais. Estou constantemente em busca de novos aprendizados que me permitam aprofundar meus conhecimentos e evoluir como profissional da área. Com foco tanto no front-end quanto no back-end, venho me dedicando a entender não apenas a parte visual dos sistemas, mas também a lógica e a estrutura por trás de cada aplicação. Acredito que a combinação entre criatividade e técnica é o que torna o desenvolvimento tão especial, e é isso que procuro aplicar em cada projeto que construo.
          </p>
          <div class="px-0 pb-4 pt-0 mt-2">
              <Link href="projects">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-rose-600 to-fuchsia-500 group-hover:from-rose-600 group-hover:to-fuchsia-500 hover:text-white dark:text-(--color-gray) focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="flex flex-row gap-2 relative px-5 py-2.5 transition-all ease-in duration-75 bg-(--background) text-gray-300 dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  <p class="text-sm">Meus projetos</p>
                </span>
              </button>
              </Link>
            </div>
        </div>
        <Image
      src="./meAbout.svg"
      width={500}
      height={500}
      alt=""
      class = " h-auto max-w-100"
    />
      </div>
      <div class = "md:mx-10 lg:mx-10 xl:mx-50 2xl:mx-40 md:p-2 lg:p-6 lg:bg-(--foreground) lg:border lg:border-gray-700 lg:rounded-lg lg:shadow-sm lg:dark:bg-gray-800 lg:dark:border-gray-700">
        <h1 class="text-3xl font-[500] text-(--color-title) text-center pb-10">Minhas skills</h1>
        <div class = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-16 justify-items-center">
          <img class="w-40 h-40 p-0 bg-(--foreground) p-2 pl-8 pr-8 border-3 rounded-[1vw] border-yellow-500" src="./javascript.svg" />
          <img class="w-40 h-40 p-0 bg-(--foreground) p-2 pl-8 pr-8 border-3 rounded-[1vw] border-orange-500" src="./html.svg" />
          <img class="w-40 h-40 p-0 bg-(--foreground) p-2 pl-8 pr-8 border-3 rounded-[1vw] border-blue-500" src="./css.svg" />
          <img class="w-40 h-40 p-0 bg-(--foreground) p-2 pl-8 pr-8 border-3 rounded-[1vw] border-green-500" src="./nodejs.svg" />
          <img class="w-40 h-40 p-0 bg-(--foreground) p-2 pl-8 pr-8 border-3 rounded-[1vw] border-blue-500" src="./figma.svg" />
          <img class="w-40 h-40 p-0 bg-(--foreground) p-2 pl-8 pr-8 border-3 rounded-[1vw] border-orange-600" src="./illustrator.svg" />
          <img class="w-40 h-40 p-0 bg-(--foreground) p-2 pl-8 pr-8 border-3 rounded-[1vw] border-sky-400" src="./photoshop.svg" />
          <img class="w-40 h-40 p-0 bg-(--foreground) p-2 pl-8 pr-8 border-3 rounded-[1vw] border-orange-600" src="./git.svg" />

        </div>
      </div>

<Footer></Footer>
    </main>
    //
  );
}

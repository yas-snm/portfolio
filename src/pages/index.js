import Navbar from "./navbar";
import Footer from "./footer";
import Link from "next/link";

export default function Home() {
  return (

    <main>
      <Navbar></Navbar>
       
      <div class = "h-170 sm:h-130 grid content-center justify-center ">
        <div class="justify-items-center grid gap-2"  >
          <p class="text-xl font-[100] text-(--color-gray)">Olá, eu sou</p>
          <h1 class="text-5xl sm:text-7xl font-[500] text-(--color-title) " >Yasmin Sofia</h1>
          <p class="uppercase text-lg font-[100] text-(--color-gray)">FRONT-END | BACK-END DEVELOPER </p>
          <p class= " w-100 sm:w-150 text-center text-(--color-gray) leading-7" >Este é o meu portfólio, onde compartilho projetos desenvolvidos com foco em design, funcionalidade e experiência do usuário. Sinta-se à vontade para conhecer mais sobre meu trabalho, minhas habilidades e tudo o que venho construindo com criatividade e propósito.</p>
          <Link href="about"><button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-600 to-indigo-500 group-hover:from-blue-600 group-hover:to-indigo-500 hover:text-white dark:text-(--color-gray) focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-(--background) text-gray-300 dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
Sobre mim
</span>
</button></Link>
<div class="flex flex-row  gap-4">
  <Link href="#"><img class = "w-7" src="./github-brands.svg"/></Link>
  <Link href="#"><img class = "w-7" src="./linkedin-brands.svg"/></Link>

</div>

        </div> 
      </div>


<Footer></Footer>
    </main>
    //
  );
}

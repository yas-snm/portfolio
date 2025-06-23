import Link from "next/link";

export default function Navbar() {
  return (
    <main>
<nav class = "flex gap-[24vw] m-12 justify-around ">
        
      <h1 class = "text-blue-500 text-xl font-[450]">Esther Tozzo</h1>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
      <div id="navbar-default" class = "hidden w-full md:block md:w-auto">
        <ul class = "flex gap-[4vw] bg-(--foreground) p-2 pl-8 pr-8 rounded-full border-2 border-indigo-900">
        <li >
          <Link class = "block" href='/'>home</Link>
        </li>
        <li>
          <Link class = "block" href='about'>sobre</Link>
        </li>
        <li>
          <Link class = "block" href='projects'>projetos</Link>
        </li>
        <li>
          <Link  class = "block" href='contact'>contato</Link>
        </li>
      </ul>
      </div>
      

      {/*  */}
      </nav>
      
    </main>
  
      
      
    //
  );
}

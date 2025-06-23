import Link from "next/link";

export default function Footer() {
    return (
        <main>

            <footer class="bg-(--background) rounded-lg shadow-sm dark:bg-gray-900 m-4">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">

                    <hr class="my-6 border-gray-700 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link href="/" class="hover:underline">Yasmin Sofia™</Link>. Todos os direitos reservados.</span>
                </div>
            </footer>

        </main>



        //
    );
}

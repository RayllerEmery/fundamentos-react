import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        <footer className="flex items-center justify-center w-full border-t border-zinc-100 bg-white p-8 dark:border-zinc-800 dark:bg-black"> 
          <div>Fundamentos React - UNIPDS</div>
        </footer>
        { /*w-full items-center justify-center border-t border-zinc-100 bg-white p-8 dark:border-zinc-800 dark:bg-black */ }
      </main>
    </div>
  );
}

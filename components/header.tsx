export function Header() {
  return (
    <>
      <header className="bg-[#ffcc2f] px-[10px]">
        <div className="max-w-[1000px] container mx-auto sm:pl-[10px] py-[10px]">

          <ul className="flex sm:justify-end w-full justify-around border-b border-b-[#f1c03e] sm:border-0">
            <li className="text-[#00acee] text-base font-extrabold px-4 py-2"><a href="/">Docs</a></li>
            <li className="text-[#2baf2b] text-base font-extrabold px-4 py-2"><a href="/search/">Search packages</a></li>
            <li className="text-[#2baf2b] text-base font-extrabold px-4 py-2"><a href="/blog/">Blog</a></li>
            <li className="text-[#2baf2b] text-base font-extrabold px-4 py-2"><a href="/stats/">Stats</a></li>
          </ul>

          <div className="flex sm:gap-10 gap-2 pt-3 sm:p-4 items-center">
            <a href="/">
              <img className="sm:w-[140px] w-10" src="https://bower.io/img/bower-logo.svg" alt="Bower logo" />
            </a>

            <div className="flex flex-col">
              <h1 className="text-[#543729] sm:text-[64px] font-extrabold tracking-tighter text-[32px]">Bower Search</h1>
              <h4 className="text-[#543729] text-[19px] font-extrabold tracking-tighter -mt-4 hidden sm:flex">Powered by <a href="https://libraries.io/" className="text-[#00acee]">libraries.io</a></h4>
            </div>
          </div>
        </div>
      </header>
      <div className="bg-[#2188b6] w-full p-1 text-center text-white font-medium">
        ...psst! While Bower is maintained, we recommend using Yarn and Vite for front-end projects. <span className="underline">Read how to migrate!</span>
      </div>
    </>

  )
}
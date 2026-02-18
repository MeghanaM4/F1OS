export default function Navbar() {
  return (
    <div className="w-full h-fit">
      <div className="bg-[#242134] h-[6vh] flex items-center flex-row">
        <div className="flex flex-row ml-[0.5rem] gap-2">
          <div className="rounded-xl aspect-square h-[15px] bg-[#D9D9D9]"></div>
          <div className="rounded-xl aspect-square h-[15px] bg-[#D9D9D9]"></div>
          <div className="rounded-xl aspect-square h-[15px] bg-[#D9D9D9]"></div>
        </div>

        <div className="flex flex-row items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#D9D9D9"
              d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z"
            />
          </svg>
          <p style={{ fontFamily: 'Mona Sans SemiExpanded' }} className="italic">LAS VEGAS</p>
        </div>
      </div>
      <div className="w-full h-[10vh] from-[#887EBD] bg-gradient-to-b to-transparent from-[#242134]"></div>
    </div>
  );
}

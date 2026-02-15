export default function Navbar() {
  return (
    <div className="bg-[#acd106] rounded-[.9rem] w-[5vw] h-fit">
      <div className="w-full h-fit flex items-center flex-col gap-4 pt-4 pb-4">
        <a href="./results">
          <img
            className="aspect-square w-[80%] mx-auto"
            src="/racebutton.png"
            alt="race button"
          />
        </a>
        <a href="./tracks">
          <img
            className="aspect-square w-[80%] mx-auto"
            src="/trackbutton.png"
            alt="race button"
          />
        </a>
        <a href="./schedule">
          <img
            className="aspect-square w-[80%] mx-auto"
            src="/schedulebutton.png"
            alt="race button"
          />
        </a>
        <a href="timings">
          <img
            className="aspect-square w-[80%] mx-auto"
            src="/timingsbutton.png"
            alt="race button"
          />
        </a>
        <a href="points">
          <img
            className="aspect-square w-[80%] mx-auto"
            src="/pointsbutton.png"
            alt="race button"
          />
        </a>
        <a href="head2head">
          <img
            className="aspect-square w-[80%] mx-auto"
            src="/h2hbutton.png"
            alt="race button"
          />
        </a>
        <a href="drivers">
          <img
            className="aspect-square w-[80%] mx-auto"
            src="/driversbutton.png"
            alt="race button"
          />
        </a>
      </div>
    </div>
  );
}

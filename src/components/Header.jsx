import IconMoon from "../assets/images/icon-moon.svg";

function Header() {
  return (
    <>
      <div className="flex justify-between align-middle text-white font-semibold text-xl tracking-widest pb-8">
        <h1 className="text-3xl">TODO</h1>
        <img src={IconMoon} alt="nightmodebtn" className="w-8 h-8 p-1" />
      </div>
    </>
  );
}

export default Header;

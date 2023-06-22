import CartButton from "./CartButton";

function Header({
  title = "Les Huîtres de Sterec",
  subTitle = "Huitres et coquillages en vente directe à Plougasnou",
}) {
  return (
    <div className="w-full py-12 border-t-8 border-main ">
      <a
        className="max-w-screen-lg mx-auto flex flex-col items-center relative"
        href="/"
      >
        <h1 className="text-center text-4xl md:text-7xl font-brand tracking-wide text-main">
          {title}
        </h1>
        <h4 className="font-hand">{subTitle}</h4>
        <div className="md:absolute right-0 ">
          <CartButton />
        </div>
        <div className="rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/20 text-white hidden md:absolute left-0 h-32 w-32 flex flex-col items-center justify-center text-center -rotate-12">
          100% Baie de Morlaix !
        </div>
      </a>
    </div>
  );
}

export default Header;

import Medal from "../images/medal.png";

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
        <div className="rounded-full leading-tight text-main mt-8 md:mt-0 md:absolute left-0 h-32 w-32 flex flex-col items-center justify-center text-center md:-rotate-12">
          <img
            src={Medal}
            alt="Illustration de la médaille du Mérite Agricole"
          />
          <p>Médaille d'Or 2024</p>
        </div>
      </a>
    </div>
  );
}

export default Header;

import { NavLink } from "react-router-dom";

function SubHeader({
  links = [
    { name: "Accueil", url: "/" },
    {
      name: "Nos Coquillages",
      url: "/huitres-et-coquillages",
    },
    { name: "Dégustation", url: "/degustation" },
    { name: "Points de vente", url: "/points-de-vente" },
    { name: "Commande", url: "/commande", className: "text-pink font-bold" },
    { name: "Contact", url: "/contact" },
  ],
}) {
  return (
    <div className="w-full md:pt-12 shadow-md mb-6 md:bg-transparent">
      <div className="max-w-screen-lg mx-auto grid grid-cols-3 md:flex items-center justify-between">
        {links.map((link, i) => (
          <NavLink
            key={i}
            to={link.url}
            className={({ isActive }) =>
              isActive
                ? "px-3 py-2 bg-main text-white font-round"
                : "px-3 py-2 hover:bg-blue-300 font-round"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default SubHeader;

import { useContext } from "react";
import Container from "../blocs/Container";
import Divider from "../blocs/Divider";
import Footer from "../blocs/Footer";
import Header from "../blocs/Header";
import SubHeader from "../blocs/SubHeader";
import { ThemeContext } from "../contexts/ThemeContext";

const images = import.meta.glob("../images/*", {
  eager: true,
  import: "default",
});

function PointsDeVente() {
  const style = useContext(ThemeContext);

  function renderPoints() {
    const elements = [
      {
        title: "Marché de Plouezoc'h",
        text: (
          <p>
            Le dimanche 8h30 - 12h30 <br /> Devant la boulangerie
          </p>
        ),
        image: "marche.jpg",
      },
      {
        title: "Marché de Lannion",
        text: <p>Le jeudi 9h - 13h</p>,
        image: "marche_lannion.webp",
      },
      {
        title: "Marché de Plouaret",
        text: <p>Le mardi 9h - 13h</p>,
        image: "marche_plouaret.png",
      },
      {
        title: "Maison de Kerdies",
        text: <p>Restaurant à Plougasnou</p>,
        image: "kerdies.jpg",
      },
      {
        title: "Hypermarché Intermarché",
        text: <p>Plourin-lès-Morlaix</p>,
        image: "intermarche.png",
      },
      {
        title: "Super U",
        text: <p>Pleyber-Christ</p>,
        image: "superu.png",
      },
      {
        title: "Super U",
        text: <p>Lanmeur</p>,
        image: "superu.png",
      },
      {
        title: "Super U",
        text: <p>Plestin-les-Grèves</p>,
        image: "superu.png",
      },
      {
        title: "Carrefour",
        text: <p>Saint-Martin-des-Champs</p>,
        image: "carrefour.png",
      },
      {
        title: "Le Grand Café de la Terrasse",
        text: <p>Restaurant à Morlaix</p>,
        image: "cafe_morlaix.jpg",
      },
      {
        title: "Café du Port",
        text: <p>Restaurant à Locquirec</p>,
        image: "cafe_locqui.jpg",
      },
      {
        title: "Le Primel Café",
        text: <p>Restaurant à Primel (Plougasnou)</p>,
        image: "primelcafe.webp",
      },
      {
        title: "Le Radeau",
        text: <p>Restaurant Pizzeria à Térénez (Plougasnou)</p>,
        image: "radeau.webp",
      },
      {
        title: "Le Café du Port",
        text: <p>Restaurant au Dourduff (Plouezoc'h)</p>,
        image: "dourduff.webp",
      },
      {
        title: "Le Friko",
        text: <p>Bar/Restaurant à Guimaëc.</p>,
        image: "friko.jpg",
      },
      {
        title: "Le Ty Gasnou",
        text: <p>Bar/Restaurant à Plougasnou.</p>,
        image: "tygasnou.jpg",
      },
      {
        title: "Les Embruns",
        text: <p>Crêperie/Restaurant à Plougasnou.</p>,
        image: "embruns.jpg",
      },
    ];
    return elements.map((el, i) => (
      <div key={i}>
        <div className="md:grid grid-cols-3">
          <img
            alt={el.title}
            src={images[`../images/${el.image}`]}
            className="rounded w-36 h-36 object-cover"
          />
          <div className="flex flex-col">
            <h3 className="font-bold font-cursive text-2xl text-main">
              {el.title}
            </h3>
            <Divider />
            {el.text}
          </div>
        </div>
      </div>
    ));
  }

  return (
    <>
      <Header />
      <SubHeader />
      <Container py={8}>
        <h2
          style={style.pageTitle}
          className="font-round text-darkMain mb-8 text-center"
        >
          Nos points de vente
        </h2>

        <img
          alt="Catherine au marché de Plouezoc'h"
          src="https://gwig-compressed-bucket.s3.amazonaws.com/1B1bDGPcHSgHw3JwjzY9-bigger"
          className="sm:rounded aspect-video w-full object-cover mb-16"
        />

        <div className="grid grid-cols-2 gap-8 md:px-0 px-5">
          {renderPoints()}
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default PointsDeVente;

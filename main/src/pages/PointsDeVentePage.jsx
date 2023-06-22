import { useContext } from "react";
import Container from "../blocs/Container";
import Divider from "../blocs/Divider";
import Footer from "../blocs/Footer";
import Header from "../blocs/Header";
import SubHeader from "../blocs/SubHeader";
import { ThemeContext } from "../contexts/ThemeContext";

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
        title: "Le Grand Café de la Terrasse",
        text: <p>Restaurant à Morlaix</p>,
        image: "cafe_morlaix.jpg",
      },
      {
        title: "Super U",
        text: <p>Lanmeur</p>,
        image: "superu.png",
      },
      {
        title: "Café du Port",
        text: <p>Restaurant à Locquirec</p>,
        image: "cafe_locqui.jpg",
      },
      {
        title: "La Presqu'Ile",
        text: <p>Restaurant à Locquirec</p>,
        image: "prequile_locqui.jpg",
      },
      {
        title: "Casino de Plougasnou",
        text: <p>Centre commercial Casino</p>,
        image: "casino.png",
      },
    ];
    return elements.map((el, i) => (
      <div key={i}>
        <div className="md:grid grid-cols-3">
          <img
            alt={el.title}
            src={require(`../images/${el.image}`)}
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

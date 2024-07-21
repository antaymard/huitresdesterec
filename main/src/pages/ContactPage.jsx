import { useContext } from "react";
import Container from "../blocs/Container";
import Footer from "../blocs/Footer";
import Header from "../blocs/Header";
import SubHeader from "../blocs/SubHeader";
import { ThemeContext } from "../contexts/ThemeContext";

function ContactPage() {
  const style = useContext(ThemeContext);
  return (
    <>
      <Header />
      <SubHeader />

      <Container>
        <img
          alt="Parcs à huitres en Baie de Morlaix"
          className="sm:rounded w-full sm:my-6 aspect-video object-cover "
          src="https://gwig-compressed-bucket.s3.amazonaws.com/JUnIIr9kLfEHtYAUrN3p-bigger"
        />
        <div className="md:grid grid-cols-2 items-center px-5 md:px-0">
          <div className="flex flex-col">
            <h2 style={style.pageTitle} className="my-8 font-round text-main">
              Lieu et horaires
            </h2>
            <p>Impasse de Feunteun Bol à Térénez, 29630, Plougasnou</p>
            <h3 style={style.sectionTitle} className="mb-3 mt-5 font-cursive">
              Horaires Vente Directe
            </h3>
            <p>Ouvert du lundi au vendredi : 9h à 12h - 14h à 18h</p>
            <p>Samedi : 9h - 12h</p>
            <h3 style={style.sectionTitle} className="mb-3 mt-5 font-cursive">
              Horaires Dégustation
            </h3>
            <p>Ouvert l'été, de juin à septembre.</p>
            <p>Du lundi au samedi : 11 h - 21 h</p>
          </div>
          <img
            src={require("../images/staticmap.png")}
            className="w-full object-cover rounded-lg mt-8"
            alt="Carte de la baie de Morlaix"
          />
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default ContactPage;

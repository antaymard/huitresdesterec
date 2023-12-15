import Container from "../blocs/Container";
import Header from "../blocs/Header";
import SubHeader from "../blocs/SubHeader";
import Divider from "../blocs/Divider";
import Footer from "../blocs/Footer";
import { Link } from "react-router-dom";
import { OysterIcon } from "../icons/Oyster";
import { PhoneIcon } from "@heroicons/react/24/solid";

function HomePage() {
  return (
    <div>
      <Header />

      <SubHeader />

      <img
        alt="Parcs à huitres en Baie de Morlaix"
        className="w-full -mt-6 aspect-square sm:aspect-auto object-cover sm:object-fill object-left"
        src={require("../images/parcs_a_huitres.jpg")}
      />

      <Container
        bgColor="#0d5eba"
        className="py-16 px-5"
        style={{
          backgroundcolor: "#0d5eba",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      >
        <div className="flex flex-col items-center gap-8">
          <OysterIcon className="text-white" />
          <h2 className="text-white text-3xl text-center">
            LES SAVEURS DE LA BAIE DE MORLAIX CHEZ VOUS
          </h2>
          <p className="font-round -my-5 text-red-300">
            Fraîcheur garantie ! Transport réfrigéré.
          </p>
          <Divider />
          <p className="text-center text-white text-xl">
            Commandez en ligne vos huîtres et coquillages préférés et
            recevez-les chez vous.
            <br />
            <br />
            <u>Livraison en 1 jour</u> pour un maximum de fraîcheur, en
            transport réfrigéré.
          </p>
          <div className="flex items-center gap-3 flex-col sm:flex-row">
            <Link
              to="/commande"
              className="border-2 border-white rounded-md bg-pink-500 p-4 py-2 text-white hover:bg-pink-200 hover:text-main font-round text-xl"
            >
              Commander en ligne
            </Link>
            <a
              href="tel:+33298724443"
              className="border-2 flex gap-2 border-white rounded-md bg-white bg-opacity-10 p-4 py-2 text-white hover:bg-white hover:text-main font-round"
            >
              <PhoneIcon className="h-5" /> 02 98 72 44 43
            </a>
          </div>
        </div>
      </Container>

      <Container className="my-12 md:my-48">
        <h2 className="text-3xl mb-8 font-round text-darkMain px-5 md:px-0">
          Qui sommes-nous ?
        </h2>
        <div className="w-full md:grid grid-cols-2 gap-8 items-center">
          <img
            alt="Huitre récoltée"
            src={require("../images/huitres_main.jpg")}
            className="md:rounded"
          />
          <div className="flex flex-col px-5 md:px-0 mt-5 md:mt-0">
            <h3 className="text-2xl mb-4 font-cursive font-bold text-main">
              Qualité et savoir-faire, depuis plus de 18 ans.
            </h3>
            <div className="flex flex-col gap-2">
              <p>
                En baie de Morlaix, la qualité de l'eau et notre passion nous
                ont permis de créer dans nos parcs de Térénez une huître creuse
                à la saveur subtile, iodée et au goût inégalable.
              </p>
              <p>
                Un produit haut de gamme, primé par des médailles d'or, d'argent
                et de bronze aux Concours Agricoles de Paris en 2002 - 2003 -
                2006.
              </p>
              <p>
                En période de fêtes de fin d'année, découvrez la Fine de Claire,
                sélectionnée par nos soins avant affinage. Elle se distingue par
                sa consistance plus affirmée, son volume en bouche, un équilibre
                douceur-salinité...
              </p>
            </div>
            <div className="flex items-center sm:gap-3 flex-col sm:flex-row">
              <Link
                to="/commande"
                className="text-center bg-darkMain hover:bg-main text-white py-4 px-8 rounded-sm font-round mt-8"
              >
                Commander en ligne
              </Link>
              <a
                href="tel:0298724443"
                className="text-center bg-darkMain hover:bg-main text-white py-4 px-8 rounded-sm font-round mt-8 flex gap-2"
              >
                <PhoneIcon className="h-5" />
                02 98 72 44 43
              </a>
            </div>
          </div>
        </div>
      </Container>

      <Container className="my-12 md:my-48">
        <div className="md:grid grid-cols-2 gap-8 items-center justify-items-stretch px-5 md:px-0">
          <div className="flex flex-col ">
            <h3 className="text-3xl mb-8 font-round text-darkMain">
              Vente directe
            </h3>
            <img
              alt="Carte de Térénez"
              className="object-contain md:hidden mb-5"
              src="https://static.wixstatic.com/media/f4766e_2b7ec6328dc143c79947718c9091a2dd~mv2.png/v1/fill/w_400,h_364,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%2052.png"
            />
            <p>Port de Térénez, 29630 Plougasnou</p>
            <p>02.98.72.44.43</p>
            <p className="font-bold mt-4">
              Horaires d'ouverture : Du lundi au vendredi, 9h à 12h, 14h à 18h.
              Samedi de 9h à 12h.
            </p>
            <Link
              to="/points-de-vente"
              className="text-center bg-darkMain hover:bg-main text-white py-4 px-8 rounded-sm font-round mt-8"
            >
              Consultez nos autres points de vente
            </Link>
          </div>
          <img
            alt="Carte de Térénez"
            className="object-contain hidden md:block"
            src="https://static.wixstatic.com/media/f4766e_2b7ec6328dc143c79947718c9091a2dd~mv2.png/v1/fill/w_400,h_364,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%2052.png"
          />
        </div>
      </Container>

      <Container className="my-12 md:my-48">
        <div className="md:grid grid-cols-2 gap-8 items-center">
          <img
            alt=""
            src={require("../images/degustation.jpg")}
            className="hidden md:block md:rounded"
          />
          <div>
            <h3 className="text-3xl mb-8 font-round text-darkMain px-5 md:px-0">
              Dégustation sur place l'été
            </h3>
            <img
              alt=""
              src={require("../images/degustation.jpg")}
              className="md:hidden md:rounded mb-5"
            />
            <div className="flex flex-col  px-5 md:px-0">
              <p>
                Face à la mer et au couché du soleil, venez déguster nos huîtres
                et coquillages fraîchement pêchés.
              </p>
              <p className="mt-4 font-bold">
                Ouvert de juillet à septembre, de 12h à 22h du lundi au samedi
              </p>
              <Link
                to="/degustation"
                className="text-center bg-darkMain hover:bg-main text-white py-4 px-8 rounded-sm font-round mt-8"
              >
                En savoir plus sur la dégustation
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
}

export default HomePage;

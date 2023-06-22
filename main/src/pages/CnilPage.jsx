import Container from "../blocs/Container";
import Footer from "../blocs/Footer";
import Header from "../blocs/Header";
import SubHeader from "../blocs/SubHeader";

function CnilPage() {
  return (
    <>
      <Header />
      <SubHeader />

      <Container>
        <div className="sm:p-0 p-5 flex flex-col gap-5 font-sans">
          <h2 className="font-cursive text-xl font-bold mb-3">
            Mentions légales
          </h2>
          <p className="font-sans">
            Ce site et son contenu sont régis par le droit français. Tout litige
            s'y rapportant sera soumis à la compétence des tribunaux françai
          </p>

          <h3 className="font-bold">Identité</h3>
          <p className="font-sans">
            Gérant: Monsieur William ALVADO Co-Gérant: Madame Catherine ALVADO
            Impasse de Feunteun Bol - Port de Térénez - 29630 Plougasnou Tel: 02
            98 72 44 43
          </p>
          <h3 className="font-bold">Adresse société</h3>
          <p className="font-sans">
            Monsieur William ALVADO Rue Samuel de Champlain - 17730 Port des
            Barques Email: infos@huitres-de-sterec.fr
          </p>
          <p className="font-sans">
            Forme juridique: Earl Catégorie: Chasse et pêche Directeur
            publication: William ALVADO Nr SIREN: 414 504 555 Code NAF: 0321Z -
            Aquaculture en mer TVA intracommunautaire: FR61414504555
          </p>
          <h3 className="font-bold">Hébergeur : Heroku</h3>
          <p className="font-sans">
            Heroku Inc siège social : 650 7th Street, San Francisco, CA
            Téléphone : +33 1 (877) 563-4311
          </p>
          <h3 className="font-bold">
            Respect des réglementations Françaises sur les données personnelles
          </h3>
          <p className="font-sans">
            Conformément à la loi française “Informatique et libertés” Nr
            2004-801 du 6 aout 2004, vous disposez d´un droit d´accès, de
            modification, de rectification et de suppression des données vous
            concernant. Vous pouvez exercer ce droit en nous écrivant et aussi,
            pour des motifs légitimes, vous opposer au traitement de ces
            données.
          </p>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default CnilPage;

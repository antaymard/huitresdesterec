import { useContext } from "react";
import { Link } from "react-router-dom";
import Container from "../blocs/Container";
import Footer from "../blocs/Footer";
import Header from "../blocs/Header";
import SubHeader from "../blocs/SubHeader";
import { ThemeContext } from "../contexts/ThemeContext";

const images = import.meta.glob("../images/*", {
  eager: true,
  import: "default",
});

function CoquillagesPage() {
  const style = useContext(ThemeContext);

  const subtitleStyle = "font-bold mt-5 mb-2";
  function renderCoquillages() {
    const content = [
      {
        image: "huitres.webp",
        title: "Nos Huîtres",
        text: (
          <p>
            A Térénez, en baie de Morlaix, notre entreprise familiale produit
            sur tables sur 10 hectares de parcs et 4000 poches par hectare, des
            huîtres exceptionnelles au goût très spécifique de noisette, en
            respectant tradition et environnement. Les huîtres de Sterec vous
            raviront par leur fraîcheur, leur richesse en vitamines et en
            protéines.
          </p>
        ),
      },
      {
        image: "moules.webp",
        title: "Les Moules de Locquémeau",
        text: (
          <div>
            <p>
              Depuis l'arrivée des moules de Locquémeau, la moule de bouchot n'a
              plus l'exclusivité. Leur chair charnue et iodée a de quoi séduire.
              La pêche des moules de pleine mer se fait dans la baie de Lannion
              depuis 2009. Notre mytiliculteur et son équipage partent à l'aube
              en mer pour récolter les mollusques immergés à 5 mètres sous
              l'eau.
            </p>
            <h4 className={subtitleStyle}>
              La moule de Locquemeau a le vent en poupe
            </h4>
            <p>
              Un élevage en pleine mer qui confère à leur chair une saveur
              particulièrement iodée. Et à la différence des moules de bouchot,
              qui croissent au rythme des marées, leur coquille est plus
              fragile, moins lourde que celle des moules de bouchot. Pour le
              même poids, leur quantité de chair est donc supérieure...
            </p>
            <h4 className={subtitleStyle}>Deux variétés</h4>
            <p>
              - EDULIS : moules d'été <br />- GALLOPROVINCIALIS : moules de
              printemps, que l'on peut farcir grâce à la taille de sa coquille,
              qui peut atteindre jusqu'à 14cm.
            </p>
          </div>
        ),
      },
      {
        image: "bulots.webp",
        title: "Les bulots du Diben",
        text: (
          <div>
            <p>
              Le bulot ou buccin est devenu un coquillage très prisé et fait
              l'objet d'une pêche contrôlée afin d'assumer sa pérennité. Des
              quotas ont donc été mis en place sur le littoral de la Manche. Sa
              coquille beige à gris ambré porte des rainures en spirale. Le pied
              blanc tacheté de noir, très développé et musculeux, est
              particulièrement apprecié des connaisseurs.
            </p>
            <h4 className={subtitleStyle}>Préparation</h4>
            <p>
              Faire dégorger pendant 1 à 2 heures les bulots en les recouvrant
              d'eau très salée. Ils rejettent alors le sable qu'ils contiennent.
              Les rincer et les faire cuire, départ eau froide, durant 20
              minutes avec sel, poivre, thym et algues séchées. Puis les laisser
              refroidire dans l'eau de cuisson. <br />
              Triés à bord des bateaux, les bulots sont débarqués vivants, ce
              qui garantit une très grande vivacité et fraicheur du produit.
            </p>
          </div>
        ),
      },
      {
        image: "bigorneaux.webp",
        title: "Les bigorneaux de Sterec",
        text: (
          <div>
            <p>
              Les bigorneaux noirs vivants sont présentés en amuse-gueules, sur
              les plateaux de fruits de mer avec pain de seigle et beurre. Le
              bigorneau est un petit gastéropode marin comestible à coquille
              spiralée d'un brun-vert à noir. On le trouve couramment le long
              des côtes bretonnes, accroché à un rocher à l'abri des courants
              marins et du vent.
            </p>
            <h4 className={subtitleStyle}>Nos conseils culinaires</h4>
            <p>
              Décortiqués, ils peuvent être préparés en sauce, sautés à l'ail ou
              présentés en salade. Le bigorneau est un met de choix très réputé
              pour sa chair tendre et succulente. Les recettes de bigorneaux ne
              manquent pas et sont toutes aussi délicieuses ! En outre c'est un
              aliment très nourrisant et peu calorique. Vous pouvez les servir
              tièdes ou froids selon votre convenance.
            </p>
          </div>
        ),
      },
      {
        image: "coques.webp",
        title: "Les coques de Locquirec",
        text: (
          <div>
            <p>
              Appelées aussi “Rigadeaux” en Bretagne, nos coques sont pêchées au
              râteau par nos pêcheurs à pied sur Locquirec. Elles sont de belle
              taille et très blanches. Pour plus de qualité, les coques sont
              passées en bassin de purification.
            </p>
            <h4 className={subtitleStyle}>Nos conseils</h4>
            <p>
              Pour enlever le sable que peuvent contenir les coques, il faut les
              mettre à dégorger un court moment, environ un quart d'heure, dans
              de l'eau de mer ou du robinet à laquelle on ajoute du gros sel en
              quantité. Les coques vont alors s'entrouvrir et rejeter le sable.
              N'oubliez par de les brasser, cela aura aussi pour but de faire
              ouvrir les coques vides ou pleines de vase. Renouvelez l'eau pour
              éliminer tout le sable avant de les acccomoder.
            </p>
          </div>
        ),
      },
      {
        image: "huitresp.webp",
        title: "Les huîtres plates de Cancale",
        text: (
          <div>
            <p>
              Les huîtres plates de Cancale ont une saveur particulière plus
              douce reconnaissable à un léger goût de noisette. Les huîtres
              plates sont également appelées belon et sont élevées en eau
              profonde dans la baie du Mont Saint-Michel.
            </p>
            <h4 className={subtitleStyle}>Nos conseils</h4>
            <p>
              L'huître plate est un des fleurons de l'ostréiculture bretonne.
              Elle était le produit de référence avant les maladies qui ont
              décimé ses rangs avant les années 80.
            </p>
          </div>
        ),
      },
      {
        image: "palourdes.webp",
        title: "Les palourdes de la Baie de Morlaix",
        text: (
          <div>
            <p>
              Comme tous les coquillages, la palourde s'achète vivante avec une
              coquille bien fermée et humide. Si elle est entrebâillée, un coup
              sec doit la refermer. C'est sa garantie fraîcheur. Lavez-les dans
              plusieurs eaux pour éliminer le sable.
            </p>
            <h4 className={subtitleStyle}>Valeur nutritionnelle</h4>
            <p>
              Des protéines (26g pour 100g), peu de lipides (moins de 2g pour
              100g), des oligo-éléments et des vitamines en quantité, la
              palourde a sa place dans une alimentation équilibrée. Pêchée à
              pied à marée basse ou à la drague, la palourde est grisâtre, de
              forme allongée et mesure environ 4 centimètres. La palourde mâle,
              grosse possède des stries bien marquée, tandis que la palourde
              femelle est plus petite et plus lisse.
            </p>
          </div>
        ),
      },
    ];

    return content.map((con, i) => (
      <div
        key={i}
        className="flex flex-col md:grid grid-cols-4 gap-8 bg-slate-100 p-8 items-center"
        style={{
          backgroundColor: "#dfeaf6",
        }}
      >
        <img
          src={images[`../images/${con.image}`]}
          className="sm:h-52 object-contain bottom-0 left-0 transition-all duration-75 self-center"
          alt=""
        />
        <div className="col-span-3">
          <h3 className="font-cursive font-bold text-2xl mb-4 text-main">
            {con.title}
          </h3>
          {con.text}
          {i === 0 ? (
            <Link
              to="/commande"
              className="inline-block text-center bg-darkMain hover:bg-main text-white py-4 px-8 rounded-sm font-round mt-8"
            >
              Commander en ligne
            </Link>
          ) : null}
        </div>
      </div>
    ));
  }

  return (
    <>
      <Header />
      <SubHeader />
      <img
        alt="Parcs à huitres en Baie de Morlaix"
        className="w-full -mt-6 aspect-video sm:h-[500px] object-cover object-bottom mb-8"
        src="https://gwig-compressed-bucket.s3.amazonaws.com/aQxKPPgerJDggMuWrpPb-bigger"
      />

      <Container py={8}>
        <div className="flex flex-col gap-12 items-center">
          <h2
            style={style.pageTitle}
            className="font-round text-darkMain px-5 md:px-0"
          >
            Nos Huitres et coquillages
          </h2>
          {renderCoquillages()}
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default CoquillagesPage;

import { useContext } from "react";
import Container from "../blocs/Container";
import Header from "../blocs/Header";
import SubHeader from "../blocs/SubHeader";
import { ThemeContext } from "../contexts/ThemeContext";

import Degustation from "../images/degustation.jpg";
import Footer from "../blocs/Footer";

function DegustationPage() {
  const style = useContext(ThemeContext);

  const imageClassName = "rounded h-full object-cover";

  return (
    <>
      <Header />
      <SubHeader />
      <Container py={8}>
        <div className="flex flex-col">
          <h2
            style={style.pageTitle}
            className="font-round text-darkMain px-5 md:px-0"
          >
            Dégustation sur place
          </h2>
          <img
            alt="Terrasse face à la mer"
            src="https://gwig-compressed-bucket.s3.amazonaws.com/yCQdfNUnGx9AU7l5Yb3B-bigger"
            className="sm:hidden sm:rounded aspect-video object-cover mt-8 "
          />
          <div className="px-5 md:px-0 mt-8">
            <p>
              De 11h à 21h, dégustez nos huîtres et coquillages fraîchement
              sortis de l'eau, face à la mer, avec vue sur le port de Térénez et
              aligné avec le coucher du soleil tout l'été.
            </p>
          </div>
          <img
            alt="Terrasse face à la mer"
            src="https://gwig-compressed-bucket.s3.amazonaws.com/yCQdfNUnGx9AU7l5Yb3B-bigger"
            className="hidden sm:block sm:rounded aspect-video object-cover mt-8 "
          />

          <div className="flex flex-col px-5 sm:px-0 sm:grid grid-cols-2 gap-5 my-8">
            <img src={Degustation} alt="" className={imageClassName} />
            <img
              src="https://gwig-compressed-bucket.s3.amazonaws.com/GbGCEi2AK0VI0VL7iKCI-bigger"
              alt=""
              className={imageClassName}
            />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default DegustationPage;

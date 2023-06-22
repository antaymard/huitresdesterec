import { Link } from "react-router-dom";
import { OysterIcon } from "../icons/Oyster";
import Container from "./Container";

function Footer() {
  return (
    <Container
      bgColor="#093f7c"
      className="py-16 mt-16 sm:mt-32 px-5 md:px-0"
      style={{
        backgroundcolor: "#093f7c",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%233675bd' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}
    >
      <div className="grid grid-cols-2 text-white">
        <div className="flex flex-col gap-2">
          <p>© {new Date().getFullYear()} les Huitres de Sterec. </p>
          <Link to="/mentions-legales">Mentions légales</Link>
          <Link to="/cnil">CNIL</Link>
          <a
            href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage"
            target="_blank"
          >
            Règlement des litiges
          </a>
        </div>
        <div>
          HUITRES DE STEREC <br />
          Huitres creuses de Térénez - Elevées en mer dans nos 10 hectares de
          parcs <br /> Vente directe d'huitres - Moules et coquillages
        </div>
      </div>
      <div className="text-center mt-4 text-white">
        Moules et coquillages EARL - RCS : La Rochelle - SIRET : 4145 04 555
        00015C - CODE NAF 0321Z
      </div>
    </Container>
  );
}

export default Footer;

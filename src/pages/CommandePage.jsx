import { PhoneIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import Container from "../blocs/Container";
import Footer from "../blocs/Footer";
import Header from "../blocs/Header";
import SubHeader from "../blocs/SubHeader";
import { ThemeContext } from "../contexts/ThemeContext";

function CommandePage() {
  const style = useContext(ThemeContext);

  return (
    <>
      <Header />
      <SubHeader />
      <Container py={8}>
        <div className="flex flex-col gap-12 items-center">
          <h2
            style={style.pageTitle}
            className="font-round text-darkMain px-5 md:px-0"
          >
            Commande en ligne
          </h2>

          <img
            alt="Arrivée du chaland à Térénez"
            src="https://gwig-compressed-bucket.s3.amazonaws.com/97L0zNv4hyOfTzij1rTY-bigger"
            className="sm:rounded aspect-video w-full object-cover"
          />

          <div className="flex md:flex-row flex-col items-center justify-between w-full px-5 md:px-0">
            <div className="flex flex-col gap-3">
              <p className="font-cursive font-bold text-2xl text-orange-500 -rotate-3 mb-5">
                Fraîcheur garantie ! Livraison dans toute la France !
              </p>
              <p>
                Livraison chronopost dans toute la France. Frais de livraison
                inclus ! <br />
                Commande passée 48h à l'avance : livraison garantie le lendemain
                du départ.
              </p>
              <p>
                A conserver au frais jusqu'à une semaine, où à déguster dès
                réception !
              </p>
            </div>
            <img
              src="https://gwig-uncompressed-bucket.s3.amazonaws.com/iGcB7JwXHhpjHi9d49ff6pl3ghX6pH"
              alt=""
              className="w-72"
            />
          </div>

          {/* PAYPAL */}
          <div className="flex flex-col gap-3 w-full md:w-auto py-5 md:p-5 md:rounded bg-slate-100 shadow-lg">
            <h3 className="font-bold font-round text-xl text-center mb-5 text-main">
              Faîtes votre choix !
            </h3>
            <p className="mb-5">
              Note : <br /> Un numéro de téléphone vous sera demandé pour
              finaliser la commande.
            </p>
            <div className="mb-5 rounded p-3 border text-pink-700 bg-pink-100 border-pink-700">
              <p>
                Livraison le samedi : <br /> 7€ seront ajoutés aux frais de
                livraison Chronopost.
              </p>
            </div>
            <div
              id="calibre01"
              className="flex flex-col md:flex-row items-center gap-3 rounded bg-white p-3 px-5 justify-between"
            >
              <h4 className="font-bold">Calibre 1</h4>
              <form
                target="paypal"
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                className="flex items-center gap-3"
              >
                <input type="hidden" name="cmd" value="_cart" />
                <input
                  type="hidden"
                  name="business"
                  value="huitresdesterec@gmail.com"
                />
                <input type="hidden" name="lc" value="FR" />
                <input type="hidden" name="item_name" value="CREUSES NR 01" />
                <input type="hidden" name="item_number" value="CR01" />
                <input type="hidden" name="button_subtype" value="products" />
                <input type="hidden" name="no_note" value="0" />
                <input type="hidden" name="currency_code" value="EUR" />
                <input type="hidden" name="add" value="1" />
                <input
                  type="hidden"
                  name="bn"
                  value="PP-ShopCartBF:btn_cart_SM.gif:NonHostedGuest"
                />
                <input
                  name="return"
                  type="hidden"
                  value="http://www.huitres-de-sterec.fr/chronopost.html"
                />
                <input
                  name="cancel_return"
                  type="hidden"
                  value="http://www.huitres-de-sterec.fr/chronopost.html"
                />
                <input type="hidden" name="on0" value="CREUSES NR01" />
                <select name="os0">
                  <option value="3 kg">&nbsp;&nbsp;3 kg - 41.90 EUR</option>
                  <option value="4 kg">&nbsp;&nbsp;4 kg - 49.90 EUR</option>
                  <option value="5 kg">&nbsp;&nbsp;5 kg - 57.90 EUR</option>
                  <option value="6 kg">&nbsp;&nbsp;6 kg - 70.00 EUR</option>
                  <option value="7 kg">&nbsp;&nbsp;7 kg - 78.00 EUR</option>
                  <option value="8 kg">&nbsp;&nbsp;8 kg - 86.00 EUR</option>
                  <option value="9 kg">&nbsp;&nbsp;9 kg - 94.00 EUR</option>
                  <option value="10 kg">10 kg - 102.00 EUR</option>
                  <option value="15 kg">15 kg - 147.90 EUR</option>
                </select>

                <input type="hidden" name="currency_code" value="EUR" />
                <input type="hidden" name="option_select0" value="3 kg" />
                <input type="hidden" name="option_amount0" value="41.90" />
                <input type="hidden" name="option_select1" value="4 kg" />
                <input type="hidden" name="option_amount1" value="49.90" />
                <input type="hidden" name="option_select2" value="5 kg" />
                <input type="hidden" name="option_amount2" value="57.90" />
                <input type="hidden" name="option_select3" value="6 kg" />
                <input type="hidden" name="option_amount3" value="70.00" />
                <input type="hidden" name="option_select4" value="7 kg" />
                <input type="hidden" name="option_amount4" value="78.00" />
                <input type="hidden" name="option_select5" value="8 kg" />
                <input type="hidden" name="option_amount5" value="86.00" />
                <input type="hidden" name="option_select6" value="9 kg" />
                <input type="hidden" name="option_amount6" value="94.00" />
                <input type="hidden" name="option_select7" value="10 kg" />
                <input type="hidden" name="option_amount7" value="102.00" />
                <input type="hidden" name="option_select8" value="15 kg" />
                <input type="hidden" name="option_amount8" value="147.90" />
                <input type="hidden" name="option_index" value="0" />

                <img
                  alt=""
                  border="0"
                  src="https://www.paypalobjects.com/fr_XC/i/scr/pixel.gif"
                  width="10"
                  height="1"
                />

                <input
                  type="image"
                  src="https://www.paypalobjects.com/fr_FR/FR/i/btn/btn_cart_SM.gif"
                  border="0"
                  name="submit"
                  alt="PayPal, le réflexe sécurité pour payer en ligne"
                />
                <img
                  alt=""
                  border="0"
                  src="https://www.paypalobjects.com/fr_XC/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
            </div>
            <div
              id="calibre02"
              className="flex flex-col md:flex-row items-center gap-3 rounded bg-white p-3 px-5 justify-between"
            >
              <h4 className="font-bold">Calibre 2</h4>
              <form
                target="paypal"
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                className="flex items-center gap-3"
              >
                <input type="hidden" name="cmd" value="_cart" />
                <input
                  type="hidden"
                  name="business"
                  value="huitresdesterec@gmail.com"
                />
                <input type="hidden" name="lc" value="FR" />
                <input type="hidden" name="item_name" value="CREUSES NR 02" />
                <input type="hidden" name="item_number" value="CR02" />
                <input type="hidden" name="button_subtype" value="products" />
                <input type="hidden" name="no_note" value="0" />
                <input type="hidden" name="currency_code" value="EUR" />
                <input type="hidden" name="add" value="1" />
                <input
                  type="hidden"
                  name="bn"
                  value="PP-ShopCartBF:btn_cart_SM.gif:NonHostedGuest"
                />
                <input
                  name="return"
                  type="hidden"
                  value="http://www.huitres-de-sterec.fr/chronopost.html"
                />
                <input
                  name="cancel_return"
                  type="hidden"
                  value="http://www.huitres-de-sterec.fr/chronopost.html"
                />
                <input type="hidden" name="on0" value="CREUSES NR02" />
                <select name="os0">
                  <option value="3 kg">&nbsp;&nbsp;3 kg - 40.10 EUR</option>
                  <option value="4 kg">&nbsp;&nbsp;4 kg - 47.50 EUR</option>
                  <option value="5 kg">&nbsp;&nbsp;5 kg - 54.90 EUR</option>
                  <option value="6 kg">&nbsp;&nbsp;6 kg - 66.50 EUR</option>
                  <option value="7 kg">&nbsp;&nbsp;7 kg - 73.80 EUR</option>
                  <option value="8 kg">&nbsp;&nbsp;8 kg - 81.20 EUR</option>
                  <option value="9 kg">&nbsp;&nbsp;9 kg - 88.60 EUR</option>
                  <option value="10 kg">10 kg - 96.00 EUR</option>
                  <option value="15 kg">15 kg - 138.90 EUR</option>
                </select>

                <input type="hidden" name="currency_code" value="EUR" />
                <input type="hidden" name="option_select0" value="3 kg" />
                <input type="hidden" name="option_amount0" value="40.10" />
                <input type="hidden" name="option_select1" value="4 kg" />
                <input type="hidden" name="option_amount1" value="47.50" />
                <input type="hidden" name="option_select2" value="5 kg" />
                <input type="hidden" name="option_amount2" value="54.90" />
                <input type="hidden" name="option_select3" value="6 kg" />
                <input type="hidden" name="option_amount3" value="66.50" />
                <input type="hidden" name="option_select4" value="7 kg" />
                <input type="hidden" name="option_amount4" value="73.80" />
                <input type="hidden" name="option_select5" value="8 kg" />
                <input type="hidden" name="option_amount5" value="81.20" />
                <input type="hidden" name="option_select6" value="9 kg" />
                <input type="hidden" name="option_amount6" value="88.60" />
                <input type="hidden" name="option_select7" value="10 kg" />
                <input type="hidden" name="option_amount7" value="96.00" />
                <input type="hidden" name="option_select8" value="15 kg" />
                <input type="hidden" name="option_amount8" value="138.90" />
                <input type="hidden" name="option_index" value="0" />

                <img
                  alt=""
                  border="0"
                  src="https://www.paypalobjects.com/fr_XC/i/scr/pixel.gif"
                  width="10"
                  height="1"
                />

                <input
                  type="image"
                  src="https://www.paypalobjects.com/fr_FR/FR/i/btn/btn_cart_SM.gif"
                  border="0"
                  name="submit"
                  alt="PayPal, le réflexe sécurité pour payer en ligne"
                />
                <img
                  alt=""
                  border="0"
                  src="https://www.paypalobjects.com/fr_XC/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
            </div>
            <div
              id="calibre03"
              className="flex flex-col md:flex-row items-center gap-3 rounded bg-white p-3 px-5 justify-between"
            >
              <h4 className="font-bold">Calibre 3</h4>
              <form
                target="paypal"
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                className="flex items-center gap-3"
              >
                <input type="hidden" name="cmd" value="_cart" />
                <input
                  type="hidden"
                  name="business"
                  value="huitresdesterec@gmail.com"
                />
                <input type="hidden" name="lc" value="FR" />
                <input type="hidden" name="item_name" value="CREUSES NR 03" />
                <input type="hidden" name="item_number" value="CR03" />
                <input type="hidden" name="button_subtype" value="products" />
                <input type="hidden" name="no_note" value="0" />
                <input type="hidden" name="currency_code" value="EUR" />
                <input type="hidden" name="add" value="1" />
                <input
                  type="hidden"
                  name="bn"
                  value="PP-ShopCartBF:btn_cart_SM.gif:NonHostedGuest"
                />
                <input
                  name="return"
                  type="hidden"
                  value="http://www.huitres-de-sterec.fr/chronopost.html"
                />
                <input
                  name="cancel_return"
                  type="hidden"
                  value="http://www.huitres-de-sterec.fr/chronopost.html"
                />

                <input type="hidden" name="on0" value="CREUSES NR03" />

                <select name="os0">
                  <option value="3 kg">&nbsp;&nbsp;3 kg - 38.90 EUR</option>
                  <option value="4 kg">&nbsp;&nbsp;4 kg - 45.90 EUR</option>
                  <option value="5 kg">&nbsp;&nbsp;5 kg - 52.90 EUR</option>
                  <option value="6 kg">&nbsp;&nbsp;6 kg - 64.00 EUR</option>
                  <option value="7 kg">&nbsp;&nbsp;7 kg - 71.00 EUR</option>
                  <option value="8 kg">&nbsp;&nbsp;8 kg - 78.00 EUR</option>
                  <option value="9 kg">&nbsp;&nbsp;9 kg - 85.00 EUR</option>
                  <option value="10 kg">10 kg - 92.00 EUR</option>
                  <option value="15 kg">15 kg - 132.90 EUR</option>
                </select>

                <input type="hidden" name="currency_code" value="EUR" />
                <input type="hidden" name="option_select0" value="3 kg" />
                <input type="hidden" name="option_amount0" value="38.90" />
                <input type="hidden" name="option_select1" value="4 kg" />
                <input type="hidden" name="option_amount1" value="45.90" />
                <input type="hidden" name="option_select2" value="5 kg" />
                <input type="hidden" name="option_amount2" value="52.90" />
                <input type="hidden" name="option_select3" value="6 kg" />
                <input type="hidden" name="option_amount3" value="64.00" />
                <input type="hidden" name="option_select4" value="7 kg" />
                <input type="hidden" name="option_amount4" value="71.00" />
                <input type="hidden" name="option_select5" value="8 kg" />
                <input type="hidden" name="option_amount5" value="78.00" />
                <input type="hidden" name="option_select6" value="9 kg" />
                <input type="hidden" name="option_amount6" value="85.00" />
                <input type="hidden" name="option_select7" value="10 kg" />
                <input type="hidden" name="option_amount7" value="92.00" />
                <input type="hidden" name="option_select8" value="15 kg" />
                <input type="hidden" name="option_amount8" value="132.90" />
                <input type="hidden" name="option_index" value="0" />

                <img
                  alt=""
                  border="0"
                  src="https://www.paypalobjects.com/fr_XC/i/scr/pixel.gif"
                  width="10"
                  height="1"
                />

                <input
                  type="image"
                  src="https://www.paypalobjects.com/fr_FR/FR/i/btn/btn_cart_SM.gif"
                  border="0"
                  name="submit"
                  alt="PayPal, le réflexe sécurité pour payer en ligne"
                />
                <img
                  alt=""
                  border="0"
                  src="https://www.paypalobjects.com/fr_XC/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
            </div>
            <div
              id="calibre04"
              className="flex flex-col md:flex-row items-center gap-3 rounded bg-white p-3 px-5 justify-between"
            >
              <h4 className="font-bold">Calibre 4</h4>
              <form
                target="paypal"
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                className="flex items-center gap-3"
              >
                <input type="hidden" name="cmd" value="_cart" />
                <input
                  type="hidden"
                  name="business"
                  value="huitresdesterec@gmail.com"
                />
                <input type="hidden" name="lc" value="FR" />
                <input type="hidden" name="item_name" value="CREUSES NR 04" />
                <input type="hidden" name="item_number" value="CR04" />
                <input type="hidden" name="button_subtype" value="products" />
                <input type="hidden" name="no_note" value="0" />
                <input type="hidden" name="currency_code" value="EUR" />
                <input type="hidden" name="add" value="1" />
                <input
                  type="hidden"
                  name="bn"
                  value="PP-ShopCartBF:btn_cart_SM.gif:NonHostedGuest"
                />
                <input
                  name="return"
                  type="hidden"
                  value="http://www.huitres-de-sterec.fr/chronopost.html"
                />
                <input
                  name="cancel_return"
                  type="hidden"
                  value="http://www.huitres-de-sterec.fr/chronopost.html"
                />

                <input type="hidden" name="on0" value="CREUSES NR04" />

                <select name="os0">
                  <option value="3 kg">&nbsp;&nbsp;3 kg - 38.30 EUR</option>
                  <option value="4 kg">&nbsp;&nbsp;4 kg - 45.10 EUR</option>
                  <option value="5 kg">&nbsp;&nbsp;5 kg - 51.90 EUR</option>
                  <option value="6 kg">&nbsp;&nbsp;6 kg - 62.80 EUR</option>
                  <option value="7 kg">&nbsp;&nbsp;7 kg - 69.60 EUR</option>
                  <option value="8 kg">&nbsp;&nbsp;8 kg - 76.40 EUR</option>
                  <option value="9 kg">&nbsp;&nbsp;9 kg - 83.20 EUR</option>
                  <option value="10 kg">10 kg - 90.00 EUR</option>
                  <option value="15 kg">15 kg - 129.90 EUR</option>
                </select>

                <input type="hidden" name="currency_code" value="EUR" />
                <input type="hidden" name="option_select0" value="3 kg" />
                <input type="hidden" name="option_amount0" value="38.30" />
                <input type="hidden" name="option_select1" value="4 kg" />
                <input type="hidden" name="option_amount1" value="45.10" />
                <input type="hidden" name="option_select2" value="5 kg" />
                <input type="hidden" name="option_amount2" value="51.90" />
                <input type="hidden" name="option_select3" value="6 kg" />
                <input type="hidden" name="option_amount3" value="62.80" />
                <input type="hidden" name="option_select4" value="7 kg" />
                <input type="hidden" name="option_amount4" value="69.60" />
                <input type="hidden" name="option_select5" value="8 kg" />
                <input type="hidden" name="option_amount5" value="76.40" />
                <input type="hidden" name="option_select6" value="9 kg" />
                <input type="hidden" name="option_amount6" value="83.20" />
                <input type="hidden" name="option_select7" value="10 kg" />
                <input type="hidden" name="option_amount7" value="90.00" />
                <input type="hidden" name="option_select8" value="15 kg" />
                <input type="hidden" name="option_amount8" value="129.90" />
                <input type="hidden" name="option_index" value="0" />

                <img
                  alt=""
                  border="0"
                  src="https://www.paypalobjects.com/fr_XC/i/scr/pixel.gif"
                  width="14"
                  height="1"
                />

                <input
                  type="image"
                  src="https://www.paypalobjects.com/fr_FR/FR/i/btn/btn_cart_SM.gif"
                  border="0"
                  name="submit"
                  alt="PayPal, le réflexe sécurité pour payer en ligne"
                />
                <img
                  alt=""
                  border="0"
                  src="https://www.paypalobjects.com/fr_XC/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
            </div>
            <div
              id="calibre05"
              className="flex flex-col md:flex-row items-center gap-3 rounded bg-white p-3 px-5 justify-between"
            >
              <h4 className="font-bold">Calibre 5</h4>
              <form
                target="paypal"
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                className="flex items-center gap-3"
              >
                <input type="hidden" name="cmd" value="_cart" />
                <input
                  type="hidden"
                  name="business"
                  value="huitresdesterec@gmail.com"
                />
                <input type="hidden" name="lc" value="FR" />
                <input type="hidden" name="item_name" value="CREUSES NR 05" />
                <input type="hidden" name="item_number" value="CR05" />
                <input type="hidden" name="button_subtype" value="products" />
                <input type="hidden" name="no_note" value="0" />
                <input type="hidden" name="currency_code" value="EUR" />
                <input type="hidden" name="add" value="1" />
                <input
                  type="hidden"
                  name="bn"
                  value="PP-ShopCartBF:btn_cart_SM.gif:NonHostedGuest"
                />
                <input
                  name="return"
                  type="hidden"
                  value="http://www.huitres-de-sterec.fr/chronopost.html"
                />
                <input
                  name="cancel_return"
                  type="hidden"
                  value="http://www.huitres-de-sterec.fr/chronopost.html"
                />

                <input type="hidden" name="on0" value="CREUSES NR05" />

                <select name="os0">
                  <option value="3 kg">&nbsp;&nbsp;3 kg - 37.10 EUR</option>
                  <option value="4 kg">&nbsp;&nbsp;4 kg - 43.50 EUR</option>
                  <option value="5 kg">&nbsp;&nbsp;5 kg - 49.90 EUR</option>
                  <option value="6 kg">&nbsp;&nbsp;6 kg - 60.40 EUR</option>
                  <option value="7 kg">&nbsp;&nbsp;7 kg - 66.80 EUR</option>
                  <option value="8 kg">&nbsp;&nbsp;8 kg - 73.20 EUR</option>
                  <option value="9 kg">&nbsp;&nbsp;9 kg - 79.60 EUR</option>
                  <option value="10 kg">10 kg - 86.00 EUR</option>
                  <option value="15 kg">15 kg - 123.90 EUR</option>
                </select>

                <input type="hidden" name="currency_code" value="EUR" />
                <input type="hidden" name="option_select0" value="3 kg" />
                <input type="hidden" name="option_amount0" value="37.10" />
                <input type="hidden" name="option_select1" value="4 kg" />
                <input type="hidden" name="option_amount1" value="43.50" />
                <input type="hidden" name="option_select2" value="5 kg" />
                <input type="hidden" name="option_amount2" value="49.90" />
                <input type="hidden" name="option_select3" value="6 kg" />
                <input type="hidden" name="option_amount3" value="60.40" />
                <input type="hidden" name="option_select4" value="7 kg" />
                <input type="hidden" name="option_amount4" value="66.80" />
                <input type="hidden" name="option_select5" value="8 kg" />
                <input type="hidden" name="option_amount5" value="73.20" />
                <input type="hidden" name="option_select6" value="9 kg" />
                <input type="hidden" name="option_amount6" value="79.60" />
                <input type="hidden" name="option_select7" value="10 kg" />
                <input type="hidden" name="option_amount7" value="86.00" />
                <input type="hidden" name="option_select8" value="15 kg" />
                <input type="hidden" name="option_amount8" value="123.90" />
                <input type="hidden" name="option_index" value="0" />

                <img
                  alt=""
                  border="0"
                  src="https://www.paypalobjects.com/fr_XC/i/scr/pixel.gif"
                  width="14"
                  height="1"
                />

                <input
                  type="image"
                  src="https://www.paypalobjects.com/fr_FR/FR/i/btn/btn_cart_SM.gif"
                  border="0"
                  name="submit"
                  alt="PayPal, le réflexe sécurité pour payer en ligne"
                />
                <img
                  alt=""
                  border="0"
                  src="https://www.paypalobjects.com/fr_XC/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
              </form>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3 justify-between mt-8 ">
              <p className="text-main">Une demande ? Un problème ?</p>
              <a
                href="tel:+33298724443"
                className="border-2 flex gap-2 border-main rounded-md bg-white bg-opacity-10 p-4 py-2 text-main hover:bg-main hover:text-white font-round"
              >
                <PhoneIcon className="h-5" /> 02 98 72 44 43
              </a>
            </div>
          </div>
        </div>
        <p className="mt-24 italic text-sm md:p-0 px-5">
          Toutes les informations collectées sont confidentielles. Conformément
          à l'article 34 Loi Informatique et Libertés du 06/01/1978, vous
          disposez d'un droit d'accès et de modifications des données vous
          concernant.
        </p>
      </Container>
      <Footer />
    </>
  );
}

export default CommandePage;

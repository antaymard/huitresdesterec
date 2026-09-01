function CartButton() {
  return (
    <form
      name="_xclick"
      target="paypal"
      action="https://www.paypal.com/fr/cgi-bin/webscr"
      method="post"
    >
      <input type="hidden" name="cmd" value="_cart" />
      <input type="hidden" name="business" value="huitresdesterec@gmail.com" />
      <input
        type="image"
        src="http://www.huitres-de-sterec.fr/bouton/panier.png"
        border="0"
        className="h-12"
        name="submit"
        alt="Effectuez vos paiements via PayPal : une solution rapide, gratuite et sécurisée"
      />
      <input type="hidden" name="display" value="1" />
    </form>
  );
}
export default CartButton;

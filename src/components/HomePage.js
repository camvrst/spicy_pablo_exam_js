function HomePage({ toggleVisibility }) {
  return (
    <section
      className="container mx-auto md:w-4/6 homepage-section sm:w-full"
      id="homepage"
    >
      <h1 className="homepage-title">Bienvenue chez Maison Salvi !</h1>
      <div className="flex justify-center flex-wrap homepage-centered">
        <div className="flex flex-col justify-around items-start md:w-1/2 sm:w-full homepage-left-text">
          <img
            className="img-curry"
            src="./images/curry_de_legume.jpg"
            alt="Curry de légumes"
          />

          <p>
            La Maison Salvi vous offre chaque jour le choix entre un menu crané
            ou végé à 10 euros (livraison incluse, sur Rennes uniquement).
          </p>
          <p>
            Des produits sains et simples, de saison, mis en musique et en
            couleur par le chef Pablo. <br /> Qui d'autre aurait ou réconcilier
            la famille autour d'une idée aussi simple et chaleureuse ?
          </p>
          <p> Il est temps de passer commande ! </p>
          <button onClick={() => toggleVisibility(true)}> Menu du Jour </button>
        </div>
        <div className="md:w-1/2 sm:w-full">
          <img
            src="./images/cuistot1.jpg"
            alt="Chef Pablo"
            className="chef-img"
          />
        </div>
      </div>
    </section>
  );
}

export default HomePage;

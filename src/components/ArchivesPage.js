function ArchivesPage({ toggleVisibility }) {
  return (
    <section className="w-full archives-section" id="archivesPage">
      <div className="flex justify-around md:w-4/6  sm:w-full mx-auto archives-centered">
        <div className="md:w-3/6 sm:w-full flex flex-col justify-around items-start">
          <h2>
            <span>Archives</span> <br /> Gustatives
          </h2>
          <p>
            Un menu de la Maison Salvi vous a séduit ? Vous refusez de croire
            qu'il ne reviendra pas à la carte ?
          </p>
          <p>
            Je vous propose de passer en revue les recettes, et donner votre
            avis. Choisissez votre favori !
          </p>
          <button onClick={() => toggleVisibility(true)}>Voter</button>
        </div>
        <div className="md:w-3/6 sm:w-full suricate">
          <img className="splash-img" src="./images/splash.svg" alt="Splash" />

          <img
            className="suricate-img"
            src="./images/suri02.jpg"
            alt="Suricate"
          />
        </div>
      </div>
      <div className="caroussel flex w-4/6 mx-auto">
        <div className="slides">
          <div className="slide-1">
            <img src="./images/1.jpg" alt="Plat numéro 1" />
          </div>
          <div className="slide-1">
            <img src="./images/2.jpg" alt="Plat numéro 2" />
          </div>
          <div className="slide-1">
            <img src="./images/3.jpg" alt="Plat numéro 3" />
          </div>
          <div className="slide-1">
            <img src="./images/4.jpg" alt="Plat numéro 4" />
          </div>
          <div className="slide-1">
            <img src="./images/5.jpg" alt="Plat numéro 5" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default ArchivesPage;

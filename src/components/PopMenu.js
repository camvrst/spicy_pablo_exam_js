import menus from "../data/menus";

function PopMenu({ title, bgColor, visibility, toggleVisibility }) {
  return (
    <div
      className={`md:w-4/6 sm:w-full rounded-lg shadow-lg bg-white my-3 modal pop-up-menu ${
        visibility ? "block" : "hidden"
      }`}
    >
      <div
        className={`flex justify-between border-b border-gray-100 px-5 py-4 ${bgColor}`}
      >
        <div>
          <span className="font-bold text-gray-700 text-lg">{title}</span>
        </div>
        <div>
          <button
            onClick={() => toggleVisibility(false)}
            className="text-white hover:bg-white hover:text-red-600 transition duration-150 bg-red-800 mr-1 rounded text-sm py-2 px-3 "
          >
            Fermer
          </button>
        </div>
      </div>

      <div className="px-10 py-5 text-gray-600 pop-content">
        <h3>
          {menus.map((m, index) => {
            const { date } = m;
            return index === 0 ? date : "";
          })}
        </h3>

        <p>
          Entrées : <br />
          {menus.map((m, index) => {
            const { entrees } = m;
            return index === 0 ? (
              <ul>
                <li>{entrees[0]} </li>
                <li>{entrees[1]}</li>
              </ul>
            ) : (
              ""
            );
          })}
        </p>

        <p>
          Plats : <br />
          {menus.map((m, index) => {
            const { plats } = m;
            return index === 0 ? (
              <ul>
                <li>{plats[0]} </li>
                <li>{plats[1]}</li>
              </ul>
            ) : (
              ""
            );
          })}
        </p>

        <p>
          Desserts : <br />
          {menus.map((m, index) => {
            const { desserts } = m;
            return index === 0 ? (
              <ul>
                <li>{desserts[0]} </li>
                <li>{desserts[1]}</li>
              </ul>
            ) : (
              ""
            );
          })}
        </p>
        <p className="whatsapp-cmd flex items-center mt-2">
          <i className="fab fa-whatsapp-square" />
          Commandez directement par What's App au : 06 66 666 666.
        </p>
      </div>
    </div>
  );
}

export default PopMenu;

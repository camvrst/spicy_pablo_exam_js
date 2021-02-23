import menus from "../data/menus";
import getReverseArray from "../helpers/getReverseArray";

function PopVoter({ title, bgColor, visibility, toggleVisibility }) {
  const menusReversed = getReverseArray(menus);
  return (
    <div
      className={`md:w-4/6 sm:w-full rounded-lg shadow-lg bg-white my-3 modal pop-up-voter ${
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
        <p>
          Choisir une date : <br />
          <select name="dates">
            {menusReversed.map((m) => {
              const { date } = m;
              return (
                <option
                  value={date
                    .replace(/\s/g, "")
                    .replace(/é/g, "e")
                    .replace(/è/g, "e")}
                >
                  {date}
                </option>
              );
            })}
          </select>
        </p>
        <div className="menu-content">
          <p>
            Entrées : <br />
            {menusReversed.map((m, index) => {
              const { entrees } = m;
              return index === 0 ? (
                <ul>
                  <li>
                    <input type="checkbox" name="entree0" checked />
                    <label htmlFor="entree0">{entrees[0]}</label>
                  </li>
                  <li>
                    <input type="checkbox" name="entree1" />
                    <label htmlFor="entree">{entrees[1]}</label>
                  </li>
                </ul>
              ) : (
                ""
              );
            })}
          </p>

          <p>
            Plats : <br />
            {menusReversed.map((m, index) => {
              const { plats } = m;
              return index === 0 ? (
                <ul>
                  <li>
                    <input type="checkbox" name="plat0" />
                    <label htmlFor="plat0">{plats[0]}</label>
                  </li>
                  <li>
                    <input type="checkbox" name="plat1" checked />
                    <label htmlFor="plat1">{plats[1]}</label>
                  </li>
                </ul>
              ) : (
                ""
              );
            })}
          </p>

          <p>
            Desserts : <br />
            {menusReversed.map((m, index) => {
              const { desserts } = m;
              return index === 0 ? (
                <ul>
                  <li>
                    <input type="checkbox" name="dessert0" />
                    <label htmlFor="dessert0">{desserts[0]}</label>
                  </li>
                  <li>
                    <input type="checkbox" name="dessert1" checked />
                    <label htmlFor="dessert1">{desserts[1]}</label>
                  </li>
                </ul>
              ) : (
                ""
              );
            })}
          </p>
        </div>
        <div className="px-5 py-4 flex justify-end">
          <button
            className="bg-yellow-500 mr-1 rounded text-sm py-2 px-3 text-white hover:bg-yellow-600 transition duration-150"
            onClick={() => toggleVisibility(false)}
          >
            {" "}
            J'en veux encore !{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopVoter;

import { useSelector } from "react-redux";
import { selectedPokemon } from "../slices/pokemonSlice";

export default function GeneralInformation() {
  const {
    pokemon: { height, weight, types, abilities, base_experience },
  } = useSelector(selectedPokemon);
  return (
    <div className="general-information">
      <h2 className="section-name"> General Information</h2>
      <table>
        <tbody>
          <tr>
            <th>Base Exp</th>
            <td>
              <span className="information-details">{base_experience}</span>
            </td>
          </tr>
          <tr>
            <th>Abilities </th>
            <td>
              {" "}
              <span className="information-details">
                {" "}
                {abilities.map(({ ability: { name } }) => name + " ")}
              </span>
            </td>
          </tr>
          <tr>
            <th>Type </th>
            <td>
              {" "}
              <span className="information-details">
                {types.map(({ type: { name } }) => name + " ")}
              </span>{" "}
            </td>
          </tr>
          <tr>
            <th>Height </th>
            <td>
              {" "}
              <span className="information-details">{height / 10} m</span>{" "}
            </td>
          </tr>
          <tr>
            <th>Weight </th>
            <td>
              <span className="information-details">{weight / 10} kg</span>{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

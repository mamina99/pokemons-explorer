import { useSelector } from "react-redux";
import { selectedPokemon } from "../slices/pokemonSlice";

export default function BaseStates() {
  const {
    pokemon: { stats },
  } = useSelector(selectedPokemon);
  return (
    <div className="stats-container">
      <h2 className="section-name">Statistics </h2>
      <table>
        <tbody>
          {stats.map(({ base_stat, stat: { name } }, index) => {
            return (
              <tr key={index}>
                <th>{name}</th>
                <td>
                  <span className="information-details">{base_stat}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

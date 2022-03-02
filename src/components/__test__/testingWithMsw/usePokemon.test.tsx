import { rest } from "msw";
import * as React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import {store} from "../../../store/store";
import { server } from "../../../setupTests";
import { createWrapper, renderWithClient } from "../utils/utils";
import PokemonMain from "../../PokemonMain"
import usePokemon  from "../../hooks/usePokemons";

test.skip("failure query", async () => {
  server.use(
    rest.get("https://pokeapi.co/api/v2/pokemon?offest=20", (req, res, ctx) => {
      return res(
        ctx.status(500)
      );
    })
  );
//   const { result, waitFor } = renderHook(() => usePokemon(), {
//     wrapper: createWrapper(),
//   });

  const view = renderWithClient(<Provider store={store}><PokemonMain /></Provider>);

  expect(await view.findByText(/error/i)).toBeInTheDocument();
//   await waitFor(() => result.current.isError);

//   expect(result.current.error).toBeDefined();
});

test.skip("loading query", async () => {
    server.use(
      rest.get("https://pokeapi.co/api/v2/pokemon?offest=20", (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            isLoading: true,
          })
        );
      })
    );
    // const { result, waitFor } = renderHook(() => usePokemon(), {
    //   wrapper: createWrapper(),
    // });
    const view = renderWithClient(<Provider store={store}><PokemonMain /></Provider>);
    expect(await view.findByTestId(/loading/i)).toBeInTheDocument();
    // expect(result.current.isLoading).toBe(true);
  });

// test.only("succes query", async () => {
//       server.use(
//       rest.get("https://pokeapi.co/api/v2/*", (req, res, ctx) => {
//         return res(
//           ctx.status(200),
//           ctx.json({
//             results: [{url: "mamine"}]
//           })
//         );
//       })
//     );
//       server.use(
//       rest.get("mamine", async (req, res, ctx) => {
//         return res(
//           ctx.status(200),
//           ctx.json({
//             data: [{name: "pikachu"}]
//           })
//         );
//       })
//     );
//   const { result, waitFor, waitForNextUpdate } = renderHook(() => usePokemon(), {
//     wrapper: createWrapper(),
//   });

// //   console.log = jest.fn();
// //   result.current.pokemons;
//   await waitFor(() => result.current.isSuccess);
// // await waitForNextUpdate()

// console.log(result.current);
//   expect( result.current.data.pages[0].results).toBe("jj");
// });

// jest.mock("../hooks/usePokemons");

// const useMock = mocked(usePokemon);

// test.only("a test", async () => {

//     useMock.mockRe
//     const { result, waitFor, waitForNextUpdate } = renderHook(() => usePokemon(), {
//         wrapper: createWrapper(),
//       });

//         // aw waitFor(() => result.current.isSuccess);
//       console.log(result.current);
//   expect( result.current.pokemons).toBe("jj");

// })
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("https://pokeapi.co/api/v2/pokemon?offest=20", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: ["test"],
      })
    );
  }),
  rest.get("https://pokeapi.co/api/v2/pokemon/2", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "mamine",
      })
    );
  })
);
// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
// afterEach(() => server.resetHandlers());
beforeEach(() => {
  jest.useFakeTimers();
  server.resetHandlers();
});
// Disable API mocking after the tests are done.
afterAll(() => server.close());

export { server, rest };

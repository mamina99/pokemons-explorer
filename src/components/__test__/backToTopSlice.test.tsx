import {store} from "../../store/store";
import { showButton, hideButton } from "../../slices/backToTopSlice";

test("check that the init state is false", () => {
    let state = store.getState().backToTop;
    expect(state.visible).toBe(false);
})

test("check that the visibility turn to true", () => {
    store.dispatch(showButton());
    let state = store.getState().backToTop;
    expect(state.visible).toBe(true);
})

test("check that the visibility turn to false", () => {
    store.dispatch(hideButton());
    let state = store.getState().backToTop;
    expect(state.visible).toBe(false);
})



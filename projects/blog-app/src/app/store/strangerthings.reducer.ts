import { createReducer, on } from "@ngrx/store";
import { loadCharactersSuccess } from "./strangerthings.actions";
import { AppState } from "./app.state";

const initialState: AppState = {
    characters: []
};

export const strangerThingsReducer = createReducer(
    initialState,
    on(
        loadCharactersSuccess, 
        (state, {characters}) => ({ 
            ...state, 
            characters: characters
        })
    )
);
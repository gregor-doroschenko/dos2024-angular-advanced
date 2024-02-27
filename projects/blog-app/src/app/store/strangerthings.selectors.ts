import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface StrangerThingsState {
    name: string;
    gender: string;
    born: string;
    _id: string;
}

export interface AppState {
    characters: StrangerThingsState[];
}

export const selectCharacters = (state: AppState) => state.characters;

export const selectCharacter = (_id: string) => (state: AppState) => state.characters.find(character => character._id === _id);

export const selectCharactersState =
  createFeatureSelector<AppState>('characters');

export const selectAllCustomers = createSelector(
    selectCharactersState,
  (state: AppState) => state.characters,
);
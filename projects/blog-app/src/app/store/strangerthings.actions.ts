import { createAction, props } from "@ngrx/store";
import { StrangerThingsState } from "./strangerthings.selectors";

export const loadCharacters = createAction('[StrangerThings] Load Characters');
export const loadCharactersSuccess = createAction('[StrangerThings] Load Characters Success', props<{ characters: StrangerThingsState[] }>());
export const loadCharactersFailure = createAction('[StrangerThings] Load Characters Failure');
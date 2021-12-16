import { createAction, createReducer, on } from "@ngrx/store";

enum ActionTypes {
  SetUpdateNavTrue = 'SetUpdateNavTrue',
  SetUpdateEventsRequestTrue = 'SetUpdateEventsRequestTrue',
}

export const setUpdateNavTrue = createAction(
  ActionTypes.SetUpdateNavTrue
)

export const setUpdateEventsRequestTrue = createAction(
  ActionTypes.SetUpdateEventsRequestTrue
)

const INITIAL_STATE = {
  updateNavRequest: false,
  updateEventsRequest: false
}

export const reducer = createReducer(
  INITIAL_STATE,
  on(setUpdateNavTrue, state => ({
    ...state,
    updateNavRequest: true
  })),
  on(setUpdateEventsRequestTrue, state => ({
    ...state,
    updateEventsRequest: true
  }))
)

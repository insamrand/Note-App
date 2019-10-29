import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import NoteReducer from "./reducers/note.reducer";
import { reducer as formReducer } from "redux-form";

export default function configureStore() {
  const store = createStore(
    combineReducers({
      note: NoteReducer,
      form: formReducer
    })
  );
  return store;
}

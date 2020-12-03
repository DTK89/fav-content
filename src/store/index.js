import { createStore } from 'redux';
import notesApp from 'reducers'; // Can name import a freely but in the end it it rootReducer

const store = createStore(notesApp);

export default store;

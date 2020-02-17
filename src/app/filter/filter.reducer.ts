import * as fromFiltro from './filter.actions';

const initialState: fromFiltro.filtrosValidos = 'todos';

export function filterReducer( state = initialState, action: fromFiltro.acciones ) {
  switch (action.type) {
    case fromFiltro.SET_FILTER:
      return action.filter;

    default:
      return state;
  }
}

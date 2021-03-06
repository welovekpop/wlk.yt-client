import _extends from "@babel/runtime/helpers/builtin/extends";
import { SHOW_IMPORT_PANEL, SELECT_PLAYLIST, SET_SEARCH_SOURCE, SHOW_SEARCH_RESULTS, SEARCH_START, SEARCH_COMPLETE, SEARCH_DELETE } from '../constants/ActionTypes';
import { IDLE, LOADING, LOADED } from '../constants/LoadingStates';
var initialState = {
  sourceType: 'youtube',
  query: null,
  showResults: false,
  results: {},
  loadingState: IDLE
};
export default function reduce(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  if (action === void 0) {
    action = {};
  }

  var _action = action,
      type = _action.type,
      payload = _action.payload;

  switch (type) {
    case SHOW_SEARCH_RESULTS:
      return _extends({}, state, {
        showResults: true
      });

    case SEARCH_START:
      return _extends({}, state, {
        query: payload.query,
        results: {},
        loadingState: LOADING
      });

    case SEARCH_COMPLETE:
      return _extends({}, state, {
        results: payload.results,
        loadingState: LOADED
      });

    case SET_SEARCH_SOURCE:
      return _extends({}, state, {
        sourceType: payload.source
      });

    case SEARCH_DELETE:
      return _extends({}, state, {
        query: null,
        loadingState: IDLE,
        results: {},
        showResults: false
      });

    case SELECT_PLAYLIST:
    case SHOW_IMPORT_PANEL:
      return _extends({}, state, {
        showResults: false
      });

    default:
      return state;
  }
}
//# sourceMappingURL=mediaSearch.js.map

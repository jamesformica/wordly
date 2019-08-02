export const DEFAULT_STATE = {
  isEditing: true,
  title: '',
  narative: '',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'TITLE_UPDATE':
      return { ...state, title: action.title }
    case 'NARATIVE_UPDATE':
      return { ...state, narative: action.narative }
    case 'TOGGLE_EDIT':
      return { ...state, isEditing: action.isEditing || !state.isEditing }
    default:
      return state
  }
}


export default reducer

export const toggleEditing = isEditing => ({
  type: 'TOGGLE_EDIT',
  ...(isEditing && { isEditing }),
})

export const updateTitle = title => ({
  type: 'TITLE_UPDATE',
  title,
})

export const updateNarative = narative => ({
  type: 'NARATIVE_UPDATE',
  narative,
})

export const setShape = shape => ({
  type: 'SET_SHAPE',
  shape,
})

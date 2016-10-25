export const autoState = () => {
  return {
    type: 'AUTO',
  }
}

export const next = () => {
  return {
    type: 'NEXTSTATE',
  }
}
export const random = (val) => {
  return {
    type: 'RANDOM',
    payload:val
  }
}
export const reset = () => {
  return {
    type: 'RESET',
  }
}
export const toggle = (val) => {
  return {
    type: 'TOGGLE',
    payload:val

  }
}

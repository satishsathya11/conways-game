export const opratorFun = (oprator) => {
  return {
    type: 'OPRATORFUN',
    payload:oprator
  }
}

export const equal = () => {
  return {
    type: 'EQUAL',
  }
}
export const clearDisplay = (val) => {
  return {
    type: 'CLEAR',
    payload:val
  }
}
export const clickNum = (num) => {
  return {
    type: 'CLICK_NUM',
    payload:num
  }
}
export const backspace = () => {
  return {
    type: 'BACK'
  }
}
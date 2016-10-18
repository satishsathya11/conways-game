export const addition = (oprator) => {
  return {
    type: 'ADDITION',
    payload:oprator
  }
}

export const substraction = (oprator) => {
  return {
    type: 'SUBSTRACTION',
    payload:oprator
  }
}

export const multiplication = (oprator) => {
  return {
    type: 'MULTIPLICATION',
    payload:oprator
  }
}

export const divide = (oprator) => {
  return {
    type: 'DIVIDE',
    payload:oprator
  }
}

export const equal = (oprator) => {
  return {
    type: 'EQUAL',
    payload:oprator
  }
}
export const clear = (oprator) => {
  return {
    type: 'CLEAR',
    payload:oprator
  }
}
export const clickNum = (num) => {
  return {
    type: 'CLICK_NUM',
    payload:num
  }
}
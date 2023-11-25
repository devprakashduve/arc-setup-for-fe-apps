export const addClass = (param: string) => {
  const allClassess: string[] = []
  param.split(',').map((className: string) => allClassess.push(className))
  return allClassess.join(' ')
}

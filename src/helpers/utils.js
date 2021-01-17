export const range = (start, end) => {
  return [...Array(end).keys()].map(elem => elem + start)
}

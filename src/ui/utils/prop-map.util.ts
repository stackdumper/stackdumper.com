export const propMap = (prop: string, keyMap: { [key: string]: string }) => (
  props: any,
) =>
  Object.keys(keyMap).reduce((acc, cur) => {
    if (props[prop] === cur) return acc + keyMap[cur]
    return acc
  }, '')

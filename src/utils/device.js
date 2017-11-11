export const isTouchDevice = () => (
  typeof window.ontouchstart !== 'undefined'
)

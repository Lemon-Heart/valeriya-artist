export const megabitToByte = value => {
  if (!value || value < 0) return
  return value * 1024 * 1024
}

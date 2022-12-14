//firebase uses seconds as a date
export const formatDate = (date: number | undefined) => {
  if (!date) return;

  return new Date(date * 1000).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}
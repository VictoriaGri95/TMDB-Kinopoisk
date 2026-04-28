export const getRating = (rating: number) => {
  return Math.round(rating * 10) / 10;
}
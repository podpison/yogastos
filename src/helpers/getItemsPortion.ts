export const getItemsPortion = (items: any[], currentPortion: number, itemsPerPortion: number) => {
  return items.slice(0, (currentPortion + 1) * itemsPerPortion);
}
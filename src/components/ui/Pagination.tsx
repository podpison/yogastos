import { Button } from './Button';

type Props = {
  itemsLength: number
  itemsPerPortion: number
  currentPortion: number
  setCurrentPortion: React.Dispatch<React.SetStateAction<number>>
}

export const Pagination: React.FC<Props> = ({ currentPortion, itemsLength, itemsPerPortion, setCurrentPortion }) => {
  let isOnlyOnePortion = Math.floor(itemsLength / itemsPerPortion) === 0
  let isLastPortion = currentPortion === Math.floor(itemsLength / itemsPerPortion);

  if ((!isLastPortion && !isOnlyOnePortion) && !isOnlyOnePortion) {
    return <Button
      className="mt-8 mx-auto sm:mt-12 md:mt-16 lg:mt-24 xl:mt-28"
      onClick={() => setCurrentPortion(prev => prev + 1)}
      xsmWFit
    >
      Load More
    </Button>
  }
  return <></>
};
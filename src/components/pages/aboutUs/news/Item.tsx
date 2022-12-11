import { NewsItemType } from "../../../../redux/reducers/static";

export const Item: React.FC<NewsItemType> = ({ img, heading, description, createdAt }) => {
  let dateToShow = new Date(createdAt * 1000).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })

  return <div className="flexCol shadow-pinkShadow flex-1 h-full gap-2 p-3 bg-white text-darkBlue rounded-2xl sm:gap-3 sm:p-4 lg:p-6 lg:gap-4">
    <img className="w-full h-max max-w-[350px] max-h-[350px] rounded-lg" src={img} alt='news' />
    <h6 className="">{heading}</h6>
    <p className="text1">{description}</p>
    <time className="block mt-auto text-grey text-sm sm:text-base">{dateToShow}</time>
  </div>
};
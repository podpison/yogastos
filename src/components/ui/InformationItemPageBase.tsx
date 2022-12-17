import { ArrowBack } from "./ArrowBack";

type Props = {
  to: string
  heading: string | undefined
  dateToShow: string | undefined
  children: React.ReactNode
  description?: string
}

export const InformationItemPageBase: React.FC<Props> = ({ children, dateToShow, heading, to, description }) => {
  return <div className="">
    <ArrowBack to={to} />
    <time className="text1 block mt-4 sm:mt-7 md:mt-9">{dateToShow}</time>
    <h4 className='mt-4'>{heading}</h4>
    {description && <p className="mt-4 text1">{description}</p>}
    <div className="flexCol gap-y-7 mt-6 sm:mt-10 lg:mt-12">
      {children}
    </div>
  </div>
};
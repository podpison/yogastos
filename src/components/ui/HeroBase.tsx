import decor1 from './../../assets/img/ui/heroBase/1.svg';
import decor2 from './../../assets/img/decor/1.svg';

type Props = {
  heroImg: string
  description: string
  heading: string
  children: React.ReactNode
  isChildrenToBottom?: boolean
  decor?: boolean
}

export const HeroBase: React.FC<Props> = ({ heading, description, heroImg, children, isChildrenToBottom = true, decor }) => {

  return <section className='relative flexCol gap-y-8 lg:grid lg:grid-cols-2 lg:items-center lg:justify-items-end lg:gap-x-10'>
    <img className='absolute left-0 top-0 -z-10' src={decor1} alt='decor' />
    <div className='flexCol gap-y-5'>
      {!isChildrenToBottom && children}
      <div className='flexCol gap-y-2 lg:gap-y-4 xl:gap-y-8'>
        <p className='bigText'>{heading}</p>
        <p className='text1 min-lg:text-justify'>{description}</p>
      </div>
      {isChildrenToBottom && children}
    </div>
    <div className='relative w-full'>
      <img className='w-full' src={heroImg} alt='hero' />
      {decor && <img className='absolute -z-10 -bottom-10 -left-11 max-lg:hidden' src={decor2} alt='decor 2' />}    
    </div>
  </section>
};
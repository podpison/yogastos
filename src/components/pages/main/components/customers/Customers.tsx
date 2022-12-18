import './customers.scss';
import Slider from "react-slick";
import { useStaticItems } from '../../../../../hooks/useStaticItems';
import { useSelector } from 'react-redux';
import { selectCustomerItems } from '../../../../../redux/selectors';

const sliderSettings = {
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ],
};

export const Customers: React.FC = () => {
  useStaticItems('customers');
  let items = useSelector(selectCustomerItems);

  let Items = items.map((i, index) => {
    return <a className='slider__item transition-opacity hover:opacity-90' href={i.link} key={index} target="_blank" rel="noopener noreferrer">
      <img className="mx-auto" src={i.src} alt='customer' />
    </a>
  })
  let Skeleton = [...Array(4).keys()].map(i => <div className='skeleton h-[50px]' key={i} />);

  return <section className="componentsMargin">
    <p className="text-justify sm:text-center text-xl lg:text-[22px]">Thousands of teams worldwide are using Yogi</p>
    <Slider className="slider mt-5 sm:mt-7 md:mt-12" {...sliderSettings}>
      {Items.length !== 0 && Items}
      {Items.length === 0 && Skeleton}
    </Slider>
  </section>
};
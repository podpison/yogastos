import './customers.scss';
import Slider from "react-slick";
import img1 from './../../../../../assets/img/pages/main/huawei.png';
import img2 from './../../../../../assets/img/pages/main/microsoft.png';
import img3 from './../../../../../assets/img/pages/main/Yahoo.png';
import img4 from './../../../../../assets/img/pages/main/google.png';

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
  let items = [
    {
      src: img1,
      link: 'https://www.google.com/'
    },
    {
      src: img2,
      link: 'https://www.google.com/'
    },
    {
      src: img3,
      link: 'https://www.google.com/'
    },
    {
      src: img4,
      link: 'https://www.google.com/'
    },
    {
      src: img1,
      link: 'https://www.google.com/'
    },
    {
      src: img2,
      link: 'https://www.google.com/'
    },
    {
      src: img3,
      link: 'https://www.google.com/'
    },
    {
      src: img4,
      link: 'https://www.google.com/'
    },
  ];

  let Items = items.map((i, index) => {
    return <a className='slider__item transition-opacity hover:opacity-90' href={i.link} key={index} target="_blank" rel="noopener noreferrer">
      <img className="mx-auto" src={i.src} alt='customer' />
    </a>
  })

  return <section className="componentsMargin">
    <h4 className="text-justify sm:text-center">Thousands of teams worldwide are using Hugi</h4>
    <Slider className="slider mt-5 sm:mt-7 md:mt-12" {...sliderSettings}>
      {Items}
    </Slider>
  </section>
};
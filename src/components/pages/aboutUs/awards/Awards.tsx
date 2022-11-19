import award1Img from './../../../../assets/img/pages/aboutUs/awards/1.webp';
import award2Img from './../../../../assets/img/pages/aboutUs/awards/2.webp';
import award3Img from './../../../../assets/img/pages/aboutUs/awards/3.webp';
import { Award } from './Award';

const awards = [
  {
    heading: 'Awards',
    description: 'See product evaluations from third-party analysts.',
    img: award1Img,
  },
  {
    heading: 'Company',
    description: 'Access the latest press releases and other resources for the media.',
    img: award2Img,
  },
  {
    heading: 'Works',
    description: 'Inclusion at McAfee is about the power of working together and creating a culture where all voices are valued.',
    img: award3Img,
  },
]

export const Awards: React.FC = () => {
  const Awards = awards.map((a, index) => <Award {...a} key={index} />)
  
  return <section>

  </section>
};
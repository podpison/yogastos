import { InformationPageBase } from './../../../ui/informationPageBase/InformationPageBase';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { InformationItemPageBase } from '../../../ui/InformationItemPageBase';
import { formatDate } from '../../../../helpers/formatDate';
import { Item } from './Item';
import { Button } from '../../../ui/Button';
import { selectCareerItems } from '../../../../redux/selectors';

const staticItems = [
  {
    heading: 'Our Process of Hiring',
    items: [
      'You apply for the job by sending us your CV or Resume.',
      'Share your best portfolio work related to UI UX Design.',
      'We’ll take 2-3 Business Days to process your job application.',
      'If you are short-listed, we’ll get back to you and send you an email detailing about your first interview which will be in written format.',
      'If you are short-listed for the second time, we’ll invite you for physical interview at our office or it can be done over zoom call if it’s a remote position.',
    ]
  },
  {
    heading: 'Apply Now',
    items: [
      'Apply now by sending your CV or Resume along with your best portfolio work relating to UI UX Design.',
      'We look forward to having you on our team!'
    ]
  },
]

export const CareersItemPage: React.FC = () => {
  let { id } = useParams();
  let items = useSelector(selectCareerItems);

  let currentItem = items.find(i => i.id === Number(id));
  let dateToShow = formatDate(currentItem?.createdAt)
  let content = currentItem?.content.map((i, index) => <Item {...i} key={index} />)

  return <InformationPageBase
    heading='Yogi Careers Opportunities'
    headingDescription='Shop, stream, bank and browse the web design & dev. by an industry-leader for all your devices.'
    heroSign='Join Yogi.'
    hero={currentItem?.img}
    recentItems={items}
    isNotFoundPage={!currentItem}
  >
    <div>
      <InformationItemPageBase
        to="/careers"
        dateToShow={dateToShow}
        heading={currentItem?.heading}
        description={currentItem?.description}
      >
        {content}
        <Item {...staticItems[0]} />
        <Item {...staticItems[1]} disableDots />
      </InformationItemPageBase>
      <Link to={`/contactUs?name=${currentItem?.heading}`}>
        <Button className='mt-8 mx-auto sm:mt-12 md:mt-16 lg:mt-24 xl:mt-28' isDarkBlue xsmWFit>Apply now</Button>
      </Link>
    </div>
  </InformationPageBase>
};
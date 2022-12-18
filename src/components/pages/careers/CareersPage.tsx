import { InformationPageBase } from './../../ui/informationPageBase/InformationPageBase';
import hero from './../../../assets/img/pages/careers/hero.webp';
import { Item } from './item/Item';
import { Pagination } from '../../ui/Pagination';
import { useState } from 'react';
import { getItemsPortion } from '../../../helpers/getItemsPortion';
import { selectCareerItems } from '../../../redux/selectors';
import { useSelector } from 'react-redux';
import { useScrollTop } from '../../../hooks/useScrollTop';
import { Skeleton } from '../../ui/Skeleton';

const itemsPerPortion = 3;

export const CareersPage: React.FC = () => {
  useScrollTop();
  const [currentPortion, setCurrentPortion] = useState(0);
  let items = useSelector(selectCareerItems);

  let itemsPortion = getItemsPortion(items, currentPortion, itemsPerPortion);
  const Items = itemsPortion.map(i => <Item {...i} key={i.id} />)

  return <InformationPageBase
    heading='Yogi Careers Opportunities'
    headingDescription='Shop, stream, bank and browse the web design & dev. by an industry-leader for all your devices.'
    heroSign='Careers at Yogi.'
    hero={hero}
  >
    <div>
      <h4>What’s Career Opportunities at Yogi?</h4>
      <p className='text1 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur donec eget sed suspendisse ut maecenas facilisi sollicitudin. Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat. Sit diam gravida diam sit arcu. Congue auctor felis aliquet nulla enim ultricies ac sapien. Eu bibendum id et facilisis felis, ultricies iaculis nulla senectus. Nisl neque, sem in erat varius commodo. Enim amet ullamcorper ac enim ante justo a justo. Ut elit in nec vulputate.</p>
    </div>
    <div className='flexCol mt-10 gap-y-10 sm:mt-12 sm:gap-y-12 md:mt-14 md:gap-y-14 lg:mt-16 lg:gap-y-16 xl:gap-y-20 xl:mt-20'>
      <Skeleton count={itemsPerPortion} items={Items} />
    </div>
    <Pagination itemsLength={items.length} currentPortion={currentPortion} setCurrentPortion={setCurrentPortion} itemsPerPortion={itemsPerPortion} />
  </InformationPageBase>
};
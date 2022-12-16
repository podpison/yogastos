import { InformationPageBase } from './../../ui/informationPageBase/InformationPageBase';
import hero from './../../../assets/img/pages/careers/hero.webp';
import { Item } from './item/Item';

export const careersFakeItems = [
  {
    id: 0,
    name: 'Junior, UI UX Designer Remote.',
    img: 'https://i.postimg.cc/MZPwbSp8/unsplash-jbc-Y-yvs-Dzk-1.png',
    createdAt: 615351,
    description: 'We are looking for a Junior level UI UX Designer. Who’s a keen eye for the visuals, esthetics and great imagination to implement designs.',
    responsibilities: [
      'Read the project requirements properly.',
      'Create a clean, attractive & easy to understand sitemap or userflow.',
      'Create Low-fidelity Wireframes.',
      'Create Mid-fidelity Wireframes. (if required)',
      'Design awesome UI Designs with keeping in mind the UX.',
      'Collaborate with Marketing Team, Developers, other fellow Designers, Project Managers, etc.',
      'Create clean & modern designs for developer hand-offs.',
    ],
    requirements: [
      'Read the project requirements properly.',
      'Create a clean, attractive & easy to understand sitemap or userflow.',
      'Create Low-fidelity Wireframes.',
      'Create Mid-fidelity Wireframes. (if required)',
      'Design awesome UI Designs with keeping in mind the UX.',
      'Collaborate with Marketing Team, Developers, other fellow Designers, Project Managers, etc.',
      'Create clean & modern designs for developer hand-offs.',
    ],
    preview: {
      jobDescription: 'Short descriptip/summary of the blog will go here.... lorem isum lorem isum lorem isum lorem isum lorem isum lorem isum lorem isum lorem',
      responsibilities: 'Short descriptip/summary of the blog will go here.... lorem isum lorem isum lorem isum lorem isum lorem isum lorem isum lorem isum lorem',
      requirements: 'Short descriptip/summary of the blog will go here.... lorem isum lorem isum lorem isum lorem isum lorem isum lorem isum lorem isum lorem',
      goodToHave: 'Short descriptip/summary of the blog will go here.... lorem isum lorem isum lorem isum lorem isum lorem isum lorem isum lorem isum lorem',
      perks: 'Short descriptip/summary of the blog will go here.... lorem isum lorem isum lorem isum lorem isum lorem isum lorem isum lorem isum lorem',
    },
  }
]

export const CareersPage: React.FC = () => {
  // let items = useSelector(selectCareerItems);
  let items = careersFakeItems
  const Items = items.map(i => <Item {...i} key={i.id} />)

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
    <div className='flexCol gap-y-20 mt-20'>
      {Items}
    </div>
  </InformationPageBase>
};
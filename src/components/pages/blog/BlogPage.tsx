import { useState } from "react";
import { Button } from "../../ui/Button";
import { FullBg } from "../../ui/FullBg";
import { InformationCard } from "../../ui/informationCard/InformationCard";
import { Link } from 'react-router-dom';

export const fakeItems = [
  {
    img: 'https://i.postimg.cc/JnDLkq88/unsplash-Lk-HXBKpwh-Z8.png',
    heading: 'Andy and his dream to be Astronaut',
    description: 'Short descriptip/summary of the blog will go here.... lorem isum lorem isum lorem isum lorem isum lorem isum lorem isum lorem isum lorem',
    createdAt: 2015131,
    id: 0,
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur donec eget sed suspendisse ut maecenas facilisi sollicitudin. Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat. Sit diam gravida diam sit arcu. Congue auctor felis aliquet nulla enim ultricies ac sapien. Eu bibendum id et facilisis felis, ultricies iaculis nulla senectus. Nisl neque, sem in erat varius commodo. Enim amet ullamcorper ac enim ante justo a justo. Ut elit in nec vulputate.',
      {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur donec eget sed suspendisse ut maecenas facilisi sollicitudin. Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat. Sit diam gravida diam sit arcu. eugiat. Sit diam gravida diam sit arcu. ', src: 'https://i.postimg.cc/V6tf39Z4/Rectangle-3.png', position: 'right'},
      {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur donec eget sed suspendisse ut maecenas facilisi sollicitudin. Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat. Sit diam gravida diam sit arcu. eugiat. Sit diam gravida diam sit arcu. ', src: 'https://i.postimg.cc/C1Sk11yG/Rectangle-4.png', position: 'left'},
    ]
  },
  {
    img: 'https://i.postimg.cc/JnDLkq88/unsplash-Lk-HXBKpwh-Z8.png',
    heading: 'Andy and his dream to be Astronaut',
    description: 'Short descriptip/summary of the blog will go here.... lorem isum lorem isum lorem isum lorem isum lorem isum lorem isum lorem isum lorem',
    createdAt: 2015131,
    id: 1,
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur donec eget sed suspendisse ut maecenas facilisi sollicitudin. Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat. Sit diam gravida diam sit arcu. Congue auctor felis aliquet nulla enim ultricies ac sapien. Eu bibendum id et facilisis felis, ultricies iaculis nulla senectus. Nisl neque, sem in erat varius commodo. Enim amet ullamcorper ac enim ante justo a justo. Ut elit in nec vulputate.',
      {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur donec eget sed suspendisse ut maecenas facilisi sollicitudin. Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat. Sit diam gravida diam sit arcu. eugiat. Sit diam gravida diam sit arcu. ', src: 'https://i.postimg.cc/V6tf39Z4/Rectangle-3.png', position: 'right'},
      {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur donec eget sed suspendisse ut maecenas facilisi sollicitudin. Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat. Sit diam gravida diam sit arcu. eugiat. Sit diam gravida diam sit arcu. ', src: 'https://i.postimg.cc/C1Sk11yG/Rectangle-4.png', position: 'left'},
    ]
  },
  {
    img: 'https://i.postimg.cc/JnDLkq88/unsplash-Lk-HXBKpwh-Z8.png',
    heading: 'Andy and his dream to be Astronaut',
    description: 'Short descriptip/summary of the blog will go here.... lorem isum lorem isum lorem isum lorem isum lorem isum lorem isum lorem isum lorem',
    createdAt: 2015131,
    id: 2,
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur donec eget sed suspendisse ut maecenas facilisi sollicitudin. Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat. Sit diam gravida diam sit arcu. Congue auctor felis aliquet nulla enim ultricies ac sapien. Eu bibendum id et facilisis felis, ultricies iaculis nulla senectus. Nisl neque, sem in erat varius commodo. Enim amet ullamcorper ac enim ante justo a justo. Ut elit in nec vulputate.',
      {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur donec eget sed suspendisse ut maecenas facilisi sollicitudin. Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat. Sit diam gravida diam sit arcu. eugiat. Sit diam gravida diam sit arcu. ', src: 'https://i.postimg.cc/V6tf39Z4/Rectangle-3.png', position: 'right'},
      {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur donec eget sed suspendisse ut maecenas facilisi sollicitudin. Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat. Sit diam gravida diam sit arcu. eugiat. Sit diam gravida diam sit arcu. ', src: 'https://i.postimg.cc/C1Sk11yG/Rectangle-4.png', position: 'left'},
    ]
  },
  {
    img: 'https://i.postimg.cc/JnDLkq88/unsplash-Lk-HXBKpwh-Z8.png',
    heading: 'Andy and his dream to be Astronaut',
    description: 'Short descriptip/summary of the blog will go here.... lorem isum lorem isum lorem isum lorem isum lorem isum lorem isum lorem isum lorem',
    createdAt: 2015131,
    id: 3,
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur donec eget sed suspendisse ut maecenas facilisi sollicitudin. Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat. Sit diam gravida diam sit arcu. Congue auctor felis aliquet nulla enim ultricies ac sapien. Eu bibendum id et facilisis felis, ultricies iaculis nulla senectus. Nisl neque, sem in erat varius commodo. Enim amet ullamcorper ac enim ante justo a justo. Ut elit in nec vulputate.',
      {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur donec eget sed suspendisse ut maecenas facilisi sollicitudin. Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat. Sit diam gravida diam sit arcu. eugiat. Sit diam gravida diam sit arcu. ', src: 'https://i.postimg.cc/V6tf39Z4/Rectangle-3.png', position: 'right'},
      {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur donec eget sed suspendisse ut maecenas facilisi sollicitudin. Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat. Sit diam gravida diam sit arcu. eugiat. Sit diam gravida diam sit arcu. ', src: 'https://i.postimg.cc/C1Sk11yG/Rectangle-4.png', position: 'left'},
    ]
  },
  {
    img: 'https://i.postimg.cc/JnDLkq88/unsplash-Lk-HXBKpwh-Z8.png',
    heading: 'Andy and his dream to be Astronaut',
    description: 'Short descriptip/summary of the blog will go here.... lorem isum lorem isum lorem isum lorem isum lorem isum lorem isum lorem isum lorem',
    createdAt: 2015131,
    id: 4,
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur donec eget sed suspendisse ut maecenas facilisi sollicitudin. Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat. Sit diam gravida diam sit arcu. Congue auctor felis aliquet nulla enim ultricies ac sapien. Eu bibendum id et facilisis felis, ultricies iaculis nulla senectus. Nisl neque, sem in erat varius commodo. Enim amet ullamcorper ac enim ante justo a justo. Ut elit in nec vulputate.',
      {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur donec eget sed suspendisse ut maecenas facilisi sollicitudin. Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat. Sit diam gravida diam sit arcu. eugiat. Sit diam gravida diam sit arcu. ', src: 'https://i.postimg.cc/V6tf39Z4/Rectangle-3.png', position: 'right'},
      {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur donec eget sed suspendisse ut maecenas facilisi sollicitudin. Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat. Sit diam gravida diam sit arcu. eugiat. Sit diam gravida diam sit arcu. ', src: 'https://i.postimg.cc/C1Sk11yG/Rectangle-4.png', position: 'left'},
    ]
  },
  {
    img: 'https://i.postimg.cc/JnDLkq88/unsplash-Lk-HXBKpwh-Z8.png',
    heading: 'Andy and his dream to be Astronaut',
    description: 'Short descriptip/summary of the blog will go here.... lorem isum lorem isum lorem isum lorem isum lorem isum lorem isum lorem isum lorem',
    createdAt: 2015131,
    id: 5,
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur donec eget sed suspendisse ut maecenas facilisi sollicitudin. Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat. Sit diam gravida diam sit arcu. Congue auctor felis aliquet nulla enim ultricies ac sapien. Eu bibendum id et facilisis felis, ultricies iaculis nulla senectus. Nisl neque, sem in erat varius commodo. Enim amet ullamcorper ac enim ante justo a justo. Ut elit in nec vulputate.',
      {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur donec eget sed suspendisse ut maecenas facilisi sollicitudin. Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat. Sit diam gravida diam sit arcu. eugiat. Sit diam gravida diam sit arcu. ', src: 'https://i.postimg.cc/V6tf39Z4/Rectangle-3.png', position: 'right'},
      {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur donec eget sed suspendisse ut maecenas facilisi sollicitudin. Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat. Sit diam gravida diam sit arcu. eugiat. Sit diam gravida diam sit arcu. ', src: 'https://i.postimg.cc/C1Sk11yG/Rectangle-4.png', position: 'left'},
    ]
  },
  {
    img: 'https://i.postimg.cc/JnDLkq88/unsplash-Lk-HXBKpwh-Z8.png',
    heading: 'Andy and his dream to be Astronaut',
    description: 'Short descriptip/summary of the blog will go here.... lorem isum lorem isum lorem isum lorem isum lorem isum lorem isum lorem isum lorem',
    createdAt: 2015131,
    id: 6,
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur donec eget sed suspendisse ut maecenas facilisi sollicitudin. Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat. Sit diam gravida diam sit arcu. Congue auctor felis aliquet nulla enim ultricies ac sapien. Eu bibendum id et facilisis felis, ultricies iaculis nulla senectus. Nisl neque, sem in erat varius commodo. Enim amet ullamcorper ac enim ante justo a justo. Ut elit in nec vulputate.',
      {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur donec eget sed suspendisse ut maecenas facilisi sollicitudin. Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat. Sit diam gravida diam sit arcu. eugiat. Sit diam gravida diam sit arcu. ', src: 'https://i.postimg.cc/V6tf39Z4/Rectangle-3.png', position: 'right'},
      {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur donec eget sed suspendisse ut maecenas facilisi sollicitudin. Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat. Sit diam gravida diam sit arcu. eugiat. Sit diam gravida diam sit arcu. ', src: 'https://i.postimg.cc/C1Sk11yG/Rectangle-4.png', position: 'left'},
    ]
  },
  {
    img: 'https://i.postimg.cc/JnDLkq88/unsplash-Lk-HXBKpwh-Z8.png',
    heading: 'Andy and his dream to be Astronaut',
    description: 'Short descriptip/summary of the blog will go here.... lorem isum lorem isum lorem isum lorem isum lorem isum lorem isum lorem isum lorem',
    createdAt: 2015131,
    id: 7,
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur donec eget sed suspendisse ut maecenas facilisi sollicitudin. Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat. Sit diam gravida diam sit arcu. Congue auctor felis aliquet nulla enim ultricies ac sapien. Eu bibendum id et facilisis felis, ultricies iaculis nulla senectus. Nisl neque, sem in erat varius commodo. Enim amet ullamcorper ac enim ante justo a justo. Ut elit in nec vulputate.',
      {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur donec eget sed suspendisse ut maecenas facilisi sollicitudin. Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat. Sit diam gravida diam sit arcu. eugiat. Sit diam gravida diam sit arcu. ', src: 'https://i.postimg.cc/V6tf39Z4/Rectangle-3.png', position: 'right'},
      {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur donec eget sed suspendisse ut maecenas facilisi sollicitudin. Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat. Sit diam gravida diam sit arcu. eugiat. Sit diam gravida diam sit arcu. ', src: 'https://i.postimg.cc/C1Sk11yG/Rectangle-4.png', position: 'left'},
    ]
  },
]

const itemsPerPortion = 6;

export const BlogPage: React.FC = () => {
  const [currentPortion, setCurrentPortion] = useState(0);
  let items = fakeItems.slice(0, -1)

  let itemsPortion = items.slice(0, (currentPortion + 1) * itemsPerPortion);
  let Items = itemsPortion.map((i, index) => {
    return <Link to={`${i.id}`} key={index} >
      <InformationCard className='cursor-pointer transition-transform hover:scale-105' {...i} />
    </Link>
  });
  let isOnlyOnePortion = Math.floor(items.length / itemsPerPortion) === 0
  let isLastPortion = currentPortion === Math.floor(items.length / itemsPerPortion);

  return <main className="relative pt-10 pb-14 sm:pt-12 sm:pb-16 md:pt-14 md:pb-20 lg:pt-16 lg:pb-24 xl:pt-20 xl:pb-28">
    <FullBg />
    <div className='text-center'>
      <h2 className='text-darkBlue'>Yogi Blog</h2>
      <p className='text1 mt-2 sm:mt-5'>Shop, stream, bank and browse the web design & dev. by an industry-leader for all your devices.</p>
    </div>
    <InformationCard className="grid grid-cols-1 mt-16 h-fit [&>img]:h-full [&>div]:grid-rows-[max-content_1fr_max-content_max-content] [&>img]:object-cover [&>div>p]:line-clamp-[10] sm:mt-20 md:mt-24 md:grid-cols-2 lg:mt-28 lg:grid-cols-[60%_1fr]" {...items[items.length - 1]}>
      <Link to={`${items.at(-1)?.id}`}>
        <Button className="mt-auto" xsmWFit arrow>Read More</Button>
      </Link>
    </InformationCard>
    <div className="mainPageGridContainer">
      {Items}
    </div>
    {((!isLastPortion && !isOnlyOnePortion) && !isOnlyOnePortion) && <Button
      className="mt-16 mx-auto sm:mt-24 md:mt-28 lg:mt-32 xl:mt-36"
      onClick={() => setCurrentPortion(prev => prev + 1)}
      xsmWFit
    >
      Load More
    </Button>}
  </main>
};
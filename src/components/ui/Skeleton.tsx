import cn from 'classnames';

type Props = {
  items: any[]
  count?: number
  className?: string
}

export const Skeleton: React.FC<Props> = ({ count = 3, items, className }) => {
  let Items = [...Array(count).keys()].map(i => {
    return <div className={cn(`skeleton h-[600px]`, className)} key={i} />;
  })

  if (items.length) {
    return <>{items}</>
  }

  return <>{Items}</>
};
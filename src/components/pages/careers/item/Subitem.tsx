type Props = {
  heading: string
  description: string
}

export const Subitem: React.FC<Props> = ({ description, heading }) => {
  return <div>
    <h6 className="text-start">{heading}</h6>
    <p className="mt-4">{description}</p>
  </div>
};
type Props = {
  src: string
  href: string
  alt: string
}

export const SocialNetowrk: React.FC<Props> = ({ src, href, alt }) => {
  return <a className="group" href={href} target="_blank" rel="noopener noreferrer">
    <img className='transition-opacity group-hover:opacity-90' src={src} alt={alt} />
  </a>
};
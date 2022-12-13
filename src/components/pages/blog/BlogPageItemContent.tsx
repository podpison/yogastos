import { useParams } from "react-router-dom";

export const BlogPageItemContent: React.FC = () => {
  const { bid } = useParams();

  return <main>
    <h1>{bid}</h1>
  </main>
};
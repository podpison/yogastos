import { Button } from "../../ui/Button";
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return <main>
    <section className="flexCol mt-5 gap-y-8 h-full justify-center items-center sm:gap-y-10">
      <h1 className="max-[350px]:whitespace-nowrap">Not Found :(</h1>
      <Button xsmWFit>
        <Link to='/'>Go To The Main Page</Link>
      </Button>
    </section>
  </main>
};
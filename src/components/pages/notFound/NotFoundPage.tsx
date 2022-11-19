import { Button } from "../../ui/Button";
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return <main>
    {/* <section className="flexCol gap-y-12 h-full justify-center items-center"> */}
    <section className="flexCol mt-5 gap-y-8 h-full justify-center items-center sm:gap-y-10">
      <h1 className="max-[350px]:whitespace-nowrap">Not Found :(</h1>
      <Button>
        <Link to='/'>Go To The Main Page</Link>
      </Button>
    </section>
  </main>
};
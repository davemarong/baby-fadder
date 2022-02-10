// IMPORT

// Next
import type { NextPage } from "next";

// React

// Components
import { Nav } from "../src/components/Nav/Nav";

// Utils

// Data

// TYPE/INTERFACE
type Props = {
  isLogged: boolean;
};
const Home = ({ isLogged }: Props) => {
  return (
    <div>
      <Nav isLogged={isLogged} />
    </div>
  );
};

export default Home;

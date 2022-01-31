import { Helmet } from "react-helmet";
import Loading from "../components/Loading";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>
      <Loading
        msg="Oops looks like you got lost"
        btnText="Find your way home"
      />
    </>
  );
};

export default NotFound;

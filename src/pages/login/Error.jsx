import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  return <h2>Error : {error.status}</h2>;
};
export default Error;

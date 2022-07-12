import { BarLoader } from 'react-spinners';
import './Loading.scss';
export const Loading = () => {
  return (
    <div className="loading">
      <BarLoader color="#03314b" />
    </div>
  );
}

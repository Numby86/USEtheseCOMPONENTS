import './Lists.scss';
import { Link } from 'react-router-dom';

const ListLoader = ({ listLoaders }) => {

return (
    <>
    <div className="listCard">
      {listLoaders.map((el) => (
        <div key={el.id} className="card" >
          <Link to={`/detailLoader/${el.id}`}>
          {el.component}
          </Link>
        </div>
      ))}
    </div>
    </>
);
};

export default ListLoader;


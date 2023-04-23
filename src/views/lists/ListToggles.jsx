import './Lists.scss';
import { Link } from 'react-router-dom';

const ListToggles = ({ listToggles }) => {
    return (
        <>
        <div className="listCard">
          {listToggles.map((el) => (
            <div key={el.id} className="card" >
              <Link to={`/detailToggle/${el.id}`}>
              {el.component}
              </Link>
            </div>
          ))}
        </div>
        </>
      )
}

export default ListToggles;

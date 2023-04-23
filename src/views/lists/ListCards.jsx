import './Lists.scss';
import { Link } from 'react-router-dom';

const ListCards = ({ listCards }) => {
  return (
    <>
    <div className="listCard">
      {listCards.map((el) => (
        <div key={el.id} className="card" >
          <Link to={`/detailCard/${el.id}`}>
          {el.component}
          </Link>
        </div>
      ))}
    </div>
    </>
  )
}

export default ListCards;

import './Lists.scss';
import { Link } from 'react-router-dom';

const ListRadios = ({ listRadios }) => {
  return (
    <>
    <div className="listCard">
      {listRadios.map((el) => (
        <div key={el.id} className="card" >
          <Link to={`/detailRadio/${el.id}`}>
          {el.component}
          </Link>
        </div>
      ))}
    </div>
    </>
  )
}

export default ListRadios;
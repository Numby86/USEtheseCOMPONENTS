import './Lists.scss';
import { Link } from 'react-router-dom';

const ListCheckboxes = ({ listCheckboxes }) => {
  return (
    <>
    <div className="listCard">
      {listCheckboxes.map((el) => (
        <div key={el.id} className="card" >
          <Link to={`/detailCheckbox/${el.id}`}>
          {el.component}
          </Link>
        </div>
      ))}
    </div>
    </>
  )
}

export default ListCheckboxes;
import './Lists.scss';
import { Link } from 'react-router-dom';

const ListRadios = ({ listRadios }) => {
  const goCode = 'CODE </>'
  return (
    <>
    <div className="listCard">
      {listRadios.map((el) => (
        <div key={el.id} className="card" >
          {el.component}
          <Link to={`/detailRadio/${el.id}`}>
            <button className='goCode'>{ goCode }</button>
          </Link>
        </div>
      ))}
    </div>
    </>
  )
}

export default ListRadios;
import './Lists.scss';
import { Link } from 'react-router-dom';

const ListButtons = ({ listButtons }) => {

  return (
    <>
    <div className="listCard">
      {listButtons.map((el) => (

          <div key={el.id} className="card" >
            <Link to={`/detailButton/${el.id}`}>
              {el.component}
              {/* <Link to={`/detailButton/${el.id}`}>
                <button className='MYbutton'>GO CODE</button>
              </Link> */}
            </Link>
          </div>


      ))}
    </div>
    </>
  )
}

export default ListButtons;
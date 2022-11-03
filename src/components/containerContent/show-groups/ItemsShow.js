import Card from 'react-bootstrap/Card';
import "./showGroups.css"

function ItemsShow({ item }) {
  return (
        <div className='card-show' style={{background: item.bg}}>
        <Card.Header className='d-flex flex-row justify-evenly align-items-center'>
          <div className='left-show d-flex justify-start align-items-start flex-column'>
            <h2 className=''>{item.title}</h2>
            <div>
              <span style={{color: item.badgeColor}}>{item.badge}</span>
              <h3>{item.badgeText}</h3>
            </div>
          </div>
          <div className='right-show d-flex justify-end align-items-end'>
            <img src={item.rightImg} />
          </div>
        </Card.Header>
        <Card.Body>
            <Card.Text className='d-flex justify-center align-items-center'>
              <p style={{color: item.paColor}}>{item.text}</p>
            </Card.Text>
        </Card.Body>
        </div>
  );
}

export default ItemsShow;


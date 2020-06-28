import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './index.css';
const Shop = ({ items }) => {
    const { id } = useParams();
    const history = useHistory();
    const item = id ? items.filter(it => it.id === parseInt(id))[0] : null;
    return (
        item ? 
            <div>
                <h3>Item Id: { item.id }</h3>
                <h3>Item name: { item.name } </h3>
                <h3>Item Description: { item.description }</h3>
            </div>
        :
        <div>
            {
                items.map(item =>
                        <div className='shop-item' key={item.id}>
                            <h5>{ item.name }</h5>
                            <p>{ item.description }</p>
                            <button onClick={() => history.push(`/shop/${item.id}`)}>Go to item page</button>
                        </div>
                    )
            }
        </div>
    )
}
export default Shop;
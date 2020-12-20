import { useState } from "react";

const Item = ({ data, total, setTotal, items, setItems }) => {
  const [qty, setQty] = useState(1);

  const handleIncrease = (price) => {
    setQty((qty) => qty+1);
    setTotal(total + price);
  };

  const handleDecrease = (price) => {
    setQty((qty) => qty-1);
    setTotal(total - price);
  };

  const handleDelete = (id, price) => {
    setTotal(total - qty * price);
    setItems(items.filter((el) => el.id !== id));
  };

//   const handleUpdate = (price) => {
//       setTotal(qty*price);
//   }


  return (
    <tr>
      <td>
        <div className="item__table">
          <div className="item__data">
            <img src={data.img_url} alt="img" className="item__image" />
            <p className="item__name"> {data.name}</p>
            <button
              onClick={() => handleDelete(data.id, data.price)}
              className="btn--remove"
            >
              &times;
            </button>
          </div>
        </div>
      </td>
      <td>
        <div className="item__data_2" key={data.id}>
          {
            <>
              <button
                className="item__qty_btn"
                disabled={qty === 1 ? true : false}
                onClick={() => {
                  handleDecrease(data.price);
                }}
              >
                -
              </button>
              <div className="item__qty">
                <p>{qty}</p>
              </div>
              <button
                className="item__qty_btn"
                onClick={() => {
                  handleIncrease(data.price);
                }}
              >
                +
              </button>
            </>
        }
        </div>
      </td>
      <td>${data.price}</td>
    </tr>
  );
};

export default Item;

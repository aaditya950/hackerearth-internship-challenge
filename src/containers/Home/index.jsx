import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "reactstrap";
import { ChevronLeft } from "react-feather";
import { Data } from "../../data";
import Item from "../Item";

import "./styles.css";

export default function Home() {
  const [total, setTotal] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [items, setItems] = useState(Data);
  const [discount, setDiscount] = useState(0);

  // const calcFinalPrice = () => {
  //   // const final = total -
  // }

  const calcTotal = () => {
    let totalPrice = 0;
    Data.forEach((item) => {
      totalPrice += item.price;
    });
    setTotal(totalPrice);

    // let finalDiscountPrice = 0;
    // Data.forEach((item) => {
    //   const price = item.price;
    //   const discount = item.discount;
    //   finalDiscountPrice += price * (discount / 100);
    // });
    // setDiscount(finalDiscountPrice);
  };

  useEffect(() => {
    calcTotal();
    //setFinalPrice(total - discount);
  }, []);

  const reload = (data) => {
    setItems(data);
    calcTotal();
  };

  return (
    <Container fluid>
      <Row>
        <Col sm="12" md="8" lg="8">
          <div className="nav__container">
            <ChevronLeft />
            <p className="nav__brand">Overall Summary </p>
          </div>
          <div className="divider" />
          <Table>
            <thead>
              <tr>
                <th>Items ({items.length})</th>
                <th style={{ textAlign: "center" }}>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map((data) => (
                <Item
                  key={data.id}
                  data={data}
                  total={total}
                  setTotal={setTotal}
                  items={items}
                  setItems={setItems}
                />
              ))}
            </tbody>
            {items.length === 0 && (
              <tbody>
                <tr>
                  <td>
                    <div className="item__table">
                      <div className="item__data">
                        <button onClick={() => reload(Data)}>
                          Reload All Data
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            )}
          </Table>
        </Col>
        <Col sm="12" md="4" lg="4">
          <div className="total__container">
            <p>Total</p>
            <p>
              Items ({items.length}) : ${total}
            </p>
            <p>Discount : ${discount}</p>
            <p>Type Discount : 0</p>
            <p className="total__order">Order Total: ${total}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

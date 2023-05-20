import { useRef, useState } from "react";
import Input from "../UI/Input";
import { Button } from "react-bootstrap";
import { cartItemAction } from "../store/cart";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const ItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    dispatch(
      cartItemAction.addItem({
        id: props.data.id,
        image: props.data.image,
        name: props.data.name,
        amount: enteredAmountNumber,
        price: props.data.price,
      })
    );
    setAmountIsValid(true);
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Số lượng"
        input={{
          id: "amount",
          type: "number",
          // min: "1",
          // max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <div className="row mb-4 mt-3">
        <Button type="submit" style={{ width: "40%", padding: "0 15px" }}>
          Thêm vào giỏ hàng
        </Button>
        <Button style={{ width: "40%", margin: "0 5px" }}>
          <Link to=".." style={{ textDecoration: "none", color: "white" }}>
            Trở về sản phẩm
          </Link>
        </Button>
      </div>

      {!amountIsValid && (
        <p className="mb-3 text-danger">Nhập số từ 1 đến 5.</p>
      )}
    </form>
  );
};

export default ItemForm;

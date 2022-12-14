import classes from "./MealItemForm.module.css";
import React from "react";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={classes.button}> + Add </button>
    </form>
  );
};
export default MealItemForm;

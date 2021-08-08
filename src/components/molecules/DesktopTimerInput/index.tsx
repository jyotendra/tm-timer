import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";

const useStyles = makeStyles({
  textFieldStyle: {},
});

const TimerInput = ({ title }: timerInputPropType): JSX.Element => {
  const classes = useStyles();
  const [input, setInput] = useState("");

  return (
    <div>
      <TextField
        error
        variant="outlined"
        className={classes.textFieldStyle}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        name="greenCard"
        value={input}
        label={`${title} (MM:SS)`}
        color="primary"
      />

      <TextField
        error
        variant="outlined"
        className={classes.textFieldStyle}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        name="yellowCard"
        value={input}
        label={`${title} (MM:SS)`}
        color="primary"
      />

      <TextField
        error
        variant="outlined"
        className={classes.textFieldStyle}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        name="redCard"
        value={input}
        label={`${title} (MM:SS)`}
        color="primary"
      />
    </div>
  );
};

type timerInputPropType = {
  title: string;
};

export default TimerInput;

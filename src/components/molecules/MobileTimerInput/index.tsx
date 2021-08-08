import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";

const useStyles = makeStyles({
  textFieldStyle: {},
});

const TimerInput = ({ title }: timerInputPropType): JSX.Element => {
  const classes = useStyles();
  const [input, setInput] = useState("");

  let validationText = "";

  // const validateInput = (iput: string) => {
  //   const [min, sec] = iput.split(":");
  //   if(!min || !sec) return false;
  //   if(min > 60)
  // }

  return (
    <TextField
      error
      variant="outlined"
      className={classes.textFieldStyle}
      onChange={(e) => {
        setInput(e.target.value);
      }}
      value={input}
      label={`${title} (MM:SS)`}
      color="primary"
      // helperText=
    />
  );
};

type timerInputPropType = {
  title: string;
};

export default TimerInput;

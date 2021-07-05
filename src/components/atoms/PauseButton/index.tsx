import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import PauseIcon from "@material-ui/icons/Pause";
import { useState } from "react";
import { palette } from "../../../theme";

const useStyles = makeStyles({
  startButton: (props: any) => ({
    height: "2.5rem",
    width: "2.5rem",
    borderRadius: "50%",
    backgroundColor: props.isClickedState
      ? palette.secondary.main
      : palette.primary.main,
    "&:hover": {
      backgroundColor: props.isClickedState
        ? palette.secondary.main
        : palette.primary.main,
    },
  }),
  pauseIcon: {
    color: "black",
  },
});

const PauseButton = ({ handleOnClick }: pauseButtonPops): JSX.Element => {
  const [isClickedState, setClickState] = useState(false);
  const classes = useStyles({ isClickedState });

  return (
    <IconButton
      onClick={() => {
        setClickState(!isClickedState);
        handleOnClick();
      }}
      className={classes.startButton}
    >
      <PauseIcon className={classes.pauseIcon}></PauseIcon>
    </IconButton>
  );
};

type pauseButtonPops = {
  /**
   * consumers can attach click handlers to the component
   */
  handleOnClick: clickHandler;
};
type clickHandler = () => void;

export default PauseButton;

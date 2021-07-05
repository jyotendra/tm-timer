import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import StopIcon from "@material-ui/icons/Stop";
import { palette } from "../../../theme";

const useStyles = makeStyles({
  stopButton: {
    height: "2.5rem",
    width: "2.5rem",
    borderRadius: "50%",
    backgroundColor: palette.primary.main,
    "&:hover": {
      backgroundColor: palette.primary.main,
    },
  },
  stopIcon: {
    color: "black",
  },
});

const StopButton = ({ handleOnClick }: stopButtonPops): JSX.Element => {
  const classes = useStyles();

  return (
    <IconButton
      onClick={() => {
        handleOnClick();
      }}
      className={classes.stopButton}
    >
      <StopIcon className={classes.stopIcon}></StopIcon>
    </IconButton>
  );
};

type stopButtonPops = {
  /**
   * consumers can attach click handlers to the component
   */
  handleOnClick: clickHandler;
};
type clickHandler = () => void;

export default StopButton;

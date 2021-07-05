import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { palette } from "../../../theme";

const useStyles = makeStyles({
  startButton: {
    height: "2.5rem",
    width: "2.5rem",
    borderRadius: "50%",
    backgroundColor: palette.primary.main,
    "&:hover": {
      backgroundColor: palette.primary.main,
    },
  },
  playIcon: {
    color: "black",
  },
});

const StartButton = ({ handleOnClick }: startButtonPops): JSX.Element => {
  const classes = useStyles();

  return (
    <IconButton
      onClick={() => {
        handleOnClick();
      }}
      className={classes.startButton}
    >
      <PlayArrowIcon className={classes.playIcon}></PlayArrowIcon>
    </IconButton>
  );
};

type startButtonPops = {
  /**
   * consumers can attach click handlers to the component
   */
  handleOnClick: clickHandler;
};
type clickHandler = () => void;

export default StartButton;

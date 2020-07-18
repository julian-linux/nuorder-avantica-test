// Libraries
import React from "react";

// Material Components
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

// Icons
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import FaceIcon from "@material-ui/icons/Face";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import VisibilityIcon from "@material-ui/icons/Visibility";

// Intl
import Intl from "../../config/intl";

// Hooks
import usePaginationOptionsData from "../../hooks/usePaginationOptionsData";

// Styles
import useStyles from "./styles";

const reactions = [
  {
    name: "+1",
    icon: <ThumbUpIcon />,
  },
  {
    name: "-1",
    icon: <ThumbDownIcon />,
  },
  {
    name: "smile",
    icon: <EmojiEmotionsIcon />,
  },
  {
    name: "tada",
    icon: <LocalFloristIcon />,
  },
  {
    name: "thinking_face",
    icon: <FaceIcon />,
  },
  {
    name: "heart",
    icon: <FavoriteIcon />,
  },
  {
    name: "rocket",
    icon: <FlightTakeoffIcon />,
  },
  {
    name: "eyes",
    icon: <VisibilityIcon />,
  },
];

const Reactions = () => {
  const classes = useStyles();
  const [setOptions, options] = usePaginationOptionsData();

  const handleChangeReaction = (reaction) => () => {
    setOptions({
      ...options,
      reaction,
    });
  };
  return (
    <Box>
      <Intl variant="caption" langKey={"REACTIONS"} />
      <Box display="flex" mt={1} flexWrap="wrap">
        {reactions.map(({ name, icon }) => (
          <Button
            variant={name === options.reaction ? "contained" : "outlined"}
            size="small"
            key={`btn-page-reaction-${name}`}
            className={classes.button}
            onClick={handleChangeReaction(name)}
          >
            {icon}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Reactions;

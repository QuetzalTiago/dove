import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export const Message = ({ text }) => {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Stack direction="row" spacing={2}>
      <Chip label={text} onClick={handleClick} />
    </Stack>
  );
};

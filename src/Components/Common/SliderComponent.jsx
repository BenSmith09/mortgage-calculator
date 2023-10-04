import React, { Fragment } from "react";
import Slider from "@mui/material/Slider";
import { Typography, Stack } from "@mui/material";

const SliderComponent = ({
  label,
  min,
  max,
  defaultValue,
  step,
  onChange,
  value,
  unit,
  amount,
}) => {
  return (
    <Stack my={1.6}>
      <Stack gap={1} direction="column">
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">
          {unit} {amount}
        </Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        aria-label="Default"
        valueLabelDisplay="auto"
        marks
        step={step}
        onChange={onChange}
        value={value}
      />
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="caption" color="text.secondary">
          {unit} {min}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {unit} {max}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SliderComponent;

import React from "react";

import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((props) => ({
  needsAttentionOutline: {
    borderColor: (props) => props.needsAttention && "#f0b63b",
    borderWidth: (props) => props.needsAttention && 2,
  },
  needsAttentionLabel: {
    color: (props) => props.needsAttention && "#f0b63b",
  },
}));

function InputComponent({ inputRef, ...other }) {
  return <div {...other} />;
}

export default function OutlinedDiv(props) {
  const { className, children, label, required } = props;

  const classes = useStyles(props);

  return (
    <TextField
      variant="outlined"
      disabled={props.disabled}
      className={className}
      required={required}
      classes={{
        root: classes.test,
      }}
      label={label}
      multiline
      fullWidth
      InputLabelProps={{
        shrink: true,
        classes: {
          root: classes.needsAttentionLabel,
        },
      }}
      InputProps={{
        inputComponent: InputComponent,
        classes: {
          notchedOutline: classes.needsAttentionOutline,
        },
      }}
      inputProps={{
        children: children,
      }}
    />
  );
}

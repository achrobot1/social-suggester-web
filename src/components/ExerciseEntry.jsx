import React from "react";
import "./Main.css";

import { FormGroup, FormControlLabel, Checkbox } from "@material-ui/core";

import OutlinedDiv from "./OutlinedDiv";

export default function ExerciseEntry(props) {
  return (
    <>
      <OutlinedDiv disabled={!props.locationSet} label="Exercise">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                disabled={!props.locationSet}
                checked={props.exerciseLevel.minimal}
                onChange={(event) => props.onExerciseChange(event, "minimal")}
              />
            }
            label={"Minimal"}
          />

          <FormControlLabel
            control={
              <Checkbox
                disabled={!props.locationSet}
                checked={props.exerciseLevel.light}
                onChange={(event) => props.onExerciseChange(event, "light")}
              />
            }
            label={"Light"}
          />

          <FormControlLabel
            control={
              <Checkbox
                disabled={!props.locationSet}
                checked={props.exerciseLevel.strenuous}
                onChange={(event) => props.onExerciseChange(event, "strenuous")}
              />
            }
            label={"Strenuous"}
          />
        </FormGroup>
      </OutlinedDiv>
    </>
  );
}

import React from "react";
import "./Main.css";

import { FormGroup, FormControlLabel, Checkbox } from "@material-ui/core";

import OutlinedDiv from "./OutlinedDiv";

export default function EnvironmentEntry(props) {
  return (
    <>
      <OutlinedDiv disabled={!props.locationSet} label="Environment">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                disabled={!props.locationSet}
                checked={props.environmentPreference.indoor}
                onChange={(event) => props.onEnvironmentChange(event, "indoor")}
              />
            }
            label={"Indoor"}
          />

          <FormControlLabel
            control={
              <Checkbox
                disabled={!props.locationSet}
                checked={props.environmentPreference.outdoor}
                onChange={(event) =>
                  props.onEnvironmentChange(event, "outdoor")
                }
              />
            }
            label={"Outdoor"}
          />
        </FormGroup>
      </OutlinedDiv>
    </>
  );
}

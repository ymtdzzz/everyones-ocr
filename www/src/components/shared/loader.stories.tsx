import React from "react";
import { storiesOf } from "@storybook/react";

import { StoryTypes } from "../../interfaces/storybook";
import Loader from "./Loader";

storiesOf(StoryTypes.Shared, module).add("Loader", () => (
  <div>
    <Loader />
  </div>
));

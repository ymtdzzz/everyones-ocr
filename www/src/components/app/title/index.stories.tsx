import React from "react";
import { storiesOf } from "@storybook/react";

import { StoryTypes } from "../../../interfaces/storybook";
import Title from "./index";

storiesOf(StoryTypes.App, module).add("Title", () => (
  <div>
    <Title />
  </div>
));

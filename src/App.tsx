import type { FC, ReactElement } from "react";

import { Intro } from "./components/Intro/Intro";
import { Timeline } from "./components/Timeline/Timeline";
import { Bigday } from "./components/Bigday/Bigday";
import { Video } from "./components/Video/Video";
import { Venue } from "./components/Venue/Venue";
import { Dev } from "./components/Dev/Dev";

export const App: FC = (): ReactElement => (
  <>
    <Intro />
    <Bigday />
    <Timeline />
    <Video />
    <Venue />
    <Dev />
  </>
);

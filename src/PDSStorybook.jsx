import { createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/PDSStorybook.css";

export function PDSStorybook({ sampleText }) {
    return <HelloWorldSample sampleText={sampleText} />;
}

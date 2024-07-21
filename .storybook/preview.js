/** @type { import('@storybook/react').Preview } */

import "../src/stories/pds.css";
import "../src/stories/theme.compiled.css";

const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    }
};

export default preview;

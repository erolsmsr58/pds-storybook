import { Alert } from "./Alert";
import React from "react";

export default {
    title: "PDS/Alert",
    component: Alert,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    decorators: [
        Story => (
            <div id="mxapp" className="theme-default">
                <Story />
            </div>
        )
    ]
};

export const PDSAlert = {
    args: {
        global: null,
        kind: null,
        bold: null
    }
};

// pds-alert	Creates an Alert, and defaults to Informational Alert styles. While this class is supported, it is recommended to use pds-alert--info instead for better semantics.
// pds-alert--global	Creates an Global Alert, with square corners. Use in combination with any of the classes below.
// pds-alert--info	Creates an Informational Alert
// pds-alert--warning	Creates a Warning Alert
// pds-alert--success	Creates a Success Alert
// pds-alert--danger	Creates an Error Alert
// pds-font-600	Create bold text for an Alert title

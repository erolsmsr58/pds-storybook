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

import { Button } from "./Button";
import React from "react";

export default {
    title: "Example/Button",
    component: Button,
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

export const PDSButton = {
    args: {
        style: null,
        color: null,
        size: null,
        label: "Click Me!"
    }
};

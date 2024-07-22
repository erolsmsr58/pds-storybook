import React from "react";
import PropTypes from "prop-types";

export const Alert = ({ global, kind, bold }) => {
    return (
        <div
            className={[
                "pds-alert",
                global && "pds-alert--global",
                kind && kind !== "info" && `pds-alert--${kind}`
            ].join(" ")}
        >
            <span className={bold && "pds-font-600"}>Informational alert: </span>
            <span className="mx-text">Subtitle text goes here.</span>
        </div>
    );
};

Alert.propTypes = {
    global: PropTypes.bool,
    kind: PropTypes.oneOf(["info", "warning", "success", "danger"]),
    bold: PropTypes.bool
};

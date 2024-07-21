import React from "react";
import PropTypes from "prop-types";

export const Button = ({ label, style, color, size, iconPosition }) => {
    return (
        <button
            type="button"
            className={[
                "btn mx-button pds-button btn-default",
                style && style !== "fill" && `pds-button--${style}`,
                color && color !== "grey" && `pds-button--${color}`,
                size && size !== "medium" && `pds-button--${size}`,
                iconPosition && iconPosition !== "none" && `pds-icon pds-icon--robot-head`,
                iconPosition && iconPosition === "after" && `pds-icon--after`
            ].join(" ")}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string,
    style: PropTypes.oneOf(["fill", "outline", "text"]),
    color: PropTypes.oneOf(["grey", "blue", "red", "light", "dark"]),
    size: PropTypes.oneOf(["small", "medium", "large"]),
    iconPosition: PropTypes.oneOf(["none", "before", "after"])
};

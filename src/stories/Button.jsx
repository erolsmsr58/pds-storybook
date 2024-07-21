import React from "react";
import PropTypes from "prop-types";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ style, color, size, label }) => {
    return (
        <button
            type="button"
            className={[
                "btn mx-button pds-button btn-default",
                (style && style !== "fill") && `pds-button--${style}`,
                (color && color !== "grey") && `pds-button--${color}`,
                (size && size !== "medium") && `pds-button--${size}`
            ].join(" ")}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    style: PropTypes.oneOf(["fill", "outline", "text"]),
    color: PropTypes.oneOf(["grey", "blue", "red", "light", "dark"]),
    size: PropTypes.oneOf(["small", "medium", "large"]),
    label: PropTypes.string
};

import className from "classnames";

function Button({ children, primary, secondary, success, warning, danger, rounded, outline, ...rest }) {
    const classes = className(rest.className,  "flex items-center px-3 py-1.5 border", {
        "border-blue-600 bg-blue-500 text-white": primary,
        "border-gray-900 bg-gray-800 text-white": secondary,
        "border-green-600 bg-green-500 text-white": success,
        "border-yellow-600 bg-yellow-500 text-white": warning,
        "border-red-600 bg-red-500 text-white": danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-400': outline && warning,
        'text-red-500': outline && danger
    });

    return (
        <div>
            <button {...rest} className={classes} >{children}</button>
        </div>
    );
}

Button.propTypes = {
  checkVarations: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true."
      );
    }
  },
};

export default Button;

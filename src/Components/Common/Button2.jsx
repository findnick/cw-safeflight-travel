const Button2 = ({
  border = "",
  bg = "",
  classes = "",
  children,
  style = {},
}) => {
  return (
    <button
      className={classes + " px-4 py-2 text-white"}
      style={{
        background: bg,
        border: border,
        borderRadius: 11,
        width: "7rem",
        ...style,
      }}
    >
      {children}
    </button>
  );
};

export default Button2;

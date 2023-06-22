function Container({
  children,
  bgColor = "transparent",
  className = "",
  style,
}) {
  return (
    <div
      className={"w-full " + className}
      style={{
        backgroundColor: bgColor,
        ...style,
      }}
    >
      <div className={"max-w-screen-lg mx-auto "}>{children}</div>
    </div>
  );
}

export default Container;

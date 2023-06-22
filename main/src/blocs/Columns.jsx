function Columns({ children, style, className = "grid-cols-2 gap-8" }) {
  return (
    <div className={"w-full grid " + className} style={style}>
      {children}
    </div>
  );
}

export default Columns;

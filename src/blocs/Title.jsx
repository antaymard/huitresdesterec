function Title({ children, h = 1, style }) {
  const className = "";

  switch (h) {
    case 1:
      return (
        <h1 className={className} style={style}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 className={className} style={style}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 className={className} style={style}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 className={className} style={style}>
          {children}
        </h4>
      );
    case 5:
      return (
        <h5 className={className} style={style}>
          {children}
        </h5>
      );
    default:
      return (
        <h1 className={className} style={style}>
          {children}
        </h1>
      );
  }
}

export default Title;

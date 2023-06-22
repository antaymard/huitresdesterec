function Section({ direction = "column", children }) {
  return (
    <div style={{ display: "flex", flexDirection: direction }}>{children}</div>
  );
}

export default Section;

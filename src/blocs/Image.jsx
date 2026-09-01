function Image({
  src = "",
  className = "",
  width = "100%",
  objectFit = "cover",
  alt = "",
}) {
  return (
    <img
      className={className}
      style={{ height: 400, width, objectFit }}
      src={src}
      alt={alt}
    />
  );
}

export default Image;

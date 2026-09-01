function LinkButton({ url = "", text = "", children }) {
  return <a href={url}>{children || text}</a>;
}

export default LinkButton;

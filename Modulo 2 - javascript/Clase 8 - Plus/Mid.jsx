function Headings({ size, text }) {
  return (
    <>
      {size === "h1" ? (
        <h1>{text}</h1>
      ) : size === "h2" ? (
        <h2>{text}</h2>
      ) : size === "h3" ? (
        <h3>{text}</h3>
      ) : size === "h4" ? (
        <h4>{text}</h4>
      ) : size === "h5" ? (
        <h5>{text}</h5>
      ) : size === "h6" ? (
        <h6>{text}</h6>
      ) : null}
    </>
  );
}

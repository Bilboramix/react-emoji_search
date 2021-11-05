const Line = ({ key, title, symbol }) => {
  return (
    <div
      key={key}
      onClick={() => {
        navigator.clipboard.writeText(symbol);
      }}
    >
      <p>
        {title}
        {symbol}
      </p>
    </div>
  );
};

export default Line;

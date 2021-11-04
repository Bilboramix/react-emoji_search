const Line = ({ key, title, symbol }) => {
  return (
    <div key={key}>
      <p>
        {title}
        {symbol}
      </p>
    </div>
  );
};

export default Line;

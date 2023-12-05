const LoadingDots = () => {
  const emptyArrayofLength = (length: number) => {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(i);
    }
    return arr;
  };

  return (
    <span className="text-[#8e8e8e]">
      {emptyArrayofLength(3).map((_, i) => {
        return <span key={i + new Date().getMilliseconds()}>.</span>;
      })}
    </span>
  );
};

export default LoadingDots;

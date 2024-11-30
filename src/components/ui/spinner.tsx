const Spinner = () => {
  const bars = Array(12).fill(0);

  return (
    <div className="relative z-10 h-4 w-4">
      <div className="relative flex h-4 w-4 items-center justify-center">
        {bars.map((_, i) => (
          <div
            key={`spinner-bar-${i}`}
            className={`absolute h-[1.6px] w-[24%] rounded-sm bg-background`}
            style={{
              animation: "sonner-spin 1.2s linear infinite",
              animationDelay: `-${1.2 - i * 0.1}s`,
              transform: `rotate(${i * 30}deg) translate(150%)`,
            }}
          />
        ))}
      </div>
      <style jsx>{`
        @keyframes sonner-spin {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0.15;
          }
        }
      `}</style>
    </div>
  );
};

export default Spinner;

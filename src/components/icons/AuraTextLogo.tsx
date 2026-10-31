const AuraTextLogo = ({
  width,
  height,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 930 328"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="465"
        y="250"
        textAnchor="middle"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontSize="300"
        fontWeight="800"
        className="logo-primary"
        style={{
          stroke: "var(--color-wordmark-stroke)",
          strokeWidth: 14,
          paintOrder: "stroke",
          strokeLinejoin: "round",
        }}
      >
        Aura
      </text>
    </svg>
  );
};

export default AuraTextLogo;

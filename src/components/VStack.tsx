const VStack = ({
  children,
  styles,
  className,
  style,
}: {
  children: React.ReactNode;
  styles?: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const combinedClassName = ["flex flex-col", styles, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={combinedClassName} style={style}>
      {children}
    </div>
  );
};

export default VStack;

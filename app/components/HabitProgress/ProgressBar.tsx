interface ProgressBarProps {
    percentage: number;
  }
  
  export const ProgressBar = function({ percentage }: ProgressBarProps) {
    const style = {
      "--value": percentage,
    } as React.CSSProperties;
  
    return (
      <div
        className="radial-progress text-white"
        style={style}
        aria-valuenow={percentage}
        role="progressbar"
      >
        {Math.round(percentage)}%
      </div>
    );
  };
  
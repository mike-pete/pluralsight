import { ReactNode } from "react";
import { css } from "../../styled-system/css";

const ToolTip: React.FC<{ children: ReactNode; popupContent: ReactNode }> = ({
  children,
  popupContent,
}) => {
  return (
    <span className={css({
      position: "relative",
    })}>
      {children}
      <span
        className={css({
          // display: { base: "none", "*:has(> &):hover > &": "block" },
          position: "absolute",
          bg: 'neutral.surface-inverse',
          color: 'neutral.text-inverse',
          p: 8,
          borderRadius: 4,
          boxShadow: "0 0 4px rgba(0, 0, 0, 0.5)",
        })}
      >
        {popupContent}
      </span>
    </span>
  );
};

export default ToolTip;

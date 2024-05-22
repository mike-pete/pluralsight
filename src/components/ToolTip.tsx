import {
  arrow,
  FloatingArrow,
  offset,
  useFloating,
  useHover,
  useInteractions,
} from "@floating-ui/react";
import { ReactNode, useRef, useState } from "react";
import { css, cx } from "../../styled-system/css";
import { token } from "../../styled-system/tokens";

const ToolTip: React.FC<{ children: ReactNode; popupContent: ReactNode }> = ({
  children,
  popupContent,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const ARROW_HEIGHT = 8;
  const GAP = 4;

  const arrowRef = useRef(null);
  const { refs, floatingStyles, context } = useFloating({
    middleware: [
      arrow({
        element: arrowRef,
      }),
      offset(ARROW_HEIGHT + GAP),
    ],
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const hover = useHover(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <>
      <span ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </span>
      {isOpen && (
        <div
          className={cx(
            css({
              borderRadius: 4,
              p: 8,
              color: "neutral.text-inverse",
              bg: "neutral.surface-inverse",
              filter: "drop-shadow(0 0 2px rgba(0, 0, 0, 0.5))",
            }),
            "floating",
          )}
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          <FloatingArrow
            ref={arrowRef}
            context={context}
            fill={token("colors.neutral.surface-inverse")}
          />
          {popupContent}
        </div>
      )}
    </>
  );
};

export default ToolTip;

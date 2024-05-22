import {
  arrow,
  FloatingArrow,
  offset,
  useFloating,
  useHover,
  useInteractions,
} from "@floating-ui/react";
import { ReactNode, useRef, useState } from "react";
import { cva, RecipeVariantProps } from "../../../styled-system/css";

const ToolTipCVA = cva({
  base: {
    display: "flex",
    gap: 10,
    justifyContent: "center",
    alignContent: "flex-start",
    alignItems: "flex-start",
    borderRadius: 4,
    p: 8,
    color: "neutral.text-inverse",
    fill: "neutral.surface-inverse",
    bgColor: "neutral.surface-inverse",
    filter: "drop-shadow(0 0 2px rgba(0, 0, 0, 0.5))",
    flexWrap: "wrap",
  },
  variants: {
    visual: {
      barbie: {
        color: "#FFFFFF",
        fill: "barbie.600",
        fontFamily: "barbie",
        bgColor: "barbie.600",
        filter: "drop-shadow(0 0 2px var(--colors-barbie-500))",
      },
    },
  },
});

const ARROW_WIDTH = 12;
const ARROW_HEIGHT = 6;
const GAP = 4;

type ToolTipProps = {
  // hello
  children: ReactNode;
  popupContent: ReactNode;
} & RecipeVariantProps<typeof ToolTipCVA>;

const ToolTip: React.FC<ToolTipProps> = ({
  children,
  popupContent,
  visual,
}: ToolTipProps) => {
  const [isOpen, setIsOpen] = useState(false);
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
          className={ToolTipCVA({ visual: visual })}
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          <FloatingArrow
            ref={arrowRef}
            context={context}
            width={ARROW_WIDTH}
            height={ARROW_HEIGHT}
            fill={"inherit"}
          />
          {popupContent}
        </div>
      )}
    </>
  );
};

export default ToolTip;

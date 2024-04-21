import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import "./ModalDialog.scss";

interface ModalSheetProp {
  title?: string | React.ReactNode;
  content: React.ReactNode;
  closeHandler: () => void;
  footer: React.ReactNode | null;
  isError?: boolean;
  variant: string;
  footerInfo: string;
}

const ModalSheet: FunctionComponent<ModalSheetProp> = ({ title, content, footer, closeHandler, variant, isError, footerInfo }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [dragCurrentY, setDragCurrentY] = useState(0);
  const [dragThreshold, setDragThreshold] = useState(0);
  const contentRef: any = useRef(null);
  const headerRef: any = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      const contentHeight = contentRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const maxDragDistance = windowHeight - windowHeight * 0.2; // Allow dragging down to 20% of the window height
      setDragThreshold(contentHeight > maxDragDistance ? maxDragDistance : contentHeight);
      setDragStartY(rect.top);
    }
  }, [contentRef, content]);

  const handleTouchStart = event => {
    if (headerRef.current && event.target === headerRef.current) {
      event.preventDefault();

      const newDragCurrentY = event.touches[0].clientY;
      const positionY = dragStartY > newDragCurrentY ? dragStartY : newDragCurrentY;

      setIsDragging(true);
      setDragStartY(positionY);
    }
  };

  const handleTouchMove = event => {
    if (isDragging) {
      const newDragCurrentY = event.touches[0].clientY;
      const positionY = dragStartY > newDragCurrentY ? dragStartY : newDragCurrentY;

      if (positionY - dragStartY < 0) {
        setDragCurrentY(dragStartY);
      } else {
        setDragCurrentY(positionY);
      }

      event.preventDefault();
    }
  };

  const handleTouchEnd = event => {
    if (isDragging && dragCurrentY - dragStartY > dragThreshold) {
      closeHandler();
    }
    setIsDragging(false);
    setDragStartY(0);
    setDragCurrentY(0);
  };

  return (
    <React.Fragment>
      <div className="modal-prompt-backdrop" onClick={closeHandler} />
      <div
        className={`modal-sheet${isDragging ? " is-dragging" : ""}`}
        style={{
          transform: `translateY(${isDragging ? dragCurrentY - dragStartY : 0}px)`,
          touchAction: "none",
          border: isError ? "2px solid #f46363" : "none"
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        ref={contentRef}
      >
        <div className={`${variant} ${typeof title === "string" ? "sheet-header" : ""}`} ref={headerRef} style={{ touchAction: "none" }}>
          {title}
        </div>
        <div className="sheet-content">{content}</div>
        {footer && (
          <div className="sheet-footer">
            {!!footerInfo ? (
              <p>
                <i style={{ fontWeight: 300, padding: "0px 20px" }}>{footerInfo}</i>
              </p>
            ) : null}
            {footer}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default ModalSheet;

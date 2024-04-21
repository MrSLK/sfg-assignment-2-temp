import { Collapse } from "react-bootstrap";

const collapseStyle = {
  textAlign: "left"
};

export const ErrorAlert = ({ title = "Whoops!", style = {}, children, linkComponent = <></> }) => {
  const messages = getArrayOfMessages(children);

  return (
    <Collapse style={collapseStyle} in={messages.length > 0}>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            ...style
          }}
        >
          <div style={{ paddingRight: 10 }}>
            <img style={{ width: 30, height: 30 }} src="/src/assets/error.svg" />
          </div>
          <div>
            <p>{title}</p>
            {messages.map((message, index) => (
              <p key={index}>
                {messages.length === 1 ? "" : <span>-&nbsp;</span>}
                {message} {linkComponent}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Collapse>
  );
};

const getArrayOfMessages = children => {
  if (!children) {
    return [];
  }

  if (typeof children === "string") {
    if (children !== "") {
      return [children];
    }
  }

  if (typeof children === "object") {
    if (children.length > 0) {
      return children;
    }
  }

  return [];
};

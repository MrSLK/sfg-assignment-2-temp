import { Collapse } from "react-bootstrap";

const collapseStyle = {
  textAlign: "left"
};

export const SuccessAlert = ({ title = "Success!", style = {}, children }) => {
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
            <img style={{ width: 30, height: 30 }} src="/src/assets/checkmark.svg" />
          </div>
          <div>
            <p>{title}</p>
            {messages.map(message => (
              <p key={message}>
                {messages.length === 1 ? "" : <span>-&nbsp;</span>}
                {message}
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

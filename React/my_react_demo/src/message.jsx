function Message({ messageData, messageType }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>My First component made in React.js</h1>
      <h2>
        {messageData}
        {messageType}
      </h2>
    </div>
  );
}

export default Message;

/* eslint-disable-next-line */
export interface ClientFrontProps { }

export function ClientFront(props: ClientFrontProps) {
  return (
    <div>
      <h1>web socket </h1>

      <input>
        json web token
      </input>
      <button id="btn-connect">conectar</button>

      <span id="server-status">offline</span>
      <ul id="clients-ul"></ul>

      <form id="message-form">
        <input placeholder="message" id="message-input" />
      </form>

      <h3>Messages</h3>
      <ul id="messages-ul"></ul>

    </div>
  );
}

export default ClientFront;

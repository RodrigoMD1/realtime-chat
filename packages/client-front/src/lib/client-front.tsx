import { useChatClient } from './chat/useChatClient';

export interface ClientFrontProps {}

export function ClientFront(props: ClientFrontProps) {
  const { peerID, setPeerID } = useChatClient();
  return (
    <div>
      <h1>web socket </h1>

      <input
        id="input"
        name="peerID"
        value={peerID}
        onChange={(e) => {
          setPeerID(e.target.value);
        }}
        className="bg-red-500"
      />
      <button id="btn-connect">Connect</button>

      <span id="server-status">Offline</span>
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

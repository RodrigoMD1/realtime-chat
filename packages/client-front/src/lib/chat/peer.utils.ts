import Peer from 'peerjs';

export const createPeerClient = () => {
  const peer = new Peer();

  return peer;
};

export const callPeer = (peerID: string, instance: Peer) => {
  return instance.connect(peerID);
};

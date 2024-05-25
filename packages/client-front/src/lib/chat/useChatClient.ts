import { useEffect, useState } from 'react';
import { callPeer, createPeerClient } from './peer.utils';

export const useChatClient = () => {
  const [peerClient] = useState(() => createPeerClient());
  const [peerID, setPeerID] = useState('');

  const onCallPeer = () => {
    const callResponse = callPeer('123', peerClient);
    callResponse.once('open', () => {
      console.log('CONECTADITO');
    });
    callResponse.on('data', (data) => {
      console.log('CALL_DATA: ', data);
    });
    callResponse.on('close', () => {
      console.log('CALL_CLOSED: ');
    });
    callResponse.on('error', (e) => {
      console.log('CALL_ERROR: ', e);
    });

    callResponse.on('iceStateChanged', (s) => {
      console.log('iceStateChanged: ', s);
    });
  };

  useEffect(() => {
    peerClient.connect('asdasdasdasdasd/asd');
    peerClient.once('open', (info) => {
      console.log('CONECTADITO', info);
    });
    peerClient.on('close', () => {
      console.log('CALL_CLOSED: ');
    });
    peerClient.on('error', (e) => {
      console.log('CALL_ERROR: ', e);
    });
  }, [peerClient]);

  return {
    peerClient,
    onCallPeer,
    peerID,
    setPeerID,
  };
};

interface Key {
  remoteJid: string;
  fromMe: boolean;
  id: string;
}

interface Message {
  conversation: string;
  messageContextInfo: object;
}

interface Data {
  key: Key;
  pushName: string;
  message: Message;
  messageType: string;
  messageTimestamp: number;
  owner: string;
  source: string;
}

export interface ReceiveMessageRequest {
  event: string;
  instance: string;
  data: Data;
  destination: string;
  date_time: string;
  sender: string;
  server_url: string;
  apikey: string;
}

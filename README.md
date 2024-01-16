# Webhook Node.js Clean Architecture Project

Este projeto foi desenvolvido para atuar como um webhook, sendo responsável por receber eventos de novas mensagens da [EvolutionAPI](https://github.com/EvolutionAPI/evolution-api). A principal funcionalidade é disparar os dados da mensagem para um endpoint HTTP, [Voicemonkey](https://voicemonkey.io/), a fim de reproduzir o conteúdo da mensagem nos dispositivos Amazon Alexa.

## Visão Geral

O objetivo deste projeto é proporcionar uma integração eficiente entre a EvolutionAPI e o serviço Voicemonkey, utilizando os princípios da Clean Architecture em Node.js. A arquitetura limpa permite uma estrutura modular, escalável e de fácil manutenção.

### Funcionalidades

- Recebe eventos de novas mensagens da EvolutionAPI.
- Envia dados da mensagem para o endpoint HTTP do Voicemonkey.
- Reproduz o conteúdo da mensagem nos dispositivos Amazon Alexa.

### Configuração

Antes de iniciar, certifique-se de ter as seguintes dependências instaladas:

- Node.js
- npm (Node Package Manager)

Clone o repositório:

```bash
git clone https://github.com/RonaldoAlencar/webhook-http-message-sender.git
```

### Instale as dependências

```bash
cd seu-projeto
npm install
```

### Configure as variáveis de ambiente

Crie um arquivo .env na raiz do projeto e defina as seguintes variáveis:

```text
VOICE_MONKEY_API_URL=http://endereco-do-voicemonkey/api
VOICE_MONKEY_API_TOKEN=token-de-autorizacao
DEFAULT_DEVICE_ID=id-dispositivo-alexa-cadastrado-no-voice-monkey
```

Execute o projeto:

```bash
npm start
```

### Video de exemplo
https://github.com/RonaldoAlencar/webhook-http-message-sender/assets/49104855/b0e56fb8-9ceb-4c8d-bfdb-ecac0b33ba45

**Licença**
Este projeto está licenciado sob a MIT License.

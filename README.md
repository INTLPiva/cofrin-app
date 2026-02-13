<h1 align="center">
  <img src="./assets/ios-icon.png" width="40" style="vertical-align: middle;" />
  Cofrin
</h1>

Aplicativo mobile desenvolvido em **React Native** inspirado na funcionalidade de “caixinhas” do Nubank, com o objetivo de ajudar usuários a organizarem metas financeiras de forma simples, visual e prática.

---

## 📸 Preview

<p align="center">
  <img src="./assets/home.png" alt="Tela inicial" width="250" />
  <img src="./assets/target.png" alt="Tela de meta" width="250" />
  <img src="./assets/transaction.png" alt="Tela de transações" width="250" />
</p>

---

## 🚀 Sobre o projeto

O **Cofrin** é um app de organização financeira onde o usuário pode:

- Criar “cofrinhos” (metas financeiras)
- Definir valores objetivos
- Acompanhar o progresso de cada meta
- Registrar valores adicionados
- Visualizar o saldo acumulado
- Consultar histórico de movimentações

A ideia central é incentivar o controle financeiro e facilitar o acompanhamento de objetivos como viagens, compras, reserva de emergência, entre outros.

---

## 🛠️ Tecnologias utilizadas

- React Native
- Expo
- Expo Router
- SQLite (expo-sqlite)

---

## 🏗️ Arquitetura

O projeto foi estruturado utilizando:

- **Expo Router** para roteamento baseado em arquivos
- **SQLite** para persistência local de dados
- Componentização para reutilização de UI
- Estrutura organizada visando escalabilidade

---

## 💾 Persistência de Dados

O aplicativo utiliza **SQLite** para armazenar:

- Cofrinhos criados
- Valores adicionados
- Histórico de movimentações
- Progresso das metas

Os dados ficam salvos localmente no dispositivo, mesmo após o fechamento do aplicativo.

---

## ▶️ Como rodar o projeto

Você pode rodar:

- No emulador Android
- No simulador iOS
- No dispositivo físico

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/seu-usuario/cofrin.git
cd cofrin
```

### 2️⃣ Instale as dependências

```bash
npm install
```

## 3️⃣ Executando o projeto

### Dispositivo iOS

```bash
npx expo prebuild
npx expo run:ios
```

---

### Dispositivo Android

```bash
npx expo run:android
```

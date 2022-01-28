# Recentify

Showing a user their recently played artists and tracks from Spotify.

All documentation regarding [Issues](./docs/Issues.md), [Todos](./docs/TODO.md) or [Testing](./docs/TESTING.md) is in the `docs/` directory.

## Design

Making use of the Spotfy Guidelines.

- [Figma](https://www.figma.com/file/dO0bVEgyX15s2vdkBqFqxp/Spotify-Riskledger-Task?node-id=2%3A3)

## Requirements

Node 14+ and a Spotify Application

## Usage

### env

Copy the contents of `.env.example` to `.env` and fill in the CLIENT_ID from your Spotify Application.

Make sure you have included the callback URI for your current origin in your Spotify Application. It should look something like this: `https://localhost:3000/callback` or `https://www.myliveapp.com/callback`. Making sure to keep the `/callback`.

### Install

```bash
yarn
```

### Basic

```bash
yarn dev
```

### Build & Start (Server)

```bash
yarn build && yarn start
```

## Generate (Static)

```bash
yarn generate
```
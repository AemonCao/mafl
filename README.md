<h1 align="center">Mafl</h1>
<p align="center">
  <i>Mafl is an intuitive service for organizing your homepage. Customize Mafl to your individual needs and work even more efficiently!</i>
  <br/><br/>
  <img width="130" src="https://raw.githubusercontent.com/hywax/mafl/main/docs/public/logotype.svg" />
  <br/><br/>
  <b><a href="https://github.com/hywax/mafl">GitHub</a>
  <br/><br/>
  <a href="https://github.com/hywax/mafl/blob/main/CHANGELOG.md">
    <img src="https://img.shields.io/github/package-json/v/hywax/mafl?logo=hackthebox&color=609966&logoColor=fff" alt="Current Version">
  </a>
  <a target="_blank" href="https://github.com/hywax/mafl">
    <img src="https://img.shields.io/github/last-commit/hywax/mafl?logo=github&color=609966&logoColor=fff" />
  </a>
  <a target="_blank" href="https://hub.docker.com/r/hywax/mafl">
    <img src="https://img.shields.io/docker/pulls/hywax/mafl?logo=docker&color=609966&logoColor=fff" />
  </a>
  <a href="https://github.com/hywax/mafl/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-609966?logo=opensourceinitiative&logoColor=fff" alt="License MIT">
  </a>
  <br/><br/>
  <img src="https://raw.githubusercontent.com/hywax/mafl/main/docs/public/cover.png" width="100%" />
</p>

<details>
  <summary><b>Table of Contents</b></summary>

* [Features](#features)
* [Getting started](#getting-started)
  * [Docker](#docker)
  * [Node](#node)
  * [Proxmox](#proxmox)
  * [Cloud Providers](#cloud-providers)
* [License](#license)
</details>

## Features

* 🔐 **Safety**. All requests to third-party services occur in backend.
* ⚡ **Real-time**. Interactive cards with extra information.
* 🌎 **Languages**. Supports multiple languages.
* 🎨 **Themes**. Customize the look to your liking.
* 🗂️ **Grouping**. Create custom service groups.
* 👌 **Easy setup**. A few lines of yaml and your homepage is ready to go.
* 🚀 **Fast**. Everything is fast and free of hang-ups.
* 🐳 **Docker**. Optimized docker images for popular platforms.

## Getting started

### Docker

This Docker image is published to both Docker Hub and the GitHub container registry. Depending on your preferences and needs, you can reference both `hywax/mafl` as well as `ghcr.io/hywax/mafl`.

```yaml
version: '3.8'

services:
  mafl:
    image: hywax/mafl
    restart: unless-stopped
    ports:
      - '3000:3000'
    volumes:
      - ./config.yml:/app/data/config.yml
      - ./icons:/app/public/icons
```

### Node

1. Clone repository: `git clone https://github.com/hywax/mafl.git`
2. Go to the application folder: `cd mafl`
3. Configure `data/config.yml`
4. Install dependencies: `yarn install`
5. Build application: `yarn build`
6. Run `yarn preview`

### Proxmox

...

### Cloud Providers

...

## License

This app is open-sourced software licensed under the [MIT license](https://github.com/hywax/mafl/blob/main/LICENSE).

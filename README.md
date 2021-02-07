## Star Trek - Simulator

Multiplayer Online Simulator to train Klingon Army

### Architecture 

![Simulator Architecture](./architecture.png)

### Requirements

- [PDF:File - Star Trek Simulator](./StarTrek-Simulator.pdf)

### Tools

- VS Code Latest with Live Server ( > 5.6.1 )
- JavaScript, HTTML, CSS

### Optional Tools

- Docker
- Docker Compose

```
$ cd tools
$ docker build -f Dockerfile -t rabbitmq:3.8-web .
$ docker-compose up
```

### Admin RabbitMQ

- http://frontend.ascuy.me:15672/
- http://localhost:15672/

### Refs

- https://www.rabbitmq.com/web-mqtt.html
- https://www.npmjs.com/package/rsup-mqtt
- https://hub.docker.com/_/rabbitmq/


### Contributors

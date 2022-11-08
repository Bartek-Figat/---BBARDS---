---
sidebar_position: 6
---

# Launching

To build docker's images and run them, use following.

```bash
docker compose up
```

Then **docker** will bind ports:

```
3000 - Frontend
8080 - Backend
27017 - MongoDb
```

## Running particular services

You can also run specific services using following commands.

```bash
docker compose up backend
```
- will run backend service and mongodb
```bash
docker compose up frontend
```
- will run frontend service

## What's next?

- Read about [customizing configuration](customizing)

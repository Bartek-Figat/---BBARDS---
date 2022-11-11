---
sidebar_position: 6
---

# Configuration

If you want to code using **Docker**, create `.env` file in root directory:

```
MONGO_INITDB_ROOT_USERNAME=developer
MONGO_INITDB_ROOT_PASSWORD=password
MONGO_INITDB_DATABASE=bbardslocal
dbDEV=mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@database/${MONGO_INITDB_DATABASE}?retryWrites=true&w=majority&authSource=admin
```

## What's next?

- Read how to [build and run docker's images](lunching)

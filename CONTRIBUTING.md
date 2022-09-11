## Gitflow

- Checkout a new branch in your repo, use folder before, accordingly to branch intentions and the key after slash.

```bash
   git checkout -b hotfix/FE#1
```

- Available folders names:

  - hotfix
  - feature
  - develop

- When committing changes to your branch, use the key at the beginning of your commit message.

```bash
   git commit -m "FE#1 some message"
```

- Merging with main branch. For example:

```bash
  git checkout main
```

```bash
  git merge hotfix/FE#1
```

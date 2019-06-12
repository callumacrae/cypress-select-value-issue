# Cypress input value not being preserved in snapshots

Installing and running:

```
npm install
npm run serve
```

Replicating issue:

- Run tests
- Hover over "GET select" or "- SELECT changed value" in the test information
- Note that select element in snapshot now says "THIS SHOULDN'T DISPLAY"

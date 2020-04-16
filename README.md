## Next `getServerProps` with `child_process`

It turns out, that you can't use Node.js native modules in `getServerProps`.

## Repro

```sh
yarn
yarn dev
# open http://localhost:3001/ - have a look in the terminal
```

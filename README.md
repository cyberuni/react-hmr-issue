# React HMR issue

When HMR occurs, the `onChange` event is not triggered.


```sh
pnpm i
pnpm dev
```

Observe `hello` is printed from the state.
Change the code to trigger HMR.

You will see the input is working, but the state update didn't occur.
That's because the `onChange` event is not triggered.

This occurs to both React 16 and 18

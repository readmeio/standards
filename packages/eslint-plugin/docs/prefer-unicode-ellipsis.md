# Prefer Unicode ellipsis

> [!TIP]
> This rule is autofixable.

We've standardized on representing an ellipsis in our frontend as a Unicode ellipsis (`…`) instead of three periods (`...`).

## Fail

```js
<Notification className={classes['Notification-Save']} color="graphite">
  <Spinner />
  &nbsp;Saving...
</Notification>
```

```js
console.log('buster...');
```

## Pass

```js
<Notification className={classes['Notification-Save']} color="graphite">
  <Spinner />
  &nbsp;Saving…
</Notification>
```

```js
console.log('buster…');
```

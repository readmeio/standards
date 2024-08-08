# Prefer using a unicode ellipsis (`…`) instead of three periods (`...`) (`readme/prefer-unicode-ellipsis`)

⚠️ This rule _warns_ in the ⚛️ `react` config.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

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


This is our basic text element. It's styled exactly like P, but is intended for single words or short phrases. It has four sizes: extraSmall, small, medium (default), and large. It also has a four font weights available: light, normal (default), medium, and bold. You can use it on its own, or extend the styles in a block.


```jsx
<div>
  <h5>EXTRA SMALL</h5>
  <Text modifiers={['extraSmall']}>
    Don't forget to read the fine print!
  </Text>

  <h5>SMALL</h5>
  <Text modifiers={['small']}>
    a helpful caption
  </Text>

  <h5>DEFAULT</h5>
  <Text>
    A short description
  </Text>

  <h5>LARGE</h5>
  <Text modifiers={['large']}>
    Sign up here!
  </Text>
</div>
```

This is our generic Icon element. You can use it on its own, or extend its styles and put it inside a block.

```jsx { "props": { "style": { "backgroundColor": "#fafafa" } } }
<div>
  <h5>SIZES</h5>
  <span style={{ padding: "5px" }}><Icon name="home" modifiers={['extraSmall']} /></span>
  <span style={{ padding: "5px" }}><Icon name="home" modifiers={['small']} /></span>
  <span style={{ padding: "5px" }}><Icon name="home" /></span>
  <span style={{ padding: "5px" }}><Icon name="home" modifiers={['large']} /></span>

  <h5>COLORS</h5>
  <span style={{ padding: "5px" }}><Icon name="home" /></span>
  <span style={{ padding: "5px" }}><Icon name="home" modifiers={['textLight']} /></span>
  <span style={{ padding: "5px" }}><Icon name="home" modifiers={['chrome000']} /></span>
</div>
```

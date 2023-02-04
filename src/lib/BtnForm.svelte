<script>
  import { copy } from "svelte-copy";
  let k = 0,
    padding,
    font,
    color = "#fff",
    text = "button",
    bg,
    margin,
    shadowX,
    shadowY,
    shadowBlur,
    shadowColor = "#fff",
    radius;

  $: copyText = `<button >
    ${text}
  </button>
    padding: ${padding}px; color: ${color}; background-color: ${bg}; font-size: ${font}px;margin: ${margin}px; box-shadow: ${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowColor};border-radius:${radius}px;`;
  let handleClick = () => {
    k = 1;
    setTimeout(() => {
      k = 0;
    }, 1000);
  };
</script>

<div class="details">
  <div>
    <h1>Padding :</h1>
    <input type="text" bind:value={padding} />
  </div>

  <div>
    <h1>color :</h1>
    <input type="color" bind:value={color} />
  </div>

  <div>
    <h1>Text :</h1>
    <input type="text" bind:value={text} />
  </div>

  <div>
    <h1>BackGround :</h1>
    <input type="color" bind:value={bg} />
  </div>

  <div>
    <h1>Font-size :</h1>
    <input type="text" bind:value={font} />
  </div>

  <div>
    <h1>margin :</h1>
    <input type="text" bind:value={margin} />
  </div>

  <div>
    <h1>Border-radius :</h1>
    <input type="text" bind:value={radius} />
  </div>

  <div>
    <h1>ShadowX :</h1>
    <input type="text" bind:value={shadowX} />
    <h1>ShadowY :</h1>
    <input type="text" bind:value={shadowY} />
    <h1>ShadowBlur :</h1>
    <input type="text" bind:value={shadowBlur} />
    <h1>ShadowColor :</h1>
    <input type="color" bind:value={shadowColor} />
  </div>
</div>

<!-- <button
  style="padding:{padding}px; color:{color};background:{bg};font-size:{font}px;margin:{margin}px; box-shadow: {shadowX}px {shadowY}px {shadowBlur}px {shadowColor}; border-radius:{radius}px;"
>
  {text}
</button> -->

<!-- <button use:copy={copyText} on:click={handleClick}>
  {k == 0 ? "Copy" : "Copied"}
</button> -->
<style lang="scss">
  .details {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 20px;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 20px;

      h1 {
        margin: 10px;
        font-size: 1.4rem;
      }
      input {
        margin: 10px;
      }
    }
  }
</style>

<script>
  import "./app.scss";
  import { copy } from "svelte-copy";
  let k = 0,
    padding = 10,
    font = 20,
    color = "#000",
    text = "Submit",
    bg = "#fff",
    margin = 10,
    shadowX = 5,
    shadowY = 5,
    shadowBlur = 0,
    shadowColor = "#000",
    radius = 5,
    border = 1,
    borderColor = "#000";

  $: copyText =
    `<button> ${text}</button> \n` +
    "<" +
    "style" +
    ">" +
    `
    button{
        padding: ${padding}px;
        color: ${color};
        background-color: ${bg}; 
        font-size: ${font}px;
        margin: ${margin}px; 
        box-shadow: ${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowColor};
        border-radius:${radius}px;
        border:${border}px solid ${borderColor};
    }
  ` +
    "<" +
    "/" +
    "style" +
    ">";

  let handleClick = () => {
    k = 1;
    setTimeout(() => {
      k = 0;
    }, 1000);
  };
</script>

<div class="heading">
  <h1>Button Generator Using <span>SvelteJs</span></h1>
</div>
<div class="container">
  <div class="details">
    <div>
      <h1>Text :</h1>
      <input type="text" bind:value={text} />
    </div>
    <div>
      <h1>Padding :</h1>
      <input type="number" bind:value={padding} />
    </div>

    <div>
      <h1>Color :</h1>
      <input type="color" bind:value={color} />
    </div>

    <div>
      <h1>BG-Color :</h1>
      <input type="color" bind:value={bg} />
    </div>

    <div>
      <h1>Font-Size :</h1>
      <input type="number" bind:value={font} />
    </div>

    <div>
      <h1>Margin :</h1>
      <input type="number" bind:value={margin} />
    </div>

    <div>
      <h1>Border-Radius :</h1>
      <input type="number" bind:value={radius} />
    </div>
    <div>
      <h1>Border :</h1>
      <input type="number" bind:value={border} />
      <input type="color" bind:value={borderColor} />
    </div>

    <div class="merge-shadow">
      <h1>Shadow X :</h1>
      <input type="text" bind:value={shadowX} />
      <h1>Shadow Y :</h1>
      <input type="text" bind:value={shadowY} />
      <h1>ShadowBlur :</h1>
      <input type="text" bind:value={shadowBlur} />
      <h1>ShadowColor :</h1>
      <input type="color" bind:value={shadowColor} />
    </div>
  </div>

  <div class="copy-button">
    <div class="demo">
      <button
        style="padding:{padding}px; color:{color};background:{bg};font-size:{font}px;margin:{margin}px; box-shadow: {shadowX}px {shadowY}px {shadowBlur}px {shadowColor}; border-radius:{radius}px; border:{border}px solid {borderColor};"
      >
        {text}
      </button>
    </div>

    <button class="copy" use:copy={copyText} on:click={handleClick}>
      {k == 0 ? "Copy" : "Copied"}
    </button>
  </div>
</div>

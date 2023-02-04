<script>
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

  $: copyText = `<button style="padding: ${padding}px; color: ${color}; background-color: ${bg}; font-size: ${font}px;margin: ${margin}px; box-shadow: ${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowColor};border-radius:${radius}px; border:${border}px solid ${borderColor};" >
    ${text}
  </button>
    `;
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
      <h1>BG - Color :</h1>
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
      <h1>Box-shadow :</h1>
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

<style lang="scss">
  /* For 1024 Resolution */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    .heading {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 0;
      h1 {
        font-size: 2rem;
        margin: 10px;
        border: 1px solid black;
        width: fit-content;
        border-radius: 4px;
        padding: 5px 20px;
        background-color: #fafafa;
        color: #020202e1;
        box-shadow: 7px 7px #0e0e0e;
        span {
          color: #1b78fa;
        }
      }
    }
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      .copy-button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px;
        .demo {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 20px;
          border: 1px solid black;
          width: 300px;
          height: 200px;
          border-radius: 5px;
          background-color: #fff;
          box-shadow: 8px 8px #171717;
        }
        .copy {
          margin: 10px;
          padding: 10px;
          border: none;
          border-radius: 5px;
          font-size: 1.2rem;
          cursor: pointer;
        }
        .copy:nth-child(1) {
          background-color: #fff;
          color: #000;
        }
        .copy:nth-child(2) {
          background-color: #000;
          color: #fff;
        }
      }

      .details {
        background-color: #fff;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 20px;
        width: 50vw;
        padding: 20px 10px;
        border: 1px solid black;
        border-radius: 10px;
        .merge-shadow {
          display: flex;
          flex-wrap: wrap;
          input {
            width: 25px !important;
            height: 25px;
            color: #000;
          }
        }
        div {
          width: fit-content;
          display: flex;
          align-items: center;
          border: 1px solid #939090;
          border-radius: 10px;
          margin: 5px;
          transition: all 0.3s ease;
          h1 {
            margin: 10px;
            font-size: 1rem;
            transition: all 0.3s ease;
          }
          &:hover {
            transition: all 0.3s ease;
            border: 1px solid rgb(14, 94, 254);
            background-color: #99f6ff;
            h1 {
              transition: all 0.3s ease;
              color: black;
            }
          }
          input {
            width: 100px;
            margin: 10px;
            font-size: 1rem;
            border: 2px solid #0e5efef3;
            background-color: #eee;
            border-radius: 5px;
            color: #000;
          }
        }
      }
    }
  }
  @media screen and (min-width: 1025px) and (max-height: 1310px) {
    /* Laptop */

    .heading {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 0;
      h1 {
        font-size: 3rem;
        border: 1px solid black;
        width: fit-content;
        border-radius: 4px;
        padding: 5px 20px;
        background-color: #fafafa;
        color: #020202e1;
        box-shadow: 7px 7px #0e0e0e;
        span {
          color: #1b78fa;
        }
      }
    }
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px;
      .copy-button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px;
        .demo {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 20px;
          border: 1px solid black;
          width: 400px;
          height: 300px;
          border-radius: 5px;
          background-color: #fff;
          box-shadow: 8px 8px #171717;
        }
        .copy {
          margin: 10px;
          padding: 10px;
          border: none;
          border-radius: 5px;
          font-size: 1.2rem;
          cursor: pointer;
        }
        .copy:nth-child(1) {
          background-color: #fff;
          color: #000;
        }
        .copy:nth-child(2) {
          background-color: #000;
          color: #fff;
        }
      }

      .details {
        background-color: #fff;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 20px;
        width: 50vw;
        padding: 25px 40px;
        border: 1px solid black;
        border-radius: 10px;
        .merge-shadow {
          display: flex;
          flex-wrap: wrap;
          input {
            width: 25px !important;
            height: 25px;
            color: #000;
          }
        }
        div {
          width: fit-content;
          display: flex;
          align-items: center;
          border: 1px solid #939090;
          border-radius: 10px;
          padding: 5px 0;
          margin: 10px;
          transition: all 0.3s ease;
          h1 {
            margin: 10px;
            font-size: 1.3rem;
            transition: all 0.3s ease;
          }
          &:hover {
            transition: all 0.3s ease;
            border: 1px solid rgb(14, 94, 254);
            background-color: #99f6ff;
            h1 {
              transition: all 0.3s ease;
              color: black;
            }
          }
          input {
            width: 100px;
            margin: 10px;
            font-size: 1.2rem;
            border: 2px solid #0e5efef3;
            background-color: #eee;
            border-radius: 5px;
            color: #000;
          }
        }
      }
    }
  }
</style>

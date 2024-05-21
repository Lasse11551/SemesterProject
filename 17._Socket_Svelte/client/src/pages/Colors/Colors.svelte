<script>
    import ColorList from "../../components/ColorList/ColorList.svelte";
    import { colorList } from "../../store/colorlistStore.js";;
    import io from "socket.io-client";

    let color;

    const socket = io("localhost:8080");

    socket.on("server-sends-color", ({data, nickname}) => {
        const color = data.data;

        colorList.update((colorListArray) => {
            colorListArray.push({color, nickname});
            return colorListArray;
        })
        // shouldn't do it this way, do it in the more svelte way
        document.body.style.backgroundColor = data.data;
    })

    function submitColor() {
        socket.emit("client-sends-color", { data: color })
    }
</script>

<input type="color" bind:value={color}>
<button on:click={submitColor}>Submit Color</button>

<ColorList/>
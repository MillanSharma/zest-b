<script lang='ts'>
    import { onMount } from "svelte";
    import { apiBaseUrl } from "../../src/constants";
    import { sanitizeData } from "../../src/utils/zest_utils"
    let todos: Array<{text: string, completed: boolean}> = [];
    let gists: Array<{text: string, completed: boolean}> = [];
    let files: Array<{filename: string, }> = [];
    let text = '';
    let loading = true;
    let accessToken = "";


    onMount(async ()=>{
        window.addEventListener("message", async (event)=> {
            const message = event.data;
            switch (message.type){
                case "new-todo":
                    todos = [{text: message.value, completed: false}, ...todos]
                    break;
                    case "token":
                    accessToken = message.value;
                    const response  = await fetch(`${apiBaseUrl}/gists`,
                    {
                        method: 'GET',
                        headers: {
                            authorization : accessToken,
                        }
                    }
                    );
                    const data = await response.json();
                    // files = data.map((item : any) => item.files )
                    // files = sanitizeData(files);
                    console.log('RECEIVED',data)
                loading = false;
                    }
            });

           tsvscode.postMessage({ type: 'get-token',  value: undefined})
            
    })

</script>
<style>
    .complete {
        text-decoration-line: line-through;
    }
</style>

{#if loading}
    <div>loading...</div>
<!-- {:else if gists}
    <div>{JSON.stringify(gists)}</div> -->
{:else}
    <div>no user logged in</div>
{/if}

<form on:submit|preventDefault ={() =>{ 
    todos = [...todos, { text: text, completed: false}];
    text='';}
} 
><input bind:value={text} /></form>

<ul>{#each todos as todo (todo.text)}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <li
    class:complete={todo.completed}
    on:click={()=>{
        todo.completed = !todo.completed
    }}
    >{todo.text}</li>
    {/each}
</ul>
<ul>{#each files as file (file.filename)}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <li
    >{file.filename}</li>
    {/each}
</ul>

<!-- svelte-ignore missing-declaration -->
<button 
    on:click={()=> {
        tsvscode.postMessage({
            type: 'onInfo',
            value: 'info message send from webview, svelte',
        })
    }}
    >
    send info
    </button>

    <!-- svelte-ignore missing-declaration -->
    <button 
    on:click={()=> {
        tsvscode.postMessage({
            type: 'onError',
            value: 'error message send from webview, svelte',
        })
    }}
    >
    send error
    </button>

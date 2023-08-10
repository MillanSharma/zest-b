<script lang='ts'>
    import { onMount } from "svelte";
    import { apiBaseUrl, constKeys, constType } from "../../src/constants";
    let todos: Array<{text: string, completed: boolean}> = [];
    let gists: Array<{text: string, completed: boolean}> = [];
    let files: Array<{filename: string, language: string | null, row_url: string, size: number, type: string }> = [];
    let text = '';
    let loading = true;
    let accessToken = "";
    let fileArray: Array<{id: number, code: string, language: string | null, tags: string[] }>  = [];


    onMount(async ()=>{
        window.addEventListener("message", async (event)=> {
            const message = event.data;
            switch (message.type){
                // case "new-todo":
                //     todos = [{text: message.value, completed: false}, ...todos]
                //     break;
                case constType.userObject:
                    accessToken = message.value.accessToken;
                    console.log('USER OBJECT',message.value);
                    const response  = await fetch(`${apiBaseUrl}/gists`,
                    {
                        method: 'GET',
                        headers: {
                            authorization : accessToken,
                        }
                    }
                    );
                    const rv = await response.json();
                    fileArray = rv.data;
                    loading=false;
                    break;
                // case "user":
                //     const userData = message.value;
                    
                    }
            });

           tsvscode.postMessage({ type: constKeys.getUser,  value: undefined })
            
    })

//     let expanded = false;

// function toggle() {
//   expanded = !expanded;
// }
</script>
<style>
    .list{
        background-color: blue;
        color: white;
    }
    .list-parent{
        background-color: green;
    }
  /* .toggle-button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  } */
</style>

<!-- <button class="toggle-button" on:click={toggle}>
    {expanded ? '▼' : '▶'} Toggle View
  </button> -->
  
{#if loading}
    <div>loading...</div>
{:else}
    <ul class="list-parent">{#each fileArray as todo (todo.id)}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="list">{todo.code}</li>
        {/each}
    </ul>
{/if}
<!-- 
<form on:submit|preventDefault ={() =>{ 
    todos = [...todos, { text: text, completed: false}];
    text='';}
} 
><input bind:value={text} /></form> -->


<!-- svelte-ignore missing-declaration -->
<!-- <button 
    on:click={()=> {
        tsvscode.postMessage({
            type: constKeys.onInfo,
            value: 'info message send from webview, svelte',
        })
    }}
    >
    send info
    </button> -->

    <!-- svelte-ignore missing-declaration -->
    <!-- <button 
    on:click={()=> {
        tsvscode.postMessage({
            type: constKeys.onError,
            value: 'error message send from webview, svelte',
        })
    }}
    >
    send error
    </button> -->

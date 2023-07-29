<script lang="ts">

    let todos: Array<{text: string, completed: boolean}> = [];
    let text = '';

</script>
<style>
    .complete {
        text-decoration-line: line-through;
    }
</style>
<input />

<form on:submit|preventDefault ={() =>{ 
    todos = [...todos, { text: text, completed: false}];
    text='';}
}
><input bind:value={text} /></form>

<ul>{#each todos as todo (todo.text)}
    <li
    class:complete={todo.completed}
    on:click={()=>{
        todo.completed = !todo.completed
    }}
    >{todo.text}</li>
    {/each}
</ul>
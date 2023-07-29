<script lang="ts">

    let todos: Array<{text: string, completed: boolean}> = [];
    let text = '';

</script>
<input />

<form on:submit|preventDefault ={() =>{ 
    todos = [...todos, { text: text, completed: false}];
    text='';}
}
><input bind:value={text} /></form>

<ul>{#each todos as todo (todo.text)}
    <li>{todo.text}</li>
    {/each}
</ul>
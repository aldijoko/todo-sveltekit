<script>
    import { todoData } from '$lib/store/index';
	import TodoInput from './TodoInput.svelte';
</script>

<section class="mt-5 space-y-2">
    {#each $todoData as todo (todo.id)}
        <TodoInput todoData={todo}/>
    {/each}
</section>
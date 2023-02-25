<script>
    import { removeTodo, toggleComplete, updateTodo } from '$lib/store/index';

    export let todoData;

    $: completeClass = todoData.complete ? 'bg-green-four text-gray-four' : 'bg-red-one text-black';
</script>

<div class="flex items-center justify-between rounded-md border border-gray-two px-5 py-3">
    <div class="flex w-full max-w-lg items-center justify-start ">
        <label for={`${todoData.id}-checkbox`} class="sr-only">Complete Todo</label>
        <input 
            class="h-5 w-5 rounded-md border border-gray-two bg-cream-three 
            text-green-five focus:border-green-four focus:outline focus:outline-1
            focus:outline-offset-2 focus:outline-green-four mr-2"
            type="checkbox" 
            id={`${todoData.id}-checkbox`}
            checked={todoData.complete}
            on:change={() => toggleComplete(todoData.id)}>

        <label for={`${todoData.id}-text`} class="sr-only">Edit Todo</label>
        <input 
            class="ml-2 flex-1 text-ellipsis rounded-none border-x-0 border-t-0 border-b border-b-gray-one
            bg-cream-three px-0 pb-1 text-base font-normal text-gray-four placeholder-gray-two
            focus:outline-none focus:ring-0 "
            type="text" 
            id={`${todoData.id}-text`}
            placeholder="Enter a Todo"
            value={todoData.text}
            on:input={(e) => updateTodo(todoData.id, e.target.value)}>

        <span class="{completeClass} ml-5 hidden rounded-full py-1 px-2 text-sm
         font-normal  md:block">
            {todoData.complete ? 'Completed' : 'Not Completed'}
        </span>
    </div>
    <button
        class="flex items-center justify-center rounded-md border border-gray-two px-5 py-2 hover:bg-red-one gap-2"
        type="button"
        on:click={() => removeTodo(todoData.id)}>
        <span class="text-black-one text-sm">Delete Todo</span>
        <span class="iconify text-gray-two" data-icon="ph:trash"></span>
    </button>
</div>

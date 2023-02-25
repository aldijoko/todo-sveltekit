<script>
    import { addTodo } from '$lib/store/index';
</script>

<section class="flex justify-between">
    <h3 class="text-lg font-bold text-gray-four">Checklist</h3>
    <button
        type="button"
        on:click={addTodo}
        class="flex items-center rounded-md border-cream-two bg-green-two 
        px-5 py-2 text-base font-bold text-gray-four outline outline-1 
        outline-offset-2 outline-green-two hover:text-green-four 
        focus-visible:text-green-four focus-visible:outline-green-four
        hover:transition duration-500 gap-2">
        Add Task
        <span class="iconify text-2xl" data-icon="material-symbols:add-circle-outline"></span>
    </button>
</section>
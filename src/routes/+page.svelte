<script>
	import ProgressSection from "../lib/components/progress/ProgressSection.svelte";
import AddTodoSelection from "../lib/components/todo/addTodoSelection.svelte";
	import TodoSection from "../lib/components/todo/TodoSection.svelte";


</script>

<div class="min-h-screen bg-olive-two p-0 selection:bg-green-four md:py-24 md:px-8">
    <main class="mx-auto min-h-screen max-w-none rounded-none bg-cream-three px-5 py-10 md:min-h-max md:max-w-[60rem] md:rounded-xl md:px-8 md:outline md:outline-4 md:outline-offset-4 md:outline-cream-three">
        <h1 class="text-2xl font-bold text-gray-four">Dashboard</h1>
        <div class="mt-10">
            <AddTodoSelection />
            <TodoSection/>
            <ProgressSection/>
        </div>
    </main>
</div>
<script>
    import ProgressBar from "./ProgressBar.svelte";

    import { todoData } from "$lib/store/index";
    
    export let completePercentage = 0;
    export let incompletePercentage = 0;

    $: totalCount = $todoData.length;
    $: completeCount = $todoData.filter((todo) => todo.complete).length;
    $: incompleteCount = $todoData.filter((todo) => !todo.complete).length;
    $: completePercentage = Math.round((completeCount / totalCount) * 100) || 0;
    $: incompletePercentage = Math.round((incompleteCount / totalCount) * 100) || 0;
</script>

<section class="mt-5">
    <h3 class="text-lg font-bold text-gray-four">Progress</h3>
    <div class="mt-5 space-y-4">
        <ProgressBar
            class="mb-2"
            color="bg-red-one"
            percentage={incompletePercentage}
            text="Incomplete"
        />
        <ProgressBar
            
            color="bg-green-four"
            percentage={completePercentage}
            text="Completed"
        />
        <!-- <p>{incompletePercentage}</p>
        <p>{completePercentage}</p> -->
    </div>
</section>
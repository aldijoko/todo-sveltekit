<script>
    export let percentage;
    export let text;

    $: completeClass = text === 'Completed' ? 'bg-green-four' : 'bg-red-one';
</script>

<div >
    <div class="flex justify-between text-base font-normal text-gray-four">
        <p>{text}</p>
        <p>{percentage} %</p>
    </div>
    <div class="mt-2 h-5 w-full overflow-hidden rounded-full bg-gray-one">
        <div 
            class="h-full {completeClass} transition-all duration-500 ease-in-out"
            style="width: {percentage}%"></div>
    </div>
</div>
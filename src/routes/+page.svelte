<script lang="ts">
    let { data } = $props<{ data: { songs: any } }>();
    
    // console.log(data.songs);
</script>


<section>
    <p class="text-xl font-semibold">My music</p>

        <div class="space-y-4">
            {#each data.songs as song}
                <div class="p-4 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                    
                    <div class="flex items-center justify-between mb-3">
                        <p class="font-semibold text-lg text-gray-800"> {song.title} </p>
                    </div>

                    <audio class="w-full rounded-md" controls>
                        <source src={song.url} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    
                    <a href={song.url} download class="my-3 text-blue-500 hover:text-blue-700">Download</a>

                </div>
            {/each}
        </div>
</section>
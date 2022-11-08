<script>
  	import { InlineCalendar } from 'svelte-calendar';
</script>

<div class="">
	<nav class="flex items-center">
		<ul class="flex justify-evenly w-full text-xl py-4">
			<li><a href="/folkrace">Folkrace</a></li>
			<li><a href="/cross">Cross / Motocross</a></li>
			<li><a href="/kart">Kart</a></li>
			<li><a href="/supermoto">Supermoto</a></li>
		</ul>
	</nav>
</div>

<p class="text-3xl font-bold text-center">Borlänge MK</p>
<div class="w-full flex justify-center pt-10">
    <InlineCalendar/>
</div>

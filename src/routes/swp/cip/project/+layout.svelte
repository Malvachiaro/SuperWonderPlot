<script lang="ts">
	import { goto } from '$app/navigation';


	import { page } from '$app/stores';
	import { AppActions } from '$lib/cip/actions/Actions';


	$: url = $page.url.pathname;


	let baseUrl = '/swp/cip/project/';


	async function close_project() {
		await AppActions.clearCache();
		goto("/swp/starting");
	}

</script>





<nav class="top_nav">
	<ul>
		<li>
			<a class:active={String(url).startsWith(baseUrl+"settings")} href="{baseUrl}settings">Project</a>
		</li>
		<li><a class:active={String(url).startsWith(baseUrl+'fields')} href="{baseUrl}fields">Fields</a></li>
		<li><a class:active={String(url).startsWith(baseUrl+'data')} href="{baseUrl}data">Data</a></li>
		<!-- <li><a class:active={String(url).startsWith(baseUrl+'doplot')} href="{baseUrl}doplot">Plot</a></li> -->
		<li><a class:active={String(url).startsWith(baseUrl+'doplot2')} href="{baseUrl}doplot2">Plot</a></li>

	</ul>
</nav>

<button type="button" class="close_project_button" on:click={close_project}>Close this project</button>


<section>
	<slot/>
</section>



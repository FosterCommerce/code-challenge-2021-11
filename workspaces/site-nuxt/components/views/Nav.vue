<script>
	export default {
		name: 'Nav',
		props: {
			list: [],
		},
	};
</script>
<template>
	<div class="justify-between sm:flex xs:flex-col md:flex-row">
		<!-- items-center justify-center sm:flex xs:flex-col md:flex-row -->
		<div class="flex items-center justify-center pb-4 mr-4" v-for="(i, index) in list" :key="index">
			<a
				class="
					font-normal
					leading-10
					tracking-[0.02em]
					md:text-2xl
					sm:text-sm
					font-body
					text-tertiery
					active:text-highlight-secondary
					selected:bg-red
					active:border-b active:border-highlight-primary
				"
				href="#"
				>{{ i.name }}</a
			>
			<div v-if="i.needsArrow">
				<img src="../../assets/images/arrow.svg" />
			</div>
		</div>
	</div>
</template>

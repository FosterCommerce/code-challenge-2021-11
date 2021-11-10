<script>
	/** The global site header */

	export default {
		name: 'TheHeader',
		data() {
			return {
				navOpen: false,
			};
		},
		methods: {
			toggleNav() {
				this.navOpen = !this.navOpen;
			},
		},
	};
</script>

<template>
	<div class="absolute top-0 h-[100px] w-full z-50">
		<header class="flex justify-between items-center h-[100px] px-6">
			<nuxt-link to="/" class="inline-block">
				<BaseIcon
					file="fosterLogo-full"
					alt="Foster Commerce Logo"
					class="w-[160px] h-[42px] text-transparent"
				/>
			</nuxt-link>
			<TheNavigationDesktop class="hidden | lg:block" />
		</header>

		<div
			class="
				absolute
				inset-x-0
				top-0
				z-50
				flex
				justify-end
				items-center
				h-[100px]
				px-6
				pointer-events-none
				lg:hidden
			"
			:class="{ fixed: navOpen }"
		>
			<button
				id="primary-nav-burger-toggle"
				class="inline-block px-2 py-1 rounded-sm pointer-events-auto ring-0"
				aria-controls="primary-nav-mobile"
				:aria-label="`${navOpen ? 'Close' : 'Open'} Navigation`"
				:aria-expanded="`${navOpen ? 'true' : 'false'}`"
				@click="toggleNav"
			>
				<span class="relative block w-5 h-5 | toggle" :class="{ open: navOpen }">
					<span />
					<span />
				</span>
			</button>
		</div>

		<transition name="slide">
			<TheNavigationMobile v-show="navOpen" class="lg:hidden" @click="toggleNav" />
		</transition>
	</div>
</template>

<style lang="postcss" scoped>
	.slide-leave-active,
	.slide-enter-active {
		transition: 0.3s;
	}
	.slide-enter {
		transform: translate(100%, 0);
	}
	.slide-leave-to {
		transform: translate(100%, 0);
	}

	.toggle {
		span {
			@apply absolute left-0 w-full bg-secondary transition-transform duration-300;

			height: 2px;
			transform: rotate(0deg);

			&:nth-child(1) {
				top: 3px;
			}

			&:nth-child(2) {
				bottom: 3px;
			}
		}

		&.open span {
			&:nth-child(1) {
				top: 9px;
				transform: rotate(135deg);
			}

			&:nth-child(2) {
				bottom: 9px;
				transform: rotate(-135deg);
			}
		}
	}
</style>

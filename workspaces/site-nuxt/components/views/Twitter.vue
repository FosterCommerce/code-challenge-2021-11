<template>
	<div class="bg-white rounded-md">
		<div class="flex flex-wrap-reverse justify-between px-6 py-4 align-center">
			<div class="flex">
				<img
					class="inline object-cover w-16 h-16 mr-2 rounded-full"
					:srcset="avatar"
					alt="Profile image"
				/>

				<div class="flex flex-col">
					<div class="text-xl not-italic font-bold leading-10 font-body">{{ name }}</div>
					<div class="text-sm leading-8 text-tertiery font-body">{{ userName }}</div>
				</div>
			</div>
			<img src="../../assets/images/twitter.svg" />
		</div>
		<div class="px-16 py-4">
			<div class="text-sm font-medium leading-8 text-tertiery font-body">{{ content }}</div>
			<div>
				<div>
					<img srcset="" />
				</div>
				<div class="flex items-center justify-center pb-4 mt-6">
					<div class="flex items-center mr-2">
						<img class="mr-4" srcset="../../assets/images/comment.svg" />
						<div>{{ comment }}</div>
					</div>
					<div class="flex items-center mr-2">
						<img srcset="../../assets/images/like.svg" />
						<div>{{ likes }}</div>
					</div>
					<div class="flex items-center mr-2">
						<img src="../../assets/images/share.svg" />
						<div>{{ share }}</div>
					</div>
					<div>
						<img src="../../assets/images/reshare.svg" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Twitter',
		props: {
			name: {
				type: String,
				default: '',
			},
			userName: {
				type: String,
				default: '',
			},
			avatar: {
				type: String,
				default: '',
			},
			content: {
				type: String,
				default: '',
			},
			comment: {
				type: Number,
				default: 0,
			},
			like: {
				type: Number,
				default: 0,
			},
			share: {
				type: Number,
				default: 0,
			},
		},
		mounted() {
			const name = 'aaaaaaa@wwww    #okfr_www wwww ';

			const regex = /(@)[a-z]*[^\s]/;
			const re = /(#)[a-z]+_*[a-z]*/;
			const matches = regex.exec(name);
			const hash = re.exec(name);
			console.log(matches.index, matches.index + matches[0].length);
			console.log(matches);
			console.log(hash);
			console.log(name.substr(0, matches.index));
			console.log(name.substr(matches.index, matches.index + matches[0].length));
			console.log(name.substr(name.substr(matches[0].length, hash.index)));

			console.log(hash.index, hash.index + hash[0].length);
		},
		computed: {
			imgUrl() {
				let url = this.myimage;

				// validate URL in `this.myimage`
				try {
					url = new URL(url).toString();
				} catch (e) {
					url = '';
				}

				if (url) {
					const regex = /^(.+)\/.*$/gi;
					const matches = regex.exec(url);
					return matches && `${matches[1]}/home.jpg`;
				}
			},
		},
	};
</script>

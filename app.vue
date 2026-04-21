<script setup>
const { public: { cloudflareAnalyticsToken } } = useRuntimeConfig()

useHead(() => {
	if (!cloudflareAnalyticsToken) {
		return {}
	}

	return {
		script: [
			{
				src: 'https://static.cloudflareinsights.com/beacon.min.js',
				defer: true,
				'data-cf-beacon': JSON.stringify({ token: cloudflareAnalyticsToken }),
			},
		],
	}
})
</script>

<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
  

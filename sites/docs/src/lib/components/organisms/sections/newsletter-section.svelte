<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
</script>

<section id="cta" class="bg-primary text-primary-foreground w-full py-12 md:py-24 lg:py-32">
	<div class="container px-4 md:px-6">
		<div class="flex flex-col items-center space-y-4 text-center">
			<div class="space-y-2">
				<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
					Ready to build amazing tables?
				</h2>
				<p class="text-primary-foreground/80 mx-auto max-w-[600px] md:text-xl">
					Get started with HeadlessTable today and transform your data presentation.
				</p>
			</div>
			<div class="w-full max-w-sm space-y-2">
				<form class="flex space-x-2">
					<Input
						class="bg-primary-foreground text-primary max-w-lg flex-1"
						placeholder="Enter your email"
						type="email"
					/>
					<Button type="submit" variant="secondary">Subscribe</Button>
				</form>
				<p class="text-primary-foreground/60 text-xs">
					Get notified about updates. No spam, we promise.
				</p>
			</div>
		</div>
	</div>
</section>

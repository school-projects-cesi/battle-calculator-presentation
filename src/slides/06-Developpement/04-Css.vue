<template>
	<section>
		<small>Développement</small>
		<h2>Design</h2>
		<div style="display: flex">
			<div style="text-align: left; margin: auto">
				<small style="color: #aaa; font-weight: bold">Fonts</small>
				<table style="margin: 0">
					<tbody>
						<tr>
							<td style="vertical-align: top; padding: 0">
								<span class="font-1">
									Poppins
								</span>
							</td>
							<td>
								<div style="color: #aaa; font-size: 1.1rem; margin-left: 60px">
									<p class="font-1" style="margin: 0">
										ABCDEFGHIJKLMNOPQRSTUVWXYZ
									</p>
									<p class="font-1" style="margin: 0">
										abcdefghijklmnopqrstuvwxyz
									</p>
									<p class="font-1" style="margin: 0">0123456789</p>
								</div>
							</td>
						</tr>
						<tr>
							<td style="vertical-align: top; padding: 0">
								<span class="font-2">
									Lato
								</span>
							</td>
							<td>
								<div style="color: #aaa; font-size: 1.1rem; padding-left: 60px">
									<p class="font-2" style="margin: 0">
										ABCDEFGHIJKLMNOPQRSTUVWXYZ
									</p>
									<p class="font-2" style="margin: 0">
										abcdefghijklmnopqrstuvwxyz
									</p>
									<p class="font-2" style="margin: 0">0123456789</p>
								</div>
							</td>
						</tr>
					</tbody>
				</table>

				<div style="margin: 50px"></div>

				<small style="color: #aaa; font-weight: bold">Couleurs</small>
				<div>
					<span style="display: inline-flex; flex-direction: column; align-items: center">
						<span
							style="display: block;height: 75px; width: 75px; border-radius: 50%; background: linear-gradient(135deg,#9040cc,#b856d3 19%,#845ec2);box-shadow: 5px 5px 5px  rgba(0,0,0,0.2);"
						>
						</span>
						<span style="font-size: .8rem">#845EC2</span>
					</span>
					<span
						style="display: inline-flex; flex-direction: column; align-items: center; margin-left: -10px;"
					>
						<span
							style="display: block;height: 75px; width: 75px; border-radius: 50%; background-color: #ffc75f;box-shadow: 5px 5px 5px  rgba(0,0,0,0.2);"
						>
						</span>
						<span style="font-size: .8rem">#FFC75F</span>
					</span>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');

.font-1 {
	font-family: 'Poppins' !important;
}
.font-2 {
	font-family: 'Lato' !important;
}
</style>

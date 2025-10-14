import { Title } from '@solidjs/meta'
import Carousel from '~/components/Carousel'
import './index.css'

export default function Home() {
	return (
		<>
			<Title>reoseah.github.io - Home</Title>

			<h2>
				Bohdan Yaroslavtsev
				<span class="font-normal">
					aka <span class="font-italic">@reoseah</span> online
				</span>
			</h2>

			<p>
				Human, programmer, web developer, hobby game modder and developer, and some other things.
			</p>

			<div>
				<span class="font-bold">Contents</span>

				<ul class="list-disc">
					<li>
						<a href="#something-resembling-portfolio">Something resembling portfolio</a>
					</li>
					{/* <li>
						<a href="#">More things to come</a>
					</li> */}
				</ul>
			</div>

			<section class="three-photos">
				<img src="/assets/photo-1.jpg" alt="selfie with a colored lens" />
				<img src="/assets/photo-2.jpg" alt="selfie through a piece of cloth" />
				<img src="/assets/photo-3.jpg" alt="selfie with a piece of plastic" />
			</section>

			<h2 id="something-resembling-portfolio">Something resembling portfolio</h2>

			<h3>Escuelas Taller "Gijón Acompaña"</h3>
			<h4>Version for project's "website"</h4>

			<p>
				The first this we did <s>in absence of something more useful</s> were designs for a website
				for the project itself, then we voted on which one we liked the most. This wasn't popular.
			</p>

			<Carousel
				images={[
					{
						src: '/assets/et23 desktop header.webp',
						alt: 'screenshot of the site on desktop screen',
					},
					{
						src: '/assets/et23 mobile header.webp',
						alt: 'screenshot of the site on mobile screen',
					},
					{
						src: '/assets/et23 v0.png',
						alt: 'screenshot of the very early version of the site',
						description:
							'A very early version. I viewed too much media saying neo-brutalism was going to be a trend in 2023',
					},
				]}
			/>

			<h4>Proposal for viewing geospatial data</h4>
			<p>
				The idea was simply to be able to preview datasets at{' '}
				<a href="https://www.gijon.es/es/datos">gijon.es/es/datos</a> directly there. Born out of
				frustration of having to download *.kml files, then use a different website to view them.
			</p>

			<p>
				Unfortunately, or maybe fortunately, none of these proposals resulted in anything, so you
				only have screenshots to look at :(
			</p>

			<img src="/assets/kml viewer animation.webp" alt="recording of the app" />

			<h4>Air pollutants on heatmap chart</h4>
			<p>
				...and you guessed it, this was also born from the need to figure out what some data sets
				contained - or rather didn't, because there's a lot of the missing data in there.
			</p>

			<Carousel
				images={[
					{
						src: '/assets/air quality.webp',
						alt: 'screenshot of the web app',
					},
					{
						src: '/assets/air quality plasma.webp',
						alt: 'screenshot of the web app',
						description:
							'Different coloring options better suited for certain kinds of color blindness',
					},
				]}
			/>
		</>
	)
}

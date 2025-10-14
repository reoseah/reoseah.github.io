import EmblaCarousel from 'embla-carousel'
import { onMount } from 'solid-js'
import './Carousel.css'

export interface CarouselProps {
	images: { src: string; alt?: string; description?: string }[]
}

export default function Carousel(props: CarouselProps) {
	let slidesRef!: HTMLDivElement, thumbsRef!: HTMLDivElement

	onMount(() => {
		const slidesCarousel = EmblaCarousel(slidesRef, { dragFree: true })
		const thumbsCarousel = EmblaCarousel(thumbsRef, {
			containScroll: 'keepSnaps',
			dragFree: true,
		})

		const slides = slidesCarousel.slideNodes()
		const thumbs = thumbsCarousel.slideNodes()

		thumbs.forEach((thumb, idx) => {
			thumb.addEventListener('click', () => slidesCarousel.scrollTo(idx))
		})
		slides[0].setAttribute('data-selected', '')
		thumbs[0].setAttribute('data-selected', '')

		const sync = () => {
			const prev = slidesCarousel.previousScrollSnap()
			const next = slidesCarousel.selectedScrollSnap()

			slides[prev].removeAttribute('data-selected')
			slides[next].setAttribute('data-selected', '')

			thumbsCarousel.scrollTo(next)
			thumbs[prev]?.removeAttribute('data-selected')
			thumbs[next]?.setAttribute('data-selected', '')
		}
		slidesCarousel.on('select', sync)
	})

	return (
		<>
			<div class="embla" ref={slidesRef}>
				<div class="embla__container">
					{props.images.map(image => (
						<div class="embla__slide">
							<img src={image.src} alt={image.alt} />
							{image.description && <span class="slide-description">{image.description}</span>}
						</div>
					))}
				</div>
			</div>
			<div class="embla carousel-thumbnails" ref={thumbsRef}>
				<div class="embla__container">
					{props.images.map(image => (
						<div class="embla__slide">
							<img src={image.src} alt={image.alt} />
						</div>
					))}
				</div>
			</div>
		</>
	)
}

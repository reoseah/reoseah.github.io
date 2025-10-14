import { MetaProvider, Title } from '@solidjs/meta'
import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { Suspense } from 'solid-js'
import './app.css'

export default function App() {
	return (
		<Router
			root={props => (
				<MetaProvider>
					<Title>reoseah.github.io</Title>

					<header>
						<h1>
							<a href="/">reoseah.github.io</a>
						</h1>
					</header>
					<main>
						<Suspense>{props.children}</Suspense>
					</main>
				</MetaProvider>
			)}
		>
			<FileRoutes />
		</Router>
	)
}

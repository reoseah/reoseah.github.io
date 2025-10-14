// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server'

export default createHandler(() => {
	const locale = extractLocale(import.meta.url)

	return (
		<StartServer
			document={({ assets, children, scripts }) => (
				<html lang={locale}>
					<head>
						<meta charset="utf-8" />
						<meta name="viewport" content="width=device-width, initial-scale=1" />
						<link rel="icon" href="/favicon.ico" />
						{assets}
					</head>
					<body>
						{children}
						{scripts}
					</body>
				</html>
			)}
		/>
	)
})

function extractLocale(path: string, defaultLocale = 'en') {
	const segments = path.split('/')
	const locale = segments[1]

	if (locale && locale.length === 2) {
		return locale
	} else {
		return defaultLocale
	}
}

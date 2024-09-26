import {
    defineConfig,
    presetUno,
} from 'unocss'

export default defineConfig({
    theme: {
        fontFamily: {
            "stix-two": '"STIX Two Text", serif',
            redaction: '"Redaction", "STIX Two Text", serif',
            lucette: '"Lucette", "STIX Two Text",serif',
        },
    },
    presets: [
        presetUno()
    ]
})
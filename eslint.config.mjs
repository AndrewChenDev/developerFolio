import { createRequire } from "module"

const require = createRequire(import.meta.url)
const coreWebVitals = require("eslint-config-next/core-web-vitals")

const eslintConfig = [...coreWebVitals]

export default eslintConfig

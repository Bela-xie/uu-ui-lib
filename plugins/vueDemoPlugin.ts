// @ts-nocheck
import { baseParse } from '@vue/compiler-core'
import fs from 'fs'

export default vueDemoPlugin = {
    name: 'vue-demo',
    transform(code, id) {
        if (!/vue&type=demo/.test(id)) {
            return
        }
        if (/\.ya?ml$/.test(id)) {
            code = JSON.stringify(require('js-yaml').safeLoad(code.trim()))
        }
        const file = fs.readFileSync(id.split("?")[0]).toString()
        const parsed = baseParse(file).children.find(n => n.tag === 'demo')
        const title = parsed.children[0].content
        const main = file.split(parsed.loc.source).join('').trim()
        return `export default Comp => {
        Comp.__sourceCode = ${JSON.stringify(main)}
        Comp.__sourceTitle = ${JSON.stringify(title)}
      }`.trim()
    }
}

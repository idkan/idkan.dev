const { replace } = ''

// escape
const escape1 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g
const ca = /[&<>'"]/g

const esca = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&#39;',
  '"': '&quot;'
}
const pe = (m) => esca[m]

export const escape = (es) => replace.call(escape1, ca, pe)

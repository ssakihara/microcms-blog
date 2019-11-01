export default function({ $axios }) {
  $axios.onResponse(() => {
    $axios.setHeader('Access-Control-Allow-Origin', '*')
  })
}

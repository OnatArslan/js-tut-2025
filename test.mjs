// This ıi test for docer container
const n1 =100
const n2 =110
const n3 =101
const n4 =111

let server = `${n1}.${n2}.${n3}.${n4}`
const app = ServiceWorkerRegistration.apply(server)

console.log(app.isRunnable());
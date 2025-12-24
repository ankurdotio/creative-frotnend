function raf(func) {
    func()
    requestAnimationFrame(() => { raf(func) })
}


export default raf;
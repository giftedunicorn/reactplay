const throttle = (fn, timeout = 500) => {
    let waiting = false

    return (...args) => {
        if (waiting) return
        waiting = true
        fn.apply(this, args)
        setTimeout(() => {
            waiting = false
        }, timeout)
    }
}

export {
    throttle,
}

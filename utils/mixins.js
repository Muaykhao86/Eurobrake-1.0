
export const winWidth = () => {
    if(process.browser){
        return window.innerWidth < 1200
}
}

export const tabWidth = () => {
    if(process.browser){
        return window.innerWidth < 1080
}
}

export const mobWidth = () => {
    if(process.browser){
        return window.innerWidth
}
}
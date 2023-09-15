export type post = {
    userId : string,
    id : string,
    body : string,
    title : string
}

export type TypePostSlice = {
    loading : boolean
    post : post | null
    error : string| null
}


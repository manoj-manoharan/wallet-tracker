export type ApiResponse<T> = {
    success: boolean
    message: string
    error: {
        message: string,
        code: number
    }
    data: T
}
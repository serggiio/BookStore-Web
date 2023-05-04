export interface ApiResult<T> {
    data?: T[],
    isSuccessful?: boolean,
    message?: string,
}
export interface Counter {
    value: number
}

export interface CounterSchema2 {
    data: Counter;
    isLoading: boolean;
    error?: string;
}
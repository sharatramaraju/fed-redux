// generate all the actions that pertain to the counter state (pie slice)
// guideline: 1 action file per reducer

export const incrementCounter = () => ({
    type: 'INCREMENT_COUNTER'
})

export const decrementCounter = () => ({
    type: 'DECREMENT_COUNTER'
})

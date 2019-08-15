const changeGreeting = () => ({
  type: 'CHANGE_GREETING'
})

const setGreeting = value => ({ 
  type: 'PROPOSE_GREETING', payload: value 
})


export { changeGreeting, setGreeting }
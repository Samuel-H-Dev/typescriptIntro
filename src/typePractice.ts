interface Ttwosum{
  num1: number
  num2: number 
  message?: string
}

export const twoSum = (num1: number, num2: number, message?:string) => {
  return console.log(`This is the sum = ${num1 + num2} and here is the message ${message}`)
}



// export const twoSum = (props: Ttwosum) => {
//   return console.log(`This is the sum = ${props.num1 + props.num2} and here is the message ${props.message}`)
// }


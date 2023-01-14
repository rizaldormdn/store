
const textValidation = (text: string, name: string = 'Name', maxLength: number = 32, required: boolean = true) => {
     if (text === '') {
          return `${name} is required`
     }
     if (text.length > maxLength) {
          return `${name} max ${maxLength} characters`
     }
     return ''
}
const emailValidation = (text: string, name: string = 'Email', maxLength: number = 32, required: boolean = true) => {
     if (text === '') {
          return `${name} is required`
     }
     if (text.length > maxLength) {
          return `${name} max ${maxLength} characters`
     }
     return ''
}
const passwordValidation = (text: string, name: string = 'Password', maxLength: number = 32, minLength: number = 8, required: boolean = true) => {
     if (text === '') {
          return `${name} is required`
     }
     if (text.length > maxLength) {
          return `${name} max ${maxLength} characters`
     }
     if (text.length < minLength) {
          return `${name} min ${minLength} characters`
     }
     return ''
}



// eslint-disable-next-line import/no-anonymous-default-export
export default {
     textValidation,
     emailValidation,
     passwordValidation
}

import chalk from 'chalk'

export function sayHello() {
    const child = chalk.bold.underline.italic("child")
    console.log(`Hello from the ${child}!`)
}
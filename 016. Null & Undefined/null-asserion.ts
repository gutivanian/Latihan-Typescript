function getValue(): string | undefined {
    return 'Hello'
}

let value = getValue()
console.log(`value length: ` + value!.length);
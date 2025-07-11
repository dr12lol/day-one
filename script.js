plus.onclick = increment
flag = true

coolpeople.value = "cool"

function increment() {
    letter.value = flag ? "a" : "b"
    flag = ! flag
}

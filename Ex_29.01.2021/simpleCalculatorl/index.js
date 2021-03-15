function calculator() {
    let el1
    let el2
    let res
    return {
        init(s1, s2, rs) {
            el1 = document.querySelector(s1)
            el2 = document.querySelector(s2)
            res = document.querySelector(rs)
            document.getElementById('sumButton').addEventListener('click', this.add(el1.value, el2.value, res))
            document.getElementById('subtractButton').addEventListener('click', this.subtract(el1.value, el2.value, res))
        },
        add(a, b, place) {
            place.value = Number(a) + Number(b)
        },
        subtract(a, b, place) {
            place.value= Number(a) - Number(b)
        }
    }
}
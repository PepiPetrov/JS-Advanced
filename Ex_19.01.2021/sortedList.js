function createSortedList() {
    return {
        arr:[],
        size:0,
        add(element) {
            this.arr.push(element)
            this.size += 1
            return this.arr.sort((a, b) => {
                return a - b
            })
        },
        remove(index) {
            if (this.arr.length > index && index >= 0) {
                this.arr.splice(index, 1)
                this.size--
            }
            return this.arr.sort((a, b) => {
                return a - b
            })
        },
        get(index) {
            if (this.arr.length > index && index >= 0) {
                return this.arr[index]
            }
        }
    }
}
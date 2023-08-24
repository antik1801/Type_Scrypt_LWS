// works with constant value and we can't duplicate value if if want | Duplicate value is not allow here
// enam types: numeric | string | Heterogenous

enum RequestType {
    readData=1,
    deleteData=3,
    saveData,
}

console.log(RequestType)

// string enum
enum RequestType2 {
    readData = 'READ_DATA',
    deleteData = 'DELETE_DATA'
}

console.log(RequestType.readData)

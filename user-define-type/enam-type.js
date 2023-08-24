// works with constant value and we can't duplicate value if if want | Duplicate value is not allow here
// enam types: numeric | string | Heterogenous
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 1] = "readData";
    RequestType[RequestType["deleteData"] = 3] = "deleteData";
    RequestType[RequestType["saveData"] = 4] = "saveData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
// string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "READ_DATA";
    RequestType2["deleteData"] = "DELETE_DATA";
})(RequestType2 || (RequestType2 = {}));
console.log(RequestType.readData);

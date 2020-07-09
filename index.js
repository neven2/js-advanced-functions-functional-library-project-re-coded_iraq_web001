const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (array, callback) {

      this.map(array, callback)
      return array

    },

    map: function (array, callback) {

      let res
      if (Array.isArray(array)) {
        res = array.map(callback);
      } else {
        res = Object.values(array).map(callback)
      }
      return res
    },

    reduce: function (array, callback, val) {

      let res
      if (Array.isArray(array)) {
        if (val) {
          res = array.reduce(callback, val);
        } else {
          res = array.reduce(callback);
        }
      } else {
        res = Object.values(array).reduce((a, b) => callback(a, b))
      }
      return res
    },

    find: function (array, callback) {
      return array.find(callback)
    },

    filter: function (array, callback) {
      return array.filter(callback)
    },

    size: function (array, callback) {
      let res
      if (Array.isArray(array)) {
        res = array.length;
      } else {
        res = Object.values(array).length
      }
      return res
    },



    first: function (array, n) {
      if (n === undefined) {
        return array[0]
      }
      else {
        return array.slice(0, n)
      }
    },


    last: function (array, n) {
      const lastPosition = array.length - 1


      if (n === undefined) {
        return array[lastPosition]
      }
      else {
        const res = array.slice((lastPosition + 1) - n);
        return res
      }


    },

    compact: function (array) {

      return array.filter(Boolean)

    },

    sortBy: function (collection, callback) {
      const newArr = [...collection]
      return newArr.sort(function (a, b) {
        return callback(a) - callback(b)
      })
    },


    unpack: function (receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },


    flatten: function (collection, shallow, newArr = []) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    keys: function (object) {
      return Object.keys(object)
    },

    values: function (object) {
      return Object.values(object)
    },


    uniq: function (collection, sorted = false, iteratee = false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },






    functions: function (obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function") {
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },


  }
})()

fi.libraryMethod()
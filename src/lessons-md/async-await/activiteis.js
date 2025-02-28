

const removeSringDuplicates = (str, RemoveType) => {
    let pattern = RemoveType == 'word' ? ' ' : '';
   return [... new Set (str.split(pattern))].join(pattern)
}
console.log(removeSringDuplicates('bom bom dom dim', 'word'))
console.log(removeSringDuplicates('bom bom dom dim', 'character'))

const removeDuplicatesfromArray = (arr) => [ ... new Set(arr) ]
console.log(removeDuplicatesfromArray([ 1, 1, 1, 1, 1 ]))


const RemoveArchaic = (str) => {
    const arr = [];
    const arrNoDuplicates=[]

    for (let index = 0; index < str.length; index++) {
        const element = str[ index ];
        arr.push(element)
    }

    for (let index = 0; index < arr.length; index++) {
        const element = arr[ index ];
        if(!arr.includes(element)){arrNoDuplicates.push(element)}
    }
     console.log(arr)
    console.log(arrNoDuplicates)
}

console.log(RemoveArchaic('r1r2r3r4r5r'))



const Ref = "Maria";
const teste = (testandoRef) => testandoRef.toUpperCase()
const isRef = teste(Ref)
console.log(Ref ===isRef)



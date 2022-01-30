const myFn = async () => {
    let data = await fetch('http://127.0.0.1:5500/data.json')
    data = await data.json()
   let {[0]: {glossary: {title : a}}} = data
    let {[0]: {items: {[0]: {id: b}}}} = data
    let {[0]: {glossary: {GlossEntry: {Abbrev: c}}}} = data
    let {[0]: {glossary: {GlossEntry: {GlossDef: d}}}} = data

    console.log(data)
    console.log('title:', a)
    console.log('id:', b)
    console.log('Abbrev:', c)
    console.log('GlossDef:', d)
}

myFn()



import fs from 'fs'
import path from 'path'

const filePath = path.join(path.resolve(), 'data.json');

export function readdata(){
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, "[]")
    }
    const data=fs.readFileSync(filePath, 'utf8')

    return JSON.parse(data)
}

export function savedata(data){
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
}

export function listdata() {
    const data = readdata();
    console.table(data);
}

export function adddata(nama){
    const data=readdata()
    data.push({id: Date.now(),nama})
    savedata(data)
    console.log("Data berhasil ditambah")
}

export function editdata(id, newnama){
    const data=readdata()
    const index=data.findIndex(edit => edit.id == id)
    if(index === -1){
        console.log('Data tidak ditemukan')
        return
    }
    data[index].nama=newnama
    savedata(data)
    console.log('Data berhasih di edit')
}

export function deletedata(id){
    const data=readdata()
    const newdata = data.filter(edit => edit.id != id)
    savedata(newdata)
    console.log('Data berhasil di hapus')
}

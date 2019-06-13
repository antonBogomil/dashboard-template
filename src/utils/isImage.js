const IMAGE_FORMATS= ['.jpg','.png','.gif'];

export default function isImage(src) {
    console.log(src);
    return IMAGE_FORMATS.find((format)=>{
        return src.toString().indexOf(format)!==-1;
    })
}
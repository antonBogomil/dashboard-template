// 'YYYY-MM-DD'
// DD-MM-YYYY

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export default (value,format)=>{
    let date = new Date(value);


    let month = date.getMonth()+1;
    if (month.toString.length===1){
        month = '0'+month
    }
    return date.getDate() + '-' + month;
}
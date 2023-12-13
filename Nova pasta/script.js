const obj = new Date();

const objDate = {
    date: [obj.getFullYear(), obj.getUTCMonth() + 1, obj.getDate()].join('-'),
    time: [obj.getHours(), obj.getMinutes(), obj.getSeconds()].join(':')
}

fetch('http://localhost:8080/blog', {
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    method: 'POST',
    body: JSON.stringify({
        'nome': 'vee pelucia',
        'comentario': 'muito fofa',
        'url': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5IEIOxBunYz5lHlJhpZaoYmleEkAgtbL3JQ&usqp=CAU',
        'data': objDate.date,
        'hoursdate': `${objDate.time}`
    })
}).then(promise => {
    if (promise.status == 200) {
        console.log('post feito com sucesso')
    }else{
        console.error('error no post')
    }
}
)
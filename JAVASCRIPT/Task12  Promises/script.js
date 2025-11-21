let user = [
    {
        id: 1,
        name: "Laiba",
        email: "Laiba@gmail.com"
    },
    {
        id: 2,
        name: "Darakhshan",
        email: "Darakhshan@gmail.com"
    },
    {
        id: 3,
        name: "Rimsha",
        email: "Rimsha@gmail.com"
    }
];
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const chatgptcontent = user;
            if (chatgptcontent) {
                console.log("bad");
                resolve(chatgptcontent);
            } else {
                console.log("good");
                reject("array not found");
            }
        });  
    });
};

console.log("data being fetched...");

fetchData()
    .then((recdata) => {
        recdata.forEach(user => console.log(user.name.toLowerCase()));
    })
    .catch((err) => {
        console.log(err);
    });
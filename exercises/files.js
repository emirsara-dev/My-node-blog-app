const fs = require('fs');

// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// fs.writeFile('./docs/blog1.txt', 'Hello, my friends.', (err) =>{
//     if (err){
//         console.log(err);
//     }
//     console.log("The file is written succesfully.");
// });
// if (!fs.existsSync('./asset')){
//     fs.mkdir('./asset', (err) => {
//     if (err){
//         console.log(err);
//     }
//     console.log("The  folder is created successfully.");
//     });
// }else {
//     fs.rmdir('./asset', (err) =>{
//         console.log(err);
//     });
//     console.log("The folder is deleted.");
// }

if (fs.existsSync('./docs/deletme.txt')){
    fs.unlink('./docs/deletme.txt', (err) =>{
        if (err){
            console.log(err);
        }
        console.log("The file deleted.");
    });
}else {
    fs.writeFile('./docs/deletme.txt', 'Hi Hitler', (err) =>{
        if (err){
            console.log(err);
        }
        console.log("the file created successfully.");
    });
}

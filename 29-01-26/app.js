// // console.log("Hello");

// // const parent = document.getElementById("container");
// // const root = ReactDOM.createRoot(parent);

// // root.render(React.createElement("h3", {}, "Loading..."));

// // setTimeout(() => {
// //     const h2 = React.createElement("h2", {}, "Welcome to React dev");
// //     const li1 = React.createElement("li", {}, "Java Programming");
// //     const li2 = React.createElement("li", {}, "C++ Programming");

// //     const ul = React.createElement("ul", {}, li1, li2);
// //     const div = React.createElement("div", {}, h2, ul);

// //     root.render(div);
// // }, 2000);

// //Write File
// const fs=require("fs");  
// const path = require("path");
// // fs.writeFile("data.txt","Hello from Node.js",(err)=>{
// //     if(err){
// //         console.log("Error occurred",err);
// //     }else{
// //         console.log("File written successfully");
// //     }
// // });

// // Read File
// fs.readFile("data.txt", "utf8", (err, data) => {
//     if (err) {
//         console.log("Error reading file", err);
//     } else {
//         console.log("File content:", data);
//     }
// });
// // Append to file
// fs.appendFile("data.txt", "\nAppended text from Node.js", (err) => {
//     if (err) {
//         console.log("Error appending to file", err);
//     } else {
//         console.log("Content appended successfully");
//     }
// });

// // Delete file
// fs.unlink("data.txt", (err) => {
//     if (err) {
//         console.log("Error deleting file", err);
//     } else {
//         console.log("File deleted successfully");
//     }
// });
// // Rename file
// fs.rename("data.txt", "newdata.txt", (err) => {
//     if (err) {
//         console.log("Error renaming file", err);
//     } else {
//         console.log("File renamed successfully");
//     }
// });

// // Move file (rename with different path)
// // First, ensure the target directory exists
// const targetDir = "./moved";

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

const sourceFile = "data.txt";
fs.rename(sourceFile, path.join(targetDir, sourceFile), (err) => {
    if (err) {
        console.log("Error moving file", err);
    } else {
        console.log("File moved successfully");
    }
});

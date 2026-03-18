import figlet from "figlet";

async function doStuff() {
  const text = await figlet.text("Aditya Pratap");
  console.log(text);
}

doStuff();
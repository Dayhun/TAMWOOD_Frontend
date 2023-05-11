// File Management
const fileManager = require("fs");
const dataFiles = new Map();
dataFiles.set("about-pics", "../data/about-pics.json");
dataFiles.set("users", "../data/users.json");
dataFiles.set("jars", "../data/jars.json");
dataFiles.set("memories", "../data/memories.json");

dataFiles.get("about-pics");

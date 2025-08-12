/*
 *     Main Logic
 *     Controls the servers and logic of entries
 */

const express = require("express");
const { validateEntry } = require("./validate-schedule");
const app = express();
app.use(express.json());

const daysOfTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const currentSchedule = [];

for (let i = 0; i < daysOfTheWeek.length; i++) {
  currentSchedule.push(createEmptyDay(daysOfTheWeek[i]));
}

function createEmptyDay(dayName) {
  const newEntry = {
    currentDay: dayName,
    streamTitle: "",
    chosenGame: "",
    startTime: "",
    isCollab: false,
    collabMembers: [],
    onPlatform: "",
    socialMediaPost: "",
  };
  return newEntry;
}

function updateDay(
  userCurrentDay,
  userStreamTitle,
  userChosenGame,
  userStartTime,
  userIsCollab,
  userCollabMembers,
  userOnPlatform,
  userSocialMediaPost
) {
  for (let i = 0; i < daysOfTheWeek.length; i++) {
    if (userCurrentDay === currentSchedule[i].currentDay) {
      currentSchedule[i].streamTitle = userStreamTitle;
      currentSchedule[i].chosenGame = userChosenGame;
      currentSchedule[i].startTime = userStartTime;
      currentSchedule[i].isCollab = userIsCollab;
      currentSchedule[i].collabMembers = userCollabMembers;
      currentSchedule[i].onPlatform = userOnPlatform;
      currentSchedule[i].socialMediaPost = userSocialMediaPost;
    }
  }
}

console.log(currentSchedule);

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/schedule", (req, res) => {
  res.json(currentSchedule);
});

app.listen(3000, () => {
  console.log("Server is runnin on 3000!");
});

app.post("/schedule/update", validateEntry, (req, res) => {
  const incomingUserEntry = req.body;

  updateDay(
    incomingUserEntry.currentDay,
    incomingUserEntry.streamTitle,
    incomingUserEntry.chosenGame,
    incomingUserEntry.startTime,
    incomingUserEntry.isCollab,
    incomingUserEntry.collabMembers,
    incomingUserEntry.onPlatform,
    incomingUserEntry.socialMediaPost
  );

  res.json({ message: "Schedule updated successfully!" });
});

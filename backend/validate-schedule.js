/*
 *     Schedule Validation
 *     Makes sure that all incoming day selections are valid
 */

const validDays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

function validateEntry(req, res, next) {
  let {
    currentDay,
    streamTitle,
    chosenGame,
    startTime,
    isCollab,
    collabMembers,
    onPlatform,
    socialMediaPost,
  } = req.body;

  if (!currentDay || typeof currentDay !== "string") {
    return res.status(400).json({ error: "Invalid entry for day!" });
  }

  currentDay = currentDay.toLowerCase();

  if (!validDays.includes(currentDay)) {
    return res
      .status(400)
      .json({ error: "Invalid entry for day - must be a real day!" });
  }

  if (!streamTitle || typeof streamTitle !== "string") {
    return res.status(400).json({ error: "Invalid entry for stream title!" });
  }

  if (!chosenGame || typeof chosenGame !== "string") {
    return res.status(400).json({ error: "Invalid entry for game title!" });
  }

  if (!startTime || typeof startTime !== "string") {
    return res.status(400).json({ error: "Invalid entry for start time!" });
  }

  if (typeof isCollab !== "boolean") {
    return res.status(400).json({ error: "Invalid entry for collab type!" });
  }

  if (!Array.isArray(collabMembers)) {
    return res.status(400).json({ error: "Invalid entry for collab members!" });
  }

  if (!onPlatform || typeof onPlatform !== "string") {
    return res.status(400).json({ error: "Invalid entry for platform!" });
  }

  if (!socialMediaPost || typeof socialMediaPost !== "string") {
    return res
      .status(400)
      .json({ error: "Invalid entry for social media post!" });
  }

  req.body.currentDay = currentDay;

  next();
}

module.exports = { validateEntry };

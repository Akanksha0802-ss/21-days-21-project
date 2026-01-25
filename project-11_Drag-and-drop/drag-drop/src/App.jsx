import React from "react";
import DragAndDrop from "./DragAndDrop";

const App = () => {
  const taskData = {
  Weekdays_Task: [
  { id: "week_01", title: "Wake Up Early 🌅" },
  { id: "week_02", title: "Meditation and Yoga 🧘‍♀️" },
  { id: "week_03", title: "Worship / Prayer 🙏" },
  { id: "week_04", title: "Part-Time Job 💼" },
  { id: "week_05", title: "Self Study / Practice Coding 💻" },
],

Home_Task: [
  { id: "home_01", title: "Reach Home 🏠" },
  { id: "home_02", title: "Have Dinner 🍽️" },
  { id: "home_03", title: "Revise Today's Topics 📚" },
  { id: "home_04", title: "Read Books(Master your Emotions) 📖" },
  { id: "home_05", title: "Relax 😌" },
],

Sunday_Task: [
  { id: "sun_01", title: "Wake Up On Time ⏰" },
  { id: "sun_02", title: "Learn New Tech Topic 🚀" },
  { id: "sun_03", title: "Work on Projects 💻" },
  { id: "sun_04", title: "Go Out / Refresh 🌿" },
  { id: "sun_05", title: "Visit Temple 🛕" },
],


};
  return <DragAndDrop data={taskData} />;
};

export default App;

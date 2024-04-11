// Define coordinates for locations in Delhi
var delhiLocations = [
  { name: "Red Fort", lat: 28.6562, lng: 77.241, content: 2 },
  { name: "India Gate", lat: 28.6129, lng: 77.2295, content: 2 },
  { name: "Qutub Minar", lat: 28.5245, lng: 77.1855, content: 2 },
];

var maharashtraLocations = [
  { name: "Gateway of India", lat: 18.922, lng: 72.8347, content: 1 },
  { name: "Ajanta Caves", lat: 20.5513, lng: 75.7004, content: 1 },
  { name: "Ellora Caves", lat: 20.0269, lng: 75.1752, content: 1 },
];

var rajasthanLocations = [
  { name: "Jaipur", lat: 26.9124, lng: 75.7873, content: 1 },
  { name: "Udaipur", lat: 24.5854, lng: 73.7125, content: 1 },
  { name: "Jaisalmer", lat: 26.9157, lng: 70.9083, content: 1 },
];

var allLocations = [].concat(
  delhiLocations,
  maharashtraLocations,
  rajasthanLocations
);

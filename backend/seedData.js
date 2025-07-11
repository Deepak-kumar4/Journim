const mongoose = require("mongoose");
const TouristPlace = require("./models/TouristPlace");
const Hotel = require("./models/Hotel");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ DB Error", err));

const places = [
  {
    name: "Echo Point",
    location: "munnar",
    latitude: 10.1032,
    longitude: 77.1564,
    image_url:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/64/14/5d/photo1jpg.jpg?w=1200&h=-1&s=1",
    description: "A scenic lake with echoes",
  },
  {
    name: "Baga Beach",
    location: "goa",
    latitude: 15.5529,
    longitude: 73.7517,
    image_url:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3e/36/95/baga-sea-beach.jpg?w=800&h=-1&s=1",
    description: "Popular beach for nightlife & water sports",
  },
  {
    name: "Fort Aguada",
    location: "goa",
    latitude: 15.4926,
    longitude: 73.7733,
    image_url:
      "https://s7ap1.scene7.com/is/image/incredibleindia/fort-aguada-goa-11-musthead-hero?qlt=82&ts=1742184865719",
    description: "17th‑century Portuguese fort with sea views",
  },
  {
    name: "Dudhsagar Falls",
    location: "goa",
    latitude: 15.3146,
    longitude: 74.3142,
    image_url:
      "https://we-dpms.com/treks-trails/wp-content/uploads/2019/08/WM-Kedarkantha-trek-001.jpg",
    description: "Majestic multi‑tiered waterfall on Goa‑Karnataka border",
  },
  {
    name: "Basilica of Bom Jesus",
    location: "goa",
    latitude: 15.5009,
    longitude: 73.9112,
    image_url:
      "https://s7ap1.scene7.com/is/image/incredibleindia/basilica-of-bom-jesus-goa-2-musthead-hero?qlt=82&ts=1742156651015",
    description: "UNESCO World Heritage 16th‑century church",
  },
  {
    name: "Anjuna Flea Market",
    location: "goa",
    latitude: 15.5744,
    longitude: 73.7401,
    image_url:
      "https://www.luxuryvillasstay.com/wp-content/uploads/2019/10/mapusa-market.jpg",
    description: "Weekly market for clothes, jewelry & souvenirs",
  },
  {
    name: "Calangute Beach",
    location: "goa",
    latitude: 15.5472,
    longitude: 73.754,
    image_url:
      "https://media1.thrillophilia.com/filestore/b8iqw6n62s37df5vqj13dpxr17cg_shutterstock_1850377780.jpg",
    description: "One of Goa's largest and busiest beaches",
  },
  {
    name: "Chapora Fort",
    location: "goa",
    latitude: 15.6045,
    longitude: 73.7371,
    image_url:
      "https://media1.thrillophilia.com/filestore/28o2uhvqffanyqg0pggei8x91k04_Chapora-Fort-Attractions.jpg",
    description: "Scenic cliff‑top fort made famous in Bollywood",
  },
  {
    name: "Attukad Waterfalls",
    location: "munnar",
    latitude: 10.0591,
    longitude: 77.0627,
    image_url:
      "https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Ftablet%2Fattukad-waterfalls-idukki-1727161204_f85a9ead048d3c7e49cf.webp&w=1920&q=75",
    description: "A stunning waterfall located between Munnar and Pallivasal",
  },
  {
    name: "Kundala Lake",
    location: "munnar",
    latitude: 10.1728,
    longitude: 77.1906,
    image_url:
      "https://www.kiomoi.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fkmadmin%2Fimage%2Fupload%2Fc_scale%2Cw_500%2Ff_auto%2Fv1707564621%2Fkiomoi%2FThekkady1_7446.webp&w=640&q=75",
    description: "Serene lake famous for pedal boating and cherry blossoms",
  },
  {
    name: "Photo Point",
    location: "munnar",
    latitude: 10.0848,
    longitude: 77.1143,
    image_url:
      "https://munnartourism.co.in/images//tourist-places/photo-point-munnar/photo-point-munnar-india-tourism-history.jpg",
    description: "Popular spot with tea gardens and scenic photo ops",
  },
  {
    name: "Lockhart Gap Viewpoint",
    location: "munnar",
    latitude: 9.9755,
    longitude: 77.0363,
    image_url:
      "https://dreamlandmunnar.in/wp-content/uploads/2024/01/8b60add7b5fc546d09f497772a6e82ae-ezgif.com-jpg-to-webp-converter-scaled-1-1024x569.webp",
    description: "Panoramic views of misty mountains and valleys",
  },
  {
    name: "Blossom International Park",
    location: "munnar",
    latitude: 10.0884,
    longitude: 77.0571,
    image_url:
      "https://munnartourism.co.in/images//tourist-places/blossom-international-park-munnar/blossom-international-park-munnar-tourism-entry-ticket-price.jpg",
    description: "Beautiful garden with activities, trails, and flowers",
  },
  {
    name: "Top Station",
    location: "munnar",
    latitude: 10.126,
    longitude: 77.2483,
    image_url:
      "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/2024/05/top-station.jpg",
    description: "Highest point in Munnar",
  },
  {
    name: "Tea Museum",
    location: "munnar",
    latitude: 10.0889,
    longitude: 77.062,
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Le_mus%C3%A9e_du_th%C3%A9_%28Munnar%2C_Inde%29_%2813694719014%29.jpg/1024px-Le_mus%C3%A9e_du_th%C3%A9_%28Munnar%2C_Inde%29_%2813694719014%29.jpg",
    description: "History of tea in Munnar",
  },
  {
    name: "Mattupetty Dam",
    location: "munnar",
    latitude: 10.0965,
    longitude: 77.123,
    image_url:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/2a/25/80/another-side-view-of.jpg?w=900&h=500&s=1",
    description: "Boating and sightseeing",
  },
  {
    name: "Eravikulam Park",
    location: "munnar",
    latitude: 10.1882,
    longitude: 77.0605,
    image_url:
      "https://munnartourism.co.in/images/places-to-visit/headers/eravikulam-national-park-munnar-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    description: "Home to Nilgiri Tahr",
  },
];

const hotels = [
  {
    name: "Munnar Tea County",
    latitude: 10.0887,
    longitude: 77.061,
    rating: 4.5,
    price: 6500,
    image_url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/45002629.jpg?k=e56eab87264865b6e1077ffa21c083c0ca3e6b3cf070269f75950615ff5382ab&o=&hp=1",
    description: "Luxury in tea gardens",
  },
  {
    name: "Green Ridge",
    latitude: 10.0882,
    longitude: 77.063,
    rating: 4.2,
    price: 3000,
    image_url: "https://gos3.ibcdn.com/e119ee5a9a2711e4aaad36cfdd80c293.jfif",
    description: "Valley view hotel",
  },
  {
    name: "Clouds Valley",
    latitude: 10.085,
    longitude: 77.0589,
    rating: 4.4,
    price: 4500,
    image_url: "https://gos3.ibcdn.com/4ddd69666a0e11ea904b0242ac110008.jpg",
    description: "Modern comfort",
  },
  {
    name: "Taj Fort Aguada Resort",
    location: "goa",
    latitude: 15.495,
    longitude: 73.774,
    rating: 4.7,
    price: 12000,
    image_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/2f/24/92/aguada-cottage-garden.jpg?w=900&h=500&s=1",
    description: "Luxury beachfront resort with historic fort views",
  },
  {
    name: "W Goa",
    location: "goa",
    latitude: 15.5483,
    longitude: 73.7492,
    rating: 4.6,
    price: 14000,
    image_url: "https://cache.marriott.com/content/dam/marriott-renditions/GOIWH/goiwh-exterior-2324-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1920px:*",
    description: "Vibrant beachfront hotel with spa & nightlife",
  },
  {
    name: "Alila Diwa Goa",
    location: "goa",
    latitude: 15.4104,
    longitude: 73.9111,
    rating: 4.5,
    price: 11000,
    image_url: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2021/08/11/0733/GOIAL-P0126-Vivo-Exterior.jpg/GOIAL-P0126-Vivo-Exterior.16x9.jpg?imwidth=1280",
    description: "Rice‑paddy resort with pool & spa near Majorda",
  },
  {
    name: "Vivanta Goa, Panaji",
    location: "goa",
    latitude: 15.4923,
    longitude: 73.8233,
    rating: 4.4,
    price: 8000,
    image_url: "https://gos3.ibcdn.com/ce8d200e236d11e88b5b025f77df004f.jpg",
    description: "Stylish city‑center hotel with pool & dining",
  },
  {
    name: "The Lalit Golf & Spa Resort",
    location: "goa",
    latitude: 15.5518,
    longitude: 73.7703,
    rating: 4.3,
    price: 9500,
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToG3ciaIg8JPBGzyCiGzMR5jKRjr8xnzlcmQ&s",
    description: "Resort on a hill overlooking Bambolim Valley",
  },
  {
    name: "Caravela Beach Resort",
    location: "goa",
    latitude: 15.5833,
    longitude: 73.7417,
    rating: 4.2,
    price: 10000,
    image_url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/62495169.jpg?k=6db010be5372ca2475f430b2550494fb285943bb6c405f087b238bad020b96c9&o=&hp=1",
    description: "All‑inclusive resort at Varca Beach",
  },
  {
    name: "Cidade de Goa",
    location: "goa",
    latitude: 15.4098,
    longitude: 73.9222,
    rating: 4.3,
    price: 9000,
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTluLSmVdLWPR10ScLZ_BXoLZOvuYdp-slKPw&s",
    description: "Five‑star resort with lagoon and river views",
  },
  {
    name: "Hotel Hillview",
    latitude: 10.0899,
    longitude: 77.0701,
    rating: 4.3,
    price: 2200,
    image_url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/412677596.jpg?k=9b84e9fc35fa5170baea3c5046bcbfb39f0d2f9fc9ee241639fba958f2a2fdbb&o=&hp=1",
    description: "Budget near town",
  },
  {
    name: "The Tall Trees",
    latitude: 10.0944,
    longitude: 77.1115,
    rating: 4.6,
    price: 5500,
    image_url: "https://www.munnar.com/Tall_Trees_Munnar/img/banner.jpg",
    description: "Eco-friendly forest resort",
  },
];



async function insertData() {
  await TouristPlace.deleteMany();
  await Hotel.deleteMany();
  await TouristPlace.insertMany(places);
  await Hotel.insertMany(hotels);
  console.log("🌱 Sample tourist places & hotels inserted.");
  process.exit();
}

insertData();

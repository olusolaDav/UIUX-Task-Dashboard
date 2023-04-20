import imgPink from "../../../assets/images/🖼️ Card-ImagePinkCardImage.png";
import imgButter from "../../../assets/images/🖼️ Card-ImageHighFideilityImage.png";
import imgGreen from "../../../assets/images/🖼️ Card-ImageGreenCardImage.png";

const IMAGES = [
  "https://i.ibb.co/rv5HP4d/Profile01.png",
  "https://i.ibb.co/rv5HP4d/Profile01.png",
  "https://i.ibb.co/rv5HP4d/Profile01.png",
];


export const TASKS = [
  {
    id: 0,
    title: "To Do",
    number: "3",
    cardTitleProgress: [
      {
        id: 0,
        headTitle: "Highfidelity Design",
        body: "Make clear design and color",
        image1: IMAGES[0],
        image2: IMAGES[1],
        image3: IMAGES[2],
        className: "before:bg-gray-700",
        progress: 2,
        claculatedWidth: "before:w-1",
        comments: 7,
        links: 3,
        cardImage: imgPink
        
      },
      {
        id: 1,
        headTitle: "Userbility testing",
        body: "Make clear design and color",
        image1: IMAGES[0],
        image2: IMAGES[1],
        image3: IMAGES[2],
        className: "before:bg-gray-700",
        progress: 3,
        claculatedWidth: "before:w-0",
        comments: 1,
        links: 8,
      },
    ],
  },

  {
    id: 1,
    title: "Inprogress",
    number: "1",
    cardTitleProgress: [
      {
        id: 0,
        headTitle: "Highfidelity Design",
        body: "Make clear design and color",
        image1: IMAGES[0],
        image2: IMAGES[1],
        image3: IMAGES[2],
        className: "before:bg-secondaryOrange",
        progress: 3,
        claculatedWidth: "before:w-3/12",
        comments: 6,
        links: 2,
        cardImage: imgButter
         
        
      },
    ],
  },

  {
    id: 2,
    title: "Completed",
    number: "2",
    cardTitleProgress: [
      {
        id: 0,
        headTitle: "Highfidelity Design",
        body: "Make clear design and color",
        image1: IMAGES[0],
        image2: IMAGES[1],
        image3: IMAGES[2],
        className: "before:bg-secondaryGreenLight",
        progress: 10,
        claculatedWidth: "before:w-12/12",
        comments: 8,
        links: 5,
        cardImage: imgGreen
        
        
        // order: '-order-1',
      },
      {
        id: 1,
        headTitle: "Userbility testing",
        body: "Make clear design and color",
        image1: IMAGES[0],
        image2: IMAGES[1],
        image3: IMAGES[2],
        className: "before:bg-secondaryGreenLight",
        progress: 10,
        claculatedWidth: "before:w-12/12",
        comments: 6,
        links: 1,
        order: "-order-2",
      },
      {
        id: 2,
        headTitle: "Userbility testing",
        body: "Make clear design and color",
        image1: IMAGES[0],
        image2: IMAGES[1],
        image3: IMAGES[2],
        className: "before:bg-secondaryGreenLight",
        progress: 10,
        claculatedWidth: "before:w-12/12",
        comments: 6,
        links: 1,
      },
    ],
  },
];

console.log("Page loaded");

// ./assets/gif/1.gif

// const urlOfGif1 = require("./assets/gif/1.gif");

// console.log(urlOfGif1);

const smartVideoElement = document.querySelector(".smartVideoElement");

const zVid1 = document.querySelector(".zVid1");
const zVid2 = document.querySelector(".zVid2");
const zVid3 = document.querySelector(".zVid3");
const zVid4 = document.querySelector(".zVid4");
const zVid5 = document.querySelector(".zVid5");
const zVid6 = document.querySelector(".zVid6");

// zVid1.style.visibility = "visible";

const zVidArray = [zVid1, zVid2, zVid3, zVid4, zVid5, zVid6];

const hoverBox1 = document.querySelector(".hoverBox1");
const hoverBox2 = document.querySelector(".hoverBox2");
const hoverBox3 = document.querySelector(".hoverBox3");

const animLogicTree = {
    story1: {
        hoverBox: hoverBox1,
        urlOfForwardVideo: "./assets/gif/vd1.mp4",
        urlOfBackwardVideo: "./assets/gif/vd2.mp4",
        elOfForwardVideo: zVid1,
        elOfBackwardVideo: zVid2,
    },
    story2: {
        hoverBox: hoverBox1,
        urlOfForwardVideo: "./assets/gif/vd3.mp4",
        urlOfBackwardVideo: "./assets/gif/vd4.mp4",
        elOfForwardVideo: zVid3,
        elOfBackwardVideo: zVid4,
    },
    story3: {
        hoverBox: hoverBox3,
        urlOfForwardVideo: "./assets/gif/vd5.mp4",
        urlOfBackwardVideo: "./assets/gif/vd6.mp4",
        elOfForwardVideo: zVid5,
        elOfBackwardVideo: zVid6,
    },
};

const story1 = animLogicTree.story1;
const story2 = animLogicTree.story2;
const story3 = animLogicTree.story3;

// smartVideoElement.currentTime = 2;
// smartVideoElement.playbackRate = 1;

const gloStatus = {
    currStory: null,
    nextStory: null,
    nextMode: "f", // "f" (forward) or "b" (backward)
    isCurrentlyPlaying: false,
    // mouseWasIn: null, // animLogicTree.story1 or 2 or 2
    // mouseIsIn: null, // animLogicTree.story1 or 2 or 2
};

const smartPlay = () => {
    if (gloStatus.isCurrentlyPlaying) {
        return;
    } else if (!gloStatus.nextStory && gloStatus.nextMode === "f") {
        gloStatus.currStory = null;
        return;
    } else if (!gloStatus.nextStory && gloStatus.nextMode === "b") {
        
        smartVideoElement.setAttribute(
            "src",
            gloStatus.currStory.urlOfBackwardVideo,
        );
        // const nowVideo = gloStatus.currStory.elOfBackwardVideo;
        // nowVideo.currentTime = 0;
        // nowVideo.style.visibility = "visible";
        // zVidArray.map((vid) => {
        //     if (vid !== nowVideo) {
        //         vid.style.visibility = "hidden";
        //     }
        // });
        
        smartVideoElement.play();
        gloStatus.isCurrentlyPlaying = true;
        gloStatus.nextMode = "f";
        return;
    } else if (gloStatus.currStory === gloStatus.nextStory) {
        if (gloStatus.nextMode = "f") {
            gloStatus.nextMode = "b";
        } else {
            gloStatus.nextMode = "f";
        }
        return;
    }

    if (gloStatus.nextMode === "f") {
        gloStatus.currStory = gloStatus.nextStory;
        smartVideoElement.setAttribute(
            "src",
            gloStatus.currStory.urlOfForwardVideo,
        );
        // const nowVideo = gloStatus.currStory.elOfForwardVideo;
        // nowVideo.currentTime = 0;
        // nowVideo.style.visibility = "visible";
        // zVidArray.map((vid) => {
        //     if (vid !== nowVideo) {
        //         vid.style.visibility = "hidden";
        //     }
        // });
        smartVideoElement.play();
        gloStatus.isCurrentlyPlaying = true;
        gloStatus.nextMode = "b";
    } else if (gloStatus.nextMode === "b") {
        smartVideoElement.setAttribute(
            "src",
            gloStatus.currStory.urlOfBackwardVideo,
        );
        // const nowVideo = gloStatus.currStory.elOfBackwardVideo;
        // nowVideo.currentTime = 0;
        // nowVideo.style.visibility = "visible";
        // zVidArray.map((vid) => {
        //     if (vid !== nowVideo) {
        //         vid.style.visibility = "hidden";
        //     }
        // });
        smartVideoElement.play();
        gloStatus.isCurrentlyPlaying = true;
        gloStatus.nextMode = "f";
    }
};

smartVideoElement.addEventListener("ended", () => {
    gloStatus.isCurrentlyPlaying = false;
    smartPlay();
});

// zVidArray.map((vid) => {
//     vid.addEventListener("ended", () => {
//         gloStatus.isCurrentlyPlaying = false;
//         smartPlay();
//     });
// });

// ==================
// ==================
// ==================

hoverBox1.addEventListener("mouseenter", () => {
    gloStatus.nextStory = story1;
    smartPlay();
});

hoverBox1.addEventListener("mouseleave", () => {
    gloStatus.nextStory = null;
    smartPlay();
});

// ==================

hoverBox2.addEventListener("mouseenter", () => {
    gloStatus.nextStory = story2;
    smartPlay();
});

hoverBox2.addEventListener("mouseleave", () => {
    gloStatus.nextStory = null;
    smartPlay();
});

// ==================

hoverBox3.addEventListener("mouseenter", () => {
    gloStatus.nextStory = story3;
    smartPlay();
});

hoverBox3.addEventListener("mouseleave", () => {
    gloStatus.nextStory = null;
    smartPlay();
});

// ==================

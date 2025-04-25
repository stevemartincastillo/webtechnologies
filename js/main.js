const baseuserScores = {
    northern: 3, // Correct answers in Northern Region (e.g., 3/4)
    central: 3, // Correct answers in Central Region
    rural: 3, // Correct answers in Belize Rural Region
    southern: 3, // Correct answers in Southern Region
    southernRural: 3 // Correct answers in Southern Rural Region
};

const initialuserScores = {
    northern: 0, // Correct answers in Northern Region (e.g., 3/4)
    central: 0, // Correct answers in Central Region
    rural: 0, // Correct answers in Belize Rural Region
    southern: 0, // Correct answers in Southern Region
    southernRural: 0 // Correct answers in Southern Rural Region
};

const badgesData = {
    badges: ["northern-cert", "central-cert", "rural-cert", "southern-cert", "southernRural-cert"],
    isBMMAwarded: false // True if all regions passed with ≥75%
};


// Saving scores
//localStorage.setItem("userScores", JSON.stringify(initialuserScores));
// Retrieving scores
//const userScores = JSON.parse(localStorage.getItem("userScores")) || {};

const triviaData = {
    northern: [
        {
            qposition: 1,
            question: "In what year did brave Mestizo families from Yucatán, Mexico, migrate to the northern region of Belize?",
            options: ["1899", "1848", "1821", "1865"], // Shuffled
            correctIndex: 1
        },
        {
            qposition: 2,
            question: "Which music genres in the northern region of Belize reflect the rich heritage of the Mestizo community?",
            options: ["RANCHERA AND JARANA YUCATECA", "CUMBIA AND VALLENATO", "SALSA AND MERENGUE", "REGGAE AND CALYPSO"], // Shuffled
            correctIndex: 0
        },
        {
            qposition: 3,
            question: "Which of the following instruments is NOT typically used in playing Ranchera and Jarana Yucateca music?",
            options: ["TRUMPET", "DRUMS", "PIANO", "GUITAR"], // Shuffled
            correctIndex: 2
        },
        {
            qposition: 4,
            question: "Which Genre from the northern region is the following: ",
            options: ["JARANA YUCATECA", "RANCHERA"], // Shuffled
            correctIndex: 1,
            video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/bJTRQC4XV8Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }
    ],
    central: [
        {
            qposition: 1,
            question: "What two resources were extracted from the lush jungles of the Central Region of Belize to boost its early economy?",
            options: ["OIL AND NATURAL GAS", "LOGWOOD AND MAHOGANY", "COTTON AND TOBACCO", "DIAMONDS AND GOLD"], // Shuffled
            correctIndex: 1
        },
        {
            qposition: 2,
            question: "Which significant historical event occurred in September 1798 in the Central Region of Belize?",
            options: ["THE ARRIVAL OF BRITISH BAYMEN", "THE BATTLE OF ST. GEORGE’S CAYE", "THE FOUNDING OF BELIZE CITY", "THE SIGNING OF A PEACE TREATY"], // Shuffled
            correctIndex: 1
        },
        {
            qposition: 3,
            question: "What music genres are especially popular in the Central Region of Belize, often featured during lively parades in Belize City every September?",
            options: ["JAZZ AND BLUES", "SOCA AND CALYPSO", "REGGAE AND DANCEHALL", "RANCHERA AND JARANA"], // Shuffled
            correctIndex: 1
        },
        {
            qposition: 4,
            question: "Which Genre from the Central region is the following: ",
            options: ["CALYPSO", "SOCA"], // Shuffled
            correctIndex: 0,
            video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/p_X_Ih5avUQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }
    ],
    rural: [
        {
            qposition: 1,
            question: "Gales Point Manatee is best described as a community founded by:",
            options: ["MODERN SETTLERS DEVELOPING COASTAL RESORTS", "EX-ENSLAVED PEOPLE FORMING A MAROON COMMUNITY", "SPANISH MISSIONARIES", "BRITISH BAYMEN"], // Shuffled
            correctIndex: 1
        },
        {
            qposition: 2,
            question: "During which period did ex-enslaved people form Gales Point Manatee?",
            options: ["MID-1900S", "LATE 1700S TO EARLY 1800S", "EARLY 1600S", "MID-1700S"], // Shuffled
            correctIndex: 1
        },
        {
            qposition: 3,
            question: "Which two music genres are associated with Gales Point Manatee?",
            options: ["CALYPSO AND JAZZ", "BRUKDOWN AND SAMBAI", "REGGAE AND SOCA", "RANCHERA AND BLUES"], // Shuffled
            correctIndex: 1
        },
        {
            qposition: 4,
            question: "Which Genre from the rural region is the following: ",
            options: ["BRUKDOWN", "SAMBIA"], // Shuffled
            correctIndex: 0,
            video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/MoPEdcuAfSY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }
    ],
    southern: [
        {
            qposition: 1,
            question: "The Garifuna people are a blend of which groups?",
            options: ["AFRICAN SLAVES AND CARIB INDIANS", "FRENCH EXPLORERS AND NATIVES", "SPANISH SETTLERS AND MAYANS", "BRITISH COLONISTS AND TRADERS"], // Shuffled
            correctIndex: 0
        },
        {
            qposition: 2,
            question: "Which date celebrates the Garifuna arrival in Belize?",
            options: ["25TH DECEMBER", "4TH JULY", "19TH NOVEMBER", "15TH AUGUST"], // Shuffled
            correctIndex: 2
        },
        {
            qposition: 3,
            question: "Which genres are emblematic of Garifuna culture?",
            options: ["PUNTA AND PARANDA", "SOCA AND CALYPSO", "BRUKDOWN AND SANBAI", "REGGAE AND DANCEHALL"], // Shuffled
            correctIndex: 0
        },
        {
            qposition: 4,
            question: "Which Genre from the Southern region is the following: ",
            options: ["PARANDA", "PUNTA"], // Shuffled
            correctIndex: 1,
            video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/wmxujd_6W8Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }
    ],
    southernRural: [
        {
            qposition: 1,
            question: "Why did the Ketchi and Mopan Mayas leave Guatemala in 1883?",
            options: ["TO FIND GOLD", "TO ESCAPE PERSECUTION", "TO ESTABLISH AN EMPIRE", "TO EXPLORE TRADE"], // Shuffled
            correctIndex: 1
        },
        {
            qposition: 2,
            question: "What village did the Ketchi Mayas establish?",
            options: ["CRISTO REY", "SAN IGNACIO", "SAN ANTONIO", "SANTA BABARA"], // Shuffled
            correctIndex: 2
        },
        {
            qposition: 3,
            question: "What is the significance of the Deer Dance festival?",
            options: ["CELEBRATES VILLAGE FOUNDING", "RITUAL OF RENEWAL", "HARVEST BEGINNING", "DANCE COMPETITION"], // Shuffled
            correctIndex: 1
        },
        {
            qposition: 4,
            question: "Is the following melody a deer dance melody?",
            options: ["NO", "YES"], // Shuffled
            correctIndex: 1,
            video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/_GeOdW1Ao0w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }
    ]
};


function updateScore(region, correctAnswers) {
    const userScores = JSON.parse(localStorage.getItem("userScores")) || {};
    userScores[region] = correctAnswers;
    localStorage.setItem("userScores", JSON.stringify(userScores));
}


function awardBadge(cert) {
    
    const badges = JSON.parse(localStorage.getItem("badges")) || { badges: [] };
    
    badges.badges.push(`${cert}`); // Add the badge to the user's badges
	localStorage.setItem("badges", JSON.stringify(badges));

    //if (!badges.badges.includes(`${region}-cert`)) {
        //badges.badges.push(`${region}-cert`);
        //localStorage.setItem("badges", JSON.stringify(badges));
    //}
}
// Removed invalid syntax

function checkBMM() {
    


    const badges = JSON.parse(localStorage.getItem("badges")) || { badges: [], isBMMAwarded: false };
    const requiredBadges = ["northern-cert", "central-cert", "rural-cert", "southern-cert", "southernRural-cert"];
    const hasAllBadges = requiredBadges.every(badge => badges.badges.includes(badge));

    if (hasAllBadges) {
        badges.isBMMAwarded = true;
        localStorage.setItem("badges", JSON.stringify(badges));
    }



}//end of function

function getRegionQuestions(region) {
    if (!triviaData[region]) {
        console.error(`Region "${region}" does not exist in triviaData.`);
        return [];
    }

    return triviaData[region].map(question => {
        const formattedQuestion = {
            question: question.question,
            options: question.options, // Include all options
            answer: question.options[question.correctIndex] // Use the correct answer based on `correctIndex`
        };

        // If the question has a video, include it
        if (question.video) {
            formattedQuestion.video = question.video;
        }

        return formattedQuestion;
    });
}

// Example usage:
// const questions = getRegionQuestions("northern");

// Track whether the speech is currently playing
let isSpeaking = false;

// Function to handle speech synthesis
function toggleSpeech(elementId) {
    const contentElement = document.getElementById(elementId);

    if (!contentElement) {
        console.error(`Element with id "${elementId}" not found.`);
        return;
    }

    if (isSpeaking) {
        // Stop the speech if it is currently playing
        window.speechSynthesis.cancel();
        isSpeaking = false;
    } else {
        // Get the text content of the specified element
        const textToRead = contentElement.innerText;

        // Use the SpeechSynthesis API to read the text
        const speech = new SpeechSynthesisUtterance(textToRead);
        speech.lang = "en-US"; // Set the language to English

        // Set the isSpeaking flag to true when speech starts
        speech.onstart = function () {
            isSpeaking = true;
        };

        // Set the isSpeaking flag to false when speech ends
        speech.onend = function () {
            isSpeaking = false;
        };

        window.speechSynthesis.speak(speech);
    }
}
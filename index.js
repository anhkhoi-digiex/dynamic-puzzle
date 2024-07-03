const data = [
    "giải trí",
    "tin tức",
    "truy cập",
    "video",
    "trực tuyến",
    "cập nhật",
    "đe doạ",
    "tin giả"
]

const testingWord = "internet"
var countLetter = 0
var letter_body = document.querySelector(".letter_body");
var letterPosition = 0


function renderLetter() {
    var allLetter = []


    var letterDisplay = []

    var result = ""
    var text = ""
    var flagDouble = false


    var fartestLetter = getFarMatchLetter()


    for (const letter of data) {
        const splitLetter = letter.split()
        letterDisplay.push(`<div class="letterSpace">`)

        for (let index = 0; index < splitLetter[0].length; index++) {
            text = splitLetter[0].replace(" ", '').charAt(index)
            if (testingWord.charAt(countLetter).toLowerCase() == text.toLowerCase()) {

                for (let i = 0; i < fartestLetter - index; i++) {
                    letterDisplay.splice(1, 0, `<p class="extra-letter"></p>`)
                }

                if (flagDouble == true) {
                    letterDisplay.push(`<p class="letter">${text}</p>`)

                } else if (flagDouble == false) {
                    letterDisplay.push(`<p class="letter existedLetter">${text}</p>`)
                    flagDouble = true
                }
            } else {
                letterDisplay.push(`<p class="letter">${text}</p>`)
            }
        }


        if (splitLetter[0].includes(" ")) {
            letterDisplay.pop();
        }

        letterDisplay.push("</div>")
        countLetter++;
        flagDouble = false
        // templetterDisplay = letterDisplay
        allLetter.push(letterDisplay)
        letterDisplay = []
    }

    allLetter.forEach((element) => {
        element.forEach((child) => {

            result += child
        })
    })


    letter_body.innerHTML = result
    console.log(allLetter);

}

function getFarMatchLetter() {
    var fartMatchLetter = 0
    let countLetter2 = 0

    for (const letter of data) {
        const splitLetter = letter.split()

        for (let index = 0; index < splitLetter[0].length; index++) {
            text = splitLetter[0].replace(" ", '').charAt(index)
            if (testingWord.charAt(countLetter2).toLowerCase() == text.toLowerCase()) {
                // lấy cột mốc cuối cùng

                if (fartMatchLetter < index) {
                    fartMatchLetter = index
                }
            }
        }
        countLetter2++;
    }

    return fartMatchLetter
}


renderLetter()


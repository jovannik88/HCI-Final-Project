const questions = document.querySelectorAll(".question")
const correct_answers = [0, 1, 0, 0, 3]

let chosen_answer = new Array(questions.length).fill(null)
let current_number = 0
let darkmode = false

function progress_bar(){
    progress = (100 / (questions.length)) * (current_number)
    document.getElementById("progress").style.width = progress + "%"

    current_len = (100 / (questions.length))
    document.getElementById("current").style.width = current_len + "%"

    current_pos = current_len * current_number
    document.getElementById("current").style.left = current_pos + "%"
}

function whatNumberAmI(current_number){
    for (let i = 0; i < questions.length; i++){
        questions[i].style.display = "none"
        currentq = questions[current_number];
        if (darkmode == true){
            currentq.style.borderColor = "#37464f";
            currentq.style.backgroundColor = "#131e21";
            currentq.style.color = "white";
        }
        else{
            currentq.style.borderColor = "lightgray";
            currentq.style.backgroundColor = "white";
            currentq.style.color = "black";
        }
    }
    questions[current_number].style.display = "block"
    questions[current_number].querySelector(".num").textContent = (current_number + 1) + "."

    if (current_number == 0){
        document.getElementById("back").classList.add("greyedout")
    }else{
        document.getElementById("back").classList.remove("greyedout")
    }

    if (chosen_answer[current_number] == null){
        document.getElementById("next").classList.add("greyedout")
        have_answered = false
    }else{
        document.getElementById("next").classList.remove("greyedout")
        have_answered = true
    }

    if (current_number == questions.length - 1){
        document.getElementById("next").textContent = "Submit"
    }else{
        document.getElementById("next").textContent = "Next"
    }

    currentq = questions[current_number];
    if (darkmode == true){
        currentq.style.borderColor = "#37464f";
        currentq.style.backgroundColor = "#131e21";
        currentq.style.color = "white";
    }
    else{
        currentq.style.borderColor = "lightgray";
        currentq.style.backgroundColor = "white";
        currentq.style.color = "black";
    }

    progress_bar()
}

function whatDidIChoose(option, choice){
    option.onclick = function(){
        chosen_answer[current_number] = choice
        const options = questions[current_number].querySelectorAll("button")
        for (let i = 0; i < options.length; i++){
            options[i].classList.remove("selected")
        }
        option.classList.add("selected")
        whatNumberAmI(current_number)
    }
}

function abilityToChoose(option, choice){
    document.querySelectorAll("." + option).forEach(function(i){
        whatDidIChoose(i, choice)
    })
}

abilityToChoose("choice_0", 0)
abilityToChoose("choice_1", 1)
abilityToChoose("choice_2", 2)
abilityToChoose("choice_3", 3)

function submit_confirmation(){
    document.getElementById("score_box_overlay").style.opacity = "1"
    document.getElementById("score_box_overlay").style.pointerEvents = "auto"
    document.getElementById("submit_confirmation").style.top = "300px"

    document.getElementById("submit_confirmation_yes").onclick = function(){
        document.getElementById("submit_confirmation").style.opacity = "0"
        submit()
    }

    document.getElementById("submit_confirmation_no").onclick = function(){
        document.getElementById("score_box_overlay").style.opacity = "0"
        document.getElementById("score_box_overlay").style.pointerEvents = "none"
        document.getElementById("submit_confirmation").style.top = "-500px"
    }
}

function submit(){
    score = 0
    for (let i = 0; i < questions.length; i++){
        if (chosen_answer[i] == correct_answers[i]){
            score ++
        }
    }
    grade = score + "/" + questions.length
    document.getElementById("score").textContent = grade

    if (score < questions.length / 2){
        message = "Try again next time!"
    }
    else if (score < questions.length){
        message = "Good Job!"
    }
    else{
        message = "A Perfect Score!!"
    }    
    document.getElementById("score_message").textContent = message

    document.getElementById("score_box").style.top = "120px";
    
    document.getElementById("score_return_to_dashboard").onclick = function(){
        window.location.replace("Course Page.html")
    }
}

function twosectimer(){
    document.getElementById("question_answered").style.right = "-500px"
}

document.getElementById("moon").onclick = function(){
    if (darkmode == false){
        document.getElementById("moon").style.right = "-3px"
        document.getElementById("darkmode").style.backgroundColor = "black"

        document.body.style.backgroundColor = "#131e21"

        document.getElementById("topbar").style.backgroundColor = "#202f36"
        document.getElementById("topbar").style.color = "white"

        document.getElementById("breadcrumbs2").style.color = "white"

        document.querySelector("#QA .question").style.borderColor = "#37464f"
        document.querySelector("#QA .question").style.backgroundColor = "#131e21"
        document.querySelector("#QA .question").style.color = "white"

        darkmode = true
    }
    else{
        document.getElementById("moon").style.right = "34px"
        document.getElementById("darkmode").style.backgroundColor = "white"

        document.body.style.backgroundColor = "#fff9f1"

        document.getElementById("topbar").style.backgroundColor = "#eae2d8"
        document.getElementById("topbar").style.color = "#5c594f"

        document.getElementById("breadcrumbs2").style.color = "black"

        document.querySelector("#QA .question").style.borderColor = "lightgray"
        document.querySelector("#QA .question").style.backgroundColor = "white"
        document.querySelector("#QA .question").style.color = "black"

        darkmode = false
    }
    whatNumberAmI(current_number)
}

document.getElementById("next").onclick = function(){
    if (current_number < questions.length - 1 && have_answered != false){
        current_number ++

        document.getElementById("question_answered").style.right = "10%"
        setTimeout(twosectimer, 1569)

        whatNumberAmI(current_number)
    }
    else if (have_answered != false){
        submit_confirmation();
    }
}

document.getElementById("back").onclick = function(){
    if (current_number > 0){
        current_number --
        whatNumberAmI(current_number)
    }
}

whatNumberAmI(current_number)

darkmode = false
document.getElementById("moon").onclick = function(){
    if (darkmode == false){
        document.body.style.backgroundColor = "#131e21"

        document.getElementById("topbar").style.backgroundColor = "#202f36"
        document.getElementById("topbar").style.color = "white"

        document.getElementById("moon").style.right = "-3px"
        document.getElementById("darkmode").style.backgroundColor = "black"

        document.getElementById("title").style.color = "white"

        darkmode = true
    }
    else{
        document.body.style.backgroundColor = "#fff9f1"
        
        document.getElementById("topbar").style.backgroundColor = "#eae2d8"
        document.getElementById("topbar").style.color = "#5c594f"

        document.getElementById("moon").style.right = "34px"
        document.getElementById("darkmode").style.backgroundColor = "white"

        document.getElementById("title").style.color = "#5c594f"

        darkmode = false
    }
}

page_info = new URLSearchParams(window.location.search)
next_page = page_info.get("page")
next_pages = [1, 2, 3, 4, 5, 6]
for (let i in next_pages){
    if (i == next_page){
        document.getElementById("return").href = "page" + i + ".html"
        document.getElementById("next").href = "questions" + i +".html"
    }
}


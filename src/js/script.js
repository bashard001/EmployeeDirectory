import employees from "./employee.json"

document.addEventListener("keypress", function (e) {
    if (e.which == 13) {
      doSearch()
    }})
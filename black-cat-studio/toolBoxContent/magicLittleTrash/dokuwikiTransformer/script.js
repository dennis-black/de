function addNewResult() {
    let count = 1;
    while (true) {
        if (document.getElementsByClassName("result")[count++] == null) {
            // alert(count);
            break;
        }
    }

    const newResult = document.createElement("div");
    newResult.innerHTML = "<div>執行結果" + count.toString() + "</div><textarea style=\"width: 100%;\" id=\"result" + count.toString() + "\" cols=\"30\" rows=\"5\"></textarea>";
    newResult.className = "result";

    const results = document.getElementsByClassName("result");
    if (results.length > 0) {
        const lastResult = results[results.length - 1];
        lastResult.appendChild(newResult);
    } else {
        console.error("No elements with class 'result' found.");
    }
    return null;
}

function exportDokuwiki() {
    const prompt = document.getElementById("prompt");
    if (!prompt) {
        console.error("Element with id 'prompt' not found.");
        return;
    }

    let result = "";
    const results = document.getElementsByClassName("result");
    for (let i = 0; i < results.length; i++) {
        const textarea = results[i].querySelector("textarea");
        if (textarea) {
            result += prompt.value + ` \'\'./a.out↵\'\'\\\\` + '\n' + textarea.value.replace(/ /g, '▴').replace(/\n/g, '↵\\\\\n');
            result += '↵\\\\\n';
        }
    }
    result += prompt.value;

    const exportArea = document.getElementById("transfered");
    if (exportArea) {
        exportArea.value = result;
        document.getElementById("transferedBlock").style.display = "block";
    } else {
        console.error("Element with id 'transfered' not found.");
    }

    Swal.fire({
        title: "請注意",
        text: "請記得為使用者輸入的區塊加上標記才能正確渲染使用者輸入的內容",
        icon: "warning",
        confirmButtonText: "okay"
      });

    return null;
}

document.addEventListener("DOMContentLoaded", () => {
    Swal.fire({
        title: "黑貓工作室已經有新網站了，要去看看嗎？",
        text: "新網站有固定的域名了！dennis-black.dev",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "好啊",
        cancelButtonText: "不要"
    }).then((result) => {
        if (result.isConfirmed) {
            location.href = "https://dennis-black.dev";
        }
    });
});
function handleToggle () {
    const sidebarToggle = document.getElementById("sidebar");
    sidebarToggle.classList.toggle("togglesidebar");

    const contentToggle = document.getElementById("content");
    contentToggle.classList.toggle("togglecontent");

    const imageSizing = document.getElementById("image");
    imageSizing.classList.toggle("toggleimage");

};
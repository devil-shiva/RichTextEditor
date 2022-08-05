
window.onload = ()=>{
    let generatedHtml = document.querySelector(".ql-editor")
    if (document.cookie) {
        generatedHtml.innerHTML = document.cookie
    }
}



function copyHtml() {
    let generatedHtml = document.querySelector(".ql-editor")
    navigator.clipboard.writeText(generatedHtml.innerHTML).then(()=>{
        alert("Copied")
    }).catch((e)=>{
        alert(e)
    })
}


function saveToCookie() {
    let generatedHtml = document.querySelector(".ql-editor")
    document.cookie = generatedHtml.innerHTML
    alert("It is save to cookies for some time , Better copy and paste it somewhere")
}

var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link','image'],
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
];

var quill = new Quill('#editor', {
    modules: {
        toolbar: toolbarOptions
    },
    placeholder: 'Compose an epic...',
    theme: 'snow'
});
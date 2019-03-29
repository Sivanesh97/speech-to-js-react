let code = [ 'let a = 5; document.write(a)', '<h2>Hello world</h2>' ];

let codeDoc = document.querySelector('iframe').contentDocument;
let codeWin = document.querySelector('iframe').contentWindow;
codeDoc.body.style.backgroundColor = 'green';
// codeDoc.body.innerHTML = codeWin.eval(code[0]);

let i_frame_script = codeDoc.createElement('script');
// i_frame_script.setAttribute('src', './test.js');
codeDoc.body.appendChild(i_frame_script);
i_frame_script.append(code[0]);

codeDoc.close();
console.log(codeDoc.body);

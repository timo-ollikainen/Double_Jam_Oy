var button = document.getElementById('button');
var hello = document.getElementById('hello');

var input = document.createElement('input');
input.id = 'name';
input.type = 'text';

var go = document.createElement('button');
go.id = 'go';
go.textContent = 'Go!';

function clickgo() {
    var name = document.getElementById('name').value;
    var greeting = document.createTextNode("Hello, " + name +"!");
    var div = document.createElement('div');
    div.className = 'greeting';
    div.appendChild(greeting);
    hello.appendChild(div);

    setTimeout(function() {
        var greeting = document.createTextNode("You see! That was an interation which we just created by using JavaScript.");
        var div = document.createElement('div');
        div.appendChild(greeting);
        div.className = 'greeting';
        hello.appendChild(div);
    }, 1500)

    setTimeout(function() {
        var greeting = document.createTextNode("Are you impressed by our JavaScript skills?");
        var div = document.createElement('div');
        div.appendChild(greeting);
        div.className = 'greeting';

        function callus () {
            var greeting = document.createTextNode("Great! Call us and ask for an offer. Telephone: +358-41-7530753");
            var div = document.createElement('div');
            div.appendChild(greeting);
            div.className = 'greeting';
            hello.appendChild(div);
        }


        var yes = document.createElement('button');
        yes.id = 'yes';
        yes.textContent = 'Yes!';
        yes.addEventListener('click', callus);

        var no = document.createElement('button');
        no.id = 'no';
        no.textContent = 'No';
        no.addEventListener('click', callus);

        hello.appendChild(div);
        hello.appendChild(yes);
        hello.appendChild(no);
    }, 3000)
}


button.addEventListener('click', function () {
	hello.appendChild(document.createTextNode("What is your name or nickname? "));
    hello.appendChild(input);
    hello.appendChild(go);
});

go.addEventListener('click', clickgo);


// ============================================================
// Lesson Data — each lesson has content, code examples, and a challenge
// ============================================================
const LESSONS = [
    {
        id: 1,
        title: "Hello, Python!",
        description: "Your first steps with Python — printing output and comments.",
        xp: 10,
        content: `
<h4>Welcome to Python</h4>
<p>Python is one of the most popular programming languages in the world. It's known for its clean syntax and readability, making it perfect for beginners.</p>

<h4>The <code>print()</code> Function</h4>
<p>The <code>print()</code> function displays text or values to the screen.</p>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button><span class="fn">print</span>(<span class="str">"Hello, World!"</span>)
<span class="fn">print</span>(<span class="str">"Welcome to Python!"</span>)
<span class="fn">print</span>(<span class="str">"Learning is fun"</span>, <span class="num">2026</span>)</div>

<h4>Comments</h4>
<p>Comments are notes in your code that Python ignores. Use <code>#</code> for single-line comments.</p>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button><span class="cmt"># This is a comment — Python ignores it</span>
<span class="fn">print</span>(<span class="str">"This runs!"</span>)  <span class="cmt"># inline comment</span></div>

<h4>Try It Yourself</h4>
<p>Click the button below to load an example into the Playground, then modify it!</p>
<button class="btn btn-sm btn-outline-primary try-it-btn" onclick="tryInPlayground('# My first Python program\\nprint(\\'Hello, World!\\')\\nprint(\\'My name is ...\\')')">
    <i class="bi bi-play-circle me-1"></i>Try in Playground
</button>
`,
        challenge: {
            description: "Write a program that prints exactly: I love Python!",
            starterCode: '# Print "I love Python!" below\n',
            answer: 'print("I love Python!")',
            validate: (output) => output.trim() === "I love Python!"
        }
    },
    {
        id: 2,
        title: "Variables & Data Types",
        description: "Store data in variables and learn about Python's core types.",
        xp: 15,
        content: `
<h4>Variables</h4>
<p>Variables store values. You create one by assigning a value with <code>=</code>. No need to declare a type — Python figures it out.</p>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>name = <span class="str">"Alice"</span>
age = <span class="num">25</span>
height = <span class="num">5.7</span>
is_student = <span class="kw">True</span>

<span class="fn">print</span>(name, age, height, is_student)</div>

<h4>Core Data Types</h4>
<table class="table table-sm table-bordered mt-2">
<thead><tr><th>Type</th><th>Example</th><th>Description</th></tr></thead>
<tbody>
<tr><td><code>str</code></td><td><code>"hello"</code></td><td>Text</td></tr>
<tr><td><code>int</code></td><td><code>42</code></td><td>Whole number</td></tr>
<tr><td><code>float</code></td><td><code>3.14</code></td><td>Decimal number</td></tr>
<tr><td><code>bool</code></td><td><code>True</code></td><td>True or False</td></tr>
</tbody>
</table>

<h4>Type Checking</h4>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>x = <span class="num">42</span>
<span class="fn">print</span>(<span class="fn">type</span>(x))   <span class="cmt"># &lt;class 'int'&gt;</span>

y = <span class="str">"hello"</span>
<span class="fn">print</span>(<span class="fn">type</span>(y))   <span class="cmt"># &lt;class 'str'&gt;</span></div>

<button class="btn btn-sm btn-outline-primary try-it-btn" onclick="tryInPlayground('name = \\'Python Learner\\'\\nage = 20\\nprint(\\'Name:\\', name)\\nprint(\\'Age:\\', age)\\nprint(\\'Type of age:\\', type(age))')">
    <i class="bi bi-play-circle me-1"></i>Try in Playground
</button>
`,
        challenge: {
            description: 'Create a variable called "language" with the value "Python" and print it.',
            starterCode: '# Create the variable and print it\n',
            answer: 'language = "Python"\nprint(language)',
            validate: (output) => output.trim() === "Python"
        }
    },
    {
        id: 3,
        title: "Strings & String Methods",
        description: "Manipulate text with powerful string operations.",
        xp: 15,
        content: `
<h4>Creating Strings</h4>
<p>Strings can use single or double quotes. Triple quotes allow multi-line strings.</p>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>single = <span class="str">'Hello'</span>
double = <span class="str">"World"</span>
multi = <span class="str">"""This is
a multi-line
string"""</span>
<span class="fn">print</span>(single, double)
<span class="fn">print</span>(multi)</div>

<h4>String Operations</h4>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button><span class="cmt"># Concatenation</span>
greeting = <span class="str">"Hello"</span> + <span class="str">" "</span> + <span class="str">"World"</span>
<span class="fn">print</span>(greeting)

<span class="cmt"># Repetition</span>
<span class="fn">print</span>(<span class="str">"Ha"</span> * <span class="num">3</span>)   <span class="cmt"># HaHaHa</span>

<span class="cmt"># Length</span>
<span class="fn">print</span>(<span class="fn">len</span>(<span class="str">"Python"</span>))  <span class="cmt"># 6</span>

<span class="cmt"># Indexing &amp; slicing</span>
word = <span class="str">"Python"</span>
<span class="fn">print</span>(word[<span class="num">0</span>])      <span class="cmt"># P</span>
<span class="fn">print</span>(word[<span class="num">1</span>:<span class="num">4</span>])    <span class="cmt"># yth</span></div>

<h4>Useful Methods</h4>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>text = <span class="str">"  Hello, Python!  "</span>
<span class="fn">print</span>(text.strip())       <span class="cmt"># removes whitespace</span>
<span class="fn">print</span>(text.upper())       <span class="cmt"># uppercase</span>
<span class="fn">print</span>(text.lower())       <span class="cmt"># lowercase</span>
<span class="fn">print</span>(text.replace(<span class="str">"Python"</span>, <span class="str">"World"</span>))</div>

<h4>F-Strings (Formatted Strings)</h4>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>name = <span class="str">"Alice"</span>
age = <span class="num">25</span>
<span class="fn">print</span>(<span class="str">f"My name is {name} and I am {age} years old."</span>)</div>

<button class="btn btn-sm btn-outline-primary try-it-btn" onclick="tryInPlayground('name = \\'Python\\'\\nprint(name.upper())\\nprint(name.lower())\\nprint(len(name))\\nprint(f\\'I love {name}!\\')')">
    <i class="bi bi-play-circle me-1"></i>Try in Playground
</button>
`,
        challenge: {
            description: 'Create a variable word = "python" and print it in uppercase (PYTHON).',
            starterCode: '# Make it print PYTHON\n',
            answer: 'word = "python"\nprint(word.upper())',
            validate: (output) => output.trim() === "PYTHON"
        }
    },
    {
        id: 4,
        title: "Numbers & Math",
        description: "Arithmetic operations, type conversion, and the math module.",
        xp: 15,
        content: `
<h4>Arithmetic Operators</h4>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button><span class="fn">print</span>(<span class="num">10</span> + <span class="num">3</span>)    <span class="cmt"># 13   Addition</span>
<span class="fn">print</span>(<span class="num">10</span> - <span class="num">3</span>)    <span class="cmt"># 7    Subtraction</span>
<span class="fn">print</span>(<span class="num">10</span> * <span class="num">3</span>)    <span class="cmt"># 30   Multiplication</span>
<span class="fn">print</span>(<span class="num">10</span> / <span class="num">3</span>)    <span class="cmt"># 3.33 Division</span>
<span class="fn">print</span>(<span class="num">10</span> // <span class="num">3</span>)   <span class="cmt"># 3    Floor division</span>
<span class="fn">print</span>(<span class="num">10</span> % <span class="num">3</span>)    <span class="cmt"># 1    Modulus (remainder)</span>
<span class="fn">print</span>(<span class="num">2</span> ** <span class="num">8</span>)    <span class="cmt"># 256  Exponent</span></div>

<h4>Type Conversion</h4>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button><span class="cmt"># Converting between types</span>
x = <span class="fn">int</span>(<span class="str">"42"</span>)        <span class="cmt"># str -> int</span>
y = <span class="fn">float</span>(<span class="str">"3.14"</span>)    <span class="cmt"># str -> float</span>
z = <span class="fn">str</span>(<span class="num">100</span>)         <span class="cmt"># int -> str</span>
<span class="fn">print</span>(x, y, z)</div>

<h4>Built-in Math Functions</h4>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>numbers = [<span class="num">4</span>, <span class="num">8</span>, <span class="num">15</span>, <span class="num">16</span>, <span class="num">23</span>, <span class="num">42</span>]
<span class="fn">print</span>(<span class="fn">min</span>(numbers))   <span class="cmt"># 4</span>
<span class="fn">print</span>(<span class="fn">max</span>(numbers))   <span class="cmt"># 42</span>
<span class="fn">print</span>(<span class="fn">sum</span>(numbers))   <span class="cmt"># 108</span>
<span class="fn">print</span>(<span class="fn">abs</span>(-<span class="num">7</span>))        <span class="cmt"># 7</span>
<span class="fn">print</span>(<span class="fn">round</span>(<span class="num">3.7</span>))     <span class="cmt"># 4</span></div>

<button class="btn btn-sm btn-outline-primary try-it-btn" onclick="tryInPlayground('a = 10\\nb = 3\\nprint(\\'Sum:\\', a + b)\\nprint(\\'Product:\\', a * b)\\nprint(\\'Power:\\', a ** b)\\nprint(\\'Division:\\', a / b)')">
    <i class="bi bi-play-circle me-1"></i>Try in Playground
</button>
`,
        challenge: {
            description: "Calculate and print the result of 2 to the power of 10 (should print 1024).",
            starterCode: "# Print 2 raised to the power of 10\n",
            answer: 'print(2 ** 10)',
            validate: (output) => output.trim() === "1024"
        }
    },
    {
        id: 5,
        title: "Conditionals (if/elif/else)",
        description: "Make decisions in your code with conditional statements.",
        xp: 20,
        content: `
<h4>If Statements</h4>
<p>Use <code>if</code>, <code>elif</code>, and <code>else</code> to execute code based on conditions.</p>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>age = <span class="num">18</span>

<span class="kw">if</span> age >= <span class="num">18</span>:
    <span class="fn">print</span>(<span class="str">"You are an adult"</span>)
<span class="kw">elif</span> age >= <span class="num">13</span>:
    <span class="fn">print</span>(<span class="str">"You are a teenager"</span>)
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="str">"You are a child"</span>)</div>

<h4>Comparison Operators</h4>
<table class="table table-sm table-bordered mt-2">
<thead><tr><th>Operator</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td><code>==</code></td><td>Equal to</td></tr>
<tr><td><code>!=</code></td><td>Not equal to</td></tr>
<tr><td><code>&gt;</code></td><td>Greater than</td></tr>
<tr><td><code>&lt;</code></td><td>Less than</td></tr>
<tr><td><code>&gt;=</code></td><td>Greater or equal</td></tr>
<tr><td><code>&lt;=</code></td><td>Less or equal</td></tr>
</tbody>
</table>

<h4>Logical Operators</h4>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>x = <span class="num">15</span>

<span class="kw">if</span> x > <span class="num">10</span> <span class="kw">and</span> x < <span class="num">20</span>:
    <span class="fn">print</span>(<span class="str">"Between 10 and 20"</span>)

<span class="kw">if</span> x < <span class="num">5</span> <span class="kw">or</span> x > <span class="num">10</span>:
    <span class="fn">print</span>(<span class="str">"Outside 5-10 range"</span>)

<span class="kw">if</span> <span class="kw">not</span> x == <span class="num">0</span>:
    <span class="fn">print</span>(<span class="str">"x is not zero"</span>)</div>

<button class="btn btn-sm btn-outline-primary try-it-btn" onclick="tryInPlayground('score = 85\\n\\nif score >= 90:\\n    grade = \\'A\\'\\nelif score >= 80:\\n    grade = \\'B\\'\\nelif score >= 70:\\n    grade = \\'C\\'\\nelse:\\n    grade = \\'F\\'\\n\\nprint(f\\'Score: {score}, Grade: {grade}\\')')">
    <i class="bi bi-play-circle me-1"></i>Try in Playground
</button>
`,
        challenge: {
            description: 'Set number = 7. Print "positive" if it\'s greater than 0, "negative" if less, or "zero" if equal to 0.',
            starterCode: 'number = 7\n# Write your if/elif/else here\n',
            answer: 'number = 7\n\nif number > 0:\n    print("positive")\nelif number < 0:\n    print("negative")\nelse:\n    print("zero")',
            validate: (output) => output.trim() === "positive"
        }
    },
    {
        id: 6,
        title: "Loops (for & while)",
        description: "Repeat actions with for loops and while loops.",
        xp: 20,
        content: `
<h4>For Loops</h4>
<p>Iterate over sequences like lists, strings, or ranges.</p>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button><span class="cmt"># Loop through a range</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>):
    <span class="fn">print</span>(i)    <span class="cmt"># 0, 1, 2, 3, 4</span>

<span class="cmt"># Loop through a list</span>
fruits = [<span class="str">"apple"</span>, <span class="str">"banana"</span>, <span class="str">"cherry"</span>]
<span class="kw">for</span> fruit <span class="kw">in</span> fruits:
    <span class="fn">print</span>(fruit)</div>

<h4>While Loops</h4>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>count = <span class="num">0</span>
<span class="kw">while</span> count < <span class="num">5</span>:
    <span class="fn">print</span>(<span class="str">f"Count is {count}"</span>)
    count += <span class="num">1</span></div>

<h4>Break &amp; Continue</h4>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button><span class="cmt"># break exits the loop</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">10</span>):
    <span class="kw">if</span> i == <span class="num">5</span>:
        <span class="kw">break</span>
    <span class="fn">print</span>(i)

<span class="cmt"># continue skips to next iteration</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>):
    <span class="kw">if</span> i == <span class="num">2</span>:
        <span class="kw">continue</span>
    <span class="fn">print</span>(i)  <span class="cmt"># skips 2</span></div>

<h4>Nested Loops</h4>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button><span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">3</span>):
    <span class="kw">for</span> j <span class="kw">in</span> <span class="fn">range</span>(<span class="num">3</span>):
        <span class="fn">print</span>(<span class="str">f"({i},{j})"</span>, end=<span class="str">" "</span>)
    <span class="fn">print</span>()</div>

<button class="btn btn-sm btn-outline-primary try-it-btn" onclick="tryInPlayground('# Print numbers 1 to 10\\nfor i in range(1, 11):\\n    print(i)')">
    <i class="bi bi-play-circle me-1"></i>Try in Playground
</button>
`,
        challenge: {
            description: "Use a for loop to print the numbers 1 through 5, each on its own line.",
            starterCode: "# Print 1 to 5 using a for loop\n",
            answer: 'for i in range(1, 6):\n    print(i)',
            validate: (output) => output.trim() === "1\n2\n3\n4\n5"
        }
    },
    {
        id: 7,
        title: "Lists",
        description: "Work with ordered collections of items.",
        xp: 20,
        content: `
<h4>Creating Lists</h4>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>fruits = [<span class="str">"apple"</span>, <span class="str">"banana"</span>, <span class="str">"cherry"</span>]
numbers = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>]
mixed = [<span class="str">"hello"</span>, <span class="num">42</span>, <span class="kw">True</span>, <span class="num">3.14</span>]
empty = []

<span class="fn">print</span>(fruits)
<span class="fn">print</span>(<span class="fn">len</span>(fruits))  <span class="cmt"># 3</span></div>

<h4>Accessing &amp; Modifying</h4>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>colors = [<span class="str">"red"</span>, <span class="str">"green"</span>, <span class="str">"blue"</span>]

<span class="fn">print</span>(colors[<span class="num">0</span>])    <span class="cmt"># red</span>
<span class="fn">print</span>(colors[-<span class="num">1</span>])   <span class="cmt"># blue (last item)</span>

colors[<span class="num">1</span>] = <span class="str">"yellow"</span>  <span class="cmt"># modify</span>
<span class="fn">print</span>(colors)

<span class="cmt"># Slicing</span>
<span class="fn">print</span>(colors[<span class="num">0</span>:<span class="num">2</span>])  <span class="cmt"># ['red', 'yellow']</span></div>

<h4>List Methods</h4>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>items = [<span class="num">3</span>, <span class="num">1</span>, <span class="num">4</span>]

items.append(<span class="num">5</span>)      <span class="cmt"># add to end</span>
items.insert(<span class="num">0</span>, <span class="num">0</span>)   <span class="cmt"># insert at index</span>
items.remove(<span class="num">1</span>)       <span class="cmt"># remove first occurrence</span>
popped = items.pop()   <span class="cmt"># remove &amp; return last</span>
items.sort()           <span class="cmt"># sort in place</span>
items.reverse()        <span class="cmt"># reverse in place</span>

<span class="fn">print</span>(items)
<span class="fn">print</span>(<span class="str">"Popped:"</span>, popped)</div>

<button class="btn btn-sm btn-outline-primary try-it-btn" onclick="tryInPlayground('fruits = [\\'apple\\', \\'banana\\', \\'cherry\\']\\nfruits.append(\\'date\\')\\nfruits.sort()\\nfor f in fruits:\\n    print(f)')">
    <i class="bi bi-play-circle me-1"></i>Try in Playground
</button>
`,
        challenge: {
            description: 'Create a list with [10, 20, 30], append 40, and print the list.',
            starterCode: "# Create the list, append 40, then print\n",
            answer: 'nums = [10, 20, 30]\nnums.append(40)\nprint(nums)',
            validate: (output) => output.trim() === "[10, 20, 30, 40]"
        }
    },
    {
        id: 8,
        title: "Dictionaries",
        description: "Store key-value pairs for fast lookups.",
        xp: 20,
        content: `
<h4>Creating Dictionaries</h4>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>person = {
    <span class="str">"name"</span>: <span class="str">"Alice"</span>,
    <span class="str">"age"</span>: <span class="num">25</span>,
    <span class="str">"city"</span>: <span class="str">"New York"</span>
}
<span class="fn">print</span>(person)
<span class="fn">print</span>(person[<span class="str">"name"</span>])  <span class="cmt"># Alice</span></div>

<h4>Modifying Dictionaries</h4>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>person = {<span class="str">"name"</span>: <span class="str">"Alice"</span>, <span class="str">"age"</span>: <span class="num">25</span>}

<span class="cmt"># Add or update</span>
person[<span class="str">"email"</span>] = <span class="str">"alice@example.com"</span>
person[<span class="str">"age"</span>] = <span class="num">26</span>

<span class="cmt"># Safe access with .get()</span>
<span class="fn">print</span>(person.get(<span class="str">"phone"</span>, <span class="str">"N/A"</span>))  <span class="cmt"># N/A</span>

<span class="cmt"># Remove</span>
<span class="kw">del</span> person[<span class="str">"email"</span>]
<span class="fn">print</span>(person)</div>

<h4>Looping Through Dictionaries</h4>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>scores = {<span class="str">"math"</span>: <span class="num">95</span>, <span class="str">"science"</span>: <span class="num">87</span>, <span class="str">"english"</span>: <span class="num">92</span>}

<span class="kw">for</span> subject, score <span class="kw">in</span> scores.items():
    <span class="fn">print</span>(<span class="str">f"{subject}: {score}"</span>)

<span class="fn">print</span>(<span class="str">"Keys:"</span>, <span class="fn">list</span>(scores.keys()))
<span class="fn">print</span>(<span class="str">"Values:"</span>, <span class="fn">list</span>(scores.values()))</div>

<button class="btn btn-sm btn-outline-primary try-it-btn" onclick="tryInPlayground('student = {\\'name\\': \\'Bob\\', \\'grade\\': \\'A\\', \\'age\\': 20}\\nfor key, value in student.items():\\n    print(f\\'{key}: {value}\\')')">
    <i class="bi bi-play-circle me-1"></i>Try in Playground
</button>
`,
        challenge: {
            description: 'Create a dictionary fruit_colors = {"apple": "red", "banana": "yellow"} and print fruit_colors["banana"].',
            starterCode: '# Create the dictionary and print the banana color\n',
            answer: 'fruit_colors = {"apple": "red", "banana": "yellow"}\nprint(fruit_colors["banana"])',
            validate: (output) => output.trim() === "yellow"
        }
    },
    {
        id: 9,
        title: "Functions",
        description: "Define reusable blocks of code with functions.",
        xp: 25,
        content: `
<h4>Defining Functions</h4>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button><span class="kw">def</span> <span class="fn">greet</span>(name):
    <span class="fn">print</span>(<span class="str">f"Hello, {name}!"</span>)

greet(<span class="str">"Alice"</span>)
greet(<span class="str">"Bob"</span>)</div>

<h4>Return Values</h4>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button><span class="kw">def</span> <span class="fn">add</span>(a, b):
    <span class="kw">return</span> a + b

result = add(<span class="num">3</span>, <span class="num">5</span>)
<span class="fn">print</span>(<span class="str">"Sum:"</span>, result)  <span class="cmt"># Sum: 8</span></div>

<h4>Default Parameters</h4>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button><span class="kw">def</span> <span class="fn">power</span>(base, exp=<span class="num">2</span>):
    <span class="kw">return</span> base ** exp

<span class="fn">print</span>(power(<span class="num">3</span>))       <span class="cmt"># 9 (3^2)</span>
<span class="fn">print</span>(power(<span class="num">3</span>, <span class="num">3</span>))    <span class="cmt"># 27 (3^3)</span></div>

<h4>Multiple Return Values</h4>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button><span class="kw">def</span> <span class="fn">min_max</span>(numbers):
    <span class="kw">return</span> <span class="fn">min</span>(numbers), <span class="fn">max</span>(numbers)

lowest, highest = min_max([<span class="num">4</span>, <span class="num">2</span>, <span class="num">9</span>, <span class="num">1</span>, <span class="num">7</span>])
<span class="fn">print</span>(<span class="str">f"Min: {lowest}, Max: {highest}"</span>)</div>

<button class="btn btn-sm btn-outline-primary try-it-btn" onclick="tryInPlayground('def multiply(a, b):\\n    return a * b\\n\\nresult = multiply(6, 7)\\nprint(f\\'6 x 7 = {result}\\')')">
    <i class="bi bi-play-circle me-1"></i>Try in Playground
</button>
`,
        challenge: {
            description: "Write a function called square that takes a number and returns its square. Print square(5) (should print 25).",
            starterCode: "# Define the square function and test it\n",
            answer: 'def square(n):\n    return n ** 2\n\nprint(square(5))',
            validate: (output) => output.trim() === "25"
        }
    },
    {
        id: 10,
        title: "Tuples & Sets",
        description: "Immutable sequences and unique collections.",
        xp: 20,
        content: `
<h4>Tuples</h4>
<p>Tuples are like lists, but immutable (can't be changed after creation).</p>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>point = (<span class="num">3</span>, <span class="num">4</span>)
colors = (<span class="str">"red"</span>, <span class="str">"green"</span>, <span class="str">"blue"</span>)

<span class="fn">print</span>(point[<span class="num">0</span>])        <span class="cmt"># 3</span>
<span class="fn">print</span>(<span class="fn">len</span>(colors))     <span class="cmt"># 3</span>

<span class="cmt"># Tuple unpacking</span>
x, y = point
<span class="fn">print</span>(<span class="str">f"x={x}, y={y}"</span>)</div>

<h4>Sets</h4>
<p>Sets store unique items only, with no duplicates and no order.</p>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>fruits = {<span class="str">"apple"</span>, <span class="str">"banana"</span>, <span class="str">"apple"</span>, <span class="str">"cherry"</span>}
<span class="fn">print</span>(fruits)  <span class="cmt"># {'apple', 'banana', 'cherry'}</span>

fruits.add(<span class="str">"date"</span>)
fruits.discard(<span class="str">"banana"</span>)
<span class="fn">print</span>(fruits)</div>

<h4>Set Operations</h4>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button>a = {<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>}
b = {<span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>, <span class="num">6</span>}

<span class="fn">print</span>(a | b)   <span class="cmt"># Union: {1,2,3,4,5,6}</span>
<span class="fn">print</span>(a & b)   <span class="cmt"># Intersection: {3,4}</span>
<span class="fn">print</span>(a - b)   <span class="cmt"># Difference: {1,2}</span></div>

<button class="btn btn-sm btn-outline-primary try-it-btn" onclick="tryInPlayground('# Tuple unpacking\\ncoords = (10, 20)\\nx, y = coords\\nprint(f\\'x={x}, y={y}\\')\\n\\n# Set operations\\na = {1, 2, 3}\\nb = {2, 3, 4}\\nprint(\\'Union:\\', a | b)\\nprint(\\'Intersection:\\', a & b)')">
    <i class="bi bi-play-circle me-1"></i>Try in Playground
</button>
`,
        challenge: {
            description: 'Create a tuple coords = (5, 10), unpack it into x and y, and print "5 10".',
            starterCode: '# Create the tuple, unpack, and print\n',
            answer: 'coords = (5, 10)\nx, y = coords\nprint(x, y)',
            validate: (output) => output.trim() === "5 10"
        }
    },
    {
        id: 11,
        title: "List Comprehensions",
        description: "Create lists concisely with powerful one-liners.",
        xp: 25,
        content: `
<h4>Basic Comprehension</h4>
<p>A list comprehension builds a new list by applying an expression to each item in a sequence.</p>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button><span class="cmt"># Traditional way</span>
squares = []
<span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">10</span>):
    squares.append(x ** <span class="num">2</span>)

<span class="cmt"># Comprehension way</span>
squares = [x ** <span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">10</span>)]
<span class="fn">print</span>(squares)</div>

<h4>With Conditions</h4>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button><span class="cmt"># Even numbers only</span>
evens = [x <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">20</span>) <span class="kw">if</span> x % <span class="num">2</span> == <span class="num">0</span>]
<span class="fn">print</span>(evens)

<span class="cmt"># Transform with condition</span>
words = [<span class="str">"hello"</span>, <span class="str">"WORLD"</span>, <span class="str">"Python"</span>]
lower = [w.lower() <span class="kw">for</span> w <span class="kw">in</span> words]
<span class="fn">print</span>(lower)</div>

<h4>Dictionary &amp; Set Comprehensions</h4>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button><span class="cmt"># Dict comprehension</span>
sq_dict = {x: x**<span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">6</span>)}
<span class="fn">print</span>(sq_dict)

<span class="cmt"># Set comprehension</span>
unique_lengths = {<span class="fn">len</span>(w) <span class="kw">for</span> w <span class="kw">in</span> [<span class="str">"hi"</span>, <span class="str">"hello"</span>, <span class="str">"hey"</span>, <span class="str">"ho"</span>]}
<span class="fn">print</span>(unique_lengths)</div>

<button class="btn btn-sm btn-outline-primary try-it-btn" onclick="tryInPlayground('# List comprehension examples\\nsquares = [x**2 for x in range(1, 6)]\\nprint(\\'Squares:\\', squares)\\n\\nevens = [x for x in range(20) if x % 2 == 0]\\nprint(\\'Evens:\\', evens)')">
    <i class="bi bi-play-circle me-1"></i>Try in Playground
</button>
`,
        challenge: {
            description: "Use a list comprehension to create a list of squares of 1 through 5: [1, 4, 9, 16, 25] and print it.",
            starterCode: "# Create the list comprehension and print it\n",
            answer: 'squares = [x**2 for x in range(1, 6)]\nprint(squares)',
            validate: (output) => output.trim() === "[1, 4, 9, 16, 25]"
        }
    },
    {
        id: 12,
        title: "Error Handling",
        description: "Handle errors gracefully with try/except blocks.",
        xp: 25,
        content: `
<h4>Try / Except</h4>
<p>Errors (exceptions) crash your program unless you handle them.</p>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button><span class="kw">try</span>:
    result = <span class="num">10</span> / <span class="num">0</span>
<span class="kw">except</span> ZeroDivisionError:
    <span class="fn">print</span>(<span class="str">"Cannot divide by zero!"</span>)</div>

<h4>Multiple Exceptions</h4>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button><span class="kw">try</span>:
    number = <span class="fn">int</span>(<span class="str">"abc"</span>)
<span class="kw">except</span> ValueError:
    <span class="fn">print</span>(<span class="str">"Invalid number format"</span>)
<span class="kw">except</span> TypeError:
    <span class="fn">print</span>(<span class="str">"Type error occurred"</span>)</div>

<h4>Try / Except / Else / Finally</h4>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button><span class="kw">try</span>:
    value = <span class="fn">int</span>(<span class="str">"42"</span>)
<span class="kw">except</span> ValueError:
    <span class="fn">print</span>(<span class="str">"Not a valid number"</span>)
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="str">f"Converted successfully: {value}"</span>)
<span class="kw">finally</span>:
    <span class="fn">print</span>(<span class="str">"This always runs"</span>)</div>

<h4>Raising Exceptions</h4>
<div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button><span class="kw">def</span> <span class="fn">set_age</span>(age):
    <span class="kw">if</span> age < <span class="num">0</span>:
        <span class="kw">raise</span> ValueError(<span class="str">"Age cannot be negative"</span>)
    <span class="fn">print</span>(<span class="str">f"Age set to {age}"</span>)

<span class="kw">try</span>:
    set_age(-<span class="num">5</span>)
<span class="kw">except</span> ValueError <span class="kw">as</span> e:
    <span class="fn">print</span>(<span class="str">f"Error: {e}"</span>)</div>

<button class="btn btn-sm btn-outline-primary try-it-btn" onclick="tryInPlayground('def safe_divide(a, b):\\n    try:\\n        return a / b\\n    except ZeroDivisionError:\\n        return \\'Cannot divide by zero\\'\\n\\nprint(safe_divide(10, 3))\\nprint(safe_divide(10, 0))')">
    <i class="bi bi-play-circle me-1"></i>Try in Playground
</button>
`,
        challenge: {
            description: 'Write a try/except that tries to convert "hello" to an int and prints "Error" if it fails.',
            starterCode: '# Use try/except to handle the error\n',
            answer: 'try:\n    int("hello")\nexcept ValueError:\n    print("Error")',
            validate: (output) => output.trim() === "Error"
        }
    }
];

// ============================================================
// Quick Snippets for the Playground
// ============================================================
const SNIPPETS = {
    hello: `# Hello World
print("Hello, World!")
print("Welcome to Python!")`,

    loop: `# For Loop Examples
for i in range(1, 6):
    print(f"Number: {i}")

print()

# Loop through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}")`,

    list: `# List Operations
numbers = [5, 2, 8, 1, 9, 3]
print("Original:", numbers)

numbers.sort()
print("Sorted:", numbers)

numbers.reverse()
print("Reversed:", numbers)

print("Min:", min(numbers))
print("Max:", max(numbers))
print("Sum:", sum(numbers))`,

    dict: `# Dictionary Example
student = {
    "name": "Alice",
    "age": 20,
    "grades": {"math": 95, "science": 87}
}

print(f"Name: {student['name']}")
print(f"Age: {student['age']}")

for subject, grade in student["grades"].items():
    print(f"  {subject}: {grade}")`,

    function: `# Functions
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))
print(greet("Bob", "Hi"))

# Function with multiple returns
def calculate(a, b):
    return a + b, a - b, a * b

add, sub, mul = calculate(10, 3)
print(f"Add: {add}, Sub: {sub}, Mul: {mul}")`,

    class: `# Classes
class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed
        self.tricks = []

    def learn_trick(self, trick):
        self.tricks.append(trick)

    def show_tricks(self):
        if self.tricks:
            print(f"{self.name} knows: {', '.join(self.tricks)}")
        else:
            print(f"{self.name} hasn't learned any tricks yet")

buddy = Dog("Buddy", "Golden Retriever")
buddy.learn_trick("sit")
buddy.learn_trick("shake")
buddy.show_tricks()`,

    fileio: `# File I/O (simulated)
# Note: File I/O has limited support in browser Python

# String manipulation instead
lines = ["Line 1: Hello", "Line 2: World", "Line 3: Python"]
for i, line in enumerate(lines, 1):
    print(f"Reading line {i}: {line}")

# Join and split
text = "\\n".join(lines)
print("\\nFull text:")
print(text)`,

    comprehension: `# List Comprehensions
squares = [x**2 for x in range(1, 11)]
print("Squares:", squares)

evens = [x for x in range(20) if x % 2 == 0]
print("Evens:", evens)

# Dictionary comprehension
word_lengths = {w: len(w) for w in ["hello", "world", "python"]}
print("Word lengths:", word_lengths)

# Nested comprehension
matrix = [[i*j for j in range(1, 4)] for i in range(1, 4)]
for row in matrix:
    print(row)`
};

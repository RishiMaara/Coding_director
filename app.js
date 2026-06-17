/* ==========================================
   CODING DIRECTOR — Main Application
   ========================================== */
'use strict';

// ============================================================
// STARTER LESSONS
// ============================================================
const STARTER_LESSONS = [
  {
    id: 'sl-01', title: 'Python — Hello World & Print',
    language: 'python', isStarter: true,
    description: 'Learn Python basics: print statements and f-string formatting.',
    code: '# Hello World in Python\nprint("Hello, World!")\n\nname = "Coder"\nprint(f"Welcome, {name}!")\n\nage = 25\nversion = 3.12\nprint(f"Python {version} — You are {age} years old.")',
    created: Date.now(), practiced: 0, bestWPM: 0, bestAccuracy: 0
  },
  {
    id: 'sl-02', title: 'Python — Variables & Data Types',
    language: 'python', isStarter: true,
    description: 'Explore Python\'s core data types: int, float, str, bool, list, dict, tuple.',
    code: '# Python Variables & Data Types\ninteger_num = 42\nfloat_num = 3.14\ntext = "Hello Python"\nis_active = True\nitems = [1, 2, 3, 4, 5]\nperson = {"name": "Alice", "age": 30}\ncoordinates = (10, 20)\n\nprint(type(integer_num))\nprint(type(text))\nprint(type(items))',
    created: Date.now(), practiced: 0, bestWPM: 0, bestAccuracy: 0
  },
  {
    id: 'sl-03', title: 'Python — Functions',
    language: 'python', isStarter: true,
    description: 'Define and call functions with default arguments and return values.',
    code: 'def greet(name, greeting="Hello"):\n    return f"{greeting}, {name}!"\n\ndef calculate_area(width, height):\n    area = width * height\n    return area\n\ndef is_even(number):\n    return number % 2 == 0\n\nresult = greet("World")\nprint(result)\nprint(calculate_area(5, 8))\nprint(is_even(42))',
    created: Date.now(), practiced: 0, bestWPM: 0, bestAccuracy: 0
  },
  {
    id: 'sl-04', title: 'Python — List Comprehensions',
    language: 'python', isStarter: true,
    description: 'Master Python\'s concise list comprehension syntax.',
    code: '# List Comprehensions\nnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nsquares = [n ** 2 for n in numbers]\nevens = [n for n in numbers if n % 2 == 0]\nwords = ["hello", "world", "python"]\nupper = [w.upper() for w in words]\npairs = [(x, y) for x in [1, 2] for y in [3, 4]]\n\nprint(squares)\nprint(evens)\nprint(upper)',
    created: Date.now(), practiced: 0, bestWPM: 0, bestAccuracy: 0
  },
  {
    id: 'sl-05', title: 'Python — Classes & OOP',
    language: 'python', isStarter: true,
    description: 'Object-oriented programming with Python classes and inheritance.',
    code: 'class Animal:\n    def __init__(self, name, species):\n        self.name = name\n        self.species = species\n\n    def speak(self):\n        return f"{self.name} makes a sound"\n\n    def __str__(self):\n        return f"{self.name} ({self.species})"\n\nclass Dog(Animal):\n    def speak(self):\n        return f"{self.name} says Woof!"\n\ndog = Dog("Rex", "Dog")\nprint(dog.speak())\nprint(dog)',
    created: Date.now(), practiced: 0, bestWPM: 0, bestAccuracy: 0
  },
  {
    id: 'sl-06', title: 'JavaScript — Variables & Types',
    language: 'javascript', isStarter: true,
    description: 'const, let, and the fundamental JavaScript data types.',
    code: '// JavaScript Variables\nconst name = "JavaScript";\nlet count = 0;\nconst PI = 3.14159;\nlet isActive = true;\nconst colors = ["red", "green", "blue"];\nconst user = { name: "Alice", age: 25 };\n\ncount++;\nconsole.log(`Name: ${name}`);\nconsole.log(`Count: ${count}`);\nconsole.log(`PI: ${PI}`);\nconsole.log(colors[0]);',
    created: Date.now(), practiced: 0, bestWPM: 0, bestAccuracy: 0
  },
  {
    id: 'sl-07', title: 'JavaScript — Arrow Functions',
    language: 'javascript', isStarter: true,
    description: 'ES6 arrow function syntax from one-liners to block bodies.',
    code: '// Arrow Functions\nconst greet = (name) => `Hello, ${name}!`;\nconst double = (n) => n * 2;\nconst add = (a, b) => a + b;\n\nconst square = (n) => {\n    const result = n * n;\n    return result;\n};\n\nconst multiply = (x, y) => x * y;\n\nconsole.log(greet("World"));\nconsole.log(double(5));\nconsole.log(square(7));\nconsole.log(multiply(3, 4));',
    created: Date.now(), practiced: 0, bestWPM: 0, bestAccuracy: 0
  },
  {
    id: 'sl-08', title: 'JavaScript — Array Methods',
    language: 'javascript', isStarter: true,
    description: 'map, filter, reduce, find, and forEach — the essential array toolkit.',
    code: 'const numbers = [1, 2, 3, 4, 5];\n\nconst doubled = numbers.map(n => n * 2);\nconst evens = numbers.filter(n => n % 2 === 0);\nconst sum = numbers.reduce((acc, n) => acc + n, 0);\nconst found = numbers.find(n => n > 3);\n\nconsole.log("Doubled:", doubled);\nconsole.log("Evens:", evens);\nconsole.log("Sum:", sum);\nconsole.log("Found:", found);\n\nnumbers.forEach((n, i) => {\n    console.log(`Index ${i}: ${n}`);\n});',
    created: Date.now(), practiced: 0, bestWPM: 0, bestAccuracy: 0
  },
  {
    id: 'sl-09', title: 'JavaScript — Async / Await',
    language: 'javascript', isStarter: true,
    description: 'Handle asynchronous operations cleanly with async/await and try/catch.',
    code: 'async function fetchUser(id) {\n    try {\n        const response = await fetch(`/api/users/${id}`);\n        const data = await response.json();\n        return data;\n    } catch (error) {\n        console.error("Error:", error);\n        throw error;\n    }\n}\n\nconst getUsers = async () => {\n    const user = await fetchUser(1);\n    console.log(user.name);\n};\n\ngetUsers();',
    created: Date.now(), practiced: 0, bestWPM: 0, bestAccuracy: 0
  },
  {
    id: 'sl-10', title: 'HTML — Basic Structure',
    language: 'html', isStarter: true,
    description: 'The standard HTML5 document structure every page starts with.',
    code: '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>My Page</title>\n    <link rel="stylesheet" href="style.css">\n</head>\n<body>\n    <header>\n        <h1>Welcome</h1>\n        <nav>Navigation</nav>\n    </header>\n    <main>\n        <p>Hello, World!</p>\n    </main>\n    <footer>Footer</footer>\n    <script src="app.js"></script>\n</body>\n</html>',
    created: Date.now(), practiced: 0, bestWPM: 0, bestAccuracy: 0
  },
  {
    id: 'sl-11', title: 'HTML — Forms & Inputs',
    language: 'html', isStarter: true,
    description: 'Build accessible HTML forms with labels, inputs, and validation attributes.',
    code: '<form id="login-form" action="/login" method="POST">\n    <div class="form-group">\n        <label for="email">Email Address</label>\n        <input type="email" id="email" name="email" required\n               placeholder="you@example.com">\n    </div>\n    <div class="form-group">\n        <label for="password">Password</label>\n        <input type="password" id="password" name="password"\n               minlength="8" required>\n    </div>\n    <div class="form-group">\n        <label for="role">Role</label>\n        <select id="role" name="role">\n            <option value="user">User</option>\n            <option value="admin">Admin</option>\n        </select>\n    </div>\n    <button type="submit">Log In</button>\n</form>',
    created: Date.now(), practiced: 0, bestWPM: 0, bestAccuracy: 0
  },
  {
    id: 'sl-12', title: 'CSS — Flexbox Layout',
    language: 'css', isStarter: true,
    description: 'Build flexible, responsive layouts using CSS Flexbox.',
    code: '.container {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 1rem;\n    flex-wrap: wrap;\n    padding: 1.5rem;\n}\n\n.card {\n    flex: 1;\n    min-width: 200px;\n    padding: 1.5rem;\n    border-radius: 8px;\n    background: #ffffff;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n    transition: transform 0.2s ease;\n}\n\n.card:hover {\n    transform: translateY(-3px);\n}',
    created: Date.now(), practiced: 0, bestWPM: 0, bestAccuracy: 0
  },
  {
    id: 'sl-13', title: 'CSS — Custom Properties',
    language: 'css', isStarter: true,
    description: 'Define and use CSS custom properties (variables) for theming.',
    code: ':root {\n    --primary: #7c3aed;\n    --secondary: #06b6d4;\n    --bg: #0d1117;\n    --text: #f1f5f9;\n    --text-muted: #94a3b8;\n    --border: #30363d;\n    --radius: 8px;\n    --shadow: 0 4px 24px rgba(0, 0, 0, 0.3);\n    --transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.button {\n    background: var(--primary);\n    color: var(--text);\n    border-radius: var(--radius);\n    transition: var(--transition);\n}',
    created: Date.now(), practiced: 0, bestWPM: 0, bestAccuracy: 0
  },
  {
    id: 'sl-14', title: 'SQL — SELECT & JOINs',
    language: 'sql', isStarter: true,
    description: 'Query data using SELECT, WHERE, ORDER BY, LIMIT, and INNER JOIN.',
    code: 'SELECT u.name, u.email, o.total, o.status\nFROM users u\nINNER JOIN orders o ON u.id = o.user_id\nWHERE o.status = \'completed\'\n    AND o.total > 100\n    AND u.is_active = 1\nORDER BY o.total DESC\nLIMIT 10;',
    created: Date.now(), practiced: 0, bestWPM: 0, bestAccuracy: 0
  },
  {
    id: 'sl-15', title: 'Bash — Git Workflow',
    language: 'bash', isStarter: true,
    description: 'Essential git commands for a standard development workflow.',
    code: '# Initialize and first commit\ngit init\ngit add .\ngit commit -m "Initial commit"\n\n# Branch workflow\ngit checkout -b feature/new-feature\ngit add src/newfile.js\ngit commit -m "Add new feature"\ngit push origin feature/new-feature\n\n# Merge and cleanup\ngit checkout main\ngit merge feature/new-feature\ngit branch -d feature/new-feature',
    created: Date.now(), practiced: 0, bestWPM: 0, bestAccuracy: 0
  }
];

// ============================================================
// FIXED DRILLS
// ============================================================
const FIXED_DRILLS = [
  {
    id: 'fd-01', title: 'Python Speed Run', language: 'python', difficulty: 'easy',
    description: 'Variables, conditions and a loop — core Python in one snippet.',
    icon: '🐍',
    code: 'score = 0\nmax_score = 100\nplayer = "Alice"\n\nfor i in range(5):\n    score += 10\n\nif score >= max_score:\n    print(f"{player} wins!")\nelse:\n    print(f"{player} scored {score}/{max_score}")'
  },
  {
    id: 'fd-02', title: 'Python Dict & Loop', language: 'python', difficulty: 'medium',
    description: 'Iterate over a dictionary and format output with f-strings.',
    icon: '📦',
    code: 'config = {\n    "host": "localhost",\n    "port": 8080,\n    "debug": True,\n    "workers": 4\n}\n\nfor key, value in config.items():\n    print(f"  {key}: {value}")\n\nconfig["timeout"] = 30\nprint(f"Keys: {list(config.keys())}")'
  },
  {
    id: 'fd-03', title: 'JS Destructuring', language: 'javascript', difficulty: 'medium',
    description: 'Array and object destructuring plus spread syntax.',
    icon: '🟨',
    code: 'const [first, second, ...rest] = [1, 2, 3, 4, 5];\nconsole.log(first, second, rest);\n\nconst { name, age, ...others } = {\n    name: "Alice",\n    age: 30,\n    role: "admin",\n    active: true\n};\nconsole.log(name, age);\nconsole.log(others);'
  },
  {
    id: 'fd-04', title: 'JS Promise Chain', language: 'javascript', difficulty: 'hard',
    description: 'Async/await with error handling and chained operations.',
    icon: '⛓️',
    code: 'async function getData(endpoint) {\n    const response = await fetch(endpoint);\n    if (!response.ok) {\n        throw new Error(`HTTP error: ${response.status}`);\n    }\n    return response.json();\n}\n\nasync function main() {\n    try {\n        const data = await getData("/api/data");\n        const items = data.items.filter(i => i.active);\n        console.log(`Found ${items.length} items`);\n    } catch (err) {\n        console.error("Failed:", err.message);\n    }\n}'
  },
  {
    id: 'fd-05', title: 'HTML Semantic Card', language: 'html', difficulty: 'easy',
    description: 'A semantic HTML5 card component with header, body, and footer.',
    icon: '🃏',
    code: '<article class="card">\n    <header class="card-header">\n        <h2 class="card-title">Card Title</h2>\n        <time datetime="2025-01-01">Jan 1, 2025</time>\n    </header>\n    <div class="card-body">\n        <p>Card description goes here.</p>\n        <ul>\n            <li>Feature one</li>\n            <li>Feature two</li>\n        </ul>\n    </div>\n    <footer class="card-footer">\n        <button class="btn">Learn More</button>\n    </footer>\n</article>'
  },
  {
    id: 'fd-06', title: 'CSS Animation', language: 'css', difficulty: 'medium',
    description: 'Keyframe animation with transform and timing functions.',
    icon: '✨',
    code: '@keyframes slideIn {\n    from {\n        opacity: 0;\n        transform: translateY(-20px) scale(0.95);\n    }\n    to {\n        opacity: 1;\n        transform: translateY(0) scale(1);\n    }\n}\n\n.modal {\n    animation: slideIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n    will-change: transform, opacity;\n}'
  },
  {
    id: 'fd-07', title: 'CSS Grid Layout', language: 'css', difficulty: 'medium',
    description: 'Responsive grid with named areas and auto-placement.',
    icon: '🔲',
    code: '.layout {\n    display: grid;\n    grid-template-columns: 240px 1fr 300px;\n    grid-template-rows: auto 1fr auto;\n    grid-template-areas:\n        "sidebar header header"\n        "sidebar main aside"\n        "sidebar footer footer";\n    gap: 1rem;\n    min-height: 100vh;\n}\n\n.sidebar { grid-area: sidebar; }\n.header  { grid-area: header;  }\n.main    { grid-area: main;    }'
  },
  {
    id: 'fd-08', title: 'Python Error Handling', language: 'python', difficulty: 'medium',
    description: 'try/except blocks with multiple exception types.',
    icon: '🛡️',
    code: 'def safe_divide(a, b):\n    try:\n        result = a / b\n        return round(result, 4)\n    except ZeroDivisionError:\n        print("Error: Division by zero")\n        return None\n    except TypeError as e:\n        print(f"Error: {e}")\n        return None\n    finally:\n        print("Operation complete")\n\nprint(safe_divide(10, 3))\nprint(safe_divide(5, 0))'
  },
  {
    id: 'fd-09', title: 'SQL Window Functions', language: 'sql', difficulty: 'hard',
    description: 'Aggregate and window functions for advanced data analysis.',
    icon: '🗃️',
    code: 'SELECT\n    department,\n    employee_name,\n    salary,\n    AVG(salary) OVER (PARTITION BY department) AS dept_avg,\n    RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rank,\n    SUM(salary) OVER (ORDER BY hire_date) AS running_total\nFROM employees\nWHERE is_active = 1\nORDER BY department, rank;'
  },
  {
    id: 'fd-10', title: 'JS Class with Private', language: 'javascript', difficulty: 'hard',
    description: 'ES2022 class with private fields, getters, and static methods.',
    icon: '🏗️',
    code: 'class BankAccount {\n    #balance = 0;\n    #owner;\n\n    constructor(owner, initialBalance = 0) {\n        this.#owner = owner;\n        this.#balance = initialBalance;\n    }\n\n    get balance() { return this.#balance; }\n    get owner()   { return this.#owner; }\n\n    deposit(amount) {\n        if (amount > 0) this.#balance += amount;\n    }\n\n    withdraw(amount) {\n        if (amount > this.#balance) throw new Error("Insufficient funds");\n        this.#balance -= amount;\n    }\n\n    static compare(a, b) {\n        return a.balance - b.balance;\n    }\n}'
  },
  {
    id: 'fd-11', title: 'Bash Script', language: 'bash', difficulty: 'medium',
    description: 'A shell script with variables, loops, and conditional logic.',
    icon: '🖥️',
    code: '#!/bin/bash\nset -e\n\nPROJECT_DIR="./my_project"\nLOG_FILE="build.log"\n\nmkdir -p "$PROJECT_DIR"\necho "Build started at $(date)" > "$LOG_FILE"\n\nfor file in src/*.js; do\n    echo "Processing $file"\n    node "$file" >> "$LOG_FILE" 2>&1\ndone\n\necho "Build complete."\necho "Log saved to $LOG_FILE"'
  }
];

// ============================================================
// RANDOM DRILL POOLS & GENERATOR
// ============================================================
const POOLS = {
  python: {
    vars:   ['count','total','result','value','data','items','score','index','flag','output','limit','size','price','amount'],
    funcs:  ['calculate','process','validate','transform','get_total','compute','find_max','sort_data','filter_items'],
    params: ['n','x','value','data','factor','limit','target','offset'],
    iters:  ['i','j','n','x','item','num','val'],
    ints:   [0,1,5,10,25,42,100,255]
  },
  javascript: {
    vars:   ['count','total','result','value','data','items','score','index','isActive','hasError','output','limit'],
    funcs:  ['calculate','process','validate','transform','getTotal','compute','findMax','sortData','filterItems'],
    params: ['n','x','value','data','factor','limit','target','id'],
    iters:  ['i','j','n','item','num','val','el'],
    ints:   [0,1,5,10,25,42,100,255]
  }
};

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function pickTwo(arr) {
  const a = pick(arr);
  const b = pick(arr.filter(x => x !== a));
  return [a, b];
}

function generateRandomDrill(lang = 'python') {
  if (lang === 'python') {
    const p = POOLS.python;
    const types = ['variables','function','loop','list_comp','conditional','dict','try_except'];
    const type = pick(types);
    const [v1, v2] = pickTwo(p.vars);
    const [n1, n2] = pickTwo(p.ints);
    const fname = pick(p.funcs);
    const [p1, p2] = pickTwo(p.params);
    const it = pick(p.iters.filter(v => v.length <= 2));
    switch (type) {
      case 'variables':
        return `# Python Variables\n${v1} = ${n1}\n${v2} = ${n2}\ntotal = ${v1} + ${v2}\nprint(f"${v1}: {${v1}}")\nprint(f"${v2}: {${v2}}")\nprint(f"total: {total}")`;
      case 'function':
        return `def ${fname}(${p1}, ${p2}):\n    result = ${p1} * ${p2}\n    return result\n\noutput = ${fname}(${n1 || 3}, ${n2 || 7})\nprint(f"Result: {output}")`;
      case 'loop':
        const lim = pick([5,8,10,15]);
        return `# Loop with condition\nfor ${it} in range(${lim}):\n    if ${it} % 2 == 0:\n        print(f"{${it}} is even")\n    else:\n        print(f"{${it}} is odd")`;
      case 'list_comp':
        return `numbers = list(range(1, 11))\nsquares = [n ** 2 for n in numbers]\nevens = [n for n in numbers if n % 2 == 0]\ndoubled = [n * 2 for n in numbers]\nprint(squares)\nprint(evens)\nprint(doubled)`;
      case 'conditional':
        return `${v1} = ${n1}\n\nif ${v1} > 50:\n    print("Large value")\nelif ${v1} > 10:\n    print("Medium value")\nelif ${v1} > 0:\n    print("Small value")\nelse:\n    print("Zero or negative")\n\nresult = "positive" if ${v1} > 0 else "non-positive"\nprint(result)`;
      case 'dict':
        return `user = {\n    "name": "Alice",\n    "age": 30,\n    "role": "admin",\n    "active": True\n}\n\nfor key, value in user.items():\n    print(f"  {key}: {value}")\n\nuser["score"] = 95\nprint(user.get("score", 0))`;
      case 'try_except':
        return `def ${fname}(${p1}):\n    try:\n        result = 100 / ${p1}\n        return round(result, 2)\n    except ZeroDivisionError:\n        print("Cannot divide by zero")\n        return None\n    except TypeError:\n        print("Invalid input")\n        return None\n\nprint(${fname}(5))\nprint(${fname}(0))`;
    }
  }

  if (lang === 'javascript') {
    const p = POOLS.javascript;
    const types = ['variables','arrow_fn','array_methods','object','destructure','class_lite'];
    const type = pick(types);
    const [v1, v2] = pickTwo(p.vars);
    const [n1, n2] = pickTwo(p.ints);
    const fname = pick(p.funcs);
    const p1 = pick(p.params);
    switch (type) {
      case 'variables':
        return `// JavaScript Variables\nconst ${v1} = ${n1};\nlet ${v2} = ${n2};\nconst PI = 3.14159;\nlet isReady = false;\n\n${v2} += ${v1};\nisReady = ${v2} > 0;\nconsole.log(\`${v1}: \${${v1}}\`);\nconsole.log(\`${v2}: \${${v2}}\`);\nconsole.log(\`Ready: \${isReady}\`);`;
      case 'arrow_fn':
        return `const ${fname} = (${p1}) => {\n    const doubled = ${p1} * 2;\n    const squared = ${p1} ** 2;\n    return { doubled, squared };\n};\n\nconst quickAdd = (a, b) => a + b;\nconst isEven = (n) => n % 2 === 0;\n\nconsole.log(${fname}(5));\nconsole.log(quickAdd(3, 4));\nconsole.log(isEven(8));`;
      case 'array_methods':
        return `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\nconst evens = numbers.filter(n => n % 2 === 0);\nconst doubled = numbers.map(n => n * 2);\nconst sum = numbers.reduce((acc, n) => acc + n, 0);\nconst first = numbers.find(n => n > 5);\n\nconsole.log("Evens:", evens);\nconsole.log("Doubled:", doubled);\nconsole.log("Sum:", sum);\nconsole.log("First > 5:", first);`;
      case 'object':
        return `const user = {\n    name: "Alice",\n    age: 30,\n    role: "developer",\n    isActive: true\n};\n\nconst { name, age } = user;\nconsole.log(\`\${name} is \${age} years old\`);\n\nconst updated = { ...user, score: 95, age: 31 };\nconsole.log(Object.keys(updated));\nconsole.log(JSON.stringify(updated, null, 2));`;
      case 'destructure':
        return `const [first, second, ...rest] = [10, 20, 30, 40, 50];\nconsole.log(first, second);\nconsole.log(rest);\n\nconst { a = 1, b = 2, c } = { a: 10, c: 30 };\nconsole.log(a, b, c);\n\nconst swap = ([x, y]) => [y, x];\nconst [p, q] = swap([5, 9]);\nconsole.log(p, q);`;
      case 'class_lite':
        return `class Counter {\n    #count = 0;\n\n    constructor(start = 0) {\n        this.#count = start;\n    }\n\n    increment(by = 1) {\n        this.#count += by;\n        return this;\n    }\n\n    reset() {\n        this.#count = 0;\n        return this;\n    }\n\n    get value() { return this.#count; }\n}\n\nconst c = new Counter(10);\nc.increment().increment(5);\nconsole.log(c.value);`;
    }
  }

  if (lang === 'html') {
    const types = ['form','nav','card','list','table'];
    const type = pick(types);
    switch (type) {
      case 'form':
        return `<form id="contact-form" novalidate>\n    <fieldset>\n        <legend>Contact Us</legend>\n        <label for="name">Full Name</label>\n        <input type="text" id="name" name="name" required>\n        <label for="email">Email</label>\n        <input type="email" id="email" name="email" required>\n        <label for="message">Message</label>\n        <textarea id="message" name="message" rows="4"></textarea>\n        <button type="submit">Send Message</button>\n    </fieldset>\n</form>`;
      case 'nav':
        return `<header class="site-header">\n    <a href="/" class="logo">MyApp</a>\n    <nav class="main-nav" aria-label="Main navigation">\n        <ul role="list">\n            <li><a href="/home">Home</a></li>\n            <li><a href="/about">About</a></li>\n            <li><a href="/work">Work</a></li>\n            <li><a href="/contact">Contact</a></li>\n        </ul>\n    </nav>\n    <button class="nav-toggle" aria-expanded="false">Menu</button>\n</header>`;
      case 'card':
        return `<div class="cards-grid">\n    <article class="card">\n        <img src="thumb.jpg" alt="Card image" class="card-img">\n        <div class="card-content">\n            <h2 class="card-title">Feature Name</h2>\n            <p class="card-desc">Brief description of this feature.</p>\n            <footer class="card-footer">\n                <a href="/feature" class="btn">Learn More</a>\n                <span class="badge">New</span>\n            </footer>\n        </div>\n    </article>\n</div>`;
      case 'list':
        return `<section class="features" aria-labelledby="features-title">\n    <h2 id="features-title">Features</h2>\n    <ul class="features-list" role="list">\n        <li class="feature-item">\n            <span class="feature-icon" aria-hidden="true">⚡</span>\n            <div>\n                <strong>Fast Performance</strong>\n                <p>Optimized for speed.</p>\n            </div>\n        </li>\n        <li class="feature-item">\n            <span class="feature-icon" aria-hidden="true">🔒</span>\n            <div>\n                <strong>Secure by Default</strong>\n                <p>Built-in security.</p>\n            </div>\n        </li>\n    </ul>\n</section>`;
      case 'table':
        return `<table class="data-table">\n    <caption>Sales Report Q1</caption>\n    <thead>\n        <tr>\n            <th scope="col">Product</th>\n            <th scope="col">Units</th>\n            <th scope="col">Revenue</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td>Widget A</td>\n            <td>142</td>\n            <td>$2,840</td>\n        </tr>\n        <tr>\n            <td>Widget B</td>\n            <td>98</td>\n            <td>$1,960</td>\n        </tr>\n    </tbody>\n    <tfoot>\n        <tr>\n            <th>Total</th>\n            <td>240</td>\n            <td>$4,800</td>\n        </tr>\n    </tfoot>\n</table>`;
    }
  }

  if (lang === 'css') {
    const types = ['flexbox','grid','variables','keyframe','responsive'];
    const type = pick(types);
    switch (type) {
      case 'flexbox':
        return `.container {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 1.5rem;\n    flex-wrap: wrap;\n    padding: 2rem;\n}\n\n.item {\n    flex: 1;\n    min-width: 200px;\n    padding: 1.25rem;\n    border-radius: 0.5rem;\n    border: 1px solid #e2e8f0;\n    transition: transform 0.2s ease;\n}\n\n.item:hover {\n    transform: translateY(-4px);\n}`;
      case 'grid':
        return `.dashboard {\n    display: grid;\n    grid-template-columns: 240px 1fr;\n    grid-template-rows: 60px 1fr 40px;\n    grid-template-areas:\n        "sidebar header"\n        "sidebar main"\n        "sidebar footer";\n    min-height: 100vh;\n    gap: 0;\n}\n\n.sidebar { grid-area: sidebar; }\n.header  { grid-area: header;  }\n.main    { grid-area: main;    }\n.footer  { grid-area: footer;  }`;
      case 'variables':
        return `:root {\n    --clr-primary: #7c3aed;\n    --clr-secondary: #06b6d4;\n    --clr-bg: #0d1117;\n    --clr-surface: #161b22;\n    --clr-text: #f1f5f9;\n    --clr-muted: #94a3b8;\n    --space-sm: 0.5rem;\n    --space-md: 1rem;\n    --space-lg: 2rem;\n    --radius: 0.5rem;\n    --shadow: 0 4px 24px rgba(0,0,0,0.3);\n    --transition: 0.2s ease;\n}`;
      case 'keyframe':
        return `@keyframes pulse {\n    0%, 100% {\n        transform: scale(1);\n        opacity: 1;\n    }\n    50% {\n        transform: scale(1.05);\n        opacity: 0.85;\n    }\n}\n\n@keyframes fadeSlideIn {\n    from {\n        opacity: 0;\n        transform: translateY(12px);\n    }\n    to {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n.animated {\n    animation: fadeSlideIn 0.3s ease forwards;\n}`;
      case 'responsive':
        return `.grid {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 1.5rem;\n}\n\n@media (max-width: 1024px) {\n    .grid {\n        grid-template-columns: repeat(2, 1fr);\n    }\n}\n\n@media (max-width: 640px) {\n    .grid {\n        grid-template-columns: 1fr;\n        gap: 1rem;\n    }\n    .sidebar {\n        display: none;\n    }\n}`;
    }
  }

  return '// No drill generated. Try a different language!';
}

// ============================================================
// LANG META
// ============================================================
const LANG_META = {
  python:     { color: '#3776ab', bg: 'rgba(55,118,171,0.15)', label: 'Python',     icon: '🐍' },
  javascript: { color: '#f7df1e', bg: 'rgba(247,223,30,0.12)',  label: 'JavaScript', icon: '🟨' },
  typescript: { color: '#3178c6', bg: 'rgba(49,120,198,0.15)',  label: 'TypeScript', icon: '🔷' },
  html:       { color: '#e34c26', bg: 'rgba(227,76,38,0.15)',   label: 'HTML',       icon: '🌐' },
  css:        { color: '#264de4', bg: 'rgba(38,77,228,0.15)',   label: 'CSS',        icon: '🎨' },
  sql:        { color: '#00758f', bg: 'rgba(0,117,143,0.15)',   label: 'SQL',        icon: '🗄️' },
  bash:       { color: '#4eaa25', bg: 'rgba(78,170,37,0.15)',   label: 'Bash',       icon: '🖥️' },
  java:       { color: '#b07219', bg: 'rgba(176,114,25,0.15)',  label: 'Java',       icon: '☕' },
  cpp:        { color: '#f34b7d', bg: 'rgba(243,75,125,0.15)', label: 'C++',        icon: '⚙️' },
  rust:       { color: '#dea584', bg: 'rgba(222,165,132,0.15)', label: 'Rust',       icon: '🦀' },
  go:         { color: '#00add8', bg: 'rgba(0,173,216,0.15)',   label: 'Go',         icon: '🐹' },
  other:      { color: '#94a3b8', bg: 'rgba(148,163,184,0.15)', label: 'Other',      icon: '📄' }
};
function getLangMeta(lang) { return LANG_META[lang] || LANG_META.other; }

// ============================================================
// STATE
// ============================================================
let state = {
  lessons:      [],
  sessions:     [],
  settings:     { theme: 'dark', fontSize: 14, font: 'JetBrains Mono' },
  streak:       { current: 0, lastDate: null },
  currentPage:  'dashboard',
  filterLang:   'all',
  drillMode:    'fixed',
  drillLang:    'python',
  confirmCb:    null,
  typingSession: null
};

// ============================================================
// DATA LAYER
// ============================================================
function loadData() {
  try {
    const ls = JSON.parse(localStorage.getItem('cd_lessons') || 'null');
    const se = JSON.parse(localStorage.getItem('cd_sessions') || '[]');
    const st = JSON.parse(localStorage.getItem('cd_settings') || 'null');
    const sk = JSON.parse(localStorage.getItem('cd_streak') || 'null');
    state.lessons  = ls || STARTER_LESSONS.map(l => ({ ...l, created: Date.now() }));
    state.sessions = se;
    state.settings = st || state.settings;
    state.streak   = sk || state.streak;
    if (!ls) saveData(); // persist starters on first run
  } catch (e) {
    state.lessons  = STARTER_LESSONS.map(l => ({ ...l, created: Date.now() }));
    state.sessions = [];
  }
}

function saveData() {
  try {
    localStorage.setItem('cd_lessons',  JSON.stringify(state.lessons));
    localStorage.setItem('cd_sessions', JSON.stringify(state.sessions));
    localStorage.setItem('cd_settings', JSON.stringify(state.settings));
    localStorage.setItem('cd_streak',   JSON.stringify(state.streak));
  } catch (e) { console.warn('Save failed:', e); }
}

function generateId() {
  return 'id_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

// ============================================================
// NAVIGATION
// ============================================================
function navigate(page, skipSave) {
  // Stop any active typing session
  stopTypingSession();

  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const pageEl = document.getElementById('page-' + page);
  const navEl  = document.getElementById('nav-' + page);
  if (pageEl) pageEl.classList.remove('hidden');
  if (navEl)  navEl.classList.add('active');

  state.currentPage = page;

  // Render the page
  switch (page) {
    case 'dashboard': renderDashboard(); break;
    case 'lessons':   renderLessons();   break;
    case 'drills':    renderDrills();    break;
    case 'settings':  renderSettings();  break;
  }
}

// ============================================================
// DASHBOARD
// ============================================================
function renderDashboard() {
  const el = document.getElementById('page-dashboard');
  const sessions = state.sessions;
  const lessons  = state.lessons;

  const totalSessions   = sessions.length;
  const avgWPM  = totalSessions > 0 ? Math.round(sessions.reduce((s,r) => s + r.wpm, 0) / totalSessions) : 0;
  const bestWPM = sessions.length > 0 ? Math.max(...sessions.map(s => s.wpm)) : 0;
  const avgAcc  = totalSessions > 0 ? Math.round(sessions.reduce((s,r) => s + r.accuracy, 0) / totalSessions) : 0;
  const practicedIds = new Set(sessions.map(s => s.lessonId).filter(Boolean));

  const recentSessions = [...sessions].reverse().slice(0, 6);

  el.innerHTML = `
    <div class="page-title">Dashboard</div>
    <div class="page-subtitle">Your coding practice overview</div>

    <div class="stats-grid">
      <div class="stat-card" style="--card-top: linear-gradient(90deg,#7c3aed,#6d28d9)">
        <span class="stat-icon">📚</span>
        <div class="stat-value">${lessons.length}</div>
        <div class="stat-label">Total Lessons</div>
      </div>
      <div class="stat-card" style="--card-top: linear-gradient(90deg,#06b6d4,#0891b2)">
        <span class="stat-icon">✅</span>
        <div class="stat-value">${practicedIds.size}</div>
        <div class="stat-label">Lessons Practiced</div>
      </div>
      <div class="stat-card" style="--card-top: linear-gradient(90deg,#10b981,#059669)">
        <span class="stat-icon">⚡</span>
        <div class="stat-value">${bestWPM}</div>
        <div class="stat-label">Best WPM</div>
      </div>
      <div class="stat-card" style="--card-top: linear-gradient(90deg,#f59e0b,#d97706)">
        <span class="stat-icon">🎯</span>
        <div class="stat-value">${avgAcc}%</div>
        <div class="stat-label">Avg Accuracy</div>
      </div>
    </div>

    <div class="quick-actions">
      <div class="quick-action-card" id="qa-add-lesson" onclick="openModal()">
        <div class="quick-action-icon" style="background:rgba(124,58,237,0.15)">➕</div>
        <div>
          <div class="quick-action-title">Add Lesson</div>
          <div class="quick-action-sub">Create a new code lesson</div>
        </div>
      </div>
      <div class="quick-action-card" id="qa-lessons" onclick="navigate('lessons')">
        <div class="quick-action-icon" style="background:rgba(6,182,212,0.15)">📚</div>
        <div>
          <div class="quick-action-title">Browse Lessons</div>
          <div class="quick-action-sub">${lessons.length} lessons available</div>
        </div>
      </div>
      <div class="quick-action-card" id="qa-drills" onclick="navigate('drills')">
        <div class="quick-action-icon" style="background:rgba(16,185,129,0.15)">⌨️</div>
        <div>
          <div class="quick-action-title">Typing Drills</div>
          <div class="quick-action-sub">Fixed & random exercises</div>
        </div>
      </div>
    </div>

    <div class="section-header">
      <div class="section-title">📋 Recent Activity</div>
    </div>
    <div class="activity-list">
      ${recentSessions.length === 0 ? `
        <div class="empty-state">
          <span class="empty-state-icon">🏁</span>
          <div class="empty-state-title">No practice sessions yet</div>
          <div class="empty-state-desc">Complete a lesson or drill to see your activity here.</div>
          <button class="btn-primary" id="start-first-practice" onclick="navigate('lessons')">📚 Go to Lessons</button>
        </div>
      ` : recentSessions.map(s => {
        const lesson = state.lessons.find(l => l.id === s.lessonId);
        const meta = getLangMeta(s.language || 'other');
        const label = s.type === 'drill' ? '⌨️ Drill' : `📚 ${lesson ? lesson.title : 'Lesson'}`;
        return `
          <div class="activity-row">
            <div class="activity-icon" style="background:${meta.bg}; color:${meta.color}">${meta.icon}</div>
            <div class="activity-info">
              <div class="activity-title">${esc(label)}</div>
              <div class="activity-meta">${formatDate(s.timestamp)}</div>
            </div>
            <div class="activity-stats">
              <div class="activity-stat">
                <div class="activity-stat-val" style="color:var(--accent-secondary)">${s.wpm}</div>
                <div class="activity-stat-lbl">WPM</div>
              </div>
              <div class="activity-stat">
                <div class="activity-stat-val" style="color:var(--accent-green)">${s.accuracy}%</div>
                <div class="activity-stat-lbl">Accuracy</div>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ============================================================
// LESSONS PAGE
// ============================================================
function renderLessons(filter) {
  if (filter !== undefined) state.filterLang = filter;
  const el = document.getElementById('page-lessons');
  const langs = [...new Set(state.lessons.map(l => l.language))];
  const filtered = state.filterLang === 'all'
    ? state.lessons
    : state.lessons.filter(l => l.language === state.filterLang);

  el.innerHTML = `
    <div class="lessons-header">
      <div>
        <div class="page-title">Lessons</div>
        <div class="page-subtitle">${state.lessons.length} lessons · ${filtered.length} shown</div>
      </div>
      <button class="btn-primary" id="add-lesson-btn" onclick="openModal()">➕ Add Lesson</button>
    </div>

    <div class="lesson-filters">
      <button class="filter-btn ${state.filterLang === 'all' ? 'active' : ''}" id="filter-all" onclick="renderLessons('all')">All</button>
      ${langs.map(lang => {
        const m = getLangMeta(lang);
        return `<button class="filter-btn ${state.filterLang === lang ? 'active' : ''}" id="filter-${lang}" onclick="renderLessons('${lang}')">${m.icon} ${m.label}</button>`;
      }).join('')}
    </div>

    ${filtered.length === 0 ? `
      <div class="empty-state">
        <span class="empty-state-icon">📭</span>
        <div class="empty-state-title">No lessons found</div>
        <div class="empty-state-desc">Add your first lesson or change the language filter.</div>
        <button class="btn-primary" id="add-first-lesson" onclick="openModal()">➕ Add Lesson</button>
      </div>
    ` : `
      <div class="lessons-grid" id="lessons-grid">
        ${filtered.map(l => renderLessonCard(l)).join('')}
      </div>
    `}
  `;
}

function renderLessonCard(lesson) {
  const meta = getLangMeta(lesson.language);
  const sessions = state.sessions.filter(s => s.lessonId === lesson.id);
  const practiced = sessions.length;
  const bestWPM  = practiced > 0 ? Math.max(...sessions.map(s => s.wpm)) : 0;
  return `
    <div class="lesson-card" id="card-${lesson.id}">
      <div class="lesson-card-header">
        <span class="lang-badge" style="background:${meta.bg}; color:${meta.color}">${meta.label}</span>
        <div class="lesson-title-col">
          <div class="lesson-card-title">${esc(lesson.title)}</div>
          ${lesson.isStarter ? '<div class="starter-badge">STARTER</div>' : ''}
        </div>
      </div>
      <div class="lesson-card-desc">${esc(lesson.description || '')}</div>
      <div class="lesson-code-preview">${esc(lesson.code)}</div>
      <button class="practice-btn" id="practice-${lesson.id}" onclick="startPractice('${lesson.id}')">&#9654; Start Practice</button>
      <div class="lesson-card-footer">
        <div class="lesson-mini-stats">
          <div class="lesson-mini-stat">&#127919; <strong>${practiced}</strong> sessions</div>
          <div class="lesson-mini-stat">&#9889; <strong>${bestWPM}</strong> best WPM</div>
        </div>
        <div class="lesson-card-actions">
          <button class="btn-icon" id="edit-${lesson.id}" onclick="openModal('${lesson.id}')" title="Edit lesson">&#9998;</button>
          <button class="btn-icon danger" id="delete-${lesson.id}" onclick="deleteLesson('${lesson.id}')" title="Delete lesson">&#128465;</button>
        </div>
      </div>
    </div>
  `;
}

// ============================================================
// LESSON MODAL
// ============================================================
function openModal(id) {
  const modal = document.getElementById('lesson-modal');
  document.getElementById('lesson-id').value = id || '';
  document.getElementById('modal-title').textContent = id ? 'Edit Lesson' : 'Add Lesson';

  if (id) {
    const lesson = state.lessons.find(l => l.id === id);
    if (lesson) {
      document.getElementById('lesson-title').value       = lesson.title;
      document.getElementById('lesson-language').value    = lesson.language;
      document.getElementById('lesson-description').value = lesson.description || '';
      document.getElementById('lesson-code').value        = lesson.code;
    }
  } else {
    document.getElementById('lesson-title').value       = '';
    document.getElementById('lesson-language').value    = 'python';
    document.getElementById('lesson-description').value = '';
    document.getElementById('lesson-code').value        = '';
  }
  modal.classList.remove('hidden');
  setTimeout(() => document.getElementById('lesson-title').focus(), 100);
}

function closeModal() {
  document.getElementById('lesson-modal').classList.add('hidden');
}

function modalBgClick(e, modalId) {
  if (e.target.classList.contains('modal-overlay')) {
    document.getElementById(modalId).classList.add('hidden');
  }
}

function saveLesson() {
  const id    = document.getElementById('lesson-id').value;
  const title = document.getElementById('lesson-title').value.trim();
  const lang  = document.getElementById('lesson-language').value;
  const desc  = document.getElementById('lesson-description').value.trim();
  const code  = document.getElementById('lesson-code').value;

  if (!title) { showToast('Please enter a lesson title', 'error'); return; }
  if (!code.trim()) { showToast('Please add some code to practice', 'error'); return; }

  if (id) {
    const idx = state.lessons.findIndex(l => l.id === id);
    if (idx !== -1) {
      state.lessons[idx] = { ...state.lessons[idx], title, language: lang, description: desc, code, isStarter: false };
    }
    showToast('✅ Lesson updated!', 'success');
  } else {
    const newLesson = {
      id: generateId(), title, language: lang, description: desc, code,
      created: Date.now(), practiced: 0, bestWPM: 0, bestAccuracy: 0, isStarter: false
    };
    state.lessons.unshift(newLesson);
    showToast('✅ Lesson added!', 'success');
  }
  saveData();
  closeModal();
  if (state.currentPage === 'lessons') renderLessons();
  if (state.currentPage === 'dashboard') renderDashboard();
}

function deleteLesson(id) {
  const lesson = state.lessons.find(l => l.id === id);
  if (!lesson) return;
  openConfirm(
    `Delete "${lesson.title}"?`,
    `This will permanently delete the lesson and all its practice history. This cannot be undone.`,
    () => {
      state.lessons  = state.lessons.filter(l => l.id !== id);
      state.sessions = state.sessions.filter(s => s.lessonId !== id);
      saveData();
      showToast('Lesson deleted', 'info');
      renderLessons();
    }
  );
}

// ============================================================
// CONFIRM MODAL
// ============================================================
function openConfirm(title, msg, cb) {
  state.confirmCb = cb;
  document.getElementById('confirm-title').textContent   = title;
  document.getElementById('confirm-message').textContent = msg;
  document.getElementById('confirm-modal').classList.remove('hidden');
}

function closeConfirm() {
  state.confirmCb = null;
  document.getElementById('confirm-modal').classList.add('hidden');
}

function doConfirmAction() {
  if (state.confirmCb) state.confirmCb();
  closeConfirm();
}

// ============================================================
// PRACTICE SESSION
// ============================================================
function startPractice(lessonId) {
  const lesson = state.lessons.find(l => l.id === lessonId);
  if (!lesson) return;
  renderPracticeSession(lesson);
}

function startDrillPractice(drillId, isRandom) {
  let code, title, lang, sessionMeta;
  if (isRandom) {
    code  = generateRandomDrill(state.drillLang);
    title = 'Random ' + getLangMeta(state.drillLang).label + ' Drill';
    lang  = state.drillLang;
    sessionMeta = { type: 'drill', isDrill: true, title, language: lang };
  } else {
    const drill = FIXED_DRILLS.find(d => d.id === drillId);
    if (!drill) return;
    code  = drill.code;
    title = drill.title;
    lang  = drill.language;
    sessionMeta = { type: 'drill', isDrill: true, title, language: lang };
  }
  renderPracticeSession({ id: null, title, language: lang, code }, sessionMeta);
}

function renderPracticeSession(lesson, sessionMeta) {
  // Show practice page, hide sidebar nav highlighting
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const el = document.getElementById('page-practice');
  el.classList.remove('hidden');

  const meta = getLangMeta(lesson.language);

  el.innerHTML = `
    <div class="practice-page">
      <div class="practice-topbar">
        <div class="practice-topbar-left">
          <button class="btn-secondary" id="practice-back-btn" onclick="navigate('${sessionMeta && sessionMeta.isDrill ? 'drills' : 'lessons'}')">← Back</button>
          <span class="lesson-name-label">${meta.icon} ${esc(lesson.title)}</span>
        </div>
        <div class="practice-live-stats">
          <div class="live-stat wpm">
            <span class="live-stat-val" id="live-wpm">0</span>
            <span class="live-stat-lbl">WPM</span>
          </div>
          <div class="live-stat acc">
            <span class="live-stat-val" id="live-acc">100%</span>
            <span class="live-stat-lbl">Accuracy</span>
          </div>
          <div class="live-stat time">
            <span class="live-stat-val" id="live-timer">00:00</span>
            <span class="live-stat-lbl">Time</span>
          </div>
        </div>
        <button class="btn-secondary" id="practice-reset-btn" onclick="resetPractice()">↺ Reset</button>
      </div>

      <div class="progress-bar-wrap">
        <div class="progress-bar-fill" id="practice-progress" style="width:0%"></div>
      </div>

      <div class="practice-body">
        <div class="code-target-wrap" id="code-target-wrap">
          <div class="code-target-label">Type the code below ↓</div>
          <div id="code-display"></div>
        </div>

        <div class="typing-area" id="typing-area" onclick="focusTypingInput()">
          <div class="typing-area-hint" id="typing-hint">
            <span class="play-arrow">▶</span>
            <span>Click here or press any key to start typing</span>
          </div>
          <textarea id="typing-input" tabindex="0"
            autocomplete="off" autocorrect="off" autocapitalize="off"
            spellcheck="false" aria-label="Typing input"></textarea>
        </div>
      </div>

      <div class="practice-footer">
        <button class="btn-danger" id="give-up-btn" onclick="navigate('${sessionMeta && sessionMeta.isDrill ? 'drills' : 'lessons'}')">✕ Give Up</button>
      </div>
    </div>
  `;

  // Store session meta for results
  state.practiceLesson = lesson;
  state.practiceSessionMeta = sessionMeta || { type: 'lesson', isDrill: false };
  initTypingEngine(lesson.code);
}

// ============================================================
// TYPING ENGINE
// ============================================================
function initTypingEngine(rawCode) {
  const code = rawCode.replace(/\t/g, '    '); // normalize tabs to 4 spaces

  state.typingSession = {
    target:      code,
    inputText:   '',
    startTime:   null,
    endTime:     null,
    wpmInterval: null,
    timerIntvl:  null,
    correctCnt:  0,
    totalTyped:  0
  };

  // Render character spans
  const display = document.getElementById('code-display');
  const html = code.split('').map((ch, i) => {
    const escaped = ch === '<' ? '&lt;' : ch === '>' ? '&gt;' : ch === '&' ? '&amp;' : ch;
    return `<span class="char" data-i="${i}">${escaped}</span>`;
  }).join('');
  display.innerHTML = html;

  // Set cursor on first char
  const first = display.querySelector('[data-i="0"]');
  if (first) first.classList.add('char-cursor');

  // Wire up the hidden textarea
  const input = document.getElementById('typing-input');
  input.value = '';
  input.removeEventListener('input',   _onTypingInput);
  input.removeEventListener('keydown', _onTypingKeydown);
  input.removeEventListener('focus',   _onTypingFocus);
  input.removeEventListener('blur',    _onTypingBlur);
  input.addEventListener('input',   _onTypingInput);
  input.addEventListener('keydown', _onTypingKeydown);
  input.addEventListener('focus',   _onTypingFocus);
  input.addEventListener('blur',    _onTypingBlur);
  // The textarea covers the typing-area div (opacity:0, inset:0)
  // so clicking anywhere on the area naturally focuses it.
  input.focus();
}

function focusTypingInput() {
  const input = document.getElementById('typing-input');
  if (input) {
    input.focus();
    const area = document.getElementById('typing-area');
    if (area) area.classList.add('focused');
  }
}

function _onTypingFocus() {
  const area = document.getElementById('typing-area');
  if (area) area.classList.add('focused');
}

function _onTypingBlur() {
  const area = document.getElementById('typing-area');
  if (area) area.classList.remove('focused');
}

function _onTypingKeydown(e) {
  const ts = state.typingSession;
  if (!ts) return;

  // Tab → insert 4 spaces
  if (e.key === 'Tab') {
    e.preventDefault();
    const pos = e.target.selectionStart;
    const val = e.target.value;
    const spaces = '    ';
    e.target.value = val.substring(0, pos) + spaces + val.substring(pos);
    e.target.selectionStart = e.target.selectionEnd = pos + 4;
    _onTypingInput.call(e.target, e);
    return;
  }

  // Prevent typing past end
  if (e.target.value.length >= ts.target.length &&
      e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
    e.preventDefault();
  }
}

function _onTypingInput(e) {
  const ts = state.typingSession;
  if (!ts) return;

  const input  = document.getElementById('typing-input').value;
  const target = ts.target;

  // Start timer
  if (!ts.startTime && input.length > 0) {
    ts.startTime = Date.now();
    ts.wpmInterval  = setInterval(_updateLiveWPM, 500);
    ts.timerIntvl   = setInterval(_updateTimer, 1000);
    const hint = document.getElementById('typing-hint');
    if (hint) hint.innerHTML = '<span style="color:var(--text-muted);font-size:13px">Keep typing…</span>';
  }

  ts.inputText  = input;
  ts.totalTyped = input.length;

  // Update char spans
  const spans = document.querySelectorAll('#code-display .char');
  let correctCount = 0;
  spans.forEach((span, i) => {
    span.className = 'char';
    if (i < input.length) {
      if (input[i] === target[i]) {
        span.classList.add('char-correct');
        correctCount++;
      } else {
        span.classList.add('char-incorrect');
      }
    } else if (i === input.length) {
      span.classList.add('char-cursor');
    }
  });
  ts.correctCnt = correctCount;

  // Progress bar
  const pct = Math.min((input.length / target.length) * 100, 100);
  const bar = document.getElementById('practice-progress');
  if (bar) bar.style.width = pct + '%';

  _updateLiveWPM();

  // Completion
  if (input.length >= target.length) {
    _finishPractice();
  }
}

function _updateLiveWPM() {
  const ts = state.typingSession;
  if (!ts || !ts.startTime) return;
  const elapsed = (Date.now() - ts.startTime) / 60000;
  const wpm = elapsed > 0 ? Math.round((ts.correctCnt / 5) / elapsed) : 0;
  const acc = ts.totalTyped > 0 ? Math.round((ts.correctCnt / ts.totalTyped) * 100) : 100;
  const wEl = document.getElementById('live-wpm');
  const aEl = document.getElementById('live-acc');
  if (wEl) wEl.textContent = wpm;
  if (aEl) aEl.textContent = acc + '%';
}

function _updateTimer() {
  const ts = state.typingSession;
  if (!ts || !ts.startTime) return;
  const elapsed = Math.floor((Date.now() - ts.startTime) / 1000);
  const m = String(Math.floor(elapsed / 60)).padStart(2, '0');
  const s = String(elapsed % 60).padStart(2, '0');
  const el = document.getElementById('live-timer');
  if (el) el.textContent = `${m}:${s}`;
}

function resetPractice() {
  stopTypingSession();
  if (state.practiceLesson) {
    initTypingEngine(state.practiceLesson.code);
    const bar = document.getElementById('practice-progress');
    if (bar) bar.style.width = '0%';
    const wEl = document.getElementById('live-wpm');
    const aEl = document.getElementById('live-acc');
    const tEl = document.getElementById('live-timer');
    if (wEl) wEl.textContent = '0';
    if (aEl) aEl.textContent = '100%';
    if (tEl) tEl.textContent = '00:00';
    const hint = document.getElementById('typing-hint');
    if (hint) hint.innerHTML = '<span>Click here to start typing</span>';
    const area = document.getElementById('typing-area');
    if (area) area.classList.remove('focused');
  }
}

function stopTypingSession() {
  const ts = state.typingSession;
  if (ts) {
    if (ts.wpmInterval)  clearInterval(ts.wpmInterval);
    if (ts.timerIntvl)   clearInterval(ts.timerIntvl);
    state.typingSession = null;
  }
}

function _finishPractice() {
  const ts = state.typingSession;
  if (!ts) return;

  stopTypingSession();

  const elapsed   = ts.endTime ? ts.endTime - ts.startTime : (Date.now() - (ts.startTime || Date.now()));
  ts.endTime      = Date.now();
  const totalTime = (ts.endTime - (ts.startTime || ts.endTime)) / 60000 || 0.01;
  const wpm       = Math.round((ts.correctCnt / 5) / (totalTime || 0.01));
  const accuracy  = ts.totalTyped > 0 ? Math.round((ts.correctCnt / ts.totalTyped) * 100) : 100;
  const duration  = Math.round((Date.now() - (ts.startTime || Date.now())) / 1000);

  // Save session
  const lesson = state.practiceLesson;
  const meta   = state.practiceSessionMeta || {};
  const session = {
    id:        generateId(),
    lessonId:  lesson ? lesson.id : null,
    type:      meta.isDrill ? 'drill' : 'lesson',
    language:  (lesson || {}).language || meta.language || 'other',
    title:     (lesson || {}).title || meta.title || 'Drill',
    wpm,
    accuracy,
    duration,
    timestamp: Date.now()
  };
  state.sessions.push(session);

  // Update lesson best stats
  if (lesson && lesson.id) {
    const idx = state.lessons.findIndex(l => l.id === lesson.id);
    if (idx !== -1) {
      state.lessons[idx].practiced = (state.lessons[idx].practiced || 0) + 1;
      if (wpm > (state.lessons[idx].bestWPM || 0)) state.lessons[idx].bestWPM = wpm;
      if (accuracy > (state.lessons[idx].bestAccuracy || 0)) state.lessons[idx].bestAccuracy = accuracy;
    }
  }

  updateStreak();
  saveData();

  setTimeout(() => showResults({ wpm, accuracy, duration, session }), 300);
}

// ============================================================
// RESULTS
// ============================================================
function showResults({ wpm, accuracy, duration }) {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  const timeStr = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;

  const emoji = accuracy >= 95 && wpm >= 40 ? '🏆'
              : accuracy >= 90 && wpm >= 25 ? '⭐'
              : accuracy >= 80             ? '✅'
              : '💪';

  const title = wpm >= 60 ? 'Blazing Fast!'
              : wpm >= 40 ? 'Nice Work!'
              : wpm >= 20 ? 'Good Job!'
              : 'Keep Practicing!';

  const badges = [];
  if (accuracy === 100) badges.push('<span class="badge badge-gold">⭐ Perfect Accuracy</span>');
  if (accuracy >= 95)   badges.push('<span class="badge badge-green">✅ High Accuracy</span>');
  if (wpm >= 60)        badges.push('<span class="badge badge-blue">⚡ Speed Demon</span>');
  if (wpm >= 40)        badges.push('<span class="badge badge-blue">🚀 Fast Fingers</span>');

  const isDrill = state.practiceSessionMeta && state.practiceSessionMeta.isDrill;
  const backPage = isDrill ? 'drills' : 'lessons';

  const modal = document.getElementById('results-modal');
  document.getElementById('results-modal-content').innerHTML = `
    <div class="results-top">
      <span class="results-emoji">${emoji}</span>
      <div class="results-title">${title}</div>
      <div class="results-subtitle">Session complete — here's how you did</div>
    </div>
    <div class="results-stats-grid">
      <div class="result-stat">
        <span class="result-stat-val" style="color:var(--accent-secondary)">${wpm}</span>
        <div class="result-stat-lbl">WPM</div>
      </div>
      <div class="result-stat">
        <span class="result-stat-val" style="color:var(--accent-green)">${accuracy}%</span>
        <div class="result-stat-lbl">Accuracy</div>
      </div>
      <div class="result-stat">
        <span class="result-stat-val" style="color:var(--accent-amber)">${timeStr}</span>
        <div class="result-stat-lbl">Duration</div>
      </div>
    </div>
    ${badges.length > 0 ? `<div class="results-badges">${badges.join('')}</div>` : '<div style="height:16px"></div>'}
    <div class="results-actions">
      <button class="btn-secondary" id="results-back-btn" onclick="closeResults('${backPage}')">← Back</button>
      <button class="btn-primary" id="results-retry-btn" onclick="closeResultsAndRetry()">↺ Try Again</button>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeResults(page) {
  document.getElementById('results-modal').classList.add('hidden');
  navigate(page || 'lessons');
}

function closeResultsAndRetry() {
  document.getElementById('results-modal').classList.add('hidden');
  const lesson = state.practiceLesson;
  const meta   = state.practiceSessionMeta;
  if (meta && meta.isDrill) {
    renderPracticeSession({ id: null, title: meta.title, language: meta.language, code: state.typingSession ? state.typingSession.target : '' }, meta);
    // Re-render from stored lesson
    if (lesson) renderPracticeSession(lesson, meta);
  } else if (lesson) {
    renderPracticeSession(lesson, meta);
  } else {
    navigate('lessons');
  }
}

// ============================================================
// DRILLS PAGE
// ============================================================
function renderDrills() {
  const el = document.getElementById('page-drills');

  el.innerHTML = `
    <div class="page-title">Typing Drills</div>
    <div class="page-subtitle">Build speed with focused coding exercises</div>

    <div class="drills-tabs">
      <button class="drill-tab ${state.drillMode === 'fixed' ? 'active' : ''}" id="tab-fixed" onclick="switchDrillMode('fixed')">📌 Fixed Drills</button>
      <button class="drill-tab ${state.drillMode === 'random' ? 'active' : ''}" id="tab-random" onclick="switchDrillMode('random')">🎲 Random Generator</button>
    </div>

    <div id="drill-content"></div>
  `;

  renderDrillContent();
}

function switchDrillMode(mode) {
  state.drillMode = mode;
  document.querySelectorAll('.drill-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + mode).classList.add('active');
  renderDrillContent();
}

function renderDrillContent() {
  const el = document.getElementById('drill-content');
  if (!el) return;

  if (state.drillMode === 'fixed') {
    el.innerHTML = `
      <div class="drills-grid">
        ${FIXED_DRILLS.map(d => {
          const meta = getLangMeta(d.language);
          return `
            <div class="drill-card" id="drillcard-${d.id}" onclick="startDrillPractice('${d.id}', false)">
              <span class="drill-card-icon">${d.icon}</span>
              <div class="drill-card-title">${esc(d.title)}</div>
              <div class="drill-card-desc">${esc(d.description)}</div>
              <div class="drill-meta">
                <span class="drill-diff diff-${d.difficulty}">${d.difficulty}</span>
                <span class="drill-lang-tag">${meta.icon} ${meta.label}</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  } else {
    const preview = generateRandomDrill(state.drillLang);
    el.innerHTML = `
      <div class="random-controls">
        <h3>🎲 Random Drill Generator</h3>

        <div class="control-row">
          <span class="control-label">Language</span>
          <div class="pill-opts" id="lang-pills">
            ${['python','javascript','html','css'].map(lang => {
              const m = getLangMeta(lang);
              return `<button class="pill-btn ${state.drillLang === lang ? 'selected' : ''}" id="pill-${lang}" onclick="setDrillLang('${lang}')">${m.icon} ${m.label}</button>`;
            }).join('')}
          </div>
        </div>

        <div class="random-preview-label">Preview</div>
        <div class="random-preview" id="drill-preview">${esc(preview)}</div>

        <div class="random-controls-footer">
          <button class="btn-secondary" id="regen-btn" onclick="regenDrillPreview()">🔀 Regenerate</button>
          <button class="btn-cyan btn-lg" id="start-random-btn" onclick="startDrillPractice(null, true)">▶ Start Drill</button>
        </div>
      </div>
    `;
    state._currentRandomDrill = preview;
  }
}

function setDrillLang(lang) {
  state.drillLang = lang;
  document.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('selected'));
  const pill = document.getElementById('pill-' + lang);
  if (pill) pill.classList.add('selected');
  regenDrillPreview();
}

function regenDrillPreview() {
  const preview = generateRandomDrill(state.drillLang);
  state._currentRandomDrill = preview;
  const el = document.getElementById('drill-preview');
  if (el) el.textContent = preview;
}

// Override startDrillPractice to use the preview for random
function startDrillPractice(drillId, isRandom) {
  if (isRandom) {
    const code  = state._currentRandomDrill || generateRandomDrill(state.drillLang);
    const lang  = state.drillLang;
    const title = 'Random ' + getLangMeta(lang).label + ' Drill';
    renderPracticeSession(
      { id: null, title, language: lang, code },
      { type: 'drill', isDrill: true, title, language: lang }
    );
  } else {
    const drill = FIXED_DRILLS.find(d => d.id === drillId);
    if (!drill) return;
    renderPracticeSession(
      { id: drill.id, title: drill.title, language: drill.language, code: drill.code },
      { type: 'drill', isDrill: true, title: drill.title, language: drill.language }
    );
  }
}

// ============================================================
// SETTINGS PAGE
// ============================================================
function renderSettings() {
  const el = document.getElementById('page-settings');
  const s  = state.settings;

  // Sample code shown in the live preview
  const SAMPLE = `# Python — Live Preview
def greet(name, title="Dr."):
    return f"{title} {name}, welcome!"

class Animal:
    def __init__(self, species):
        self.species = species
        self.sound   = "..."

    def speak(self):
        return f"{self.species}: {self.sound}"

dog = Animal("Dog")
dog.sound = "Woof"

for i in range(5):
    squared = i ** 2
    print(f"{i}^2 = {squared}")

result = greet("Alice")
print(result)`;

  const sampleLines = SAMPLE.split('\n');
  const gutterHTML  = sampleLines.map((_,i) => `<div class="preview-gutter-line">${i+1}</div>`).join('');
  const codeHTML    = sampleLines.map(l =>
    l.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
  ).join('\n');

  el.innerHTML = `
    <div class="page-title">Settings</div>
    <div class="page-subtitle">Customize your Coding Director experience</div>

    <div class="settings-layout">

      <!-- ===== LEFT COLUMN ===== -->
      <div class="settings-left">

        <div class="settings-section">
          <div class="settings-section-title">🎨 Appearance</div>
          <div class="settings-row">
            <div class="settings-row-info">
              <div class="settings-row-label">Dark Mode</div>
              <div class="settings-row-desc">Toggle between dark and light theme</div>
            </div>
            <div class="settings-ctrl">
              <label class="toggle" title="Toggle dark mode">
                <input type="checkbox" id="theme-toggle" ${s.theme === 'dark' ? 'checked' : ''} onchange="toggleTheme()">
                <span class="toggle-track"></span>
                <span class="toggle-thumb"></span>
              </label>
            </div>
          </div>
        </div>

        <div class="settings-section">
          <div class="settings-section-title">&#10000;&#65039; Editor</div>
          <div class="settings-row">
            <div class="settings-row-info">
              <div class="settings-row-label">Code Font Size</div>
              <div class="settings-row-desc">Size of text in the practice editor &amp; preview</div>
            </div>
            <div class="settings-ctrl">
              <div class="font-size-ctrl">
                <button class="font-size-btn" id="font-dec-btn" onclick="changeFontSize(-1)">−</button>
                <span id="font-size-display">${s.fontSize}px</span>
                <button class="font-size-btn" id="font-inc-btn" onclick="changeFontSize(1)">+</button>
              </div>
            </div>
          </div>
          <div class="settings-row">
            <div class="settings-row-info">
              <div class="settings-row-label">Code Font</div>
              <div class="settings-row-desc">Applies to editor, preview &amp; all code elements</div>
            </div>
            <div class="settings-ctrl">
              <select class="settings-select" id="font-select" onchange="changeFont(this.value)">
                <option value="JetBrains Mono" ${s.font === 'JetBrains Mono' ? 'selected' : ''}>JetBrains Mono</option>
                <option value="Fira Code" ${s.font === 'Fira Code' ? 'selected' : ''}>Fira Code</option>
                <option value="Courier New" ${s.font === 'Courier New' ? 'selected' : ''}>Courier New</option>
                <option value="Consolas" ${s.font === 'Consolas' ? 'selected' : ''}>Consolas</option>
                <option value="monospace" ${s.font === 'monospace' ? 'selected' : ''}>System Monospace</option>
              </select>
            </div>
          </div>
        </div>

        <div class="settings-section">
          <div class="settings-section-title">📊 Statistics</div>
          <div class="settings-row">
            <div class="settings-row-info">
              <div class="settings-row-label">Practice Streak</div>
              <div class="settings-row-desc">Consecutive days of practice</div>
            </div>
            <div class="settings-ctrl">
              <span style="font-size:20px;font-weight:800;font-family:var(--font-code);color:var(--accent-amber)">
                🔥 ${state.streak.current || 0} days
              </span>
            </div>
          </div>
          <div class="settings-row">
            <div class="settings-row-info">
              <div class="settings-row-label">Total Sessions</div>
              <div class="settings-row-desc">All practice sessions completed</div>
            </div>
            <div class="settings-ctrl">
              <span style="font-size:20px;font-weight:800;font-family:var(--font-code);color:var(--text-primary)">
                ${state.sessions.length}
              </span>
            </div>
          </div>
        </div>

        <div class="settings-section danger-zone">
          <div class="settings-section-title">&#9888;&#65039; Danger Zone</div>
          <div class="settings-row">
            <div class="settings-row-info">
              <div class="settings-row-label">Clear All Progress</div>
              <div class="settings-row-desc">Delete all practice session history</div>
            </div>
            <div class="settings-ctrl">
              <button class="btn-danger" id="clear-sessions-btn" onclick="clearSessions()">Clear History</button>
            </div>
          </div>
          <div class="settings-row">
            <div class="settings-row-info">
              <div class="settings-row-label">Reset All Data</div>
              <div class="settings-row-desc">Delete all lessons and start from scratch</div>
            </div>
            <div class="settings-ctrl">
              <button class="btn-danger" id="reset-all-btn" onclick="resetAllData()">Reset Everything</button>
            </div>
          </div>
        </div>

      </div><!-- /settings-left -->

      <!-- ===== RIGHT COLUMN: LIVE PREVIEW ===== -->
      <div class="settings-right">
        <div class="live-preview-panel">

          <div class="preview-header">
            <div class="preview-header-title">👁️ Live Preview <span class="preview-live-badge">LIVE</span></div>
            <div class="preview-chips">
              <span class="preview-chip" id="preview-font-chip">${s.font || 'JetBrains Mono'}</span>
              <span class="preview-chip" id="preview-size-chip">${s.fontSize || 14}px</span>
            </div>
          </div>

          <div class="preview-chrome">
            <span class="chrome-dot red"></span>
            <span class="chrome-dot amber"></span>
            <span class="chrome-dot green"></span>
            <span class="preview-filename">practice.py</span>
            <span style="margin-left:auto;font-size:10px;color:var(--text-muted)">Changes apply site-wide</span>
          </div>

          <div class="preview-body">
            <div class="preview-gutters">${gutterHTML}</div>
            <pre id="settings-preview-code">${codeHTML}</pre>
          </div>

          <div class="preview-footer">
            <span>Font size and font family update here and everywhere on the site instantly</span>
          </div>

        </div>
      </div><!-- /settings-right -->

    </div><!-- /settings-layout -->
  `;
}


function toggleTheme() {
  state.settings.theme = state.settings.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.settings.theme);
  saveData();
}

function changeFontSize(delta) {
  const s = state.settings;
  s.fontSize = Math.min(22, Math.max(10, (s.fontSize || 14) + delta));
  // Update CSS variable — this automatically reflects in practice editor AND preview
  document.documentElement.style.setProperty('--font-size-code', s.fontSize + 'px');
  // Update display label
  const dispEl = document.getElementById('font-size-display');
  if (dispEl) dispEl.textContent = s.fontSize + 'px';
  // Update preview chip
  const chip = document.getElementById('preview-size-chip');
  if (chip) chip.textContent = s.fontSize + 'px';
  saveData();
}

function changeFont(font) {
  state.settings.font = font;
  // Update CSS variable — this automatically reflects in practice editor AND preview
  document.documentElement.style.setProperty('--font-code', `'${font}', monospace`);
  // Update preview chip
  const chip = document.getElementById('preview-font-chip');
  if (chip) chip.textContent = font;
  saveData();
}

function clearSessions() {
  openConfirm(
    'Clear Practice History?',
    'This will delete all your practice session records. Your lessons will remain. This cannot be undone.',
    () => {
      state.sessions = [];
      state.streak   = { current: 0, lastDate: null };
      saveData();
      showToast('Practice history cleared', 'info');
      renderSettings();
      updateStreakDisplay();
    }
  );
}

function resetAllData() {
  openConfirm(
    'Reset Everything?',
    'This will delete ALL lessons, sessions, and settings. The app will start fresh with only starter lessons. This cannot be undone.',
    () => {
      localStorage.removeItem('cd_lessons');
      localStorage.removeItem('cd_sessions');
      localStorage.removeItem('cd_settings');
      localStorage.removeItem('cd_streak');
      location.reload();
    }
  );
}

// ============================================================
// STREAK
// ============================================================
function updateStreak() {
  const today    = new Date().toDateString();
  const lastDate = state.streak.lastDate;
  if (lastDate === today) return; // already practiced today
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (lastDate === yesterday) {
    state.streak.current = (state.streak.current || 0) + 1;
  } else if (lastDate !== today) {
    state.streak.current = 1;
  }
  state.streak.lastDate = today;
  updateStreakDisplay();
}

function updateStreakDisplay() {
  const el = document.getElementById('streak-count');
  if (el) el.textContent = state.streak.current || 0;
}

// ============================================================
// APPLY SETTINGS ON LOAD
// ============================================================
function applySettings() {
  const s = state.settings;
  document.documentElement.setAttribute('data-theme', s.theme || 'dark');
  document.documentElement.style.setProperty('--font-size-code', (s.fontSize || 14) + 'px');
  if (s.font) document.documentElement.style.setProperty('--font-code', `'${s.font}', monospace`);
}

// ============================================================
// UTILITIES
// ============================================================
function esc(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatDate(ts) {
  if (!ts) return '';
  const d = new Date(ts);
  const now = Date.now();
  const diff = Math.floor((now - ts) / 1000);
  if (diff < 60)    return 'Just now';
  if (diff < 3600)  return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
  return d.toLocaleDateString();
}

let _toastTimer = null;
function showToast(msg, type = 'success') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  if (_toastTimer) clearTimeout(_toastTimer);

  const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${icon}</span> <span>${msg}</span>`;
  document.body.appendChild(toast);

  _toastTimer = setTimeout(() => {
    toast.style.animation = 'toastIn 0.3s reverse';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============================================================
// KEYBOARD SHORTCUTS
// ============================================================
document.addEventListener('keydown', (e) => {
  // Esc to close modals
  if (e.key === 'Escape') {
    const modals = ['lesson-modal', 'results-modal', 'confirm-modal'];
    modals.forEach(id => {
      const el = document.getElementById(id);
      if (el && !el.classList.contains('hidden')) el.classList.add('hidden');
    });
  }
});

// ============================================================
// INIT
// ============================================================
function init() {
  loadData();
  applySettings();
  updateStreakDisplay();
  navigate('dashboard', true);
}

init();

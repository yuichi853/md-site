---
title: Tsawler's Vue.js course note
date: 2025-06-17
---

# Key Concepts in Vue.js
## Basics
### main.js
```js
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

This is conceptually similar to using the CDN version of Vue.js and calling `Vue.createApp()` in the browser. Both approaches initialize a Vue application, though the way Vue is loaded and used differs.

### App.vue
```vue
<!--
  Top-level component: App.vue
  This is the root component of your Vue.js application.
-->

<template>
  <!-- Displaying the Vue logo image -->
  <img alt="Vue logo" src="./assets/logo.png">

  <!-- Using a child component called HelloWorld and passing a message prop -->
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
// Importing the child component (HelloWorld.vue)
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App', // Name of the component (used for debugging/tools)

  // Registering the imported component so it can be used in the template
  components: {
    HelloWorld
  }
}
</script>

<!--
  Scoped styles for this component.
  These styles apply only to elements inside this component (by default).
-->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif; /* Fallback font list */
  -webkit-font-smoothing: antialiased; /* Improves font rendering on WebKit browsers */
  -moz-osx-font-smoothing: grayscale;  /* Improves font rendering on macOS */
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```


## DOM - Document Object Model
The DOM is a API for working with HTML document. It is a **tree-like structure** that represents the HTML content of a web page in a way that JavaScript can **read, modify, and interact with**.
In simple terms, the DOM is the **browser's internal model** of your web page.
It lets JavaScript do things like:
- Change text or styles
- Add or remove elements
- React to user actions like clicks or input
### Example
HTML:
```html
<body>
  <h1>Hello</h1>
  <button>Click me</button>
</body>
```
DOM Tree (Browser's View): 
```css
Document
 └── <body>
      ├── <h1>Hello</h1>
      └── <button>Click me</button>
```
This structure is what JavaScript (and Vue) sees and works with.
JavaScript:
```js
document.querySelector("h1").textContent = "Hi there!";
```
This finds the `<h1>` in the DOM and changes its text.

### Vue and the DOM
Vue manages the DOM for you:
- You define templates
- Vue converts them into virtual DOM
- Then Vue updates the real DOM efficiently when things change

## Component
In Vue.js, a component is a reusable, **self-contained block of code** that controls a part of the user interface (UI). It usually contains HTML (template), JavaScript (logic/data), and optionally CSS (styling).
## Vue Directive
A Vue directive is a built-in or custom instruction that tells Vue how to apply logic or update the DOM when data changes.
```html
<!-- The 'v-' prefix means it's a Vue directive. -->
<tag v-directiveName="expression"></tag>
```

## Lifecycle Hook
### What Does "Mounted" Mean in Vue?
In Vue, "mounted" means, the Vue component has been created, rendered into real HTML, and inserted into the DOM — **the actual page you see in the browser**.
- Before mounting: your component's HTML exists only on memory (virtual DOM).
- After mounting: Vue takes that virtual HTML and inserts it into the real DOM at the element you specify (e.g., `#app`).

### WHat Are Lifecycle Hooks?
Lifecycle hooks let you run code at key moments in a component’s existence, like:
| Hook            | When It Runs                                       |
| --------------- | -------------------------------------------------- |
| `beforeCreate`  | Before data, props, and events are set up          |
| `created`       | After data is reactive, but before DOM is rendered |
| `beforeMount`   | Before DOM is added to the page                    |
| `mounted`       | After DOM is rendered and in the page              |
| `beforeUpdate`  | Before the DOM updates due to reactive data change |
| `updated`       | After the DOM updates                              |
| `beforeUnmount` | Before the component is removed                    |
| `unmounted`     | After the component is removed                     |

#### mounted() Hook
The `mounted()` hook is a Vue lifecycle method that is called after the component has been fully rendered and inserted into the DOM.
> Think of mounted() as the moment when your component is officially "live" on the page and you can safely interact with its HTML elements.

You use `mounted()` when you want to:
| Purpose                     | Example                        |
| --------------------------- | ------------------------------ |
| Make HTTP requests          | `fetch()` or `axios.get()`     |
| Access/modify DOM elements  | `document.querySelector(...)`  |
| Initialize third-party libs | Charts, maps, sliders, etc.    |
| Set timers or intervals     | `setInterval()`                |
| Register event listeners    | `window.addEventListener(...)` |

##### Important Notes
- **It only runs once** — right after .mount() is called and the component is rendered.
- It is **not reactive** by itself — if data changes later, mounted() won’t re-run.
If you want to respond to data changes, use `watch()` or the `updated()` hook.

## fetch() Function
```js
fetch("https://example.com/data")
  .then(response => response.json())       // ← first Promise
  .then(data => console.log(data))         // ← second Promise
  .catch(error => console.error(error));   // ← handles rejection
```
`fetch()` returns a **Promise ("promise" is an object that represents the future result of an asynchronus operation like fetching data from API)** that resolves to a Response object.
- When the data arrives: `.then(...)` is called with the result
- If something goes wrong: `.catch(...)` runs instead

### .then() Method
- `.then()` is a method used to handle the **fulfulled result** of a Promise.
- It takes a function that **receives the result** of the previous Promise (in this case, the `responsee` from `fetch()`).
- `response => response.json()`: It takes the `response` object from the `fetch()` request, and calls `.json()` on it to extract the actual JSON body.

### .json() Method
- `.json()` is a method provided by the `Response` object from `fetch()`
- It reads the response body and parses it into a JavaScript object
- It also returns a new Promise

| Term       | Meaning                                      |
| ---------- | -------------------------------------------- |
| Promise    | A value that will be available in the future |
| `fetch()`  | Returns a promise for an HTTP request        |
| `.then()`  | Runs when the promise is fulfilled           |
| `.catch()` | Runs if the promise is rejected (error)      |

# Tips
- When using Node.js, it's recommended to use the LTS version.
- When using Vue CLI, it's best to use the latest version.

# Section 2 - Getting Started with Vue
## Sample Code
```html
<!-- <div id="app"></div> is where the application is actually going to be rendered -->
<div id="app">
    <!-- Vue will render the value of `message` inside the `<h1>`. This is interpolation — it shows the data from the Vue instance. -->
    <h1>{{ message }}</h1>
    <label for="message-input">Message: </label>

    <!-- v-model binds this input to the <h1> message above-->
    <input v-model="message" type="text" class="form-control" id="message-input">

    <text-input></text-input>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@3.5.16/dist/vue.global.min.js"></script>

<script>
    // This creates a simple object with one property: "message".
    let data = {
        message: "Hello Vue!",
    }

    const TextInput = {
        props: {
            name: String,
            type: String,
            label: String,
            placeholder: String,
            required: String,
            min: String,
            max: String,
            value: String
        },
        template: `
            <h1>My Component</h1>
        `
    }

    // "vm" stands for Vue Model
    // Vue.createApp(...) is your root component
    const vm = Vue.createApp({
        data() {
            return data;
        },
        methods: {
            incrementCounter() {
                this.counter++;
            },
            decrementCounter() {
                this.counter--;
            }
        },
        components: {
            TextInput,
        }
    }).mount("#app");
</script>
```

## 12. Adding a simple form element and binding data
- `data()`: The `data()` function in a Vue component returns the **reactive state** - this is where you define values that **the component can use and track**.
- `v-model`: v-model is a directive for two-way data binding between form input elements (e.g. `<input>`) and your Vue component's data. So it's useful when you want to bind the data you've retrieved from a server (e.g. JSON file) to what's displayed in a form.
- `<div id="app">`: This is the root element where the Vue application will be mounted.
- `<h1>{{ message }}</h1>`: Vue will render the value of `message` inside the `<h1>`. This is interpolation — it shows the data from the Vue instance.

## 13. Adding a counter
- `method`: The methods property of a component is used to define functions (methods) that can be used
    - in the template (e.g. v-on:click="increment")
    - or in the script (inside other methods or lifecycle hooks)
- `this.conunter`: `this` refers to the Vue component instance. In other words, `this.counter` means "the `counter` variable **defined in the data** of this Vue component"
- The `data` variable must exist before any function tries to use it.

## 14. Vue Components - Getting Started
- The component's html tag is not the same as the component name. If the component name includes a capital letter, put a hyphen instead and make everything lowercase.

## 15. Creating a reusable form input component
- `props`: Props (short for "properties") are a way to pass data from a parent component to a child component. 
- `v-bind`: It binds an HTML attribute to JavaScript expression from your component's data or props.
So in this case:
```html
<label :for="name">
```

It means, bind the <label>'s `for` attribute to the value of the `name` prop.

If `name = "email"` (from props or data), then Vue renders:
```html
<label for="email">...</label>
```

## 16. Trying out our TextInput component
```js
// Child component
const ChildComponent = {
  template: `<p>I am the child!</p>`
};

// Parent component
const ParentComponent = {
  template: `
    <div>
      <h2>I am the parent</h2>
      <ChildComponent />  <!-- This is nesting -->
    </div>
  `,
  components: {
    ChildComponent  // <-- ✅ Registration of the nested component
  }
};
```

- `Component Nesting`: Placing one Vue component **inside the template** of another component. Each component is a block (e.g., header, form, button), so You can compose complex UIs by putting components inside each other.
- If you nest component, you must tell Vue about it by **registering it** in the `components` option of the parent.

## 22. Fetching remote data
```js
// Define the initial reactive data for the Vue app
let data = {
    books: {
        // empty array
        results: [],
    }
}

// Create Vue app instance.
const vm = Vue.createApp({
    // data() returns the data object we defined above
    // Now 'this.books.results' is reactive and can be used in the template.
    data() {
        return data
    },
    mounted() {
        console.log("mounted");

        fetch("https://gutendex.com/books/")
            .then(response => response.json())  // Parse the raw response
            .then(data => {                     // Now we can use the actual data
                this.books = data;
                for (let i = 0; i < this.books.results.length; i++) {
                    console.log("id", this.books.results[i].id, "title", this.books.results[i].title);
                }
            })
    }
}).mount('#app');
```

### Full fetch() flow
```js
fetch("https://example.com/data")
  .then(response => response.json())  // Parse the raw response
  .then(data => {
    this.books = data;
    console.log(data);                // Now we can use the actual data
  });
```
1. `fetch()` makes a request
2. The first `.then(...)` receives a `response` object
3. **`response.json()` extracts the JSON text and parses it into usable JavaScript object**
4. The second `.then(...)` receives that parsed data
5. `books` had JavaScript object!!!!

## Sample Code
```html
<div id="app">
    <h1 class="mt-5">Books: {{ books.results.length }}</h1>
    <ul class="list-group">
        <book-item v-for="item in books.results" v-bind:book="item" v-bind:key="item.id"
            v-bind:id="item.id" @removeBook="removeBook">
        </book-item>
    </ul>
</div>

<script>
    const BookItem = {
        props: ["book"],
        template: `
            <li class="list-group-item d-flex justify-content-between alighn-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">{{ book.title }}</div>
                    {{ book.authors[0].name }}
                </div>

                <span>
                    <a href="#!" @click="$emit('removebook', book.id)">
                        <i class="bi bi-trash"></i>
                    </a>
                </span>
            </li>
        `
    }

    let data = {
        books: {
            results: [],
        }
    }

    const vm = Vue.createApp({
        data() {
            return data
        },
        components: {
            BookItem
        },
        methods: {
            removeBook(id) {
                console.log("Removing", id);

                // Remove a book from the books.results array by its ID
                this.books.results = this.books.results.filter(function (item) {
                    // return everything that is not the id we received as a parameter to this function
                    // Keep all items except the one with a matching ID
                    return item.id !== id;
                });
            }
        },
        mounted() {
            console.log("mounted");
            fetch("https://gutendex.com/books/")
                .then(response => response.json())
                .then(data => {
                    this.books = data;
                    for (let i = 0; i < this.books.results.length; i++) {
                        console.log("id", this.books.results[i].id, "title", this.books.results[i].title);
                    }
                })
        }
    }).mount('#app');
</script>

```

## 23. Using the dasta we fetch in our Vue application
### 1. `v-for="item in books.results`
- What it does: Loops over each item in the `books.results` array.
- Purpose: Dynamically renders one `<book-item>` component per book.
- **Vue automatically provides `item` as a local variable** within the loop.

### 2. `v-bind:book="item"`
- What it does: Binds the `book` prop of the `BookItem` component to the current `item` in the loop.
- Shorthand: You can also write this as `:book="item"`

This passes the entire book object like:
```js
{
  id: 1,
  title: "Book A",
  authors: [{ name: "Author A" }]
}
```
into the `book` props of the child component (`BookItem`).

### 3. `v-bind:key="item.id`
- What it does: **Gives each rendered component a unique key, which helps Vue efficiently track changes in lists.**
- **Required when using `v-for` in components.** It is used internally by Vue.
- Shorthand: You can also write this as `:key="item"`

### 4. `v-bind:id="item.id`
- What it does: Binds the standard `id` attribute (**not prop!**) to the value of `item.id`.
- Purpose: To be able to get access to that particular item.

## 25. Removing a book from the list
### 1. Inside `BookItem`
```html
<a href="#!" @click="$emit('removebook', book.id)">
    <i class="bi bi-trash"></i>
</a>
```
- `@click`: Listens for a click on the trash icon.
- `$emit('removebook', book.id)`: Emits a custom event named `"removebook"` to the parent component (where `<book-item>` is used).
- It also sends `book.id` as the parameter to the event.

### 2. In the Parent Component: Handling the Event
When you use `<book-item>` inside a `v-for` list like:
```html
<book-item
  v-for="item in books.results"
  :book="item"
  :key="item.id"
  @removebook="removeBook"
></book-item>
```
You're telling Vue: **"When the `BookItem` emits `removebook`, call my `removeBook` method."**

### 3. The Method That Removes the Book
```js
methods: {
  removeBook(id) {
    console.log("Removing", id);

    // Remove a book from the books.results array by its ID
    this.books.results = this.books.results.filter(function (item) {
      // Keep all items except the one with a matching ID
      return item.id !== id;
    });
  }
}
```
- `removeBook(id)` is triggered with the clicked book’s `id`.
- `console.log("Removing", id)` logs which book is being removed.
- The `filter()` method:
    - Loops through `books.results`
    - Returns a **new array** with all books except the one whose `id` matches
- That **new array replaces** `this.books.results` — effectively removing the book from the list
- You also can express it like: 
```js
this.books.results = this.books.results.filter(book => book.id !== id);
```

## 36. Getting started with the Vue Router
### createWebHistory function
`createWebHistory` is a function provided by the `vue-router@4` package that sets the router to use the HTML5 History API for navigation.

#### What does it do?
It creates a history object that the Vue Router uses to:
- Change the browser URL using pushState / replaceState
- Avoid page reloads when navigating
- Show clean URLs (no #)
- Enable browser navigation buttons (back/forward) to work smoothly

#### Example
```js
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(), // uses browser's history API
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ],
})
```
This will give you URLs like `/about` instead of `/#/about`.

> [!NOTE]
> When using createWebHistory, your web server must be configured to redirect all routes to your index.html, or refreshing a page like /about will give you a 404.

## 37. Adding our routes in App.vue and main.js
### Set up routing
```js
import { createRouter, createWebHistory } from "vue-router";
import AppBody from "./../components/AppBody.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: AppBody,
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
```

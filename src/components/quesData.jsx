export const quesData = [
  {
    id: 1,
    question: "What is HTML?",
    answer: " HTML stands for Hyper Text Markup Language",
  },
  {
    id: 2,
    question: "What is CSS?",
    answer: " CSS stands for Cascading Style Sheets",
  },
  {
    id: 3,
    question: "What is JS?",
    answer: " JS stands for Javascript",
  },

  {
    id: 4,
    question: "What is state in React?",
    answer:
      "State is a built-in object in React that represents the mutable data specific to a component.",
  },
  {
    id: 5,
    question: "What is a prop in React?",
    answer:
      "Props (short for properties) are a way to pass data from parent to child components in React.",
  },
  {
    id: 6,
    question: "How do you define a functional component in React?",
    answer:
      "A functional component in React is a JavaScript function that takes props as input and returns JSX as output.",
  },
  {
    id: 7,
    question: "What is the virtual DOM in React?",
    answer:
      "The virtual DOM is a lightweight copy of the actual DOM in memory, and it is used by React to optimize and speed up rendering.",
  },
  
    {
      id: 8,
      question: "What is a React class component?",
      answer: "A class component in React is a JavaScript class that extends React.Component and is used for defining UI components with state and lifecycle methods.",
    },
    {
      id: 9,
      question: "What is the purpose of the 'render' method in React class components?",
      answer: "The 'render' method is responsible for rendering the component's JSX to the DOM. It should return the UI that the component represents.",
    },
    {
      id: 10,
      question: "What are React hooks?",
      answer: "React hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8.",
    },
    {
      id: 11,
      question: "How do you update state in a React component?",
      answer: "You can update state in a React component using the 'setState' method or by using hooks like 'useState' in functional components.",
    },
    {
      id: 12,
      question: "What is the purpose of 'componentDidMount' in React class components?",
      answer: "'componentDidMount' is a lifecycle method that is called after a component has been inserted into the DOM. It's often used for data fetching and setup.",
    },
    {
      id: 13,
      question: "What is the 'key' prop used for in React?",
      answer: "The 'key' prop is used to help React identify which items have changed, added, or removed in lists, and it should be unique for each item in the list.",
    },
    {
      id: 14,
      question: "What is a higher-order component (HOC) in React?",
      answer: "A higher-order component is a function that takes a component and returns a new component with additional props or behavior. It's often used for code reuse and logic sharing.",
    },
    {
      id: 15,
      question: "What is React Router?",
      answer: "React Router is a popular library for handling routing and navigation in React applications. It allows you to create multi-page applications with client-side routing.",
    },
    {
      id: 16,
      question: "What is Redux in React?",
      answer: "Redux is a state management library for React that provides a predictable state container and helps manage the state of your application.",
    },
    {
      id: 17,
      question: "What is a React fragment?",
      answer: "A React fragment is a way to group multiple elements without adding an extra DOM element to the output. It's useful when you need to return multiple elements from a component's render method.",
    },
    {
      id: 18,
      question: "What is the purpose of the 'useEffect' hook in React?",
      answer: "The 'useEffect' hook is used for side effects in functional components, such as data fetching, DOM manipulation, and subscribing to external data sources.",
    },
    {
      id: 19,
      question: "What is the difference between 'props' and 'state' in React?",
      answer: "Props are used to pass data from parent to child components, and they are immutable. State is used for managing mutable data within a component and can be changed using 'setState' or state hooks.",
    },
    {
      id: 20,
      question: "How can you optimize performance in a React application?",
      answer: "You can optimize performance by using techniques like memoization, code splitting, lazy loading, and minimizing re-renders with PureComponent or React.memo.",
    },
    {
      id: 21,
      question: "What is the purpose of 'shouldComponentUpdate' in React class components?",
      answer: "'shouldComponentUpdate' is a lifecycle method that allows you to control whether a component should re-render or not based on changes in props or state.",
    },
    {
      id: 22,
      question: "What is a React portal?",
      answer: "A React portal is a way to render a child component at a different location in the DOM hierarchy, often useful for rendering modals and popovers outside the parent component's DOM tree.",
    },
    {
      id: 23,
      question: "How do you handle forms in React?",
      answer: "Forms in React are typically controlled components, where the form elements' values are controlled by state. You can use the 'onChange' event to handle form input changes.",
    },
    {
      id: 24,
      question: "What is the purpose of the 'useRef' hook in React?",
      answer: "The 'useRef' hook is used to create a mutable ref object that can be used to access and interact with DOM elements directly in functional components.",
    },
    {
      id: 25,
      question: "What is server-side rendering (SSR) in React?",
      answer: "Server-side rendering is a technique in React where the initial HTML for a page is generated on the server and sent to the client, improving page load performance and SEO.",
    },
    {
      id: 26,
      question: "What is context in React?",
      answer: "Context is a feature in React that allows you to pass data down the component tree without having to explicitly pass props at every level. It's often used for managing global state.",
    },
    {
      id: 27,
      question: "What is Redux Thunk?",
      answer: "Redux Thunk is a middleware for Redux that allows you to write asynchronous logic and side effects in your Redux actions, typically used for data fetching.",
    },
    {
      id: 28,
      question: "What are React hooks rules and guidelines?",
      answer: "React hooks have specific rules and guidelines to follow, such as calling hooks at the top level of a functional component and not calling them conditionally.",
    },
    {
      id: 29,
      question: "What is the purpose of the 'useReducer' hook in React?",
      answer: "The 'useReducer' hook is used for managing complex state logic in functional components by dispatching actions to update state based on a specified reducer function.",
    },
    {
      id: 30,
      question: "What is JSX in React?",
      answer: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript code. It is often used to describe the structure of UI components in React.",
    },
    {
      id: 31,
      question: "What is the difference between 'class' and 'className' in React?",
      answer: "'class' is a reserved keyword in JavaScript, so in JSX, you use 'className' to specify CSS classes for HTML elements to avoid conflicts.",
    },
    {
      id: 32,
      question: "How do you handle errors in React components?",
      answer: "You can handle errors in React components using error boundaries, which are special components that catch errors in their child components during rendering.",
    },
    {
      id: 33,
      question: "What is the purpose of the 'forwardRef' function in React?",
      answer: "'forwardRef' is a higher-order component that allows you to pass a ref from a parent component to a child component, even if the child is a functional component.",
    },
    {
      id: 34,
      question: "What is React Native?",
      answer: "React Native is a framework for building mobile applications using React. It allows you to use React and JavaScript to build native mobile apps for iOS and Android.",
    },
    {
      id: 35,
      question: "What is Redux Saga?",
      answer: "Redux Saga is a middleware library for handling side effects in Redux applications, particularly useful for managing complex asynchronous logic and data fetching.",
    },
    {
      id: 36,
      question: "What are React hooks dependencies?",
      answer: "When using hooks like 'useState' and 'useEffect', you specify a dependency array to determine when the hook should re-run based on changes in the specified dependencies.",
    },
    {
      id: 37,
      question: "What is the purpose of the 'useContext' hook in React?",
      answer: "The 'useContext' hook allows you to access the current context value and subscribe to changes in that context within a functional component.",
    },
    {
      id: 38,
      question: "What is the difference between 'props.children' and 'children' in React?",
      answer: "'props.children' is a reference to the children passed to a component, while 'children' is a special prop that is automatically passed by React to represent the content between the opening and closing tags of a component.",
    },
    {
      id: 39,
      question: "What is the purpose of the 'useLayoutEffect' hook in React?",
      answer: "The 'useLayoutEffect' hook is similar to 'useEffect', but it runs synchronously after all DOM mutations. It is often used for tasks that require access to the DOM layout.",
    },
    {
      id: 40,
      question: "What is the purpose of the 'useMemo' hook in React?",
      answer: "The 'useMemo' hook is used to memoize the result of a computation so that it is not re-computed on every render unless the dependencies change.",
    },
    {
      id: 41,
      question: "What is the React DevTools?",
      answer: "The React DevTools is a browser extension and development tool that allows you to inspect and debug React components, view component hierarchies, and track component state and props.",
    },
    {
      id: 42,
      question: "What is the difference between 'controlled' and 'uncontrolled' components in React?",
      answer: "Controlled components are components where the value is controlled by React state, while uncontrolled components rely on the DOM to manage their value.",
    },
    {
      id: 43,
      question: "What is the purpose of the 'useCallback' hook in React?",
      answer: "The 'useCallback' hook is used to memoize callback functions so that they are not re-created on every render unless the dependencies change.",
    },
    {
      id: 44,
      question: "What is the React Router 'Link' component used for?",
      answer: "The 'Link' component in React Router is used for creating navigation links within a React application. It helps navigate between different routes without a full page reload.",
    },
    {
      id: 45,
      question: "What is the purpose of the 'useImperativeHandle' hook in React?",
      answer: "The 'useImperativeHandle' hook is used to customize the instance value that is exposed when using the 'ref' prop on a component. It's often used in conjunction with 'forwardRef'.",
    },
    {
      id: 46,
      question: "What is the React Strict Mode?",
      answer: "React Strict Mode is a development mode that helps identify potential problems in a React application during development by highlighting various warnings and checks.",
    },
    {
      id: 47,
      question: "What is the purpose of the 'useDebugValue' hook in React?",
      answer: "The 'useDebugValue' hook is used to display additional debugging information about custom hooks in React DevTools when the custom hook is being inspected.",
    },
    {
      id: 48,
      question: "What is code splitting in React?",
      answer: "Code splitting is a technique in React where you split your application code into smaller bundles, allowing you to load only the code that is needed for a particular page or feature.",
    },
    {
      id: 49,
      question: "What is the purpose of the 'memo' function in React?",
      answer: "The 'memo' function is used to memoize a functional component, preventing unnecessary re-renders when the component's props have not changed.",
    },
    {
      id: 50,
      question: "What is the React 18 concurrent mode?",
      answer: "React 18 concurrent mode is an upcoming feature that aims to improve the rendering performance and responsiveness of React applications by allowing components to interrupt rendering and prioritize updates.",
    },
  
  
  // Add more questions and answers as needed...
];

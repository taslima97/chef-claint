// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
       <Container>
         
           <p>1: The first way is by using the state within the component to handle the form data. This is called a controlled component. The second way is to let the DOM handle the form data by itself in the component. This is known as an uncontrolled component.Uncontrolled components are generally used when the use case is simple or the action is not trackable; for example, a user uploading a file using file input</p>
           <p>2:As our app grows, we can catch a lot of bugs with typechecking. For some applications, we can use JavaScript extensions like Flow or TypeScript to typecheck your whole application. But even if we don’t use those, React has some built-in typechecking abilities. To run typechecking on the props for a component, we can assign the special propTypes property:</p>
           <p>3: It is used to build web-apps using approaches and principles of Node.js.More features than Node.js.It is built on Node.js.Framework based on Node.js. <br /> on the other hand,  It is used to build server-side, input-output, event-driven apps.Fewer features.It is built on Google’s V8 engine.Run-time platform or environment designed for server-side execution of JavaScript.</p>
           <p>4: A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. A hook is an opening statement  in an essay that attempts to grab the attention so that they want to read on.</p>
        
       </Container>
    );
};

export default Blog;
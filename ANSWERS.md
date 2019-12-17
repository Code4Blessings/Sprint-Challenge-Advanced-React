- [X] Why would you use class component over function components (removing hooks from the question)?

--I would use class components over functional components because they require a lot less code and are much cleaner than functional components.  For example, class components got rid of prototypes and Object.create methods which made writing the code much easier and less confusing.

- [X] Name three lifecycle methods and their purposes.

1. ComponentDidMount- the birth of the component along with its initial state and initial data is fetched from the API. Event listeners and subscriptions are also set up.
2. ComponentDidUpdate – this is where the growth of the component takes place, props are added, and the state is updated.
3. ComponentWillUnmount (Death)—this performs cleanup of all event listeners and subscriptions.

- [X] What is the purpose of a custom hook?

--The purpose of a custom hook is code reusability and the ability to share stateful logic across all components in the app.

- [X] Why is it important to test our apps?

--It is important to test our apps mainly for the security in knowing that the app will display the proper behavior when a user interacts with it, regardless as to whether it is an end-user or a developer-user.

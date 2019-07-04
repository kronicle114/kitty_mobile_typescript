# expo-cli blank template
- [client repo](https://github.com/kronicle114/kitty_mobile_typescript)
- [server repo](https://github.com/kronicle114/kitty_mobile_server)

## tech stack
- **front-end:**
  - [react](https://reactjs.org)
  - [react-native](https://facebook.github.io/react-native/)
  - [typescript](https://www.typescriptlang.org/)
- **back-end:**
  - [mongodb](https://www.mongodb.com/)
- **dev tools**
  - [Expo CLI](https://docs.expo.io/versions/latest/workflow/expo-cli/)

## Basics

### Frontend setup
  - [x] react-native basics
  - [x] typescript
  - [x] version control (git/github)

### Backend setup
  - [x] mongodb
  - [x] boiler NODE/Express
  - [x] user models & auth
    - [x] test this biatch
  - [] CRUD REST API
    - [] start w/ POST & GET cats
    - [] prob want a models for that
- [x] connect backend to frontend
  - [x] render data from server to client
- [] deploy ios
- [] props & state
- [] redux

### Testing
- [] front-end next, catch, input validations
- [] backend user validations, duplicates on unique documents, error handlers 

## Front-end
- styles
- navbar
- gestures

## Features/User Story
- User should be able to register with form validation
- User should be able to login using persisting auth
- User should be able to logout and login with data persisting
- User should be able to add, edit, delete cat cards
- There should be loading screens/images when an action is performed
- There should be basic navbar
- User should be able to search a particular cat

## v2
- Advanced filter (with tags)
- websocket (chat support)
- notifications (in app & email)
- upload pdf, other doc support
- connect stripe

## Resources
- [Blank Template YouTube](https://www.youtube.com/watch?v=gYN0Rn0BhQI&feature=youtu.be)
- [Using TypeScript with React Native · React Native](https://facebook.github.io/react-native/blog/2018/05/07/using-typescript-with-react-native)
- [The Starter App, Part 1: Project Setup - Matteo Mazzarolo - Medium](https://medium.com/@mmazzarolo/the-starter-app-part-1-project-setup-9b1579a8efa9)
- [Login Screen w/ Typescript Tutorial](https://medium.com/@mmazzarolo/the-starter-app-part-2-login-screen-ui-2937e9a9083b)
- [Configure Typescript](https://medium.com/@sgroff04/configure-typescript-tslint-and-prettier-in-vs-code-for-react-native-development-7f31f0068d2)
- [Markdown Guide](https://guides.github.com/features/mastering-markdown/)

## debug
- 4 jul 19 || ERROR on `npm install axios` fixed by getting access on npm directory `sudo chown -R <whoami> ~/.npm`

```bash
npm ERR! path /Users/trisha/.npm/_cacache/index-v5/d5/82/283d353be571fd3a81096d7e8fa03e8fe25ad7cbf9370dbcca196d4f709b
npm ERR! code EACCES
npm ERR! errno -13
npm ERR! syscall open
npm ERR! Error: EACCES: permission denied, open '/Users/trisha/.npm/_cacache/index-v5/d5/82/283d353be571fd3a81096d7e8fa03e8fe25ad7cbf9370dbcca196d4f709b'
```

- 4 jul 19 || 'Network Request Failed` Error fixed follow steps I wrote [here](https://stackoverflow.com/a/56892222/10219601)
- 4 jul 19 || [cannot use dotenv](https://github.com/motdotla/dotenv/issues/268) fixed via medium article I wrote [here]()

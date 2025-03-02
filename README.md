## Incubyte - String Calculator
String Calculator Implemented following TDD Approach

### Project Setup

**Step 1: Initialize the Project**  

```sh
mkdir incubyte-string-calculator
cd incubyte-string-calculator
npm init -y
```

**Step 2: Install Dependencies**  
```sh
npm install --save-dev typescript ts-node jest @types/jest ts-jest @types/node
```

**Step 3: Configure TypeScript**  
Generate a `tsconfig.json` file and configure it for the project:
```sh
npx tsc --init
```

Edit `tsconfig.json` to include the following settings:
```json
{
  "compilerOptions": {
    "target": "es2018",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "types": ["jest", "node"]
  },
  "include": ["src/**/*", "tests/**/*"],
  "exclude": ["node_modules"]
}
```

**Step 4: Configure Jest**  
Create a `jest.config.js` file to configure Jest for TypeScript:
```javascript
/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\.tsx?$": ["ts-jest",{}],
  },
};
```

**Step 6: Update `package.json` Scripts**  
Add scripts to run tests and watch for changes:
```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```

**Step 7: Run**  
Run the test with:
```sh
npm test
```
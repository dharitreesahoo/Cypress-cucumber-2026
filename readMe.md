shift+ctrl+p - User.Settings.json

{
    "editor.formatOnSave": true,
    "cucumberautocomplete.customParameters": [],
    "cucumberautocomplete.steps": [
        "cypress/e2e/step_definitions/**/*.js"
    ],
    "cucumberautocomplete.syncfeatures": "cypress/e2e/Features/*.feature",
    "redhat.telemetry.enabled": false,
    "chat.instructionsFilesLocations": {
        ".github/instructions": true,
        ".claude/rules": true,
        "~/.copilot/instructions": true,
        "~/.claude/rules": true,
        "C:\\Users\\SANTOS~1\\AppData\\Local\\Temp\\postman-collections-post-response.instructions.md": true,
        "C:\\Users\\SANTOS~1\\AppData\\Local\\Temp\\postman-collections-pre-request.instructions.md": true,
        "C:\\Users\\SANTOS~1\\AppData\\Local\\Temp\\postman-folder-post-response.instructions.md": true,
        "C:\\Users\\SANTOS~1\\AppData\\Local\\Temp\\postman-folder-pre-request.instructions.md": true,
        "C:\\Users\\SANTOS~1\\AppData\\Local\\Temp\\postman-http-request-post-response.instructions.md": true,
        "C:\\Users\\SANTOS~1\\AppData\\Local\\Temp\\postman-http-request-pre-request.instructions.md": true
    },
    "github.copilot.nextEditSuggestions.enabled": false,
    "github.copilot.enable": {
        "*": false,
        "plaintext": false,
        "markdown": false,
        "scminput": false
    }
}

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< acceessibility and cucumber report>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 npx cypress run 
 node generate-accessibility-report.js
 node generate-cucumber-report.js
 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< how to execute in headless mode>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 npm run test (generates json)
 npm run report(generates HTML report)
 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>headed mode >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 npx cypress open
 
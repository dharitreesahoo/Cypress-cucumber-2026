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

npm install mochawesome mochawesome-merge mochawesome-report-generator --save-dev
npx cypress run

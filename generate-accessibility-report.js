const fs = require("fs");

const data = JSON.parse(
    fs.readFileSync("./cypress/accessibility-report/accessibility-report.json", "utf8")
);

// flatten violations
const violations = data.flatMap(d => d.violations || []);

// classify severity
function getColor(impact) {
    switch (impact) {
        case "critical":
            return "red";
        case "serious":
            return "orange";
        case "moderate":
            return "orange";
        case "minor":
            return "green";
        default:
            return "gray";
    }
}

const html = `
<html>
<head>
  <title>Accessibility Report</title>
  <style>
    body { font-family: Arial; padding: 20px; }

    .card {
      padding: 10px;
      margin: 10px 0;
      border-left: 8px solid;
      background: #f7f7f7;
    }

    .red { border-color: red; }
    .orange { border-color: orange; }
    .green { border-color: green; }

    .badge {
      padding: 3px 8px;
      border-radius: 5px;
      color: white;
      font-size: 12px;
    }

    .badge.red { background: red; }
    .badge.orange { background: orange; }
    .badge.green { background: green; }
  </style>
</head>

<body>

<h1>Accessibility Report (WCAG Issues)</h1>

<h3>Total Issues: ${violations.length}</h3>

${violations.map(v => {
    const color = getColor(v.impact);

    return `
    <div class="card ${color}">
      <strong>${v.id}</strong><br/>
      Impact: <span class="badge ${color}">${v.impact}</span>
    </div>
  `;
}).join("")}

</body>
</html>
`;

fs.writeFileSync(
    "./cypress/accessibility-report/accessibility-report.html",
    html
);

console.log("✅ Colored accessibility report generated");
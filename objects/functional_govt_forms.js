const governmentForms = [
    {
        name: "Plutocracy",
        definition: "Rule by the wealthy"
    },
    {
        name: "Oligarchy",
        definition: "Rule by a small number of people"
    },
    {
        name: "Kleptocracy",
        definition: "Rule by the thieves"
    },
    {
        name: "Theocracy",
        definition: "Rule by the religious elite"
    },
    {
        name: "Democracy",
        definition: "Rule by the people"
    },
    {
        name: "Autocracy",
        definition: "Rule by a single person"
    }
];

const politicalFormsEndingInCy = forms => forms.filter(form => form.name.endsWith('cy')).map(f => f.name);

console.log(politicalFormsEndingInCy(governmentForms));
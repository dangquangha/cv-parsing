const { AffindaCredential, AffindaAPI } = require("@affinda/affinda");

const credential = new AffindaCredential("98e10e159c3ef2eb0e4c579341d966d457df0872");
const client = new AffindaAPI(credential);

const HOME = {
    file: null,

    init() {
        this.uploadFile();
        this.parsingFile();
    },

    uploadFile() {
        $("#cv").change(function (event) {
            HOME.file = event.target.files[0];
        });
    },

    parsingFile() {
        $("#parsing-file").click(function () {
            if (HOME.file) {
                $('#files').prop('files'),
                $('.mask-loader').removeClass('hide');

                client.createResume({file: HOME.file})
                .then((result) => {
                    HOME.renderResult(result);
                    $('.mask-loader').addClass('hide');
                })
                .catch((error) => {
                    console.log("An error occurred:");
                    console.dir(error)
                    $('.mask-loader').addClass('hide');
                })
            }
        });
    },

    renderResult(result) {
        var data = result.data;
        console.log(data);
        
        this.renderName(data.name);
        this.renderProfession(data.profession);
        this.renderPhones(data.phoneNumbers);
        this.renderEmails(data.emails);
        this.renderWebsites(data.websites);
        this.renderDateOfBirth(data.dateOfBirth);
        this.renderLocation(data.location);
        this.renderObjective(data.objective);
        this.renderLanguages(data.languages);
        this.renderSummary(data.summary);
        this.renderEducations(data.education);
        this.renderSkills(data.skills);
        this.renderWorkExperiences(data.workExperience);
    },

    renderName(names) {
        $('.name').append(`<p>Raw: <span>${names.raw ?? 'N/A'}</span></p>`);
        $('.name').append(`<p>First: <span>${names.first ?? 'N/A'}</span></p>`);
        $('.name').append(`<p>Last: <span>${names.last ?? 'N/A'}</span></p>`);
    },

    renderProfession(profession) {
        $('.profession').append(`<p><span>${profession ?? 'N/A'}</span></p>`);
    },

    renderPhones(phones) {
        phones.forEach(phone => {
            $('.phones').append(`<p><span>${phone ?? 'N/A'}</span></p>`);
        });
    },

    renderEmails(emails) {
        emails.forEach(email => {
            $('.emails').append(`<p><span>${email ?? 'N/A'}</span></p>`);
        });
    },

    renderWebsites(websites) {
        websites.forEach(website => {
            $('.websites').append(`<p><span>${website ?? 'N/A'}</span></p>`);
        });
    },

    renderDateOfBirth(date) {
        $('.date-of-birth').append(`<p><span>${date ?? 'N/A'}</span></p>`);
    },

    renderLocation(location) {
        $('.location').append(`<p><span>${location.rawInput ?? 'N/A'}</span></p>`);
    },

    renderObjective(objective) {
        $('.objective').append(`<p><span>${objective ?? 'N/A'}</span></p>`);
    },

    renderLanguages(languages) {
        languages.forEach(language => {
            $('.langagues').append(`<p><span>${language ?? 'N/A'}</span></p>`);
        });
    },

    renderSummary(summary) {
        $('.summary').append(`<p><span>${summary ?? 'N/A'}</span></p>`);
    },

    renderEducations(educations) {
        educations.forEach(education => {
            $('.educations').append(`
                <p><b>${education.organization ?? 'N/A'}</b></p>
                <p>Location: <span>${education.location ? education.location.rawInput : 'N/A'}</span></p>
                <p>From: <span>${education.dates ? education.dates.startDate : 'N/A'}</span></p>
                <p>To: <span>${education.dates ? education.dates.completionDate : 'N/A'}</span></p>
            `);
        });
    },

    renderSkills(skills) {
        skills.forEach(skill => {
            $('.skills').append(`<p><span>${skill.name ?? 'N/A'}</span></p>`);
        });
    },

    renderWorkExperiences(exps) {
        exps.forEach(exp => {
            $('.experiences').append(`
                <p><b>${exp.jobTitle}</b> at <b>${exp.organization ?? 'N/A'}</b></p>
                <p>Role: <span>${exp.occupation ? exp.occupation.jobTitleNormalized : 'N/A'}</span></p>
                <p>Description: <span>${exp.jobDescription ?? 'N/A'}</span></p>
                <p>From: <span>${exp.dates ? exp.dates.startDate : 'N/A'}</span></p>
                <p>To: <span>${exp.dates ? exp.dates.completionDate : 'N/A'}</span></p>
            `);
        });
    }
};

$(function () {
    HOME.init();
});

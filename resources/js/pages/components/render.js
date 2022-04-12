const RENDER = {
    init (result) {
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
        $('.date-of-birth').append(`<p><span>${date ? new Date(date).toISOString().split('T')[0] : 'N/A'}</span></p>`);
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
                <p>From: <span>${education.dates ? new Date(education.dates.startDate).toISOString().split('T')[0] : 'N/A'}</span></p>
                <p>To: <span>${education.dates ? new Date(education.dates.completionDate).toISOString().split('T')[0] : 'N/A'}</span></p>
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
                <p>From: <span>${exp.dates ? new Date(exp.dates.startDate).toISOString().split('T')[0] : 'N/A'}</span></p>
                <p>To: <span>${exp.dates ? new Date(exp.dates.completionDate).toISOString().split('T')[0] : 'N/A'}</span></p>
            `);
        });
    }
}

export default RENDER;
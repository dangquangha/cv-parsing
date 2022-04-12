import RENDER from "./components/render"

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
                $('.mask-loader').removeClass('hide');

                $('.clear').html('');

                $('#files').prop('files'),
                // client.createResume({url: "https://api.affinda.com/static/sample_resumes/example.pdf"})
                client.createResume({file: HOME.file})
                .then((result) => {
                    RENDER.init(result);
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
};

$(function () {
    HOME.init();
});

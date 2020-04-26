
const Condition = require("../model/Condition.model");

const conditionDataPopulation = () => {

    Condition.deleteMany().then( () => {
        console.log("cleaned up Condition")
    });

    const conditions =
        [   { name : "Infectious gastroenteritis and colitis" , code : "A09" },
            { name : "Unspecified sexually transmitted disease" , code : "A64" },
            { name : "Keratoconjunctivitis due to adenovirus" , code : "B300" },
            { name : "Viral pharyngoconjunctivitis" , code : "B302" },
            { name : "Other viral conjunctivitis" , code : "B308" },
            { name : "Viral conjunctivitis" , code : "B300" },
            { name : "Candidiasis of vulva and vagina" , code : "B309" },
            { name : "Unspecified sexually transmitted disease" , code : "A64" },
            { name : "Other viral agents as the cause of diseases" , code : "B9789" },
            { name : "Dehydration" , code : "E860" },
            { name : "Cyclothymic disorder" , code : "F340" },
            { name : "Dysthymic disorder" , code : "F341" },
            { name : "Generalized anxiety disorder" , code : "F411" },
            { name : "Other specified anxiety disorders" , code : "F418" },
            { name : "Anxiety disorder" , code : "F419" },
            { name : "Adjustment disorder with depressed mood" , code : "F4321" },
            { name : "Migraine without aura" , code : "G43001" },
            { name : "Persistent migraine aura without cerebral infarction" , code : "G43501" },
            { name : "Persistent migraine aura without cerebral infarction" , code : "G43509" },
            { name : "Cyclothymic disorder" , code : "F340" },
            { name : "Chronic migraine without aura" , code : "G43709" },
            { name : "Other migraine, intractable, with status migrainosus" , code : "G43811" },
            { name : "Other migraine, intractable, without status migrainosus" , code : "G43819" },
            { name : "Menstrual migraine" , code : "G43829" },
            { name : "Anxiety disorder" , code : "F419" },
            { name : "Adjustment disorder with depressed mood" , code : "F4321" },
            { name : "Acute maxillary sinusitis" , code : "J0100" },
            { name : "Acute frontal sinusitis" , code : "J0110" },
            { name : "Persistent migraine aura without cerebral infarction" , code : "G43509" },
            { name : "Slow transit constipation" , code : "K5901" },
            { name : "Chronic migraine without aura" , code : "G43709" },
            { name : "Outlet dysfunction constipation" , code : "K5902" },
            { name : "Persistent migraine aura without cerebral infarction" , code : "G43501" },
            { name : "Persistent migraine aura without cerebral infarction" , code : "G43509" },
            { name : "Cyclothymic disorder" , code : "F340" },
            { name : "Chronic migraine without aura" , code : "G43709" },
            { name : "Other migraine, intractable, with status migrainosus" , code : "G43811" },
            { name : "Other migraine, intractable, without status migrainosus" , code : "G43819" },
            { name : "Menstrual migraine" , code : "G43829" },
            { name : "Anxiety disorder" , code : "F419" },
            { name : "Adjustment disorder with depressed mood" , code : "F4321" },
            { name : "Acute maxillary sinusitis" , code : "J0100" },
            { name : "Acute frontal sinusitis" , code : "J0110" },
            { name : "Persistent migraine aura without cerebral infarction" , code : "G43509" },
            { name : "Slow transit constipation" , code : "K5901" },
            { name : "Chronic migraine without aura" , code : "G43709" },
            { name : "Outlet dysfunction constipation" , code : "K5902" }
        ];


    Condition.insertMany(conditions).then(() => {
        console.log("inserted conditions successfully")
    });
    
};

module.exports = conditionDataPopulation;

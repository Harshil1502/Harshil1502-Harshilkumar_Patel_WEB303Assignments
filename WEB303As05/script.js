/*
    Assignment 05
*/

$(document).ready(function () {
    // your code here

    class ContentItem{
        uniqueId;
        name;
        description;
        category;

        constructor(uniqueId, name, description, category){
            this.uniqueId = uniqueId;
            this.name = name;
            this.description = description;
            this.category = category;
        }

        updateContentItem(uniqueId, name, description, category){
            if(this.uniqueId == uniqueId && name && description && category){
                this.uniqueId = uniqueId;
                this.name = name;
                this.description = description;
                this.category = category;
            }

        }

       

        

        toString(){
            return $('#content-item-list').append(`<div class="content-item-wrapper">
            <div id="content-item-${this.uniqueId}">
            <h4 class="name">${this.name}</h4>
            <p class="description">${this.description}</p>
            <div class="category">${this.category}</div>
            </div>
            </div>`);
            // return "ugdjsfkjs";
        }
    }
    
    let content = [
        {
            "uniqueId": 0,
            "name": "Kakashi Hatake",
            "description": "Kishimoto originally planned to introduce Kakashi in the manga to the series' titular character, Naruto Uzumaki, early on, but pushed back this meeting so that Naruto's teammates could be better developed.",
            "category": "Lightning"
        },
        {
            "uniqueId": 1,
            "name": "Itachi Uchiha",
            "description": "Itachi is the older brother of Sasuke Uchiha and is responsible for killing all the members of their clan",
            "category": "Saringhan"
        },
        {
            "uniqueId": 2,
            "name": "Naruto Uzumaki",
            "description": "The eponymous protagonist of the series, he is a teenage ninja from the fictional village of Konohagakure.",
            "category": "Wind"
        },
        {
            "uniqueId": 3,
            "name": "Jiraiya",
            "description": ". Introduced in the first half of the series, he was a student of Hiruzen Sarutobi and one of the Legendary Sannin",
            "category": "Wind"
        },
        {
            "uniqueId": 4,
            "name": "Shikamaru Nara",
            "description": " In the anime and manga, Shikamaru is a ninja affiliated with the village of Konohagakure.",
            "category": "Shadow"
        }
    ];

    // let temp1 = new ContentItem();
    
    $.each(content, function(key, val){

        $('#content-item-list').append(`<div class="content-item-wrapper">
        <div id="content-item-${this.uniqueId}">
        <h4 class="name">${this.name}</h4>
        <p class="description">${this.description}</p>
        <div class="category">${this.category}</div>
        </div>
        </div>`);
    });

    $('h2').empty().text("Naruto Characters ");
    
    $('.content-item-wrapper').css({"width":"420px","padding":"10px 10px","margin":"10px 0px"});

});


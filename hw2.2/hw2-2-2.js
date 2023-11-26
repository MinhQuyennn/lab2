class TemplateProcessor {
    constructor(template) {
        this.template = template;
    }

    fillIn(dictionary) {
        let result = this.template;

        for (const key in dictionary) {
            if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
                const regex = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
                result = result.replace(regex, dictionary[key]);
            }
        }

        result = result.replace(/{{\s*\w+\s*}}/g, '');

        return result;
    }
}

// Example usage
var template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
var dateTemplate = new TemplateProcessor(template);

var dictionary = { month: 'July', day: '1', year: '2016' };
var str = dateTemplate.fillIn(dictionary);

console.log(str);

// Case: property doesn't exist in dictionary
var dictionary2 = { day: '1', year: '2016' };
var str2 = dateTemplate.fillIn(dictionary2);

console.log(str2); 
